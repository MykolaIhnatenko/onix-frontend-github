import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import ConfettiSolutionsSection from './components/ConfettiSolutionsSection';
import { businessContextData } from './data/businessContextData';
import resultsBlockDataSecond from './data/resultsBlockDataSecond';
import resultsBlockData from './data/resultsBlockData';
import {
  ButtonType,
  UsabilityTestingMainBlockVariant,
} from '../../constants/enums';
import IPageStatus from 'interfaces/IPageStatus';
import technologyData from './data/technologyData.json';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import TestimonialTextSection from 'components/TestimonialTextSection/TestimonialTextSection';
import confettiHowOnixDeveloped from './data/confettiHowOnixDeveloped';
import testimonialData from './data/testimonialData';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import UsabilityTestingMainBlock from 'pages/UsabilityTestingPageView/components/UsabilityTestingMainBlock';
import MainBg from '@/images/confettiPage/mainSection/img_main_bg@2x.webp';
import MainBgXL from '@/images/confettiPage/mainSection/img_main_bg_xl@2x.webp';
import MainBgXXXL from '@/images/confettiPage/mainSection/img_main_bg_xxxl@2x.webp';
import MainBgTablet from '@/images/confettiPage/mainSection/img_main_bg_tablet@2x.webp';
import MainBgMobile from '@/images/confettiPage/mainSection/img_main_bg_mobile@2x.webp';

function ConfettiPageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isLGDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      first: CTAFirstBg,
      productScopeBg: ResultsBlockBg,
      main: MainBg,
    };
    if (isXXXLDevice) {
      bg.first = CTAFirstXXXLBg;
      bg.productScopeBg = ResultsBlockXXXLBg;
      bg.main = MainBgXXXL;
    } else if (isLGDevice) {
      bg.main = MainBgXL;
    } else if (isMDDevice || isSMDevice) {
      bg.first = CTAFirstTabletBg;
      bg.productScopeBg = ResultsBlockTabletBg;
      bg.main = MainBgTablet;
    } else if (isXSDevice) {
      bg.first = CTAFirstMobileBg;
      bg.productScopeBg = ResultsBlockMobileBg;
      bg.main = MainBgMobile;
    }
    return bg;
  };

  return (
    <>
      <UsabilityTestingMainBlock
        title="Cryptocurrency Trading Platform Development for Ethereum Transactions"
        background={getBackground().main}
        variant={UsabilityTestingMainBlockVariant.CONFETTI}
      />
      <AboutProjectSection
        title={confettiHowOnixDeveloped.blockTitle}
        subtitle={confettiHowOnixDeveloped.text}
        content={confettiHowOnixDeveloped.data}
      />
      <BusinessContext
        title={businessContextData.title}
        subTitle={businessContextData.subTitle}
        subText={businessContextData.subText}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          title: '!max-w-[1300px]',
        }}
      />
      <ResultsBlock
        title={resultsBlockDataSecond.title}
        content={resultsBlockDataSecond.content}
        background={getBackground().productScopeBg}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title={(
            <>
              Ready to upgrade your fintech business by leveraging
              {' '}
              <span className="inline-block screen-lg:inline">
                best&#8209;in&#8209;class technologies?
              </span>
            </>
          )}
          btnText="Contact us"
          background={getBackground().first}
          withButton
          classes={{
            title: '!pb-[40px] !max-w-[1080px] screen-lg:!max-w-[643px] screen-md:max-w-[none] screen-md:!pb-[30px]',
          }}
        />
      )}
      <ConfettiSolutionsSection />
      <CoreTechnology data={technologyData} />
      <TestimonialTextSection
        testimonialText={testimonialData.testimonialText}
        authorPosition={testimonialData.authorPosition}
        authorName={testimonialData.authorName}
      />
      <ResultsBlock
        name={resultsBlockData.name}
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        classes={{
          resultBlock: '!bg-white !text-black',
          line: '!bg-[#CECECE]',
          lineActive: '!bg-black',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[20, 1, 14, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Look for a trusted technology partner to build a custom fintech&nbsp;solution?"
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            title: 'screen-lg:max-w-[708px]',
          }}
        />
      )}
    </>
  );
}

export default ConfettiPageView;
