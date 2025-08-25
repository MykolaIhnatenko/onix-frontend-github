import Layout from '../src/layout/Layout';
import AdventuresCaseStudyPageView from '../src/pages/AdventuresCaseStudyPageView/AdventuresCaseStudyPageView';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { checkSaleUrl } from '../src/utils/helpers';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { TitlePages } from '../src/constants/enums';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function AdventuresCaseStudy({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.ADVENTURES_CASE, TitlePages.DESIGN_PORTFOLIO);
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
      salesChannel={PageToSalesChannels.ADVENTURES_CASE}
      breadcrumbs={breadcrumbs}
      caseStudyLayout
    >
      <AdventuresCaseStudyPageView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'travel-marketplace-design-case-study' });

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

export default AdventuresCaseStudy;
