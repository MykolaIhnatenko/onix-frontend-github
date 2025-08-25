import { usePathname } from 'next/navigation';

import Layout from '../src/layout/Layout';
import CombinedPage from '../src/pages/CombinedPage/CombinedPage';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { BreadcrumbsVariant, TitlePages } from '../src/constants/enums';
import IPages from '../src/interfaces/IPages';
import { getGoogleReview, getLatestBlogs } from '../src/api/api';
import { LatestBlogType } from '../src/interfaces/IBlog';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function OnixARMicroCasePage({
  latestBlogs, footerContent, seoData, ratingData,
}: IPages) {
  const pathname = usePathname();
  const breadcrumbs: IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.ONIX_AR, TitlePages.CASE_STUDIES);
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
      breadcrumbs={breadcrumbs}
      seoData={seoData}
      ratingData={ratingData}
      caseStudyLayout
      salesChannel={PagesToSalesChannels.ONIX_AR}
      breadcrumbsVariant={BreadcrumbsVariant.WHITE_SINGLE_BLOG}
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
  const ratingData = await getGoogleReview();
  const latestBlogs = await getLatestBlogs('onix-ar-app', '', 'virtual-and-augmented-reality');
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'onix-ar-app' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      latestBlogs,
      seoData,
      footerContent,
      ratingData,
    },
  };
};

export default OnixARMicroCasePage;
