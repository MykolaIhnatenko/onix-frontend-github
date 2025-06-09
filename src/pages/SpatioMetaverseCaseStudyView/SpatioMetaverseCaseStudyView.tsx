import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import ValueProposition from './components/ValueProposition';
import CaseStudiesBlockForCases from '../../components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import SpaceNewsMainBlok from '../SpaceNewsPortalDesignCaseStudyView/components/SpaceNewsMainBlock';
import SpatioRunningRowsBlock from './components/SpatioRunningRowsBlock';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import {
  businessContextFirstData,
  businessContextSecondData,
  businessContextThirdData,
} from './data/businessContextData';
import aboutBlockData from './data/aboutBlockData';
import resultsBlockDataFirst from './data/resultsBlockData';
import mainBlockData from './data/mainBlockData';
import servicesData from './data/servicesData';
import technologyData from './data/technologyData.json';
import { SpaceNewsMainBlokVariant } from '../../constants/enums';
import ButtonTypes from '../../constants/ButtonTypes';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTA_Bg from '@/images/spatio/cta/img_cta_bg.webp';
import CTA_BgTablet from '@/images/spatio/cta/img_cta_bg_tablet.webp';
import CTA_BgMobile from '@/images/spatio/cta/img_cta_bg_mobile.webp';
import RunningRowsBg from '@/images/spatio/runningRowsBlock/img_bg.webp';
import RunningRowsBgTablet from '@/images/spatio/runningRowsBlock/img_bg_tablet.webp';
import RunningRowsBgMobile from '@/images/spatio/runningRowsBlock/img_bg_mobile.webp';
import MainBg from '@/images/spatio/main/img_main_bg.webp';
import MainBgTablet from '@/images/spatio/main/img_main_bg_tablet.webp';
import MainBgMobile from '@/images/spatio/main/img_main_bg_mobile.webp';
import OurExpertiseSection from '../../components/OurExpertiseSection/OurExpertiseSection';
import ourExpertiseSectionData from './data/ourExpertiseSectionData';
import IPageStatus from '../../interfaces/IPageStatus';
import TestimonialTextSection from 'components/TestimonialTextSection/TestimonialTextSection';
import testimonialData from './data/testimonialData';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';
import BusinessContext from 'components/BusinessContext/BusinessContext';

function SpatioMetaverseCaseStudyView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice, isSMDevice, isXSDevice, isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      results: ResultsBlockBg,
      cta: CTA_Bg,
      runningRows: RunningRowsBg,
      mainBg: MainBg,
    };
    if (isXXXLDevice) {
      bg.results = ResultsBlockXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      bg.results = ResultsBlockTabletBg;
      bg.cta = CTA_BgTablet;
      bg.runningRows = RunningRowsBgTablet;
      bg.mainBg = MainBgTablet;
    } else if (isXSDevice) {
      bg.results = ResultsBlockMobileBg;
      bg.cta = CTA_BgMobile;
      bg.runningRows = RunningRowsBgMobile;
      bg.mainBg = MainBgMobile;
    }
    return bg;
  };

  return (
    <>
      <SpaceNewsMainBlok
        title={mainBlockData.title}
        text={mainBlockData.text}
        video={mainBlockData.video}
        background={getBackground().mainBg}
        videoBaner={mainBlockData.videoBaner}
        variant={SpaceNewsMainBlokVariant.SPATIO}
      />
      <AboutProjectSection title={aboutBlockData.title} content={aboutBlockData.content} />
      <BusinessContext
        upTitle={businessContextFirstData.name}
        title={businessContextFirstData.title}
        leftContent={businessContextFirstData.firstText}
        rightContent={businessContextFirstData.secondText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
        }}
      />
      <ResultsBlock
        title={resultsBlockDataFirst.title}
        content={resultsBlockDataFirst.content}
        background={getBackground().results}
      />
      <DevelopmentServicesWhite
        title={servicesData.title}
        description={servicesData.desc}
        data={servicesData.data}
        classes={{
          titleBlock: {
            desc: '!max-w-[1480px] screen-xxxl:!max-w-[1080px]',
          },
          item: {
            containerItemRight: '!flex !flex-col !justify-end',
            containerItemLeft: '!justify-end !flex-col',
            number: `!text-[96px] !leading-[132px] !font-normal !mr-0 !w-full 
            screen-lg:!text-[50px] screen-lg:!leading-[64px] screen-lg:!font-medium screen-lg:!mb-[10px] 
            screen-md:!text-[40px] screen-md:!leading-[50px] screen-md:!mb-[5px]`,
            title: '!text-[30px] !leading-[40px] screen-md:!text-[20px] screen-md:!leading-[28px]',
          },
        }}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title="Have a project in&nbsp;mind?"
          btnText="Talk to our experts"
          background={getBackground().cta}
          buttonType={ButtonTypes.PRIMARY}
          withButton
          classes={{
            title: '!text-black',
          }}
        />
      )}
      <BusinessContextDiagonal
        title={businessContextThirdData.title}
        leftContent={businessContextThirdData.firstText}
        rightContent={businessContextThirdData.secondText}
      />
      <OurExpertiseSection
        title={ourExpertiseSectionData.title}
        data={ourExpertiseSectionData.data}
        classes={{
          section: '!py-0',
          container: '!pt-0 screen-lg:pb-[40px]',
          title: 'pb-[80px] max-w-[1080px] min-lg:text-[40px]/[56px] screen-lg:!text-[36px]/[38px] '
            + 'screen-lg:pb-[20px] screen-md:!text-[20px]/[28px] screen-md:pb-[0px]',
          textContainer: 'pb-[80px] screen-lg:pb-0',
          accordionContainer: '!pb-0 screen-lg:!pb-[20px] screen-md:!p-0',
        }}
      />
      <SpatioRunningRowsBlock background={getBackground().runningRows} />
      <ValueProposition />
      <CoreTechnology
        data={technologyData}
        classes={{ contentContainer: '!pt-0' }}
      />
      <TestimonialTextSection
        testimonialText={testimonialData.testimonialText}
        authorPosition={testimonialData.authorPosition}
        authorName={testimonialData.authorName}
      />
      <BusinessContext
        upTitle={businessContextSecondData.name}
        title={businessContextSecondData.title}
        subTitle={businessContextSecondData.subtitle}
        leftContent={businessContextSecondData.firstText}
        rightContent={businessContextSecondData.secondText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[6, 49, 53, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={<>Curious about the&nbsp;possibilities of the&nbsp;metaverse for your&nbsp;business?</>}
          btnText="Talk to our expert"
          withButton
          classes={{
            cta: '!pt-0',
            title: '!max-w-[1080px]',
          }}
        />
      )}
    </>
  );
}

export default SpatioMetaverseCaseStudyView;
