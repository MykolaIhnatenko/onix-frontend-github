import React from 'react';

import Layout from '../src/layout/Layout';
import getSeoData from '../src/api/getSeoData';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import ErrorPageView from '../src/pages/ErrorPageView/ErrorPageView';
import useIsSaleUrl from '../src/hook/useCheckSaleUrl';
import getFooterContent from '../src/api/getFooterContent';
import { TitlePages } from '../src/constants/enums';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import IPages from '../src/interfaces/IPages';
import MascotAnimationView from 'pages/MascotAnimationView/MascotAnimationView';

function MascotAnimationDesign({ seoData, footerContent }: IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(
    TitlePages.MASCOT_ANIMATION_DESIGN,
    TitlePages.CASE_STUDIES,
  );

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
      salesChannel={PageToSalesChannels.MASCOT_ANIMATION_DESIGN}
      breadcrumbs={breadcrumbs}
      footerContent={footerContent}
    >
      <MascotAnimationView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: '3d-mascot-animation-design-case-study' });

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

export default MascotAnimationDesign;
