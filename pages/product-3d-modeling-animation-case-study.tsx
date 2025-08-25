import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { TitlePages } from '../src/constants/enums';
import IPages from '../src/interfaces/IPages';
import Layout from '../src/layout/Layout';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import Product3dModelingAnimationView from '../src/pages/Product3dModelingAnimationView/Product3dModelingAnimationView';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { checkSaleUrl } from '../src/utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function BankingAppKids({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.BRAND_EXPOSURE, TitlePages.DESIGN_PORTFOLIO);
  const saleDomain = checkSaleUrl();
  const saleUrl = saleDomain && seoData.sale;
  if (saleDomain && !seoData.sale) {
    return (
      <Layout
        seoData={{}}
        showFooter={false}
        footerContent={footerContent}
      >
        <ErrorPageView />
      </Layout>
    );
  }

  return (
    <Layout
      seoData={seoData}
      salesChannel={PageToSalesChannels.BRAND_EXPOSURE}
      breadcrumbs={breadcrumbs}
    >
      <Product3dModelingAnimationView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const seoData = await getSeoData({ page: 'product-3d-modeling-animation-case-study' });
  const footerContent = await getFooterContent();

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

export default BankingAppKids;
