import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { TitlePages } from '../src/constants/enums';
import IPages from '../src/interfaces/IPages';
import Layout from '../src/layout/Layout';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import BankingAppKidsView from '../src/pages/BankingAppKidsView/BankingAppKidsView';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import useIsSaleUrl from '../src/hook/useCheckSaleUrl';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function BankingAppKids({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.BANKING_APP_KIDS, TitlePages.CASE_STUDIES);
  const saleDomain = useIsSaleUrl();
  const saleUrl = saleDomain && seoData.sale;
  if (saleDomain && !seoData.sale) {
    return (
      <Layout
        seoData={{}}
        showFooter={false}
        footerContent={footerContent}
      >
        <ErrorPageView />
      </Layout>
    );
  }

  return (
    <Layout
      seoData={seoData}
      salesChannel={PageToSalesChannels.BANKING_APP_KIDS}
      breadcrumbs={breadcrumbs}
    >
      <BankingAppKidsView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const seoData = await getSeoData({ page: 'kids-banking-app-case-study' });
  const footerContent = await getFooterContent();

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

export default BankingAppKids;
