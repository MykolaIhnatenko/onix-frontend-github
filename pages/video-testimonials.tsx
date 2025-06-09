import Layout from '../src/layout/Layout';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { getBreadcrumbsData } from '../src/utils/helperHundlerPages';
import { TitlePages } from '../src/constants/enums';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import VideoTestimonialsPageView from '../src/pages/VideoTestimonialsPageView/VideoTestimonialsPageView';

function VideoTestimonialsPage({ seoData, footerContent }:IPages) {
  const breadcrumbs = getBreadcrumbsData(TitlePages.TESTIMONIALS, '');

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.VIDEO_TESTIMONIALS}
      breadcrumbs={breadcrumbs}
    >
      <VideoTestimonialsPageView />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'video-testimonials' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      seoData,
      footerContent,
    },
  };
}

export default VideoTestimonialsPage;
