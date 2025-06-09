'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import MainPage from '../src/pages/MainPage/MainPage';
import IPages from '../src/interfaces/IPages';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import Layout from '../src/layout/Layout';
import MainPageSale from 'pages/MainPageSale/MainPageSale';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';
import { checkSaleUrl } from 'utils/helpers';

function Home({ seoData, footerContent }:IPages) {
  const router = useRouter();
  const { referral } = router.query;
  const saleDomain = checkSaleUrl();
  const saleUrl = saleDomain && seoData.sale;

  useEffect(() => {
    const fetchData = async () => {
      if (referral) {
        sessionStorage.setItem('referralKey', referral as string);
        try {
          const data = new FormData();
          data.set('key', referral as string);
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND as string}/api/leads/counterDirect`, {
            method: 'POST',
            body: data,
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        } catch (error) {
          throw new Error(`Error fetching data: ${error as string}`);
        }
      }
    };

    fetchData().catch(() => '');
  }, [referral]);

  if (saleDomain && !seoData.sale) {
    return (
      <Layout
        footerContent={footerContent}
        seoData={{}}
        showFooter={false}
      >
        <ErrorPageView />
      </Layout>
    );
  }

  return (
    <Layout
      seoData={seoData}
      salesChannel={PageToSalesChannels.HOME}
      footerContent={footerContent}
    >
      {saleUrl ? (
        <MainPageSale />
      ) : (
        <MainPage />
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const seoData = await getSeoData();
  const footerContent = await getFooterContent();

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      seoData,
      footerContent,
    },
  };
}

export default Home;
