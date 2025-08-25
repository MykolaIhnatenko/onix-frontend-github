import Layout from '../src/layout/Layout';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';
import ArmyHealthSystemView from '../src/pages/ArmyHealthSystemView/ArmyHealthSystemView';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { checkSaleUrl } from 'utils/helpers';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { TitlePages } from '../src/constants/enums';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';

function ChinEasyPage({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(
    TitlePages.ARMY_HEALTH,
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
      salesChannel={PagesToSalesChannels.ARMY_HEALTH}
      breadcrumbs={breadcrumbs}
    >
      <ArmyHealthSystemView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'digital-military-wellness-solution-case-study' });

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

export default ChinEasyPage;
