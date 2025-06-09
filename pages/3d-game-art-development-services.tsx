import Head from 'next/head';

import Layout from '../src/layout/Layout';
import IPages from '../src/interfaces/IPages';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { getBlogsList, sortArrById } from '../src/utils/blogsHelpers';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import GameArtDevelopmentServicesPageView from '../src/pages/GameArtDevelopmentServicesPageView/GameArtDevelopmentServicesPageView';
import { TitlePages } from '../src/constants/enums';
import { getBreadcrumbsData } from '../src/utils/helperHundlerPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function GameArtDevelopmentServices({ seoData, footerContent, pageBlogs }:IPages) {
  const breadcrumbs: IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.GAME_ART, TitlePages.SERVICES);

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.ART_LP}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <GameArtDevelopmentServicesPageView pageBlogs={pageBlogs} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: '3d-game-art-development-services' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const { pageBlogs, arrayId } = await getBlogsList(seoData, [89, 207, 145]);

  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default GameArtDevelopmentServices;
