import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import AnimatedConceptAccordion from './components/AnimatedConceptAccordion';
import SpaceNewsMainBlok from 'pages/SpaceNewsPortalDesignCaseStudyView/components/SpaceNewsMainBlock';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import animatedHowOnixDeveloped from './data/animatedHowOnixDeveloped.json';
import animatedBusinessContextData from './data/animatedBusinessContextData.json';
import animatedTechnologyData from './data/animatedTechnologyData.json';
import animatedResultsBlockData from './data/animatedResultsBlockData';
import animatedBusinessContextDataSecond from './data/animatedBusinessContextDataSecond';
import animatedMainBlockData from './data/animatedMainBlockData';
import { ButtonType, SpaceNewsMainBlokVariant } from '../../constants/enums';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import IPageStatus from 'interfaces/IPageStatus';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';

function AnimatedConceptCaseStudyPageView({ saleUrl }: IPageStatus) {
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
      resultsBlock: ResultsBlockBg,
      ctaFirst: CTAFirstBg,
    };
    if (isXXXLDevice) {
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.ctaFirst = CTAFirstXXXLBg;
    } else if (isMDDevice) {
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.ctaFirst = CTAFirstTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.ctaFirst = CTAFirstMobileBg;
    }
    return bg;
  };

  return (
    <>
      <SpaceNewsMainBlok
        title={animatedMainBlockData.title}
        text={animatedMainBlockData.text}
        video={animatedMainBlockData.video}
        videoBaner={animatedMainBlockData.videoBaner}
        variant={SpaceNewsMainBlokVariant.ANIMATED_CONCEPT}
      />
      <AboutProjectSection
        title={animatedHowOnixDeveloped.blockTitle}
        subtitle={animatedHowOnixDeveloped.blockText}
        content={animatedHowOnixDeveloped.data}
      />
      <BusinessContext
        upTitle={animatedBusinessContextData.upTitle}
        title={animatedBusinessContextData.title}
        leftContent={animatedBusinessContextData.firstText}
        rightContent={animatedBusinessContextData.secondText}
        subText={animatedBusinessContextData.subText}
        classes={{ subText: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]' }}
      />
      <ResultsBlock
        title={animatedResultsBlockData.title}
        content={animatedResultsBlockData.content}
        background={getBackground().resultsBlock}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title="Ready to transform your user engagement by leveraging best-in-class motion design solutions?"
          btnText="Contact us"
          withButton
          background={getBackground().ctaFirst}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full
            after:h-[50px] after:bg-gradient-to-t from-transparent to-black`,
            title: '!pb-[40px] !max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!pb-[30px]',
          }}
        />
      )}
      <AnimatedConceptAccordion />
      <CoreTechnology
        data={animatedTechnologyData}
        classes={{
          contentContainer: '!pt-[40px] !pb-0 screen-lg:!pt-[80px]',
        }}
      />
      <BusinessContext
        title={animatedBusinessContextDataSecond.title}
        subTitle={animatedBusinessContextDataSecond.subTitle}
        leftContent={animatedBusinessContextDataSecond.firstText}
        rightContent={animatedBusinessContextDataSecond.secondText}
        subText={animatedBusinessContextDataSecond.subText}
        classes={{
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
          subText: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[56, 51, 69, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Dynamic designs increase user engagement up to 300%: elevate your brand with our expert
             motion design services."
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0',
            title: '!max-w-[1080px] screen-lg:!max-w-[708px]',
          }}
        />
      )}
    </>
  );
}

export default AnimatedConceptCaseStudyPageView;
