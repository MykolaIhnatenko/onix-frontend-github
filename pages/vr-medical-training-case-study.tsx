import Layout from '../src/layout/Layout';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { getBreadcrumbsData } from '../src/utils/helperHundlerPages';
import { TitlePages } from '../src/constants/enums';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import VrMedicalTrainingCasePageView from '../src/pages/VRMedicalTrainingCasePageView/VRMedicalTrainingCasePageView';
import { checkSaleUrl } from '../src/utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function VRMedicalTrainingCasePage({ seoData, footerContent }:IPages) {
  const breadcrumbs = getBreadcrumbsData(TitlePages.VR_MEDICAL_TRAINING_CASE, TitlePages.CASE_STUDIES);
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
      salesChannel={PageToSalesChannels.VR_MEDICAL_TRAINING_CASE}
      breadcrumbs={breadcrumbs}
    >
      <VrMedicalTrainingCasePageView saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'vr-medical-training-case-study' });

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

export default VRMedicalTrainingCasePage;
