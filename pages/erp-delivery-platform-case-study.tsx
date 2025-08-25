import Layout from '../src/layout/Layout';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { checkSaleUrl } from 'utils/helpers';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { TitlePages } from '../src/constants/enums';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import Hotel4BoxCaseView from '../src/pages/Hotel4BoxCaseView/Hotel4BoxCaseView';

function Hotel4BoxPage({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(
    TitlePages.HOTEL4BOX,
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
      salesChannel={PagesToSalesChannels.HOTEL4BOX}
      breadcrumbs={breadcrumbs}
    >
      <Hotel4BoxCaseView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'erp-delivery-platform-case-study' });

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

export default Hotel4BoxPage;
