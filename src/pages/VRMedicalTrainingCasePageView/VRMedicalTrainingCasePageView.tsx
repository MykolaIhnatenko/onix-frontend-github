import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import VRMedicalMainBlock from './components/VRMedicalMainBlock';
import VRMedicalSlider from './components/VRMedicalSlider';
import ChoicesBlock from './components/ChoicesBlock';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import aboutBlockData from './data/aboutBlockData.json';
import coreTechnologyData from './data/technologyData.json';
import businessContextData, { businessContextDataSecond } from './data/businessContextData';
import resultsBlockData, { resultsBlockDataSecond } from './data/resultsBlockData';
import servicesData from './data/developmentServicesData';
import ourSolutionsData from './data/ourSolutionsData';
import { ButtonType } from '../../constants/enums';
import IPageStatus from '../../interfaces/IPageStatus';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import resultsBlockWhite from 'constants/tailwindStyle';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import OurSolutions from 'components/OurSolutions/OurSolutions';
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

function VrMedicalTrainingCasePageView({ saleUrl }: IPageStatus) {
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
      ctaLast: CTAFirstBg,
      results: ResultsBlockBg,
    };
    if (isXXXLDevice) {
      bg.results = ResultsBlockXXXLBg;
      bg.ctaLast = CTAFirstXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      bg.ctaLast = CTAFirstTabletBg;
      bg.results = ResultsBlockTabletBg;
    } else if (isXSDevice) {
      bg.ctaLast = CTAFirstMobileBg;
      bg.results = ResultsBlockMobileBg;
    }
    return bg;
  };

  return (
    <>
      <VRMedicalMainBlock />
      <AboutProjectSection
        title={aboutBlockData.title}
        subtitle={aboutBlockData.subtitle}
        content={aboutBlockData.content}
      />
      <BusinessContext
        upTitle={businessContextData.name}
        title={businessContextData.title}
        subTitle={businessContextData.subtitle}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
        subText={businessContextData.bottomText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[32px]',
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
          title={(
            <>
              Do you need help with creating a VR solution for
              the healthcare&nbsp;industry?
              <span className="block">Our experts are at your&nbsp;service!</span>
            </>
          )}
          btnText="CONTACT US"
          background={getBackground().ctaLast}
          withButton
          classes={{
            cta: `!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px]
            screen-sm:!p-[80px_15px]`,
            title: '!max-w-[1078px]',
          }}
        />
      )}
      <DevelopmentServicesWhite
        title={servicesData.title}
        data={servicesData.data}
        classes={{
          devServices: 'screen-md:!pb-[80px]',
        }}
      />
      <OurSolutions
        data={ourSolutionsData}
        desktopViewOnXL
        classes={{ section: '!pt-0' }}
      />
      <VRMedicalSlider />
      <ChoicesBlock />
      <CoreTechnology
        data={coreTechnologyData}
        blackTheme
      />
      <ResultsBlock
        name={resultsBlockDataSecond.name}
        title={resultsBlockDataSecond.title}
        content={resultsBlockDataSecond.content}
        classes={resultsBlockWhite}
      />
      <BusinessContextDiagonal
        upTitle={businessContextDataSecond.name}
        title={businessContextDataSecond.title}
        leftContent={businessContextDataSecond.firstText}
        rightContent={businessContextDataSecond.secondText}
        blackTheme
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[62, 69, 56, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Do you need help with creating a VR solution for
              the healthcare&nbsp;industry?
              <span className="block">Our experts are at your&nbsp;service!</span>
            </>
          )}
          btnText="CONTACT US"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            title: '!max-w-[1078px]',
          }}
        />
      )}
    </>
  );
}

export default VrMedicalTrainingCasePageView;
