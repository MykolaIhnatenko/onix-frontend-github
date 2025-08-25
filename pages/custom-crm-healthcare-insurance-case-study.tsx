import Layout from '../src/layout/Layout';
import getSeoData from '../src/api/getSeoData';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import IPages from '../src/interfaces/IPages';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';
import CustomCrmHealthcareInsuranceView from 'pages/CustomCrmHealthcareInsuranceView/CustomCrmHealthcareInsuranceView';
import getFooterContent from 'api/getFooterContent';

function CustomCrmHealthcareInsurance({ seoData, footerContent }:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(
    TitlePages.HEALTHCARE_CUSTOMER_RELATIONSHIP_MANAGEMENT_CASE_STUDY,
    TitlePages.CASE_STUDIES,
  );

  const saleDomain = checkSaleUrl();
  const saleUrl = saleDomain && seoData.sale;
  if (saleDomain && !seoData.sale) {
    return (
      <Layout
        seoData={{}}
        showFooter={false}
      >
        <ErrorPageView />
      </Layout>
    );
  }

  return (
    <Layout
      seoData={seoData}
      salesChannel={PagesToSalesChannels.CRM_HEALTHCARE_INSURANCE_CASE_STUDY}
      breadcrumbs={breadcrumbs}
      footerContent={footerContent}
    >
      <CustomCrmHealthcareInsuranceView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const seoData = await getSeoData({ page: 'custom-crm-healthcare-insurance-case-study' });
  const footerContent = await getFooterContent();

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      footerContent,
      seoData,
    },
  };
}

export default CustomCrmHealthcareInsurance;
