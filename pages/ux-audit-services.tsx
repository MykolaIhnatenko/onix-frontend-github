import Script from 'next/script';
import Head from 'next/head';

import Layout from '../src/layout/Layout';
import UxAuditServicesPageView from '../src/pages/UxAuditServicesPageView/UxAuditServicesPageView';
import { sortArrById } from '../src/utils/blogsHelpers';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import getBlogsByIds from '../src/api/getBlogsByIds';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function UxAuditServicesPage({
  seoData, footerContent, pageBlogs,
}:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = [
    {
      id: 1,
      title: 'Onix',
      path: '/',
    },
    {
      id: 2,
      title: 'Services',
      path: '/services',
    },
    {
      id: 3,
      title: 'UI/UX design',
      path: '/ui-ux-design-and-development-services',
    },
    {
      id: 4,
      title: 'UX Audit',
      path: '/ux-audit-services',
    },
  ];
  const achievements = seoData.achievements?.data || [];

  return (
    <>
      <Script
        src="./nextparticle.min.js"
        strategy="afterInteractive"
        async
        defer
      />
      <Layout
        footerContent={footerContent}
        seoData={seoData}
        salesChannel={PagesToSalesChannels.UX_AUDIT}
        breadcrumbs={breadcrumbs}
      >
        <Head>
          {ServiceJsonLd(seoData)}
        </Head>
        <UxAuditServicesPageView pageBlogs={pageBlogs} achievements={achievements} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'ux-audit-services' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const arrayId = seoData?.popularBlogs?.data && seoData?.popularBlogs?.data.length > 0
    ? seoData?.popularBlogs?.data.map((element) => element.id) : [89, 207, 98];
  const pageBlogs = await getBlogsByIds(arrayId);

  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default UxAuditServicesPage;
