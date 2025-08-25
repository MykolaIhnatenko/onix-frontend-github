import { ICaseStudiesPages } from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { getProjectsByIds } from '../src/api/api';
import Layout from '../src/layout/Layout';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import JamesSmithPageView from '../src/pages/JamesSmithPageView/JamesSmithPageView';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function JamesSmithPage({ seoData, footerContent, projects }:ICaseStudiesPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.JSA, TitlePages.CASE_STUDIES);
  const sortedProjects = projects?.slice();
  if (sortedProjects && sortedProjects.length >= 2) {
    [sortedProjects[0], sortedProjects[1]] = [sortedProjects[1], sortedProjects[0]];
  }

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
      salesChannel={PageToSalesChannels.JSA}
      breadcrumbs={breadcrumbs}
      caseStudyLayout
    >
      <JamesSmithPageView projects={sortedProjects} saleUrl={saleUrl} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'james-smith-academy-case-study' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const ids: Array<number> = [7, 4, 58];
  const projects = await getProjectsByIds(ids);

  return {
    props: {
      seoData,
      footerContent,
      projects,
    },
  };
}

export default JamesSmithPage;
