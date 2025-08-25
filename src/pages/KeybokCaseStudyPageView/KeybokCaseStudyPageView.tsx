import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import KeybokBigCardBlock from './components/KeybokBigCardBlock';
import KeyBokAccordionBlock from './components/KeyBokAccordionBlock';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import RunningColsBlock from '../../components/RunningColsBlock/RunningColsBlock';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import KeyBokMainBlock from './components/KeyBokMainBlock';
import {
  businessContextDataFirst,
  businessContextDataSecond,
  businessContextDataThird,
} from './data/designSolutionsData';
import { ButtonType } from '../../constants/enums';
import IPageStatus from '../../interfaces/IPageStatus';
import ButtonTypes from '../../constants/ButtonTypes';
import technologyData from './data/technologyData.json';
import resultsBlockWhite from 'constants/tailwindStyle';
import { resultsBlockData, resultsBlockSecondData } from './data/resultsBlockData';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import ourSolutionsData from './data/ourSolutionsData';
import phonesData from './data/keyBokPhonesData';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';

import ServicesBg from '@/images/keyBokPage/servicesBlock/img_services_bg.webp';
import ServicesBgTablet from '@/images/keyBokPage/servicesBlock/img_services_bg_tablet.webp';
import ServicesBgMobile from '@/images/keyBokPage/servicesBlock/img_services_bg_mobile.webp';
import CallToBgSecond from '@/images/keyBokPage/callToAction/img_call_to_bg_second.webp';
import CallToBgTabletSecond from '@/images/keyBokPage/callToAction/img_call_to_bg_tablet_second.webp';
import CallToBgMobileSecond from '@/images/keyBokPage/callToAction/img_call_to_bg_mobile_second.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaWhiteBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaWhiteTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaWhiteMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaWhiteXXXLBg@2x.webp';
import RunningColsBgXXXL from '@/images/runningColsBlock/img_runningColsBgXXXL.webp';
import RunningColsBg from '@/images/runningColsBlock/img_runningColsBg.webp';
import RunningColsBgTablet from '@/images/runningColsBlock/img_runningColsBgTablet.webp';
import RunningColsBgMobile from '@/images/runningColsBlock/img_runningColsBgMobile.webp';
import technologyClasses from './sass/technology.module.scss';

function KeybokCaseStudyPageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      first: ResultsBlockBg,
      second: CTAFirstBg,
      services: ServicesBg,
      callSecond: CallToBgSecond,
      runningCols: RunningColsBg,
    };
    if (isXXXLDevice) {
      bg.first = ResultsBlockXXXLBg;
      bg.second = CTAFirstXXXLBg;
      bg.runningCols = RunningColsBgXXXL;
    } else if (isMDDevice || isSMDevice) {
      bg.first = ResultsBlockTabletBg;
      bg.second = CTAFirstTabletBg;
      bg.services = ServicesBgTablet;
      bg.callSecond = CallToBgTabletSecond;
      bg.runningCols = RunningColsBgTablet;
    } else if (isXSDevice) {
      bg.first = ResultsBlockMobileBg;
      bg.Second = CTAFirstMobileBg;
      bg.services = ServicesBgMobile;
      bg.callSecond = CallToBgMobileSecond;
      bg.runningCols = RunningColsBgMobile;
    }
    return bg;
  };
  return (
    <>
      <KeyBokMainBlock />
      <BusinessContextDiagonal
        title={businessContextDataFirst.title}
        blackTheme
        classes={{ title: '!mb-0' }}
      />
      <BusinessContext
        upTitle={businessContextDataSecond.name}
        title={businessContextDataSecond.title}
        subTitle={businessContextDataSecond.subtitle}
        leftContent={businessContextDataSecond.firstText}
        rightContent={businessContextDataSecond.secondText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <KeybokBigCardBlock />
      <ResultsBlock
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        background={getBackground().first}
        classes={resultsBlockWhite}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title={<>Have a project in mind? Let&apos;s talk!</>}
          btnText="Get in touch with us"
          background={getBackground().second}
          buttonType={ButtonTypes.PRIMARY}
          withButton
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            title: `!text-black !pb-[40px] !max-w-[600px] screen-lg:!max-w-[427px]
            screen-md:!max-w-[320px] screen-md:!pb-[30px]`,
          }}
        />
      )}
      <KeyBokAccordionBlock />
      <OurSolutions
        upTitle={ourSolutionsData.upTitle}
        title={ourSolutionsData.title}
        firstText={ourSolutionsData.firstText}
        data={ourSolutionsData.data}
        desktopViewOnXL
        classes={{
          firstText: '!max-w-[1080px] min-xxxl:!max-w-[1480px]',
        }}
      />
      <BusinessContext
        upTitle={businessContextDataThird.name}
        title={businessContextDataThird.title}
        subTitle={businessContextDataThird.subtitle}
        leftContent={businessContextDataThird.firstText}
        rightContent={businessContextDataThird.secondText}
        subText={businessContextDataThird.bottomText}
        blackTheme
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <RunningColsBlock
        runningCols={phonesData}
        bg={getBackground().runningCols}
        imagesQuality={82}
      />
      <CoreTechnology data={technologyData} classes={technologyClasses} />
      <ResultsBlock
        name={resultsBlockSecondData.name}
        title={resultsBlockSecondData.title}
        content={resultsBlockSecondData.content}
        background={getBackground().first}
        classes={resultsBlockWhite}
      />
      <CaseStudiesBlockForCases
        sliderIds={[20, 22, 1, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="What is your app idea?"
          btnText="contact to our experts"
          withButton
          classes={{
            cta: '!pt-0',
            title: '!pb-[40px] screen-md:!pb-[30px]',
            btn: 'screen-md:!max-w-[330px]',
          }}
        />
      )}
    </>
  );
}

export default KeybokCaseStudyPageView;
