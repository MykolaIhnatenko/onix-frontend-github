import { useAppSelector } from '../../hook/reduxToolkit';
import BeautyMainSection from './components/BeautyMainSection';
import ManiVideoBlock from './components/ManiVideoBlock';
import ManiTableBlock from './components/ManiTableBlock';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import ScrollTextAnimation from '../../components/ScrollTextAnimation/ScrollTextAnimation';
import ListMani from './data/ListMani';
import MainSectionData from './data/MainSectionData';
import businessContextData, { businessContextDataSecond } from './data/businessContextData';
import KillerFeaturesData from './data/KillerFeaturesData';
import TableBlockData from './data/TableBlockData.json';
import resultsBlockData from './data/resultsBlockData';
import TechListData from './data/TechListData.json';
import { ButtonType } from '../../constants/enums';
import IPageStatus from '../../interfaces/IPageStatus';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import carouselData from './data/carouselData';
import RunningRowsBlock from 'components/RunningRowsBlock/RunningRowsBlock';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import aboutContent from './data/aboutContent.json';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import MainSectionBg from '@/images/BeautyBookingServices/img_MainSection.webp';
import MainSectionBgTablet from '@/images/BeautyBookingServices/img_MainSectionTablet.webp';
import MainSectionBgMobile from '@/images/BeautyBookingServices/img_MainSectionMobile.webp';
import VideoTitle from '@/images/BeautyBookingServices/img_VideoTitle.webp';
import VideoTitleTablet from '@/images/BeautyBookingServices/img_VideoTitleTablet.webp';
import VideoTitleMobile from '@/images/BeautyBookingServices/img_VideoTitleMobile.webp';
import VideoBg from '@/images/BeautyBookingServices/img_VideoBG.webp';
import VideoBgTablet from '@/images/BeautyBookingServices/img_VideoBGTablet.webp';
import VideoBgMobile from '@/images/BeautyBookingServices/img_VideoBGMobile.webp';
import TableBg from '@/images/BeautyBookingServices/img_TableBlockBg.webp';
import TableBgTablet from '@/images/BeautyBookingServices/img_TableBlockBgTablet.webp';
import TableBgMobile from '@/images/BeautyBookingServices/img_TableBlockBgMobile.webp';
import SliderBg from '@/images/BeautyBookingServices/img_SliderManiBg.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';

function BeautyBookingServicesView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      Main: MainSectionBg,
      videoBG: VideoBg,
      videoTitle: VideoTitle,
      tableBg: TableBg,
      results: ResultsBlockBg,
      cta: CTAFirstBg,
    };
    if (isXXXLDevice) {
      bg.results = ResultsBlockXXXLBg;
      bg.cta = CTAFirstXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      bg.Main = MainSectionBgTablet;
      bg.videoBG = VideoBgTablet;
      bg.videoTitle = VideoTitleTablet;
      bg.tableBg = TableBgTablet;
      bg.results = ResultsBlockTabletBg;
      bg.cta = CTAFirstTabletBg;
    } else if (isXSDevice) {
      bg.Main = MainSectionBgMobile;
      bg.videoBG = VideoBgMobile;
      bg.videoTitle = VideoTitleMobile;
      bg.tableBg = TableBgMobile;
      bg.results = ResultsBlockMobileBg;
      bg.cta = CTAFirstMobileBg;
    }
    return bg;
  };
  return (
    <>
      <BeautyMainSection
        title={MainSectionData.title}
        desc={MainSectionData.desc}
        background={getBackground().Main}
      />
      <AboutProjectSection
        title={aboutContent.title}
        content={aboutContent.content}
      />
      <ManiVideoBlock
        source="/static/video/Mani-Video.mp4"
        background={getBackground().videoBG}
        videoBg={getBackground().videoTitle}
        isMobile={isXSDevice || isSMDevice}
      />
      <BusinessContext
        upTitle={businessContextDataSecond.name}
        title={businessContextDataSecond.title}
        leftContent={businessContextDataSecond.firstText}
        rightContent={businessContextDataSecond.secondText}
        subText={businessContextDataSecond.bottomText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]',
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
              Want a custom design
              <br className="hidden screen-lg:block screen-md:hidden" />
              {' '}
              for your&nbsp;product?
            </>
          )}
          btnText="Talk to our expert"
          background={getBackground().cta}
          withButton
          classes={{
            cta: '!relative screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full
            after:h-[80px] after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            image: '!object-bottom',
          }}
        />
      )}
      <ManiTableBlock
        title={TableBlockData.title}
        data={TableBlockData.data}
        headers={TableBlockData.headers}
        titleDesc={TableBlockData.titleDesc}
        desc={TableBlockData.desc}
        background={getBackground().tableBg}
      />
      <RunningRowsBlock
        background={SliderBg}
        runningRows={carouselData}
      />
      <OurSolutions
        data={KillerFeaturesData}
        desktopViewOnXL
        classes={{ section: 'pt-[80px] screen-lg:pt-[60px] screen-md:pt-[40px]' }}
      />
      <CoreTechnology
        data={TechListData.techList}
        classes={{ contentContainer: '!pt-0' }}
      />
      <ScrollTextAnimation
        textList={ListMani.textList}
        scaleIndex={1.68}
        scaleIndexMobile={1.4}
        themeBlack
      />
      <BusinessContext
        title={businessContextData.title}
        subTitle={businessContextData.subTitle}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
        classes={{
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[37, 34, 38, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          withButton
          title="Interested in a custom design that reflects your brand's&nbsp;identity?"
          btnText="Let’s talk"
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            title: `!max-w-[1080px] !text-[50px] !leading-[64px] screen-lg:!max-w-[708px]
            screen-lg:!text-[40px] screen-lg:!leading-[56px] screen-md:!max-w-unset
            screen-md:!text-[25px] screen-md:!leading-[35px]`,
          }}
        />
      )}
    </>
  );
}

export default BeautyBookingServicesView;
