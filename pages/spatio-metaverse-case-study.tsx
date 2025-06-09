import React from 'react';

import Layout from '../src/layout/Layout';
import getSeoData from '../src/api/getSeoData';
import { getBreadcrumbsData } from '../src/utils/helperHundlerPages';
import ErrorPageView from '../src/pages/ErrorPageView/ErrorPageView';
import SpatioMetaverseCaseStudyView from '../src/pages/SpatioMetaverseCaseStudyView/SpatioMetaverseCaseStudyView';
import useIsSaleUrl from '../src/hook/useCheckSaleUrl';
import getFooterContent from '../src/api/getFooterContent';
import { TitlePages } from '../src/constants/enums';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import IPages from '../src/interfaces/IPages';

function SpatioMetaverseCaseStudy({ seoData, footerContent }: IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.SPATIO, TitlePages.CASE_STUDIES);

  const saleDomain = useIsSaleUrl();
  const saleUrl = saleDomain && seoData.sale;
  if (saleDomain && !seoData.sale) {
    return (
      <Layout
        footerContent={footerContent}
        seoData={{}}
        showFooter={false}
      >
        <ErrorPageView />
      </Layout>
    );
  }

  return (
    <Layout
      seoData={seoData}
      salesChannel={PageToSalesChannels.SPATIO_METAVRSE_CASE_STUDY}
      breadcrumbs={breadcrumbs}
      footerContent={footerContent}
    >
      <SpatioMetaverseCaseStudyView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'spatio-metaverse-case-study' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      seoData,
      footerContent,
    },
  };
}

export default SpatioMetaverseCaseStudy;
