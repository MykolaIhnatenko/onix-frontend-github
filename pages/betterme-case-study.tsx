import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import Layout from '../src/layout/Layout';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import Icon from '../src/assets/icon';
import BetterMePageView from '../src/pages/BetterMeView/BetterMePageView';
import { getProjectsByIds } from '../src/api/api';
import sortProjects from '../src/utils/sortProjects';
import { useAppSelector } from '../src/hook/reduxToolkit';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function MetroCaseStudy({
  seoData, footerContent, projects,
}: IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.BETTER_ME, TitlePages.CASE_STUDIES);
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

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

  const isMobile = isSMDevice || isXSDevice || isMDDevice;

  const iconWidthAndHeight = isMobile ? 32 : 40;

  const taskIncludedItems = [
    {
      id: 0,
      icon: <Icon.IconCloud width={iconWidthAndHeight} height={iconWidthAndHeight} />,
      description: 'Setting up effective management and transparent development process',
    },
    {
      id: 1,
      icon: <Icon.IconGoal width={iconWidthAndHeight} height={iconWidthAndHeight} />,
      description: 'Identifying and gathering requirements to meet project objectives',
    },
    {
      id: 2,
      icon: <Icon.IconShoppingCart width={iconWidthAndHeight} height={iconWidthAndHeight} />,
      description: 'Developing a custom plugin to generate recommended content in the shopping cart ',
    },
    {
      id: 3,
      icon: <Icon.IconTop width={iconWidthAndHeight} height={iconWidthAndHeight} />,
      description: 'Developing an intuitive Shopify store with sports clothing',
    },
    {
      id: 4,
      icon: <Icon.IconSocket width={iconWidthAndHeight} height={iconWidthAndHeight} />,
      description: 'Searching, installing, and configuring additional plugins',
    },
    {
      id: 5,
      icon: <Icon.IconDevelopment width={iconWidthAndHeight} height={iconWidthAndHeight} />,
      description: 'Making the website adaptable for mobile devices',
    },
    {
      id: 6,
      icon: <Icon.IconAnimate width={iconWidthAndHeight} height={iconWidthAndHeight} />,
      description: 'Adding animation to the website for better engagement',
    },
  ];

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.BETTER_MY}
      breadcrumbs={breadcrumbs}
    >
      {projects && (
      <BetterMePageView
        taskIncludedItems={taskIncludedItems}
        projects={projects}
        saleUrl={saleUrl}
      />
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const ids = [7, 4, 58];
  const projects = await getProjectsByIds(ids);
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'betterme-case-study' });

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

export default MetroCaseStudy;
