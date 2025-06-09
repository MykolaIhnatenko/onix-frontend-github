import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import HunterMainSection from './components/HunterMainSection';
import OurSolutionsWithCarouselAndCards
  from '../../components/OurSolutionsWithCarouselAndCards/OurSolutionsWithCarouselAndCards';
import HunterVideoSection from './components/HunterVideoSection';
import CaseStudiesBlockForCases from '../../components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import RunningColsBlock from '../../components/RunningColsBlock/RunningColsBlock';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import resultData from './data/resultData';
import businessContextData from './data/businessContextData';
import technologies from './data/technologies';
import carouselData from './data/solutionsCarouselData';
import ourSolutionsData from './data/ourSolutionsData';
import phonesData from './data/phonesData';
import solutionCardsData from './data/solutionsCardsData';
import aboutBlockData from './data/aboutBlockData.json';
import { ButtonType } from '../../constants/enums';
import IPageStatus from 'interfaces/IPageStatus';
import HunterCallToActionBg from '@/images/hunter/callToAction/img_call_to_action1@2x.webp';
import HunterCallToActionBgTablet from '@/images/hunter/callToAction/img_call_to_action_tablet1@2x.webp';
import HunterCallToActionBgMobile from '@/images/hunter/callToAction/img_call_to_action_mobile1@2x.webp';
import CaseStudiesBg from '@/images/hunter/caseStudies/img_bg_case_studies@2x.webp';
import CaseStudiesTabletBg from '@/images/hunter/caseStudies/img_bg_case_studies_tablet@2x.webp';
import CaseStudiesMobileBg from '@/images/hunter/caseStudies/img_bg_case_studies_mobile@2x.webp';
import RunRowBg from '@/images/hunter/runRows/img_runRow_bg.webp';
import RunRowBgTablet from '@/images/hunter/runRows/img_runRow_bg_tablet.webp';
import RunRowBgMobile from '@/images/hunter/runRows/img_runRow_bg_mobile.webp';
import RunningColsBgXXXL from '@/images/runningColsBlock/img_runningColsBgXXXL.webp';
import RunningColsBg from '@/images/runningColsBlock/img_runningColsBg.webp';
import RunningColsBgTablet from '@/images/runningColsBlock/img_runningColsBgTablet.webp';
import RunningColsBgMobile from '@/images/runningColsBlock/img_runningColsBgMobile.webp';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import DevelopmentServicesBlack from '../../components/DevelopmentServicesBlack/DevelopmentServicesBlack';
import developmentServicesData from './data/developmentServicesData';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';

function HunterPageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      callToAction: HunterCallToActionBg,
      caseStudies: CaseStudiesBg,
      runRow: RunRowBg,
      runningCols: RunningColsBg,
    };
    if (isXXXLDevice) {
      bg.runningCols = RunningColsBgXXXL;
    } else if (isMDDevice || isSMDevice) {
      bg.callToAction = HunterCallToActionBgTablet;
      bg.caseStudies = CaseStudiesTabletBg;
      bg.runRow = RunRowBgTablet;
      bg.runningCols = RunningColsBgTablet;
    } else if (isXSDevice) {
      bg.callToAction = HunterCallToActionBgMobile;
      bg.caseStudies = CaseStudiesMobileBg;
      bg.runRow = RunRowBgMobile;
      bg.runningCols = RunningColsBgMobile;
    }
    return bg;
  };

  return (
    <>
      <HunterMainSection />
      <AboutProjectSection
        content={aboutBlockData.content}
        title={aboutBlockData.title}
        subtitle={aboutBlockData.subtitle}
      />
      <HunterVideoSection />
      <BusinessContext
        upTitle={businessContextData.name}
        title={businessContextData.title}
        subTitle={businessContextData.subtitle}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <DevelopmentServicesBlack
        title={developmentServicesData.title}
        data={developmentServicesData.data}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          background={getBackground().callToAction}
          withButton
          title="Revolutionize your ecommerce experience with our tailored design services. Elevate engagement,
          drive conversions, and stand out in the digital marketplace&nbsp;today!"
          btnText="Contact us"
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:!h-[275px]
            after:bg-gradient-to-b after:from-[rgba(253,253,253,0)_5%] after:to-black after:!w-full
            after:!bg-[linear-gradient(183.69deg,_#000000_3.03%,_rgba(0,_0,_0,_0)_49.73%)]
            after:!absolute after:content-[""] after:!top-0 after:!left-0 screen-md:after:!h-[175px]`,
            title: '!max-w-[1078px] screen-lg:!max-w-[708px]',
          }}
        />
      )}
      <OurSolutionsWithCarouselAndCards
        firstText={ourSolutionsData.firstText}
        secondText={ourSolutionsData.secondText}
        carouselData={carouselData}
        cardsData={solutionCardsData}
        carouselBlockBackground={getBackground().runRow}
      />
      <RunningColsBlock
        bg={getBackground().runningCols}
        runningCols={phonesData}
        imagesQuality={90}
      />
      <CoreTechnology
        data={technologies}
        classes={{ contentContainer: '!pb-0' }}
      />
      <BusinessContext
        title={resultData.title}
        subTitle={resultData.subtitle}
        leftContent={resultData.firstText}
        rightContent={resultData.secondText}
        classes={{
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[47, 38, 33, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          withButton
          title={(
            <>
              94% of first impressions are
              {' '}
              <span className="inline_block">design-related.</span>
              {' '}
              Ready to make a&nbsp;lasting impression?
              {' '}
              <br />
              {' '}
              Let&apos;s craft your website&nbsp;today!
            </>
          )}
          btnText="Contact us"
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            title: `!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!font-size-[25px]
            screen-md:!line-height-[35px] screen-md:!max-w-none screen-md:!pb-[30px]`,
          }}
        />
      )}
    </>
  );
}

export default HunterPageView;
