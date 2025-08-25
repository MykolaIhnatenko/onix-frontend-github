import Head from 'next/head';

import Layout from '../src/layout/Layout';
import ProductDiscoveryPageView from '../src/pages/ProductDiscoveryPageView/ProductDiscoveryPageView';
import { sortArrById } from '../src/utils/blogsHelpers';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import getBlogsByIds from '../src/api/getBlogsByIds';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function ProductDiscoveryPage({
  seoData, footerContent, pageBlogs,
}:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.PRODUCT_DISCOVERY, TitlePages.SERVICES);

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PagesToSalesChannels.PRODUCT_DISCOVERY}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <ProductDiscoveryPageView pageBlogs={pageBlogs} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'product-discovery' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const arrayId = seoData?.popularBlogs?.data && seoData?.popularBlogs?.data.length > 0
    ? seoData?.popularBlogs?.data.map((element) => element.id) : [63, 19, 118];
  const pageBlogs = await getBlogsByIds(arrayId);

  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default ProductDiscoveryPage;
