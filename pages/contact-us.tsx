import React, { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import Layout from '../src/layout/Layout';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import IPages from '../src/interfaces/IPages';
import ContactUsPageView from '../src/pages/ContactUsPageView/ContactUsPageView';
import { FormModalVariants, IContactForm } from '../src/store/app/contactForm/interfaces/IContactForm';
import IStore from '../src/store/interfaces/IStore';

function ContactUsPage({ seoData, footerContent }: IPages) {
  const {
    modalView,
  } = useSelector<IStore, IContactForm>((state) => state?.contactForm, shallowEqual);
  const [salesChannel, setSalesChannel] = useState<string | null>(null);
  const { ERROR } = FormModalVariants;
  const [prevPage, setPrevPage] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      const urlObj = new URL(currentUrl);
      const salesChannelParam = urlObj.searchParams.get('salesChannel');
      setSalesChannel(salesChannelParam);
    }

    setPrevPage(sessionStorage.getItem('previousPage') || '');
  }, []);

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.CONTACT_US}
      showFooter={modalView !== ERROR}
    >
      <ContactUsPageView salesChannel={salesChannel || `${PageToSalesChannels.CONTACT_US} ${prevPage}`} />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'contact-us' });

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

export default ContactUsPage;
