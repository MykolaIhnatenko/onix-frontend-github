import { useEffect, useState } from 'react';
import Head from 'next/head';

import { getBreadcrumbsData, handleScroll } from '../src/utils/helperHandlerPages';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import Layout from '../src/layout/Layout';
import { sortArrById } from '../src/utils/blogsHelpers';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import getBlogsByIds from '../src/api/getBlogsByIds';
import IPages from '../src/interfaces/IPages';
import useWindowSize from '../src/hook/useWindowSize';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { TitlePages } from '../src/constants/enums';
import LMSDevelopmentView from '../src/pages/LMSDevelopmentView/LMSDevelopmentView';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function LMSDevelopment({
  seoData, footerContent, pageBlogs,
}:IPages) {
  const { width } = useWindowSize();
  const [isBannerHidden, setIsBannerHidden] = useState(false);
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.LMS, TitlePages.INDUSTRIES);

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
      salesChannel={PageToSalesChannels.LMS}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <LMSDevelopmentView
        isBannerHidden={isBannerHidden}
        pageBlogs={pageBlogs}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'lms-development-services' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const arrayId = seoData?.popularBlogs?.data && seoData?.popularBlogs?.data.length > 0
    ? seoData?.popularBlogs?.data.map((element) => element.id) : [69, 71, 58];
  const pageBlogs = await getBlogsByIds(arrayId);

  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default LMSDevelopment;
