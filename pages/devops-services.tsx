import Head from 'next/head';

import Layout from '../src/layout/Layout';
import IPages from '../src/interfaces/IPages';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import getBlogsByIds from '../src/api/getBlogsByIds';
import { sortArrById } from '../src/utils/blogsHelpers';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import DevopsSolutionsPageView from '../src/pages/DevopsSolutionsPageView/DevopsSolutionsPageView';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function DevopsServices({
  seoData, footerContent, pageBlogs,
}:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.DEVOPS, TitlePages.SERVICES);
  const achievements = seoData.achievements?.data || [];

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.DEVOPS_SOLUTIONS_AND_SERVICES}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <DevopsSolutionsPageView pageBlogs={pageBlogs} achievements={achievements} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'devops-services' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const arrayId = seoData?.popularBlogs?.data && seoData?.popularBlogs?.data.length > 0
    ? seoData?.popularBlogs?.data.map((element) => element.id) : [132, 122, 23];
  const pageBlogs = await getBlogsByIds(arrayId);

  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default DevopsServices;
