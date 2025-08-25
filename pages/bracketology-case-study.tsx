import { useAppSelector } from '../src/hook/reduxToolkit';
import Layout from '../src/layout/Layout';
import IPages from '../src/interfaces/IPages';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { TitlePages } from '../src/constants/enums';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import BracketologyPageView from '../src/pages/BracketologyPage/BracketologyPageView';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function BracketologyPage({ seoData, footerContent }:IPages) {
  const {
    screenSizes: {
      isXXXLDevice, isXXLDevice, isXLDevice, isLGDevice, isMDDevice, isSMDevice, isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.BRACKETOLOGY, TitlePages.CASE_STUDIES);

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
      salesChannel={PagesToSalesChannels.BRACKETOLOGY}
      breadcrumbs={breadcrumbs}
      caseStudyLayout
    >
      <BracketologyPageView
        isDesktop={isLGDevice || isXLDevice || isXXLDevice || isXXXLDevice}
        isTablet={isMDDevice || isSMDevice}
        isMobile={isXSDevice}
        isMDDevice={isMDDevice}
        saleUrl={saleUrl}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'bracketology-case-study' });

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

export default BracketologyPage;
