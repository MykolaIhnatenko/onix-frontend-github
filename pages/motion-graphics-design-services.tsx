import React from 'react';
import Head from 'next/head';

import { getBlogsList, sortArrById } from '../src/utils/blogsHelpers';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import MotionGraphicsDesignServicesPageView
  from '../src/pages/MotionGraphicsDesignServicesPageView/MotionGraphicsDesignServicesPageView';
import Layout from '../src/layout/Layout';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function MotionGraphicsDesignServices({
  seoData, footerContent, pageBlogs,
}: IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(
    TitlePages.UI_UX_DESIGN,
    TitlePages.SERVICES,
    TitlePages.MOTION_DESIGN,
  );
  const achievements = seoData.achievements?.data || [];

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.MOTION}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <MotionGraphicsDesignServicesPageView achievements={achievements} pageBlogs={pageBlogs} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'motion-graphics-design-services' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const { pageBlogs, arrayId } = await getBlogsList(seoData, [155, 92, 89]);

  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default MotionGraphicsDesignServices;
