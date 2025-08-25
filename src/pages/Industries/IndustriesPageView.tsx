import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import OurExpertiseSection from '../../components/OurExpertiseSection/OurExpertiseSection';
import ourExpertiseSectionData from './data/ourExpertiseSectionData';
import IndustriesAwardsSection from './components/IndustriesAwardsSection';
import CooperateBlock from '../../components/CooperateBlock/CooperateBlock';
import IndustriesChooseSection from './components/IndustriesChooseSection';
import IndustriesResultsSection from './components/IndustriesResultsSection';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import ClientsBlock from '../../components/ClientsBlock/ClientsBlock';
import mainScreenData from './data/mainSectionData';
import cooperateList from './data/cooperateList';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import quotesList from './data/quotesList';
import { IPageBlogs } from '../../interfaces/IPages';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import { ButtonType } from '../../constants/enums';
import MainBlockWith1TextBtn from 'components/MainBlockWith1TextBtn/MainBlockWith1TextBtn';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';
import IAchievements from '../../interfaces/IAchievements';

import IndustriesCallToActionBlockBg from '@/images/industriesPage/img_industries_call_to_action_block_bg@2x.webp';
import IndustriesCallToActionBlockBgMobile from '@/images/industriesPage/img_industries_call_to_action_block_bg_mobile@2x.webp';
import IndustriesCallToActionBlockBgTablet from '@/images/industriesPage/img_industries_call_to_action_block_bg_tablet@2x.webp';
import IndustriesDevelopers from '@/images/industriesPage/img_developers@2x.webp';
import IndustriesDevelopersXXXL from '@/images/industriesPage/img_developersXXXL@2x.webp';
import IndustriesMainBg from '@/images/industriesPage/img_industries_main_bg@2x.webp';
import IndustriesMainBgMobile from '@/images/industriesPage/img_industries_main_bg_mobile@2x.webp';
import IndustriesMainBgTablet from '@/images/industriesPage/img_industries_main_bg_tablet@2x.webp';
import WebDesignCTAFirstBigBg from '@/images/industriesPage/img_cta_first_big_bg@2x.webp';
import CaseStudiesBgIndustriesDesk from '@/images/industriesPage/img_bg_case_studies_industries@2x.webp';
import CaseStudiesBgIndustriesTablet from '@/images/industriesPage/img_bg_case_studies_industries_tablet@2x.webp';
import CaseStudiesBgIndustriesMobile from '@/images/industriesPage/img_bg_case_studies_industries_mobile@2x.webp';

function IndustriesPageView({ pageBlogs, achievements }: IPageBlogs & IAchievements) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      callToAction: IndustriesCallToActionBlockBg,
      mainScreen: IndustriesMainBg,
      mainScreenRightImg: IndustriesDevelopers,
      caseStudiesBg: CaseStudiesBgIndustriesDesk,
    };
    if (isXXXLDevice) {
      bg.mainScreenRightImg = IndustriesDevelopersXXXL;
      bg.callToAction = WebDesignCTAFirstBigBg;
    } else if (isMDDevice || isSMDevice) {
      bg.callToAction = IndustriesCallToActionBlockBgTablet;
      bg.mainScreen = IndustriesMainBgTablet;
      bg.caseStudiesBg = CaseStudiesBgIndustriesTablet;
    } else if (isXSDevice) {
      bg.callToAction = IndustriesCallToActionBlockBgMobile;
      bg.mainScreen = IndustriesMainBgMobile;
      bg.caseStudiesBg = CaseStudiesBgIndustriesMobile;
    }
    return bg;
  };

  return (
    <>
      <MainBlockWith1TextBtn
        pageTitle={mainScreenData.pageTitle}
        pageText={mainScreenData.pageText}
        btnText={mainScreenData.btnText}
        rightImg={getBackground().mainScreenRightImg}
        backgroundImg={getBackground().mainScreen}
        isMobile={isXSDevice || isSMDevice || isMDDevice}
      />
      <OurExpertiseSection
        title={ourExpertiseSectionData.title}
        firstText={ourExpertiseSectionData.firstText}
        secondText={ourExpertiseSectionData.secondText}
        data={ourExpertiseSectionData.data}
        classes={{
          title: 'min-lg:text-[40px]',
          container: 'screen-md:pt-[80px]',
        }}
      />
      <CaseStudiesBlock
        sliderIds={[50, 43, 45, 1000]}
        background={getBackground().caseStudiesBg}
        classes={{
          container: '!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
          bgContainer: 'screen-md:!h-[270px]',
          title: 'screen-md:!max-w-[300px]',
        }}
      />
      <IndustriesAwardsSection achievements={achievements} />
      <CooperateBlock
        title="Services enriched with our deep domain and industry expertise"
        data={cooperateList}
        whiteTheme
        classes={{
          title: 'max-w-[763px] mb-[80px] screen-lg:mb-[60px] screen-md:mb-[40px]',
        }}
      />
      <ClientsBlock
        title="[ Our clients ]"
        mainTitle="The brands we've worked with aren't trophies, they're friends we make on our journey!"
      />
      <IndustriesChooseSection />
      <IndustriesResultsSection />
      <ReviewBlock quotesList={quotesList} />
      {!!pageBlogs?.length && (<OurInsights pageBlogs={pageBlogs} />)}
      <CallToActionComponent
        id={ButtonType.LAND2}
        background={getBackground().callToAction}
        withButton
        title="Tell us about your product idea and let the&nbsp;magic&nbsp;unfold."
        btnText="Speak to Our Expert"
      />
    </>
  );
}

export default IndustriesPageView;
