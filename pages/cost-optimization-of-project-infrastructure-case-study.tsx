import React from 'react';

import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import Layout from '../src/layout/Layout';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import CostOptimizationCaseStudyPageView from '../src/pages/CostOptimizationCaseStudyPageView/CostOptimizationCaseStudyPageView';
import { checkSaleUrl } from '../src/utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function CostOptimizationOfProjectInfrastructureCaseStudy({ seoData, footerContent }: IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(
    TitlePages.HOW_ONIX_REDUCED_THE_COST,
    TitlePages.CASE_STUDIES,
  );
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
      salesChannel={PageToSalesChannels.INFRASTRUCTURE_COST_OPTIMIZATION_CASE}
      breadcrumbs={breadcrumbs}
    >
      <CostOptimizationCaseStudyPageView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'cost-optimization-of-project-infrastructure-case-study' });

  return {
    props: {
      seoData,
      footerContent,
    },
  };
}

export default CostOptimizationOfProjectInfrastructureCaseStudy;
