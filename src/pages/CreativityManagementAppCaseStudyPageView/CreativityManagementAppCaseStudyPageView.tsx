import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import {
  ButtonType,
} from '../../constants/enums';
import howOnixDevelopedData from './data/howOnixDevelopedData.json';
import ButtonTypes from '../../constants/ButtonTypes';
import IPageStatus from 'interfaces/IPageStatus';
import businessContextData from './data/businessContextData.json';
import resultsBlockData from './data/resultsBlockData';
import CardBlockList from './components/CardBlockList';
import businessContextDataSecond from './data/businessContextDataSecond.json';
import businessContextDataThird from './data/businessContextDataThird.json';
import OurSolutionsAccordion from 'components/OurSolutionsAccordion/OurSolutionsAccordion';
import solutionsAccordionData from './data/solutionsAccordionData';
import challengesInfoData from './data/challengesInfoData.json';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import coreTechnologyData from './data/coreTechnologyData.json';
import TestimonialTextSection from 'components/TestimonialTextSection/TestimonialTextSection';
import testimonialData from './data/testimonialData';
import RunningColsBlock from 'components/RunningColsBlock/RunningColsBlock';
import phonesData from './data/phonesData';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import ScrollTextAnimation from 'components/ScrollTextAnimation/ScrollTextAnimation';
import scrollTextAnimationData from './data/scrollTextAnimationData';
import MainBg from '../../assets/images/creativityManagementAppCaseStudy/img_mainBg@2x.webp';
import MainXXXLBg from '../../assets/images/creativityManagementAppCaseStudy/img_mainXXXLBg@2x.webp';
import MainTabletBg from '../../assets/images/creativityManagementAppCaseStudy/img_mainTabletBg@2x.webp';
import MainMobileBg from '../../assets/images/creativityManagementAppCaseStudy/img_mainMobileBg@2x.webp';
import UsabilityTestingMainBlock from 'pages/UsabilityTestingPageView/components/UsabilityTestingMainBlock';
import resultsBlockWhite, { aboutProjectSectionWhite } from 'constants/tailwindStyle';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';

import RunningColsBgXXXL from '@/images/runningColsBlock/img_runningColsBgXXXL.webp';
import RunningColsBg from '@/images/runningColsBlock/img_runningColsBg.webp';
import RunningColsBgTablet from '@/images/runningColsBlock/img_runningColsBgTablet.webp';
import RunningColsBgMobile from '@/images/runningColsBlock/img_runningColsBgMobile.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaWhiteBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaWhiteTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaWhiteMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaWhiteXXXLBg@2x.webp';

function CreativityManagementAppCaseStudyPageView({ saleUrl }: IPageStatus) {
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
      main: MainBg,
      cta: CTAFirstBg,
      results: ResultsBlockBg,
      runningCols: RunningColsBg,
    };
    if (isXXXLDevice) {
      bg.main = MainXXXLBg;
      bg.results = ResultsBlockXXXLBg;
      bg.cta = CTAFirstXXXLBg;
      bg.runningCols = RunningColsBgXXXL;
    } else if (isMDDevice || isSMDevice) {
      bg.main = MainTabletBg;
      bg.cta = CTAFirstTabletBg;
      bg.results = ResultsBlockTabletBg;
      bg.runningCols = RunningColsBgTablet;
    } else if (isXSDevice) {
      bg.main = MainMobileBg;
      bg.cta = CTAFirstMobileBg;
      bg.results = ResultsBlockMobileBg;
      bg.runningCols = RunningColsBgMobile;
    }
    return bg;
  };

  return (
    <>
      <UsabilityTestingMainBlock
        title="LIVBOX"
        text="A smart, intuitive iOS app development for creative individuals"
        btnText="Talk with an expert"
        background={getBackground().main}
        saleUrl={saleUrl}
        classes={{
          container: '!text-white max-1390:!h-screen screen-md:!min-h-[570px]',
          background: '!absolute !bottom-0 !right-0 !h-full !w-full',
          backgroundImage: `!w-full !h-full !object-cover !object-center max-1390:!object-left
          screen-xl:![object-position:_-50px] screen-lg:!object-center screen-md:!object-center`,
          contentContainer: 'max-1390:!flex max-1390:!pt-0 screen-lg:!block screen-lg:!pt-[146px]',
          content: 'max-1390:!pl-[70px] screen-lg:!pl-[30px] screen-md:!pl-[15px]',
          logo: '!pb-[40px] screen-lg:!pb-[30px] screen-md:!pb-[15px]',
          title: `!max-w-[520px] !pb-[40px] max-1390:!text-[50px]
          max-1390:!leading-[64px] screen-lg:!text-[40px] screen-lg:!leading-[56px]
          screen-lg:!max-w-[unset] screen-lg:!pb-[30px] screen-md:!text-[25px]
          screen-md:!leading-[35px] screen-md:!pb-[15px]`,
          text: '!max-w-[520px] !pb-[40px] screen-lg:!pb-[30px] screen-md:!pb-[15px] screen-lg:!max-w-[430px]',
          btn: '!max-w-[420px] screen-lg:!max-w-[400px] screen-md:!max-w-[330px]',
        }}
      />
      <AboutProjectSection
        title={howOnixDevelopedData.blockTitle}
        content={howOnixDevelopedData.data}
        variant={aboutProjectSectionWhite}
      />
      <BusinessContextDiagonal
        upTitle={businessContextData.upTitle}
        title={businessContextData.title}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
        blackTheme
      />
      <ResultsBlock
        name={resultsBlockData.name}
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        background={getBackground().results}
        classes={resultsBlockWhite}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Have a project in mind?"
          btnText="Talk to our expert"
          buttonType={ButtonTypes.PRIMARY}
          background={getBackground().cta}
          withButton
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[120px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)_15%] to-white`,
            title: '!text-black !max-w-[1020px] !pb-[40px] screen-md:!pb-[30px]',
          }}
        />
      )}
      <CardBlockList />
      <BusinessContextDiagonal
        upTitle={businessContextDataSecond.upTitle}
        title={businessContextDataSecond.title}
        classes={{
          section: 'pb-[80px] screen-lg:pb-[60px] screen-md:pb-[40px]',
          title: '!mb-0',
        }}
      />
      <OurSolutionsAccordion
        accordionData={solutionsAccordionData}
        list={challengesInfoData}
        stylesVariant="!bg-white !p-[0_70px_80px] min-xxxl:!p-[0_70px_80px]
        screen-lg:!p-[0_0_80px] screen-md:!p-[0_0_60px]"
        iconBlack
      />
      <RunningColsBlock
        bg={getBackground().runningCols}
        runningCols={phonesData}
        imagesQuality={70}
      />
      <CoreTechnology
        data={coreTechnologyData}
        blackTheme
      />
      <ScrollTextAnimation
        textList={scrollTextAnimationData.textList}
        scaleIndex={1.7}
        scaleIndexMobile={1.33}
      />
      <TestimonialTextSection
        testimonialText={testimonialData.testimonialText}
        authorPosition={testimonialData.authorPosition}
        authorName={testimonialData.authorName}
      />
      <BusinessContext
        upTitle={businessContextDataThird.upTitle}
        title={businessContextDataThird.title}
        subTitle={businessContextDataThird.subTitle}
        leftContent={businessContextDataThird.firstText}
        rightContent={businessContextDataThird.secondText}
        classes={{
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[21, 14, 57, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE3}
          title="Have a project in mind? Let’s start tight-knit cooperation!"
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            background: 'after:hidden',
            title: `!max-w-[880px] screen-lg:!max-w-[708px] screen-md:!text-[25px]
            screen-md:!leading-[35px] screen-md:max-w-full screen-md:!pb-[30px]`,
          }}
        />
      )}
    </>
  );
}

export default CreativityManagementAppCaseStudyPageView;
