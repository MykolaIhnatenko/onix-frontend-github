import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { TitlePages } from '../src/constants/enums';
import IPages from '../src/interfaces/IPages';
import Layout from '../src/layout/Layout';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import SolomiyaView from '../src/pages/SolomiyaView/SolomiyaView';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function AdoricCaseStudy({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.SOLOMIYA, TitlePages.CASE_STUDIES);

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
      salesChannel={PageToSalesChannels.SOLOMIYA}
      breadcrumbs={breadcrumbs}
    >
      <SolomiyaView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'mental-health-app-development-case-study' });

  return {
    props: {
      seoData,
      footerContent,
    },
  };
}

export default AdoricCaseStudy;
