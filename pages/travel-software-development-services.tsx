import { useEffect, useState } from 'react';
import Head from 'next/head';

import IPages from '../src/interfaces/IPages';
import Layout from '../src/layout/Layout';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import useWindowSize from '../src/hook/useWindowSize';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData, handleScroll } from '../src/utils/helperHundlerPages';
import { TitlePages } from '../src/constants/enums';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import TravelSoftwarePageView from '../src/pages/TravelSoftwarePageView/TravelSoftwarePageView';
import { getBlogsList, sortArrById } from '../src/utils/blogsHelpers';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function TravelSoftwareDevelopmentServices({
  seoData, footerContent, pageBlogs,
}:IPages) {
  const { width } = useWindowSize();
  const [isBannerHidden, setIsBannerHidden] = useState(false);
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.TRAVEL_LP, TitlePages.INDUSTRIES);

  useEffect(() => {
    handleScroll(width, setIsBannerHidden);
    window.addEventListener('scroll', () => handleScroll(width, setIsBannerHidden));
    return () => {
      window.removeEventListener('scroll', () => handleScroll(width, setIsBannerHidden));
    };
  }, [width]);

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.TRAVEL_LP}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <TravelSoftwarePageView
        pageBlogs={pageBlogs}
        isBannerHidden={isBannerHidden}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'travel-software-development-services' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const { pageBlogs, arrayId } = await getBlogsList(seoData, [84, 83, 80]);

  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default TravelSoftwareDevelopmentServices;
