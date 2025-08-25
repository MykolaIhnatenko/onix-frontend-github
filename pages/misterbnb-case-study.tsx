import { checkSaleUrl } from 'utils/helpers';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import { BreadcrumbsVariant, TitlePages } from '../src/constants/enums';
import IPages from '../src/interfaces/IPages';
import Layout from '../src/layout/Layout';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import MisterBnBPageView from '../src/pages/MisterBnBPageView/MisterBnBPageView';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function MisterBnBPage({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.MISTER_BNB, TitlePages.CASE_STUDIES);

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
      salesChannel={PagesToSalesChannels.MISTER_BNB}
      breadcrumbs={breadcrumbs}
      caseStudyLayout
      breadcrumbsVariant={BreadcrumbsVariant.WHITE}
    >
      <MisterBnBPageView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'misterbnb-case-study' });

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

export default MisterBnBPage;
