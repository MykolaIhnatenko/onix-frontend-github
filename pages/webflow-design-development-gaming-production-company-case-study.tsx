import WebflowWebsiteDevGaming from 'pages/WebflowWebsiteDevGaming/WebflowWebsiteDevGaming';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { TitlePages } from '../src/constants/enums';
import IPages from '../src/interfaces/IPages';
import Layout from '../src/layout/Layout';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHundlerPages';
import { checkSaleUrl } from 'utils/helpers';

function WebflowWebSiteDevelopmentCaseStudy({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.WEBFLOW_DEVELOPMENT, TitlePages.CASE_STUDIES);
  const saleUrl = checkSaleUrl() && seoData.sale;

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.WEBFLOW_WEBSITE_DEVELOPMENT_AND_DESIGN}
      breadcrumbs={breadcrumbs}
    >
      <WebflowWebsiteDevGaming saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'webflow-design-development-gaming-production-company-case-study' });

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

export default WebflowWebSiteDevelopmentCaseStudy;
