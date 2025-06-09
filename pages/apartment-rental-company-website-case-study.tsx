import ApartmentRentalView from 'pages/ApartmentRentalView/ApartmentRentalView';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { TitlePages } from '../src/constants/enums';
import IPages from '../src/interfaces/IPages';
import Layout from '../src/layout/Layout';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHundlerPages';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function ApartmentRentalCaseStudy({ seoData, footerContent }:IPages) {
  const breadcrumbs: IBreadcrumbsItem[] = getBreadcrumbsData(
    TitlePages.APARTMENT_RENTAL_COMPANY_WEBSITE_CASE_STUDY,
    TitlePages.CASE_STUDIES,
  );

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
      salesChannel={PageToSalesChannels.APARTMENT_RENTAL_COMPANY_WEBSITE_CASE_STUDY}
      breadcrumbs={breadcrumbs}
    >
      <ApartmentRentalView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'apartment-rental-company-website-case-study' });

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

export default ApartmentRentalCaseStudy;
