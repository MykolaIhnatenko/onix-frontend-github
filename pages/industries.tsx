import Head from 'next/head';

import Layout from '../src/layout/Layout';
import IPages from '../src/interfaces/IPages';
import { sortArrById } from '../src/utils/blogsHelpers';
import IndustriesPageView from '../src/pages/Industries/IndustriesPageView';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import getBlogsByIds from '../src/api/getBlogsByIds';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function IndustriesPage({
  seoData, footerContent, pageBlogs,
}:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(
    '',
    TitlePages.INDUSTRIES,
  );
  const achievements = seoData.achievements?.data || [];

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PagesToSalesChannels.INDUSTRIES}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <IndustriesPageView pageBlogs={pageBlogs} achievements={achievements} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'industries' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const arrayId = seoData?.popularBlogs?.data && seoData?.popularBlogs?.data.length > 0
    ? seoData?.popularBlogs?.data.map((element) => element.id) : [184, 35, 194, 24, 11, 50];
  const pageBlogs = await getBlogsByIds(arrayId);

  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default IndustriesPage;
