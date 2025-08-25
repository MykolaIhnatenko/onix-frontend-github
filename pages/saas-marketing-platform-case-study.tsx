import { checkSaleUrl } from 'utils/helpers';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { TitlePages } from '../src/constants/enums';
import IPages from '../src/interfaces/IPages';
import Layout from '../src/layout/Layout';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import AdoricCaseStudyView from '../src/pages/AdoricCaseStudy/AdoricCaseStudyView';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function AdoricCaseStudy({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.ADORIC, TitlePages.CASE_STUDIES);

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
      salesChannel={PageToSalesChannels.ADORIC_CASE}
      breadcrumbs={breadcrumbs}
    >
      <AdoricCaseStudyView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'saas-marketing-platform-case-study' });

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

export default AdoricCaseStudy;
