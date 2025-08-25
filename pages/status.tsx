import Head from 'next/head';

import Layout from '../src/layout/Layout';
import IPages from '../src/interfaces/IPages';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { BreadcrumbsVariant, TitlePages } from '../src/constants/enums';
import StatusPageView from '../src/pages/Status/StatusPageView';
import getStatusPage from '../src/api/getStatusPage';

function Status({
  seoData, footerContent, pageData,
}:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.STATUS, '');

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.STATUS}
      breadcrumbs={breadcrumbs}
      breadcrumbsVariant={BreadcrumbsVariant.WHITE}
    >
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <StatusPageView pageData={pageData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'status' });
  const pageData = await getStatusPage();

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      seoData,
      footerContent,
      pageData,
    },
  };
}

export default Status;
