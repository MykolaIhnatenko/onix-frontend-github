import { useEffect, useState } from 'react';
import Head from 'next/head';

import useWindowSize from '../src/hook/useWindowSize';
import IPages from '../src/interfaces/IPages';
import { TitlePages } from '../src/constants/enums';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData, handleScroll } from '../src/utils/helperHundlerPages';
import Layout from '../src/layout/Layout';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import getBlogsByIds from '../src/api/getBlogsByIds';
import { sortArrById } from '../src/utils/blogsHelpers';
import ElearningDevelopmentServicesView from '../src/pages/ElearningDevelopmentServicesView/ElearningDevelopmentServicesView';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function ElearningDevelopmentServices({
  seoData, footerContent, pageBlogs,
}:IPages) {
  const { width } = useWindowSize();
  const [isBannerHidden, setIsBannerHidden] = useState(false);
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.ELEARNING_SERVICES, TitlePages.INDUSTRIES);

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
      salesChannel={PageToSalesChannels.ELEARNING}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <ElearningDevelopmentServicesView
        isBannerHidden={isBannerHidden}
        pageBlogs={pageBlogs}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'elearning-development-services' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const arrayId = seoData?.popularBlogs?.data && seoData?.popularBlogs?.data.length > 0
    ? seoData?.popularBlogs?.data.map((element) => element.id) : [69, 71, 58, 56];
  const pageBlogs = await getBlogsByIds(arrayId);

  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default ElearningDevelopmentServices;
