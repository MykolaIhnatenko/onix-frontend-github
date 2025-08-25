import React from 'react';

import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import Layout from '../src/layout/Layout';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import FitnessCoachingCaseStudyPageView from '../src/pages/FitnessCoachingCaseStudyPageView/FitnessCoachingCaseStudyPageView';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function FitnessCoachingCaseStudy({ seoData, footerContent }: IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.PROGRESS_247, TitlePages.DESIGN_PORTFOLIO);

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
      salesChannel={PageToSalesChannels.PROGRESS_247_CASE_STUDY}
      breadcrumbs={breadcrumbs}
    >
      <FitnessCoachingCaseStudyPageView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'fitness-coaching-platform-design-case-study' });

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

export default FitnessCoachingCaseStudy;
