import React, { useEffect, useState } from 'react';

import IPages from '../src/interfaces/IPages';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import Layout from '../src/layout/Layout';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PageToSalesChannels from '../src/constants/PageToSalesChannels';
import { LG_DEVICE } from '../src/constants/constants';
import ShipVrSimulatorCaseView from '../src/pages/ShipVrSimulatorCasePage/ShipVrSimulatorCaseView';

function ShipVrSimulatorCasePage({ seoData, footerContent }: IPages) {
  const [topVideoClicked, setTopVideoClicked] = useState(false);
  const [bottomVideoClicked, setBottomVideoClicked] = useState(false);
  const [isBigTablet, setIsBigTablet] = useState(true);
  const updateWindowWidth = () => setIsBigTablet(document.body.clientWidth < LG_DEVICE);

  const handleVideoClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, video:string) => {
    event.preventDefault();
    if (video === 'top') {
      setTopVideoClicked(true);
    }
    if (video === 'bottom') {
      setBottomVideoClicked(true);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    document.body.append(script);

    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.AHTS_VR_SIMULATOR, TitlePages.CASE_STUDIES);

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.AHTS_VR_SIMULATOR}
      breadcrumbs={breadcrumbs}
      caseStudyLayout
    >
      <ShipVrSimulatorCaseView
        handleVideoClick={handleVideoClick}
        topVideoClicked={topVideoClicked}
        bottomVideoClicked={bottomVideoClicked}
        isBigTablet={isBigTablet}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'ship-vr-simulator-case' });

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

export default ShipVrSimulatorCasePage;
