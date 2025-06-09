import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import Layout from '../src/layout/Layout';
import { getBreadcrumbsData } from '../src/utils/helperHundlerPages';
import InneraiMeditationAppPageView from '../src/pages/InneraiMeditationAppPageView/InneraiMeditationAppPageView';
import { checkSaleUrl } from '../src/utils/helpers';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { TitlePages } from '../src/constants/enums';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function InneraiMeditationAppCaseStudy({ seoData, footerContent }: IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.INNER_AI_CASE, TitlePages.CASE_STUDIES);
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
      salesChannel={PageToSalesChannels.INNER_AI_CASE}
      breadcrumbs={breadcrumbs}
    >
      <InneraiMeditationAppPageView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'innerai-meditation-app-case-study' });

  return {
    props: {
      seoData,
      footerContent,
    },
  };
}

export default InneraiMeditationAppCaseStudy;
