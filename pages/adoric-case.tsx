import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import Layout from '../src/layout/Layout';
import IPages from '../src/interfaces/IPages';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import AdoricCaseView from '../src/pages/caseStudies/AdoricCasePage/AdoricCaseView';

function AdoricCase({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.ADORIC, TitlePages.CASE_STUDIES);

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.ADORIC}
      breadcrumbs={breadcrumbs}
    >
      <AdoricCaseView />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'adoric-case' });

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

export default AdoricCase;
