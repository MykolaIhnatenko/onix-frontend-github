import Layout from '../src/layout/Layout';
import KeybokCaseStudyPageView from '../src/pages/KeybokCaseStudyPageView/KeybokCaseStudyPageView';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { TitlePages } from '../src/constants/enums';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import IPages from '../src/interfaces/IPages';
import { checkSaleUrl } from '../src/utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function KeybokCaseStudyPage({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.KEYBOK_CASE, TitlePages.CASE_STUDIES);
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
      salesChannel={PageToSalesChannels.KEYBOK_CASE}
      breadcrumbs={breadcrumbs}
      caseStudyLayout
    >
      <KeybokCaseStudyPageView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'mobile-app-keyboard-case-study' });

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

export default KeybokCaseStudyPage;
