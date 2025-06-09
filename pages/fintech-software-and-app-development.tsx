import { useEffect, useState } from 'react';
import Head from 'next/head';

import { useAppSelector } from '../src/hook/reduxToolkit';
import IPages from '../src/interfaces/IPages';
import Layout from '../src/layout/Layout';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import FintechDevelopmentView from '../src/pages/FintechDevelopmentView/FintechDevelopmentView';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData, handleScroll } from '../src/utils/helperHundlerPages';
import { TitlePages } from '../src/constants/enums';
import { getBlogsList, sortArrById } from '../src/utils/blogsHelpers';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function FintechDevelopment({ seoData, footerContent, pageBlogs }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.FINTECH_DEVELOPMENT, TitlePages.INDUSTRIES);
  const { screenSizes: { screenWidth } } = useAppSelector((state) => state?.app);
  const [isBannerHidden, setIsBannerHidden] = useState(false);

  useEffect(() => {
    handleScroll(screenWidth, setIsBannerHidden);
    window.addEventListener('scroll', () => handleScroll(screenWidth, setIsBannerHidden));
    return () => {
      window.removeEventListener('scroll', () => handleScroll(screenWidth, setIsBannerHidden));
    };
  }, [screenWidth]);

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.FINTECH_DEVELOPMENT}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <FintechDevelopmentView
        isBannerHidden={isBannerHidden}
        pageBlogs={pageBlogs}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'fintech-software-and-app-development' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const { pageBlogs, arrayId } = await getBlogsList(seoData, [38, 43, 11]);

  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default FintechDevelopment;
