import Layout from '../src/layout/Layout';
import IPages from '../src/interfaces/IPages';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { BreadcrumbsVariant, TitlePages } from '../src/constants/enums';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import NowWhatPageView from '../src/pages/NowWhat/NowWhatPageView';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function NowWhatPage({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.NOW_WHAT, TitlePages.CASE_STUDIES);

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
      salesChannel={PageToSalesChannels.NOW_WHAT}
      breadcrumbs={breadcrumbs}
      caseStudyLayout
      breadcrumbsVariant={BreadcrumbsVariant.WHITE}
    >
      <NowWhatPageView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'nowwhat-case-study' });

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

export default NowWhatPage;
