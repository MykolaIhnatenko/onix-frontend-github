import { usePathname } from 'next/navigation';

import Layout from '../src/layout/Layout';
import CombinedPage from '../src/pages/CombinedPage/CombinedPage';
import { BreadcrumbsVariant, TitlePages } from '../src/constants/enums';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import IPages from '../src/interfaces/IPages';
import { LatestBlogType } from '../src/interfaces/IBlog';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { getGoogleReview, getLatestBlogs } from '../src/api/api';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function HolokitMicroCasePage({
  latestBlogs, footerContent, seoData, ratingData,
}: IPages) {
  const pathname = usePathname();
  const breadcrumbs: IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.HOLOKIT_X, TitlePages.CASE_STUDIES);
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
      caseStudyLayout
      breadcrumbs={breadcrumbs}
      seoData={seoData}
      ratingData={ratingData}
      salesChannel={PagesToSalesChannels.HOLO_KIT_X}
      breadcrumbsVariant={BreadcrumbsVariant.WHITE}
    >
      <CombinedPage
        saleUrl={saleUrl}
        latestBlogs={latestBlogs as LatestBlogType[]}
        pathname={pathname}
      />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'mixed-reality-holokit' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const latestBlogs = await getLatestBlogs('mixed-reality-holokit', '', 'virtual-and-augmented-reality');
  const ratingData = await getGoogleReview();

  return {
    props: {
      seoData,
      footerContent,
      ratingData,
      latestBlogs,
    },
  };
};

export default HolokitMicroCasePage;
