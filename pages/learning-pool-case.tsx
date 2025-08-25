import IPages from '../src/interfaces/IPages';
import Layout from '../src/layout/Layout';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import LearningPoolView from '../src/pages/caseStudies/LearningPoolPage/LearningPoolView';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function LearningPoolCase({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.LEARNING_POOL, TitlePages.CASE_STUDIES);

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
      salesChannel={PageToSalesChannels.LEARNING_POOL}
      breadcrumbs={breadcrumbs}
    >
      <LearningPoolView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'learning-pool-case' });

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
export default LearningPoolCase;
