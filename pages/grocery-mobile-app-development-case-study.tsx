import React from 'react';

import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import Layout from '../src/layout/Layout';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';
import FaynoMarketCaseStudyView from 'pages/FaynoMarketCaseStudyView/FaynoMarketCaseStudyView';

function FaynoMarketCasePage({ seoData, footerContent }: IPages) {
  const breadcrumbs: IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.FAYNO_MARKET, TitlePages.CASE_STUDIES);

  const saleDomain = checkSaleUrl();
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
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.FAYNO_MARKET}
      breadcrumbs={breadcrumbs}
    >
      <FaynoMarketCaseStudyView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const seoData = await getSeoData({ page: 'grocery-mobile-app-development-case-study' });
  const footerContent = await getFooterContent();

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

export default FaynoMarketCasePage;
