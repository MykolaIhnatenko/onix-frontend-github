import React from 'react';

import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import Layout from '../src/layout/Layout';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import PrivacyPolicyView from '../src/pages/PrivacyPolicyView/PrivacyPolicyView';
import privacyPolicyViewData from '../src/pages/PrivacyPolicyView/data/privacyPolicyViewData';
import { checkSaleUrl } from 'utils/helpers';

function PrivacyPolicy({ seoData, footerContent }: IPages) {
  const saleDomain = checkSaleUrl();
  const saleUrl = saleDomain && seoData.sale;

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.PRIVACY_POLICY}
      fixHeader
    >
      <PrivacyPolicyView
        pageTitle="Privacy Policy"
        data={privacyPolicyViewData(saleUrl)}
        saleUrl={saleUrl}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'privacy-policy' });

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

export default PrivacyPolicy;
