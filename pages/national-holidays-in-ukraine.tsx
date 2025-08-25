import Head from 'next/head';

import Layout from '../src/layout/Layout';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import NationalHolidaysPageView from '../src/pages/NationalHolidaysPageView/NationalHolidaysPageView';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import getNationalHolidays from '../src/api/getNationalHolidays';
import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { TitlePages } from '../src/constants/enums';
import { INationalHolidaysList } from '../src/interfaces/INationalHolidays';

function NationalHolidaysInUkraine({
  seoData, footerContent, nationalHolidays,
}:IPages) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.NATIONAL_HOLIDAYS, '');
  const nationalHolidaysData = nationalHolidays?.data || [];

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.NATIONAL_HOLIDAYS}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <NationalHolidaysPageView data={nationalHolidaysData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'national-holidays-in-ukraine' });
  const nationalHolidays: INationalHolidaysList = await getNationalHolidays();

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      seoData,
      footerContent,
      nationalHolidays,
    },
  };
}

export default NationalHolidaysInUkraine;
