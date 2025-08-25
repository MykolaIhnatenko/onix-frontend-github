import React from 'react';

import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import Layout from '../src/layout/Layout';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import BonusPageView from '../src/pages/BonusPage/BonusPageView';
import { getBreadcrumbsData } from 'utils/helperHandlerPages';
import { IBreadcrumbsItem } from 'layout/interfaces/IBreadcrumbs';
import { TitlePages } from 'constants/enums';

function Bonus({ seoData, footerContent }: IPages) {
  const breadcrumbs: IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.REFERRAL_PROGRAM, '');

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.REFERRAL_PROGRAM}
      breadcrumbs={breadcrumbs}
    >
      <BonusPageView />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'referral-program' });

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

export default Bonus;
