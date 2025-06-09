import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import FaceReplacingMainBlock from './components/FaceReplacingMainBlock';
import FaceReplacingSlider from './components/FaceReplacingSlider';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import servicesData from './data/developmentServicesData';
import aboutBlockData from './data/aboutBlockData.json';
import { businessContextDataFirst, businessContextDataSecond } from './data/businessContextData';
import ourSolutionsContentData from './data/ourSolutionsContentData';
import resultsBlockData from './data/resultsBlockData';
import technologyData from './data/technologyData.json';
import { ButtonType } from '../../constants/enums';
import IPageStatus from '../../interfaces/IPageStatus';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';
import BusinessContext from 'components/BusinessContext/BusinessContext';

function FaceReplacingCasePageView({ saleUrl }: IPageStatus) {
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
      results: ResultsBlockBg,
      cta_first: CTAFirstBg,
    };
    if (isXXXLDevice) {
      bg.results = ResultsBlockXXXLBg;
      bg.cta_first = CTAFirstXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      bg.results = ResultsBlockTabletBg;
      bg.cta_first = CTAFirstTabletBg;
    } else if (isXSDevice) {
      bg.results = ResultsBlockMobileBg;
      bg.cta_first = CTAFirstMobileBg;
    }
    return bg;
  };

  return (
    <>
      <FaceReplacingMainBlock />
      <AboutProjectSection
        content={aboutBlockData.content}
        title={aboutBlockData.title}
      />
      <BusinessContextDiagonal
        upTitle={businessContextDataFirst.name}
        title={businessContextDataFirst.title}
        leftContent={businessContextDataFirst.firstText}
        rightContent={businessContextDataFirst.secondText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
        }}
      />
      <ResultsBlock
        name={resultsBlockData.name}
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
      <DevelopmentServicesWhite
        title={servicesData.title}
        data={servicesData.data}
        classes={{ devServices: '!pb-0' }}
      />
      <OurSolutions
        title={ourSolutionsContentData.blockTitle}
        data={ourSolutionsContentData.data}
      />
      <FaceReplacingSlider />
      <CoreTechnology
        data={technologyData}
        classes={{ contentContainer: '!pb-0' }}
      />
      <BusinessContext
        title={businessContextDataSecond.title}
        leftContent={businessContextDataSecond.firstText}
        rightContent={businessContextDataSecond.secondText}
      />
      <CaseStudiesBlockForCases
        sliderIds={[35, 3, 4, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title={(
            <>
              Use our expertise to build
              <br className="hidden screen-lg:block screen-md:hidden" />
              {' '}
              a&nbsp;top-notch solution tailored to your business&nbsp;needs!
            </>
          )}
          btnText="Get in touch with us"
          withButton
          classes={{
            cta: '!pt-0',
            image: '!object-bottom',
            title: `!max-w-[930px] screen-lg:!max-w-[708px] screen-lg:!pb-[40px]
            screen-md:max-w-full screen-md:!pb-[30px] screen-sm:max-w-[330px]`,
          }}
        />
      )}
    </>
  );
}

export default FaceReplacingCasePageView;
