import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { TitlePages } from '../src/constants/enums';
import IPages from '../src/interfaces/IPages';
import Layout from '../src/layout/Layout';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHundlerPages';
import useIsSaleUrl from '../src/hook/useCheckSaleUrl';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';
import ApartmentBookingWebsiteView from 'pages/ApartmentBookingWebsiteView/ApartmentBookingWebsiteView';

function ApartmentBookingWebsiteCaseStudy({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(
    TitlePages.APARTMENT_BOOKING_WEBSITE_CASE_STUDY,
    TitlePages.DESIGN_PORTFOLIO,
  );
  const saleDomain = useIsSaleUrl();
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
      salesChannel={PageToSalesChannels.KOZYSTAY_CASE_STUDY}
      breadcrumbs={breadcrumbs}
    >
      <ApartmentBookingWebsiteView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'apartment-booking-website-case-study' });

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

export default ApartmentBookingWebsiteCaseStudy;
