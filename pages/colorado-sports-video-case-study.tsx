import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import Layout from '../src/layout/Layout';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import { getProjectsByIds } from '../src/api/api';
import sortProjects from '../src/utils/sortProjects';
import ColoradoSportsVideoPageView from '../src/pages/ColoradoSportsVideoPage/ColoradoSportsVideoPageView';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function ColoradoSportsVideoPage({
  seoData,
  footerContent,
  projects,
}: IPages) {
  const breadcrumbs: IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.COLORADO, TitlePages.CASE_STUDIES);

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
      salesChannel={PageToSalesChannels.COLORADO}
      breadcrumbs={breadcrumbs}
    >
      <ColoradoSportsVideoPageView
        projects={projects}
        saleUrl={saleUrl}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const ids = [7, 58, 4];
  const projects = await getProjectsByIds(ids);
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'colorado-sports-video-case-study' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projects: sortProjects(projects, ids),
      seoData,
      footerContent,
    },
  };
}

export default ColoradoSportsVideoPage;
