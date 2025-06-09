import { useState } from 'react';

import Layout from '../src/layout/Layout';
import IPages from '../src/interfaces/IPages';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import BstevrCaseStudyPage from '../src/pages/caseStudies/BstevrCaseStudyPage/BstevrCaseStudyPage';
import { TitlePages } from '../src/constants/enums';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHundlerPages';

function BstEvrCaseStudy({ seoData, footerContent }:IPages) {
  const [videoStarted, setVideoStarted] = useState<boolean>(false);
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.BSTEVR, TitlePages.CASE_STUDIES);
  const videoClickHandler = () => {
    setVideoStarted(true);
  };

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PagesToSalesChannels.BSTEVR}
      breadcrumbs={breadcrumbs}
      caseStudyLayout
    >
      <BstevrCaseStudyPage
        videoStarted={videoStarted}
        videoClickHandler={videoClickHandler}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'bstevr-case-study' });

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

export default BstEvrCaseStudy;
