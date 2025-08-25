import Head from 'next/head';

import Layout from '../src/layout/Layout';
import VRServicesPageView from '../src/pages/VRServicesPageView/VRServicesPageView';
import { getBlogsList, sortArrById } from '../src/utils/blogsHelpers';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function VirtualRealityPage({
  seoData, footerContent, pageBlogs,
}: IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.VR_AR_DEV, TitlePages.SERVICES);
  const achievements = seoData.achievements?.data || [];

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PagesToSalesChannels.VR_SERVICES_PAGE}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <VRServicesPageView pageBlogs={pageBlogs} achievements={achievements} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'ar-vr-development-services' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const { pageBlogs, arrayId } = await getBlogsList(seoData, [6, 12, 35]);

  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default VirtualRealityPage;
