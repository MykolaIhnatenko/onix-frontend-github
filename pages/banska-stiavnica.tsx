import { usePathname } from 'next/navigation';

import Layout from '../src/layout/Layout';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { BreadcrumbsVariant, TitlePages } from '../src/constants/enums';
import { getGoogleReview, getLatestBlogs } from '../src/api/api';
import IPages from '../src/interfaces/IPages';
import { LatestBlogType } from '../src/interfaces/IBlog';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import CombinedPage from '../src/pages/CombinedPage/CombinedPage';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function BanskaStavnicaPage({
  latestBlogs, seoData, footerContent, ratingData,
}: IPages) {
  const pathname = usePathname();
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.BANSKA_STIAVNICA, TitlePages.CASE_STUDIES);

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
      salesChannel={PagesToSalesChannels.BANSKA_STIAVNICA}
      breadcrumbs={breadcrumbs}
      seoData={seoData}
      ratingData={ratingData}
      caseStudyLayout
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
  const latestBlogs = await getLatestBlogs('banska-stiavnica', '', 'virtual-and-augmented-reality');
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'banska-stiavnica' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const ratingData = await getGoogleReview();

  return {
    props: {
      latestBlogs,
      seoData,
      footerContent,
      ratingData,
    },
  };
};

export default BanskaStavnicaPage;
