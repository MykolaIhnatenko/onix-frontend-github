import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import IPages from '../src/interfaces/IPages';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import Layout from '../src/layout/Layout';
import { useAppSelector } from '../src/hook/reduxToolkit';
import ProjectXCasePageView from '../src/pages/caseStudies/ProjectXCasePageView/ProjectXCasePageView';

function ProjectXCasePage({ seoData, footerContent }: IPages) {
  const { screenSizes: { screenWidth } } = useAppSelector((state) => state?.app);
  const isNotMobile = screenWidth > 450;
  const isTablet = (screenWidth > 450) && (screenWidth <= 768);
  const isMobile = screenWidth <= 450;
  const breadcrumbs: IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.PROJECT_X, TitlePages.CASE_STUDIES);

  return (
    <Layout
      footerContent={footerContent}
      salesChannel={PageToSalesChannels.PROJECT_X}
      breadcrumbs={breadcrumbs}
      seoData={seoData}
      caseStudyLayout
    >
      <ProjectXCasePageView
        isTablet={isTablet}
        isMobile={isMobile}
        isNotMobile={isNotMobile}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'project-x-case-study' });

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

export default ProjectXCasePage;
