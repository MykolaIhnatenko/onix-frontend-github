import Layout from '../src/layout/Layout';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';
import HydraCaseView from '../src/pages/HydraCaseView/HydraCaseView';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { checkSaleUrl } from 'utils/helpers';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { BreadcrumbsVariant, TitlePages } from '../src/constants/enums';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';

function HydraCasePage({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(
    TitlePages.HYDRA,
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
      salesChannel={PagesToSalesChannels.HYDRA}
      breadcrumbs={breadcrumbs}
      breadcrumbsVariant={BreadcrumbsVariant.WHITE}
    >
      <HydraCaseView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'erp-system-development-case-study' });

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

export default HydraCasePage;
