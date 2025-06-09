import { StaticImageData } from 'next/image';

import IPageStatus from '../../interfaces/IPageStatus';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import { useAppSelector } from '../../hook/reduxToolkit';
import BusinessContextDiagonal from '../../components/BusinessContextDiagonal/BusinessContextDiagonal';
import OurSolutions from '../../components/OurSolutions/OurSolutions';
import PhlexBusinessContext from './components/PhlexBusinessContext';
import MainSection from './components/MainSection';
import TestimonialTextSection from '../../components/TestimonialTextSection/TestimonialTextSection';
import RunningColsBlock from '../../components/RunningColsBlock/RunningColsBlock';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import BusinessContext from '../../components/BusinessContext/BusinessContext';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import KillerFeaturesBlock from '../ConvertCasePageView/components/KillerFeaturesBlock';
import coreTechnologyData from './data/coreTechnologyData.json';
import aboutBlockData from './data/aboutBlockData';
import testimonialData from './data/testimonialData';
import resultsBlockData from './data/resultsBlockData';
import resultsBlockDataFirst from './data/resultsBlockDataFirst';
import killerSliderData from './data/killerFeaturesBlockData';
import phonesData from './data/phonesData';
import ourSolutionsData from './data/ourSolutionsData';
import { businessContextDataFirst, businessContextDataSecond } from './data/businessContextData';
import resultsBlockWhite from '../../constants/tailwindStyle';
import { ButtonType } from '../../constants/enums';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import BusinessContextBlockBg from '@/images/clubhouse/businessContext/img_business_bg.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import MainBg from '@/images/phlexCase/main/img_main_bg.webp';
import MainBgTablet from '@/images/phlexCase/main/img_main_bg_tablet.webp';
import MainBgMobile from '@/images/phlexCase/main/img_main_bg_mobile.webp';
import MainBgXXXl from '@/images/phlexCase/main/img_main_bg_xxxl.webp';
import MainBgBigTablet from '@/images/phlexCase/main/img_main_bg_big_tablet.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import BusinessContextBlockBgTablet from '@/images/clubhouse/businessContext/img_business_bg_tablet.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import BusinessContextBlockBgMobile from '@/images/clubhouse/businessContext/img_business_bg_mobile.webp';
import RunningColsBgMobile from '@/images/runningColsBlock/img_runningColsBgMobile.webp';
import RunningColsBgTablet from '@/images/runningColsBlock/img_runningColsBgTablet.webp';
import RunningColsBg from '@/images/runningColsBlock/img_runningColsBg.webp';
import RunningColsBgXXXL from '@/images/runningColsBlock/img_runningColsBgXXXL.webp';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';

function PhlexCasePageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice,
      isLGDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      results: ResultsBlockBg,
      main: MainBg,
      businessContextBg: BusinessContextBlockBg,
      cta_first: CTAFirstBg,
      runningCols: RunningColsBg,
    };
    if (isXXXLDevice) {
      bg.results = ResultsBlockXXXLBg;
      bg.first = CTAFirstXXXLBg;
      bg.main = MainBgXXXl;
      bg.cta_first = CTAFirstXXXLBg;
      bg.runningCols = RunningColsBgXXXL;
    } else if (isLGDevice) {
      bg.main = MainBgBigTablet;
    } else if (isMDDevice) {
      bg.results = ResultsBlockTabletBg;
      bg.first = CTAFirstTabletBg;
      bg.main = MainBgTablet;
      bg.businessContextBg = BusinessContextBlockBgTablet;
      bg.runningCols = RunningColsBgTablet;
      bg.cta_first = CTAFirstTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.results = ResultsBlockMobileBg;
      bg.first = CTAFirstMobileBg;
      bg.main = MainBgMobile;
      bg.businessContextBg = BusinessContextBlockBgMobile;
      bg.cta_first = CTAFirstMobileBg;
      bg.runningCols = RunningColsBgMobile;
    }

    return bg;
  };

  return (
    <>
      <MainSection backgroundImg={getBackground().main} />
      <AboutProjectSection
        title={aboutBlockData.title}
        content={aboutBlockData.content}
      />
      <BusinessContext
        upTitle={businessContextDataFirst.upTitle}
        title={businessContextDataFirst.title}
        subTitle={businessContextDataFirst.subTitle}
        leftContent={businessContextDataFirst.firstText}
        rightContent={businessContextDataFirst.secondText}
        subText={businessContextDataFirst.subText}
      />
      <ResultsBlock
        title={resultsBlockDataFirst.title}
        content={resultsBlockDataFirst.content}
        background={getBackground().results}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title={(
            <>
              Have a project in mind?
              <br />
              Let&apos;s talk!
            </>
          )}
          btnText="Get in touch with us"
          background={getBackground().cta_first}
          withButton
        />
      )}
      <PhlexBusinessContext background={getBackground().businessContextBg} />
      <KillerFeaturesBlock
        titleSection="How Phlex works"
        description={(
          <>
            We built a swimming tracker app to monitor training, set goals, and stay highly motivated.
            Phlex provides a streamlined experience and a sophisticated, flexible monitoring progress
            view to capture results and assess swims easily.
          </>
        )}
        data={killerSliderData}
      />
      <BusinessContextDiagonal
        upTitle={businessContextDataSecond.upTitle}
        title={businessContextDataSecond.title}
        leftContent={businessContextDataSecond.firstText}
        rightContent={businessContextDataSecond.secondText}
        classes={{
          section: '!pb-[80px] screen-lg:!pb-[60px] screen-md:!pb-[40px]',
        }}
      />
      <RunningColsBlock
        runningCols={phonesData}
        bg={getBackground().runningCols}
        imagesQuality={100}
      />
      <OurSolutions
        data={ourSolutionsData}
        classes={{ section: 'pt-[80px] !pb-0 screen-lg:pt-[60px] screen-md:pt-[40px]' }}
        desktopViewOnXL
      />
      <CoreTechnology
        data={coreTechnologyData}
      />
      <TestimonialTextSection
        testimonialText={testimonialData.testimonialText}
        authorPosition={testimonialData.authorPosition}
        authorName={testimonialData.authorName}
      />
      <ResultsBlock
        name={resultsBlockData.name}
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        classes={resultsBlockWhite}
      />
      <CaseStudiesBlockForCases
        sliderIds={[40, 41, 70, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              What is your app idea?
            </>
          )}
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0',
          }}
        />
      )}
    </>
  );
}

export default PhlexCasePageView;
