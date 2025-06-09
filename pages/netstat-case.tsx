import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import IPages from '../src/interfaces/IPages';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHundlerPages';
import { TitlePages } from '../src/constants/enums';
import Layout from '../src/layout/Layout';
import NetstatPageView from '../src/pages/NetstatPage/NetstatPageView';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function NetstatCase({ seoData, footerContent }: IPages) {
  const breadcrumbs: IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.NETSTAT, TitlePages.CASE_STUDIES);

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
      salesChannel={PageToSalesChannels.NETSTAT}
      breadcrumbs={breadcrumbs}
      seoData={seoData}
      caseStudyLayout
    >
      <NetstatPageView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'netstat-case' });

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
export default NetstatCase;
