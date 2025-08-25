import { usePathname } from 'next/navigation';

import IPages from '../src/interfaces/IPages';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import { BreadcrumbsVariant, TitlePages } from '../src/constants/enums';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { LatestBlogType } from '../src/interfaces/IBlog';
import getDataPage from '../src/utils/helperCaseStudiesPages';
import CaseStudiesLayout from '../src/layout/CaseStudiesLayout/CaseStudiesLayout';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';
import Layout from 'layout/Layout';
import getFooterContent from 'api/getFooterContent';

function VRMicroCasePage({ latestBlogs, seoData, footerContent }:IPages) {
  const pathname = usePathname();
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.CONSTRUCTION_VR_MR, TitlePages.CASE_STUDIES);
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
    <CaseStudiesLayout
      footerContent={footerContent}
      saleUrl={saleUrl}
      seoData={seoData}
      breadcrumbs={breadcrumbs}
      pathname={pathname}
      latestBlogs={latestBlogs as LatestBlogType[]}
      salesChannel={PagesToSalesChannels.CONSTRUCTION_VRMR}
      breadcrumbsVariant={BreadcrumbsVariant.WHITE}
    />
  );
}

export async function getStaticProps() {
  const {
    seoData, latestBlogs, ratingData,
  } = await getDataPage('construction-vr-mr');
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
      ratingData,
      latestBlogs,
    },
  };
}

export default VRMicroCasePage;
