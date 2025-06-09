import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import CaseStudiesBlockForCases from '../../components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import RunningColsBlock from '../../components/RunningColsBlock/RunningColsBlock';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import ImageSection from '../../components/ImageSection/ImageSection';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import NoisyNeighborRunningRowsBlock from './components/NoisyNeighborRunningRowsBlock';
import NoisyNeighborMainBlock from './components/NoisyNeighborMainBlock';
import resultsBlockData from './data/resultsBlockData';
import aboutBlockData from './data/aboutBlockData';
import ourSolutionsContentData from './data/ourSolutionsContentData';
import { businessContextDataFirst, businessContextDataSecond } from './data/businessContextData';
import phonesData from './data/phonesData';
import phonesImageSectionData from './data/childrenImageSection';
import technologyData from './data/technologyData.json';
import { ButtonType } from '../../constants/enums';
import IPageStatus from 'interfaces/IPageStatus';
import RunningBg from '@/images/noisyNeighborCasePage/runningRowsBlock/img_runningRowsBlock_bg.webp';
import RunningBgTablet from '@/images/noisyNeighborCasePage/runningRowsBlock/img_runningRowsBlock_bg_tablet.webp';
import RunningBgMobile from '@/images/noisyNeighborCasePage/runningRowsBlock/img_runningRowsBlock_bg_mobile.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';

function NoisyNeighborCasePageView({ saleUrl }: IPageStatus) {
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
      runningBg: RunningBg,
      results: ResultsBlockBg,
      first: CTAFirstBg,
    };
    if (isXXXLDevice) {
      bg.results = ResultsBlockXXXLBg;
      bg.first = CTAFirstXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      bg.runningBg = RunningBgTablet;
      bg.results = ResultsBlockTabletBg;
      bg.first = CTAFirstTabletBg;
    } else if (isXSDevice) {
      bg.runningBg = RunningBgMobile;
      bg.results = ResultsBlockMobileBg;
      bg.first = CTAFirstMobileBg;
    }
    return bg;
  };

  return (
    <>
      <NoisyNeighborMainBlock />
      <AboutProjectSection
        title={aboutBlockData.title}
        content={aboutBlockData.content}
      />
      <BusinessContext
        upTitle={businessContextDataFirst.name}
        title={businessContextDataFirst.title}
        leftContent={businessContextDataFirst.firstText}
        rightContent={businessContextDataFirst.secondText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
        }}
      />
      <ResultsBlock
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        background={getBackground().results}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title="Have a project in mind? Let's talk!"
          btnText="Get in touch with us"
          background={getBackground().first}
          withButton
          classes={{
            cta: '!p-[120px_0_120px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-[-20px] after:left-0 after:w-full
            after:h-[80px] after:bg-gradient-to-b from-[rgba(0,0,0,0)_10%] to-black`,
            image: '!object-center screen-lg:!object-top',
            title: `!max-w-[600px] screen-lg:!max-w-[515px] screen-lg:!pb-[40px]
            screen-md:!max-w-[320px] screen-md:!pb-[30px]`,
            btn: 'screen-md:!w-[330px]',
          }}
        />
      )}
      <NoisyNeighborRunningRowsBlock background={getBackground().runningBg} />
      <OurSolutions
        data={ourSolutionsContentData}
        desktopViewOnXL
        classes={{
          section: 'py-[80px] screen-lg:pt-[60px] screen-md:pt-[40px]',
        }}
      />
      <RunningColsBlock
        bg={getBackground().runningBg}
        runningCols={phonesData}
        imagesQuality={80}
        classes={{
          item: `
          w-[320px] h-[656px] border border-[1.5px] border-white/40 bg-white/20
          shadow-[0_20px_25px_0_rgba(28,29,33,0.3)] backdrop-blur-[2.5px] p-[10px]
          rounded-[56px] screen-lg:w-[240px] screen-lg:h-[492px] screen-md:rounded-[24.5px] screen-md:p-[4.5px]
          screen-md:w-[140px] screen-md:h-[286px]
          `,
          itemImage: '!relative object-contain rounded-[48px] screen-md:rounded-[21px]',
        }}
      />
      <CoreTechnology data={technologyData} />
      <ImageSection data={phonesImageSectionData} />
      <BusinessContextDiagonal
        upTitle={businessContextDataSecond.name}
        title={businessContextDataSecond.title}
        subTitle={businessContextDataSecond.subtitle}
        leftContent={businessContextDataSecond.firstText}
        subText={businessContextDataSecond.bottomText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          leftContent: 'min-lg:max-w-full min-xxxl:max-w-[1480px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <CaseStudiesBlockForCases
        saleUrl={saleUrl}
        sliderIds={[37, 33, 12, 1000]}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="What is your app idea?"
          btnText="Talk to our expert"
          withButton
          classes={{
            cta: '!pt-0',
            title: '!pb-[40px] screen-md:!pb-[30px]',
            btn: 'screen-md:!w-[330px]',
          }}
        />
      )}
    </>
  );
}

export default NoisyNeighborCasePageView;
