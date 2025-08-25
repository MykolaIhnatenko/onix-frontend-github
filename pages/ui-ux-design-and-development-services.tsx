import Head from 'next/head';

import Layout from '../src/layout/Layout';
import IPages from '../src/interfaces/IPages';
import { getBlogsList, sortArrById } from '../src/utils/blogsHelpers';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import UiUxDesignAndDevelopmentPageView
  from '../src/pages/UiUxDesignAndDevelopmentPageView/UiUxDesignAndDevelopmentPageView';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function UiUxDesignAndDevelopmentServices({
  seoData, footerContent, pageBlogs,
}:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.UI_UX_DESIGN, TitlePages.SERVICES);
  const achievements = seoData.achievements?.data || [];

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.UIUX_DESIGN}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <UiUxDesignAndDevelopmentPageView pageBlogs={pageBlogs} achievements={achievements} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'ui-ux-design-and-development-services' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const { pageBlogs, arrayId } = await getBlogsList(seoData, [38, 43, 11]);

  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default UiUxDesignAndDevelopmentServices;
