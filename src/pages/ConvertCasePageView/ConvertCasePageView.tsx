import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import ConvertIdeaBlock from './components/ConvertIdeaBlock';
import KillerFeaturesBlock from './components/KillerFeaturesBlock';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import ConvertTechnology from './components/ConvertTechnology';
import ConvertMainBlock from './components/ConvertMainBlock';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import aboutBlockData from './data/aboutBlockData.json';
import resultsBlockDataSecond from './data/resultsBlockDataSecond';
import businessContextData from './data/businessContextData';
import resultsBlockData from './data/resultsBlockData';
import technologyData from './data/technologyData.json';
import killerSliderData from './data/killerFeaturesBlockData';
import convertPhonesData from './data/convertPhonesData';
import designSolutionsData from './data/designSolutionsData';
import { ButtonType } from '../../constants/enums';
import IPageStatus from 'interfaces/IPageStatus';
import RunningColsBlock from 'components/RunningColsBlock/RunningColsBlock';
import ResultBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteBg@2x.webp';
import ResultBgTablet from '@/images/ResultsBlockBg/img_resultsBlockWhiteTabletBg@2x.webp';
import ResultBgMobile from '@/images/ResultsBlockBg/img_resultsBlockWhiteMobileBg@2x.webp';
import ResultXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteXXXLBg@2x.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import resultsBlockWhite from 'constants/tailwindStyle';
import RunningColsBgXXXL from '@/images/runningColsBlock/img_runningColsBgXXXL.webp';
import RunningColsBg from '@/images/runningColsBlock/img_runningColsBg.webp';
import RunningColsBgTablet from '@/images/runningColsBlock/img_runningColsBgTablet.webp';
import RunningColsBgMobile from '@/images/runningColsBlock/img_runningColsBgMobile.webp';
import BusinessContext from 'components/BusinessContext/BusinessContext';

function ConvertCasePageView({ saleUrl }: IPageStatus) {
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
      second: ResultsBlockBg,
      third: CTAFirstBg,
      result: ResultBg,
      runningCols: RunningColsBg,
    };
    if (isXXXLDevice) {
      bg.second = ResultsBlockXXXLBg;
      bg.third = CTAFirstXXXLBg;
      bg.result = ResultXXXLBg;
      bg.runningCols = RunningColsBgXXXL;
    } else if (isMDDevice || isSMDevice) {
      bg.second = ResultsBlockTabletBg;
      bg.third = CTAFirstTabletBg;
      bg.result = ResultBgTablet;
      bg.runningCols = RunningColsBgTablet;
    } else if (isXSDevice) {
      bg.second = ResultsBlockMobileBg;
      bg.third = CTAFirstMobileBg;
      bg.result = ResultBgMobile;
      bg.runningCols = RunningColsBgMobile;
    }
    return bg;
  };

  return (
    <>
      <ConvertMainBlock />
      <AboutProjectSection content={aboutBlockData.content} title={aboutBlockData.title} />
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
      <ResultsBlock
        name={resultsBlockDataSecond.name}
        title={resultsBlockDataSecond.title}
        content={resultsBlockDataSecond.content}
        background={getBackground().second}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title="Have a project in mind? Let's talk!"
          btnText="Get in touch with us"
          background={getBackground().third}
          withButton
          classes={{
            cta: '!p-[120px_0_120px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[70px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)_15%] to-black`,
            title: `!max-w-[615px] screen-lg:!max-w-[515px] screen-lg:!pb-[40px] screen-md:!max-w-[320px]
            screen-md:!pb-[30px]`,
            btn: 'screen-md:w-[330px]',
          }}
        />
      )}
      <ConvertIdeaBlock />
      <KillerFeaturesBlock
        titleSection={(
          <>
            {' '}
            The app’s
            <br />
            {' '}
            &apos;killer&apos; features
          </>
)}
        description={(
          <>
            Our MVP is a demo for investors that uses dummy data without real connections
            to banking and payment systems. This is solely for demonstration purposes.
          </>
        )}
        data={killerSliderData}
      />
      <BusinessContext
        upTitle={designSolutionsData.name}
        title={designSolutionsData.title}
        subTitle={designSolutionsData.subtitle}
        leftContent={designSolutionsData.firstText}
        rightContent={designSolutionsData.secondText}
        subText={designSolutionsData.bottomText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <RunningColsBlock
        bg={getBackground().runningCols}
        runningCols={convertPhonesData}
      />
      <ConvertTechnology
        data={technologyData}
      />
      <ResultsBlock
        background={getBackground().result}
        name={resultsBlockData.name}
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        classes={resultsBlockWhite}
      />
      <CaseStudiesBlockForCases
        sliderIds={[22, 1, 43, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title={(
            <>
              Have a project in mind?
              <br />
              {' '}
              Let’s start tight&#8209;knit&nbsp;cooperation!
            </>
          )}
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0',
            image: '!object-bottom',
            title: '!max-w-[1078px] !pb-[40px] screen-lg:!max-w-[643px] screen-lg:!pb-[40px] screen-md:!p-[0_5px_30px]',
            btn: '!text-[18px] screen-md:!max-w-[320px]',
          }}
        />
      )}
    </>
  );
}

export default ConvertCasePageView;
