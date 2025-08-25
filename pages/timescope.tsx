import { usePathname } from 'next/navigation';

import Layout from '../src/layout/Layout';
import CombinedPage from '../src/pages/CombinedPage/CombinedPage';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { BreadcrumbsVariant, TitlePages } from '../src/constants/enums';
import { LatestBlogType } from '../src/interfaces/IBlog';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { getGoogleReview, getLatestBlogs } from '../src/api/api';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function TimescopePage({
  latestBlogs, footerContent, seoData, ratingData,
}: IPages) {
  const pathname = usePathname();
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.TIMESCOPE, TitlePages.CASE_STUDIES);
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
      salesChannel={PagesToSalesChannels.TIMESCOPE}
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
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'timescope' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const latestBlogs = await getLatestBlogs('timescope', '', 'virtual-and-augmented-reality');
  const ratingData = await getGoogleReview();

  return {
    props: {
      latestBlogs,
      ratingData,
      seoData,
      footerContent,
    },
  };
};

export default TimescopePage;
