import Head from 'next/head';

import Layout from '../src/layout/Layout';
import CrossPlatformAppDevelopmentPageView from '../src/pages/CrossPlatformAppDevelopmentPageView/CrossPlatformAppDevelopmentPageView';
import { sortArrById } from '../src/utils/blogsHelpers';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import getBlogsByIds from '../src/api/getBlogsByIds';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';
import { getBreadcrumbsData } from '../src/utils/helperHundlerPages';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import { TitlePages } from '../src/constants/enums';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import IPages from '../src/interfaces/IPages';

function CrossPlatformAppDevelopment({
  seoData, footerContent, pageBlogs,
}:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(
    TitlePages.UI_UX_DESIGN,
    TitlePages.SERVICES,
    TitlePages.CROSS_PLATFORM,
  );
  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PagesToSalesChannels.CROSSPLATFORM_APP_DEVELOPMENT}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <CrossPlatformAppDevelopmentPageView pageBlogs={pageBlogs} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'cross-platform-app-development' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const arrayId = seoData?.popularBlogs?.data && seoData?.popularBlogs?.data.length > 0
    ? seoData?.popularBlogs?.data.map((element) => element.id) : [72, 149, 89];
  const pageBlogs = await getBlogsByIds(arrayId);

  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default CrossPlatformAppDevelopment;
