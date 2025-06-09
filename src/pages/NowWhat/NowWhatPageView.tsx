import { StaticImageData } from 'next/image';

import NowWhatMainSection from './components/NowWhatMainSection';
import aboutBlockContent from './data/aboutBlockContent';
import aboutContent from './data/aboutContent.json';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import businessContextBlockData from './data/businessContextBlockData';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import productScopeData from './data/productScopeData';
import { useAppSelector } from '../../hook/reduxToolkit';
import TestimonialPreview from '../../assets/images/nowWhat/testimonialSection/img_testimonial_preview.webp';
import CallBlockBg2 from '../../assets/images/nowWhat/callBlock/img_bg2@2x.webp';
import CallBlockBgTablet2 from '../../assets/images/nowWhat/callBlock/img_bg_tablet2@2x.webp';
import CallBlockBgMobile2 from '../../assets/images/nowWhat/callBlock/img_bg_mobile2@2x.webp';
import { ButtonType } from '../../constants/enums';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import NowWhatWhoThisProductForSection from './components/NowWhatWhoThisProductForSection';
import resultContent from './data/resultContent';
import technologies from './data/technologies';
import NowWhatSolutionSection from './components/NowWhatSolutionSection';
import IPageStatus from 'interfaces/IPageStatus';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import TestimonialVideoSection from 'components/TestimonialVideoSection/TestimonialVideoSection';
import resultsBlockWhite from 'constants/tailwindStyle';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import ResultsWhiteBlockBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteBg@2x.webp';
import ResultsWhiteBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteTabletBg@2x.webp';
import ResultsWhiteBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteMobileBg@2x.webp';
import ResultsWhiteBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import accordionData from './data/accordionData';
import NowWhatAccordionBlock from './components/NowWhatAccordionBlock';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import BusinessContext from 'components/BusinessContext/BusinessContext';

function NowWhatPageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice, isSMDevice, isXSDevice, isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      productScope: ResultsBlockBg,
      callBlock1: CTAFirstBg,
      callBlock2: CallBlockBg2,
      results: ResultsWhiteBlockBg,
    };
    if (isXXXLDevice) {
      bg.productScope = ResultsBlockXXXLBg;
      bg.callBlock1 = CTAFirstXXXLBg;
      bg.results = ResultsWhiteBlockXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      bg.productScope = ResultsBlockTabletBg;
      bg.callBlock1 = CTAFirstTabletBg;
      bg.callBlock2 = CallBlockBgTablet2;
      bg.results = ResultsWhiteBlockTabletBg;
    } else if (isXSDevice) {
      bg.productScope = ResultsBlockMobileBg;
      bg.callBlock1 = CTAFirstMobileBg;
      bg.callBlock2 = CallBlockBgMobile2;
      bg.results = ResultsWhiteBlockMobileBg;
    }
    return bg;
  };

  return (
    <>
      <NowWhatMainSection />
      <AboutProjectSection
        title={aboutContent.title}
        content={aboutBlockContent}
      />
      <BusinessContext
        upTitle={businessContextBlockData.name}
        title={businessContextBlockData.title}
        subTitle={businessContextBlockData.subtitle}
        leftContent={businessContextBlockData.firstText}
        rightContent={businessContextBlockData.secondText}
        subText={businessContextBlockData.bottomText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <ResultsBlock
        content={productScopeData.content}
        title={productScopeData.title}
        name={productScopeData.name}
        background={getBackground().productScope}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title={(
            <>
              Have a project in mind?
              <br />
              Let&apos;s&nbsp;talk!
            </>
          )}
          btnText="Get in touch with us"
          background={getBackground().callBlock1}
          classes={{
            cta: 'bg-black !p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `!max-h-[464px] !bottom-0 !top-auto screen-lg:!max-h-[368px] screen-md:!max-h-[316px]
            after:content-[""] after:absolute after:top-0 after:left-0 after:w-full
            after:h-[70px] after:bg-gradient-to-t from-[rgba(0,0,0,0)_15%] to-black`,
            image: '!object-right-bottom',
            title: '!pb-[40px] screen-md:!pb-[30px] screen-md:!max-w-full',
            btn: 'screen-md:!max-w-[330px]',
          }}
          withButton
        />
      )}
      <NowWhatWhoThisProductForSection />
      <NowWhatAccordionBlock data={accordionData} />
      {!saleUrl && (
        <VRARCallToActionComponent
          title="How much does it cost to hire a dedicated team for your&nbsp;project?"
          content="Specify the number of experts and technologies you
          need and get an approximate team cost for&nbsp;your&nbsp;project!"
          btnText="Calculate now"
          background={getBackground().callBlock1}
          classes={{
            cta: '!bg-black !p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `!max-h-[464px] !bottom-0 !top-auto screen-lg:!max-h-[368px] screen-md:!max-h-[316px]
            after:content-[""] after:absolute after:top-0 after:left-0 after:w-full
            after:h-[70px] after:bg-gradient-to-t from-[rgba(0,0,0,0)_15%] to-black`,
            image: '!object-right-bottom',
            title: '!pb-[40px] screen-md:!pb-[30px] screen-md:!max-w-full',
            content: '!pb-[40px] !max-w-[1080px] !m-auto !text-center screen-md:!pb-[30px]',
            btn: 'screen-md:!max-w-[330px]',
          }}
          withButton
        />
      )}
      <NowWhatSolutionSection />
      <CoreTechnology
        data={technologies}
        classes={{ contentContainer: '!pt-0' }}
      />
      <TestimonialVideoSection
        videoSrc="/static/video/now-what.mp4"
        preview={TestimonialPreview}
      />
      <ResultsBlock
        content={resultContent.content}
        title={resultContent.title}
        name={resultContent.name}
        background={getBackground().results}
        classes={resultsBlockWhite}
      />
      <CaseStudiesBlockForCases
        sliderIds={[58, 45, 26, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Looking for a reliable tech partner to build an&nbsp;outstanding&nbsp;product?"
          btnText="Contact us"
          classes={{
            cta: '!pt-0',
            title: '!max-w-[1000px] !pb-[40px] !m-auto screen-lg:!max-w-full screen-md:!pb-[30px]',
          }}
          withButton
        />
      )}
    </>
  );
}

export default NowWhatPageView;
