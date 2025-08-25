import Head from 'next/head';

import Layout from '../src/layout/Layout';
import DedicatedTeamPageView from '../src/pages/DedicatedTeamPageView/DedicatedTeamPageView';
import IPages from '../src/interfaces/IPages';
import { sortArrById } from '../src/utils/blogsHelpers';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import getBlogsByIds from '../src/api/getBlogsByIds';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function DedicatedTeamPage({
  seoData, footerContent, pageBlogs,
}:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(
    TitlePages.DEDICATED_TEAM,
    TitlePages.SERVICES,
  );

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.DEDICATED_TEAM}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <DedicatedTeamPageView pageBlogs={pageBlogs} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'dedicated-team' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const arrayId = seoData?.popularBlogs?.data && seoData?.popularBlogs?.data.length > 0
    ? seoData?.popularBlogs?.data.map((element) => element.id) : [27, 112, 31];
  const pageBlogs = await getBlogsByIds(arrayId);

  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default DedicatedTeamPage;
