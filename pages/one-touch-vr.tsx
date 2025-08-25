import { usePathname } from 'next/navigation';

import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import { LatestBlogType } from '../src/interfaces/IBlog';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import getDataPage from '../src/utils/helperCaseStudiesPages';
import CaseStudiesLayout from '../src/layout/CaseStudiesLayout/CaseStudiesLayout';
import { checkSaleUrl } from 'utils/helpers';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';
import Layout from 'layout/Layout';
import getFooterContent from 'api/getFooterContent';

function TimescopePage({ latestBlogs, seoData, footerContent }: IPages) {
  const pathname = usePathname();
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.ONE_TOUCH, TitlePages.CASE_STUDIES);
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
      salesChannel={PagesToSalesChannels.ONE_TOUCH}
    />
  );
}

export const getStaticProps = async () => {
  const {
    seoData, latestBlogs, ratingData,
  } = await getDataPage('one-touch-vr');
  const footerContent = await getFooterContent();

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      latestBlogs,
      footerContent,
      ratingData,
      seoData,
    },
  };
};

export default TimescopePage;
