import Head from 'next/head';

import Layout from '../src/layout/Layout';
import QAServicesPageView from '../src/pages/QAServicesPageView/QAServicesPageView';
import { getBlogsList, sortArrById } from '../src/utils/blogsHelpers';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function QAServicesPage({
  seoData, footerContent, pageBlogs,
}: IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.QA, TitlePages.SERVICES);
  const achievements = seoData.achievements?.data || [];

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PagesToSalesChannels.QA_SERVICES}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <QAServicesPageView pageBlogs={pageBlogs} achievements={achievements} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'software-testing-qa-services' });

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

export default QAServicesPage;
