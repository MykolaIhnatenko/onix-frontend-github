import { usePathname } from 'next/navigation';

import Layout from '../src/layout/Layout';
import CombinedPage from '../src/pages/CombinedPage/CombinedPage';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { BreadcrumbsVariant, TitlePages } from '../src/constants/enums';
import IPages from '../src/interfaces/IPages';
import { LatestBlogType } from '../src/interfaces/IBlog';
import { getGoogleReview, getLatestBlogs } from '../src/api/api';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function UnityDSMMicroCasePage({
  latestBlogs, footerContent, seoData, ratingData,
}: IPages) {
  const pathname = usePathname();
  const breadcrumbs: IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.UNITY_DSM, TitlePages.CASE_STUDIES);
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
      breadcrumbs={breadcrumbs}
      ratingData={ratingData}
      salesChannel={PagesToSalesChannels.UNITY_DSM}
      caseStudyLayout
      breadcrumbsVariant={BreadcrumbsVariant.WHITE}
    >
      <CombinedPage
        saleUrl={saleUrl}
        pathname={pathname}
        latestBlogs={latestBlogs as LatestBlogType[]}
      />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const latestBlogs = await getLatestBlogs('unity-dsm', '', 'virtual-and-augmented-reality');
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'unity-dsm' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const ratingData = await getGoogleReview();

  return {
    props: {
      seoData,
      footerContent,
      latestBlogs,
      ratingData,
    },
  };
};

export default UnityDSMMicroCasePage;
