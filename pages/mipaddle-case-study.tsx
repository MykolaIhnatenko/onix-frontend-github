import Layout from '../src/layout/Layout';
import IPages from '../src/interfaces/IPages';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { TitlePages } from '../src/constants/enums';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import MiPaddleCaseStudyView from '../src/pages/caseStudies/MiPaddleView/MiPaddleCaseStudyView';
import {
  headerInfoContent, solutionList, coreTechList, neededList, solutionsList2,
} from '../src/pages/caseStudies/MiPaddleView/data/miPaddleData';
import { checkSaleUrl } from '../src/utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function MiPaddlePage({ seoData, footerContent }:IPages) {
  const path = process.env.NEXT_PUBLIC_BASE_URL || '';
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.MI_PADDLE, TitlePages.CASE_STUDIES);
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
      salesChannel={PagesToSalesChannels.MI_PADDLE}
      breadcrumbs={breadcrumbs}
      caseStudyLayout
    >
      <MiPaddleCaseStudyView
        headerInfoContent={headerInfoContent}
        solutionList={solutionList}
        coreTechList={coreTechList}
        neededList={neededList}
        solutionsList2={solutionsList2}
        path={path}
        saleUrl={saleUrl}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'mipaddle-case-study' });

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

export default MiPaddlePage;
