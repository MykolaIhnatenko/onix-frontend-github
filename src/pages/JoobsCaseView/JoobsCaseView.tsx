import { useAppSelector } from 'hook/reduxToolkit';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import ResultsBlock from 'components/ResultsBlock/ResultsBlock';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import RunningRowsBlock from 'components/RunningRowsBlock/RunningRowsBlock';
import IPageStatus from 'interfaces/IPageStatus';
import howOnixDevelopedData from './data/howOnixDevelopedData.json';
import resultsBlockData from './data/resultsBlockData';
import businessContextBlockData, { businessContextBlockDataSecond } from './data/businessContextBlockData';
import ourSolutionsData from './data/ourSolutionsData';
import coreTechnologyData from './data/coreTechnologyData.json';
import runningRowsBlockData from './data/runningRowsBlockData';
import resultsBlockSecondData from './data/resultsBlockSecondData';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import ScrollTextAnimation from 'components/ScrollTextAnimation/ScrollTextAnimation';
import ImageBlock from './components/ImageBlock';
import MainBlock from './components/MainBlock';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';

import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import RunningRowsBlockBg from '@/images/healthcareProviderPortalCaseStudy/runningRowsBlock/img_runningRowsBlockBg@2x.webp';
import RunningRowsBlockBgTablet from '@/images/healthcareProviderPortalCaseStudy/runningRowsBlock/img_runningRowsBlockBgTablet@2x.webp';
import RunningRowsBlockBgMobile from '@/images/healthcareProviderPortalCaseStudy/runningRowsBlock/img_runningRowsBlockBgMobile@2x.webp';
import ResultBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteBg@2x.webp';
import ResultBgTablet from '@/images/ResultsBlockBg/img_resultsBlockWhiteTabletBg@2x.webp';
import ResultBgMobile from '@/images/ResultsBlockBg/img_resultsBlockWhiteMobileBg@2x.webp';
import ResultXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteXXXLBg@2x.webp';
import ImageBlockBg from '@/images/joobs/imageBlock/img_imageBlock.webp';
import ImageBlockBgTablet from '@/images/joobs/imageBlock/img_imageBlockTablet.webp';
import ImageBlockBgMobile from '@/images/joobs/imageBlock/img_imageBlockMobile.webp';
import MacImg from '@/images/joobs/mainBlock/img_mac.webp';
import MainBg from '@/images/joobs/mainBlock/img_mainBg.webp';
import MainBgTablet from '@/images/joobs/mainBlock/img_mainBgTablet.webp';
import MainBgMobile from '@/images/joobs/mainBlock/img_mainBgMobile.webp';

function JoobsCaseView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      mainBg: MainBg,
      resultsBlock: ResultsBlockBg,
      ctaFirst: CTAFirstBg,
      runningRowsBg: RunningRowsBlockBg,
      resultsBlockSecond: ResultBg,
      imageBlock: ImageBlockBg,
    };

    if (isXXXLDevice) {
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.ctaFirst = CTAFirstXXXLBg;
      bg.resultsBlockSecond = ResultXXXLBg;
    } else if (isMDDevice) {
      bg.mainBg = MainBgTablet;
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.ctaFirst = CTAFirstTabletBg;
      bg.runningRowsBg = RunningRowsBlockBgTablet;
      bg.resultsBlockSecond = ResultBgTablet;
      bg.imageBlock = ImageBlockBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.mainBg = MainBgMobile;
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.ctaFirst = CTAFirstMobileBg;
      bg.runningRowsBg = RunningRowsBlockBgMobile;
      bg.resultsBlockSecond = ResultBgMobile;
      bg.imageBlock = ImageBlockBgMobile;
    }
    return bg;
  };

  return (
    <>
      <MainBlock background={getBackground().mainBg} macImage={MacImg} />
      <AboutProjectSection
        title={howOnixDevelopedData.blockTitle}
        content={howOnixDevelopedData.data}
      />
      <BusinessContext
        title={businessContextBlockData.title}
        leftContent={businessContextBlockData.firstText}
        rightContent={businessContextBlockData.secondText}
      />
      <ResultsBlock
        name={resultsBlockData.name}
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        background={getBackground().resultsBlock}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title="Want to update your platform for a better user&nbsp;experience?"
          btnText="Talk to our expert"
          withButton
          background={getBackground().ctaFirst}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[120px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black screen-lg:after:h-[80px]`,
            image: '!object-bottom',
            title: '!pb-[40px] !max-w-[780px] screen-lg:!max-w-[620px] screen-md:!pb-[30px] screen-md:max-w-[380px]',
          }}
        />
      )}
      <BusinessContextDiagonal
        title={businessContextBlockDataSecond.title}
        leftContent={businessContextBlockDataSecond.firstText}
        rightContent={businessContextBlockDataSecond.secondText}
        classes={{ section: 'pb-[80px] screen-lg:pb-[60px] screen-md:pb-[40px]' }}
      />
      <RunningRowsBlock background={getBackground().runningRowsBg} runningRows={runningRowsBlockData} />
      <OurSolutions
        data={ourSolutionsData}
        desktopViewOnXL
        classes={{ section: `py-[80px] screen-lg:pt-[60px] screen-md:pt-[40px] ${saleUrl ? '!pt-0' : ''}` }}
      />
      <ImageBlock image={getBackground().imageBlock} />
      <CoreTechnology
        data={coreTechnologyData}
      />
      <ScrollTextAnimation
        textList={['Innovative', 'User-centric', 'Efficient', 'Collaborative']}
        themeBlack
        scaleIndex={1.7}
        scaleIndexMobile={1.4}
      />
      <ResultsBlock
        name={resultsBlockSecondData.name}
        title={resultsBlockSecondData.title}
        content={resultsBlockSecondData.content}
        background={getBackground().resultsBlockSecond}
        classes={{
          resultBlock: '!bg-white !text-black',
          line: '!bg-[#CECECE]',
          lineActive: '!bg-black',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[67, 68, 47, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          withButton
          title="What is your app idea?"
          btnText="Contact us"
          classes={{
            cta: '!pt-0',
            title: `!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!text-[25px]
            screen-md:!leading-[35px] screen-md:!pb-[30px] screen-md:!max-w-[520px]`,
          }}
        />
      )}
    </>
  );
}

export default JoobsCaseView;
