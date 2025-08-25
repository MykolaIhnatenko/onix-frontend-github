import Layout from '../src/layout/Layout';
import IPages from '../src/interfaces/IPages';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import TravelTailPageView from '../src/pages/TravelTail/TravelTailPageView';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function TravelTailPage({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(
    TitlePages.TRAVEL_TAIL,
    TitlePages.DESIGN_PORTFOLIO,
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
      salesChannel={PagesToSalesChannels.TRAVEL_TAIL}
      fixHeader
      breadcrumbs={breadcrumbs}
    >
      <TravelTailPageView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'pet-travel-platform-development-case-study' });

  return {
    props: {
      seoData,
      footerContent,
    },
  };
}

export default TravelTailPage;
