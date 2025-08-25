import { useEffect, useState } from 'react';
import Head from 'next/head';

import IPages from '../src/interfaces/IPages';
import Layout from '../src/layout/Layout';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import OnlineSchedulingAndBookingView from '../src/pages/OnlineSchedulingAndBookingView/OnlineSchedulingAndBookingView';
import useWindowSize from '../src/hook/useWindowSize';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData, handleScroll } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import getBlogsByIds from '../src/api/getBlogsByIds';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';
import { sortArrById } from '../src/utils/blogsHelpers';

function OnlineSchedulingAndBooking({
  seoData, footerContent, pageBlogs,
}:IPages) {
  const { width } = useWindowSize();
  const [isBannerHidden, setIsBannerHidden] = useState(false);
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.SCHEDULING_AND_BOOKING, TitlePages.INDUSTRIES);

  useEffect(() => {
    handleScroll(width, setIsBannerHidden);
    window.addEventListener('scroll', () => handleScroll(width, setIsBannerHidden));
    return () => {
      window.removeEventListener('scroll', () => handleScroll(width, setIsBannerHidden));
    };
  }, [width]);

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.BOOKING_SYSTEM_DEVELOPMENT}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <OnlineSchedulingAndBookingView
        isBannerHidden={isBannerHidden}
        pageBlogs={pageBlogs}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'scheduling-and-booking-system-development-services' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const arrayId = seoData?.popularBlogs?.data && seoData?.popularBlogs?.data.length > 0
    ? seoData?.popularBlogs?.data.map((element) => element.id) : [101, 103, 102, 104];
  const pageBlogs = await getBlogsByIds(arrayId);

  return {
    props: {
      seoData,
      footerContent,
      pageBlogs: sortArrById(pageBlogs, arrayId),
    },
  };
}

export default OnlineSchedulingAndBooking;
