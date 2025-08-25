import Layout from '../src/layout/Layout';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import NoisyNeighborCasePageView from '../src/pages/NoisyNeighborCasePageView/NoisyNeighborCasePageView';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { TitlePages } from '../src/constants/enums';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import IPages from '../src/interfaces/IPages';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function NoisyNeighborCasePage({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.NOISY_NEIGHBOR, TitlePages.DESIGN_PORTFOLIO);
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
      salesChannel={PageToSalesChannels.NOISY_NEIGHBOR_CASE}
      breadcrumbs={breadcrumbs}
    >
      <NoisyNeighborCasePageView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'noisy-neighbor-design-case-study' });

  return {
    props: {
      seoData,
      footerContent,
    },
  };
}

export default NoisyNeighborCasePage;
