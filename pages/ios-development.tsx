import Head from 'next/head';

import Layout from '../src/layout/Layout';
import IosDevelopmentPageView from '../src/pages/IosDevelopmentPageView/IosDevelopmentPageView';
import IPages from '../src/interfaces/IPages';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import getBlogsByIds from '../src/api/getBlogsByIds';
import { sortArrById } from '../src/utils/blogsHelpers';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function IosDevelopmentPage({
  seoData, footerContent, pageBlogs,
}:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.IOS_DEV, TitlePages.SERVICES);
  const achievements = seoData.achievements?.data || [];

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PagesToSalesChannels.IOS_DEVELOPMENT}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <IosDevelopmentPageView pageBlogs={pageBlogs} achievements={achievements} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'ios-development' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const arrayId = seoData?.popularBlogs?.data && seoData?.popularBlogs?.data.length > 0
    ? seoData?.popularBlogs?.data.map((element) => element.id) : [149, 174, 76];
  const pageBlogs = await getBlogsByIds(arrayId);
  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default IosDevelopmentPage;
