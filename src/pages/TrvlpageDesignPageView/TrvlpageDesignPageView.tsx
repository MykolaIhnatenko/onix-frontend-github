import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import PhotoBlock from './components/PhotoBlock';
import CaseStudiesBlockForCases from '../../components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import TrvlpageRunningColsBlock from './components/TrvlpageRunningColsBlock';
import UsabilityTestingMainBlock from '../UsabilityTestingPageView/components/UsabilityTestingMainBlock';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import businessContextData from './data/businessContextData';
import trvlpageResultsBlockData from './data/trvlpageResultsBlockData';
import trvlpageMainBlockData from './data/trvlpageMainBlockData';
import trvlpageOurSolutionsContentData from './data/trvlpageOurSolutionsContentData';
import aboutBlockData from './data/aboutBlockData';
import trvlpageCoreTechnologyData from './data/trvlpageCoreTechnologyData';
import trvlpageBusinessContextSecondData from './data/trvlpageBusinessContextSecondData';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import { ButtonType } from '../../constants/enums';
import IPageStatus from '../../interfaces/IPageStatus';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import TellUsAboutSM from '@/images/img_tell_us_about_md.webp';
import DevopsTellUsTablet from '@/images/devopsSolutionsPageView/img_devopsTellUsTablet@2x.webp';
import MainBlockImage from '@/images/trvlpageDesignPageView/mainBlock/img_mainImage@2x.webp';
import MainBlockMinDesImage from '@/images/trvlpageDesignPageView/mainBlock/img_mainImageMinDes@2x.webp';
import MainBlockTabletImage from '@/images/trvlpageDesignPageView/mainBlock/img_mainImageTablet@2x.webp';
import MainBlockMobileImage from '@/images/trvlpageDesignPageView/mainBlock/img_mainImageMobile@2x.webp';

function TrvlpageDesignPageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isLGDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      resultsBlock: ResultsBlockBg,
      ctaFirst: CTAFirstBg,
      tellUs: TellUsAboutLG,
      mainBackground: MainBlockImage,
    };
    if (isXXXLDevice) {
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.ctaFirst = CTAFirstXXXLBg;
    } else if (isLGDevice) {
      bg.mainBackground = MainBlockMinDesImage;
    } else if (isMDDevice) {
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.ctaFirst = CTAFirstTabletBg;
      bg.tellUs = DevopsTellUsTablet;
      bg.mainBackground = MainBlockTabletImage;
    } else if (isXSDevice || isSMDevice) {
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.ctaFirst = CTAFirstMobileBg;
      bg.tellUs = TellUsAboutSM;
      bg.mainBackground = MainBlockMobileImage;
    }
    return bg;
  };

  return (
    <>
      <UsabilityTestingMainBlock
        title={trvlpageMainBlockData.title}
        text={trvlpageMainBlockData.text}
        icon={trvlpageMainBlockData.icon}
        background={getBackground().mainBackground}
        classes={{
          container: '!bg-white !bg-none !h-screen screen-lg:!h-[1024px] screen-md:!h-[640px]',
          background: `!w-[63vw] !h-auto !flex !bottom-0 screen-xl:!w-[57vw] screen-lg:!w-[738px]
            screen-lg:!h-[719px] screen-md:!w-[345px] screen-md:!h-[391px] screen-md:!bottom-0
            after:!content-[''] after:!absolute after:!top-0 after:!left-0 after:!w-full
            after:!h-0 after:bg-[linear-gradient(0deg,rgba(253,253,253,0)_15%,#ffffff_100%)]
            screen-lg:after:!h-[70px] screen-md:after:!h-[40px]`,
          contentContainer: `!relative !h-full !flex !flex-col !justify-center max-1390:!flex
            max-1390:!pt-0 screen-lg:!block screen-lg:!pt-[146px] screen-md:!pt-[136px]`,
          content: 'max-1390:!pl-[70px] screen-lg:!pl-[30px] screen-md:!pl-[15px] screen-md:!pr-[15px]',
          logo: '!pb-[40px] screen-lg:!pb-[30px] screen-md:!pb-[15px]',
          title: `max-1390:!pb-[40px] max-1390:!text-[50px] max-1390:!leading-[64px] screen-lg:!pb-[30px]
            screen-lg:!max-w-[708px] screen-lg:!text-[40px] screen-lg:!leading-[56px] screen-md:!pb-[15px]
            screen-md:!text-[25px] screen-md:!leading-[35px]`,
          text: `!max-w-[400px] !m-0 !text-[28px] !leading-[40px] screen-lg:!max-w-[unset]
            screen-lg:!text-[24px] screen-lg:!leading-[34px] screen-md:!max-w-[280px]
            screen-md:!text-[20px] screen-md:!leading-[28px]`,
        }}
      />
      <AboutProjectSection content={aboutBlockData.content} title={aboutBlockData.blockTitle} />
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
        title={trvlpageResultsBlockData.title}
        content={trvlpageResultsBlockData.content}
        background={getBackground().resultsBlock}
        productScope
        classes={{
          background: `after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full
            after:h-[120px] after:bg-gradient-to-b from-[rgba(0,0,0,0)] to-black screen-lg:after:h-[80px]`,
        }}
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
          withButton
          background={getBackground().ctaFirst}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full
            after:h-[120px] after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black screen-lg:after:h-[80px]`,
            image: '!object-bottom',
            title: `!max-w-[1078px] screen-lg:!pb-[30px] screen-lg:!max-w-[630px]
            screen-md:!max-w-[300px] screen-md:!pb-[30px]`,
          }}
        />
      )}
      <TrvlpageRunningColsBlock />
      <OurSolutions
        data={trvlpageOurSolutionsContentData}
        classes={{
          section: '!pb-0 pt-[80px] screen-lg:pt-[60px] screen-md:pt-[40px]',
        }}
      />
      <CoreTechnology
        data={trvlpageCoreTechnologyData}
        classes={{ contentContainer: '!pb-0' }}
      />
      <BusinessContext
        upTitle={trvlpageBusinessContextSecondData.name}
        title={trvlpageBusinessContextSecondData.title}
        subTitle={trvlpageBusinessContextSecondData.subtitle}
        leftContent={trvlpageBusinessContextSecondData.firstText}
        rightContent={trvlpageBusinessContextSecondData.secondText}
        subText={trvlpageBusinessContextSecondData.bottomText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <PhotoBlock />
      <CaseStudiesBlockForCases
        saleUrl={saleUrl}
        sliderIds={[52, 50, 43, 1000]}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Need a design audit for your&nbsp;product?"
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
export default TrvlpageDesignPageView;
