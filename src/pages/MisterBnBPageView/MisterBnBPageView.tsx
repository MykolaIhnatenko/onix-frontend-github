import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import CaseStudiesBlockForCases from '../../components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import OurSolutions from '../../components/OurSolutions/OurSolutions';
import MisterBnBResults from './components/MisterBnBResults';
import MainSection from './components/MainSection';
import { businessContextDataFirst, businessContextDataSecond } from './data/businessContextData';
import aboutBlockData from './data/aboutBlockData';
import resultsBlockData from './data/resultsBlockData';
import ourSolutionsData from './data/ourSolutionsData';
import technologyData from './data/technologyData.json';
import { ButtonType } from '../../constants/enums';
import IPageStatus from 'interfaces/IPageStatus';
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
import MainBgXXXl from '@/images/misterBnB/main/img_main_bg_xxxl.webp';
import MainBg from '@/images/misterBnB/main/img_main_bg.webp';
import MainBgBigTablet from '@/images/misterBnB/main/img_main_bg_big_tablet.webp';
import MainBgTablet from '@/images/misterBnB/main/img_main_bg_tablet.webp';
import MainBgMobile from '@/images/misterBnB/main/img_main_bg_mobile.webp';

function MisterBnBPageView({ saleUrl }: IPageStatus) {
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
      first: CTAFirstBg,
      main: MainBg,
    };
    if (isXXXLDevice) {
      bg.results = ResultsBlockXXXLBg;
      bg.first = CTAFirstXXXLBg;
      bg.main = MainBgXXXl;
    } else if (isLGDevice) {
      bg.main = MainBgBigTablet;
    } else if (isMDDevice || isSMDevice) {
      bg.results = ResultsBlockTabletBg;
      bg.first = CTAFirstTabletBg;
      bg.main = MainBgTablet;
    } else if (isXSDevice) {
      bg.results = ResultsBlockMobileBg;
      bg.first = CTAFirstMobileBg;
      bg.main = MainBgMobile;
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
        title={businessContextDataFirst.title}
        leftContent={businessContextDataFirst.firstText}
        rightContent={businessContextDataFirst.secondText}
        subText={businessContextDataFirst.bottomText}
        classes={{
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[32px]',
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
          title="Have a project in mind? Let's talk!"
          btnText="Get in touch with us"
          background={getBackground().first}
          withButton
          classes={{
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full
            after:h-[120px] after:bg-gradient-to-t from-[rgba(0,0,0,0)_10%] to-black screen-lg:after:h-[80px]`,
            image: '!object-center screen-lg:!object-top',
            title: '!max-w-[600px] screen-lg:!max-w-[510px] screen-md:!max-w-[320px]',
          }}
        />
      )}
      <BusinessContextDiagonal
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
      <OurSolutions
        title={ourSolutionsData.title}
        data={ourSolutionsData.data}
        desktopViewOnXL
        classes={{
          section: '!py-0',
          title: '!text-[40px]/[56px] screen-lg:!text-[36px]/[46px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <CoreTechnology data={technologyData} />
      <MisterBnBResults />
      <CaseStudiesBlockForCases
        sliderIds={[52, 59, 55, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Have a project in mind?
              <br />
              Let’s start tight-knit cooperation!
            </>
          )}
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0',
            title: 'screen-md:!max-w-full',
          }}
        />
      )}
    </>
  );
}

export default MisterBnBPageView;
