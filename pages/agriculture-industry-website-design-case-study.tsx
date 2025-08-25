import Layout from '../src/layout/Layout';
import NibulonCasePageView from '../src/pages/NibulonCasePageView/NibulonCasePageView';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';
import { checkSaleUrl } from '../src/utils/helpers';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { TitlePages } from '../src/constants/enums';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import IPages from '../src/interfaces/IPages';

function NibulonCasePage({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.NIBULON_CASE, TitlePages.DESIGN_PORTFOLIO);
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
      salesChannel={PageToSalesChannels.NIBULON_CASE}
      breadcrumbs={breadcrumbs}
      caseStudyLayout
    >
      <NibulonCasePageView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'agriculture-industry-website-design-case-study' });

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

export default NibulonCasePage;
