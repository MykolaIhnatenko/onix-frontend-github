import React, { useEffect, useState } from 'react';

import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import Layout from '../src/layout/Layout';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import { LG_DEVICE, MD_DEVICE } from '../src/constants/constants';
import PhotowhyCasePageView from '../src/pages/PhotowhyCasePageView/PhotowhyCasePageView';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function PhotowhyCasePage({ seoData, footerContent }: IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.PHOTOWHY, TitlePages.CASE_STUDIES);
  const [isMinDesktop, setIsMinDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cellSpacing, setCellSpacing] = useState(32);

  const updateWindowWidth = () => {
    setIsMinDesktop(document.body.clientWidth < LG_DEVICE);
    setIsMobile(document.body.clientWidth < MD_DEVICE);

    if (window.innerWidth > LG_DEVICE) {
      setCellSpacing(32);
    } else if (window.innerWidth <= LG_DEVICE && window.innerWidth >= MD_DEVICE) {
      setCellSpacing(24);
    } else if (window.innerWidth < MD_DEVICE) {
      setCellSpacing(16);
    }
  };

  useEffect(() => {
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

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
      salesChannel={PageToSalesChannels.PHOTOWHY}
      breadcrumbs={breadcrumbs}
    >
      <PhotowhyCasePageView
        isMinDesktop={isMinDesktop}
        isMobile={isMobile}
        cellSpacing={cellSpacing}
        saleUrl={saleUrl}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'photowhy-case-study' });

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

export default PhotowhyCasePage;
