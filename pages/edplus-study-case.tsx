import { useState } from 'react';

import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHundlerPages';
import { TitlePages } from '../src/constants/enums';
import IPages from '../src/interfaces/IPages';
import Layout from '../src/layout/Layout';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import EdplusPageView from '../src/pages/EdplusPage/EdplusPageView';

function EdplusStudyCase({ seoData, footerContent }:IPages) {
  const [videoClicked, setVideoClicked] = useState(false);
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.ED_PLUS, TitlePages.CASE_STUDIES);

  const handleClick = () => {
    setVideoClicked(!videoClicked);
  };

  return (
    <Layout
      footerContent={footerContent}
      breadcrumbs={breadcrumbs}
      seoData={seoData}
      salesChannel={PageToSalesChannels.EDPLUS}
    >
      <EdplusPageView
        videoClicked={videoClicked}
        handleOnCLick={handleClick}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'edplus-study-case' });

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

export default EdplusStudyCase;
