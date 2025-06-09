import Layout from '../src/layout/Layout';
import IPages from '../src/interfaces/IPages';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHundlerPages';
import { TitlePages } from '../src/constants/enums';
import ChinEasyPageView from '../src/pages/ChinEasy/ChinEasyPageView';
import useIsSaleUrl from '../src/hook/useCheckSaleUrl';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function ChinEasyPage({ seoData, footerContent }: IPages) {
  const breadcrumbs: IBreadcrumbsItem[] = getBreadcrumbsData(
    TitlePages.CHIN_EASY,
    TitlePages.DESIGN_PORTFOLIO,
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
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PagesToSalesChannels.CHIN_EASY}
      breadcrumbs={breadcrumbs}
    >
      <ChinEasyPageView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'chineasy-design-case-study' });

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
