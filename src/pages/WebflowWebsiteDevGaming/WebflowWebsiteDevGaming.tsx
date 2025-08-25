import { useAppSelector } from '../../hook/reduxToolkit';
import HeroSection from './components/HeroSection';
import TitleHeroSection from './data/TitleHeroSection';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import {
  ButtonType,
} from 'constants/enums';
import runningRowsBlockData from './data/runningRowsBlockData';
import KillerFeaturesData from './data/KillerFeaturesData';
import CTABg from '../../assets/images/WebflowWebsiteDev/cta/img_CTA_bg.webp';
import CTABgTablet from '../../assets/images/WebflowWebsiteDev/cta/img_CTA_bg_tablet.webp';
import CTABgMobile from '../../assets/images/WebflowWebsiteDev/cta/img_CTA_bg_mobile.webp';
import SliderBg from '../../assets/images/WebflowWebsiteDev/doubleSlider/img_SliderBg.webp';
import SliderBgTablet from '../../assets/images/WebflowWebsiteDev/doubleSlider/img_SliderBgTablet.webp';
import SliderBgMobile from '../../assets/images/WebflowWebsiteDev/doubleSlider/img_SliderBgMobile.webp';
import servicesData from './data/servicesData';
import RunningRowsBlock from 'components/RunningRowsBlock/RunningRowsBlock';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import IPageStatus from 'interfaces/IPageStatus';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import TechList from './data/TechList.json';
import DevelopmentServicesBlack from 'components/DevelopmentServicesBlack/DevelopmentServicesBlack';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import aboutContent from './data/aboutContent';
import { businessContextData, businessContextDataSecond, businessContextDataThird } from './data/businessContextData';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';

import HeroScreenTablet from '@/images/WebflowWebsiteDev/img_HeroScreenTablet.webp';
import HeroScreen from '@/images/WebflowWebsiteDev/img_HeroScreen.webp';

function WebflowWebsiteDevGaming({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      Main: HeroScreen,
      cta: CTABg,
      runningBg: SliderBg,
    };
    if (isMDDevice) {
      bg.Main = HeroScreenTablet;
      bg.cta = CTABgTablet;
      bg.runningBg = SliderBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.Main = HeroScreenTablet;
      bg.cta = CTABgMobile;
      bg.runningBg = SliderBgMobile;
    }
    return bg;
  };

  return (
    <>
      <HeroSection
        title={TitleHeroSection}
        backgroundImg={getBackground().Main}
      />
      <AboutProjectSection
        title={aboutContent.title}
        subtitle={aboutContent.text}
        content={aboutContent.content}
      />
      <BusinessContext
        upTitle={businessContextData.name}
        title={businessContextData.title}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
        subText={businessContextData.bottomText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <DevelopmentServicesBlack
        title={servicesData.title}
        data={servicesData.data}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title={(
            <>Elevate engagement, drive conversions, and&nbsp;stand out in the&nbsp;digital marketplace&nbsp;today!</>
          )}
          btnText="contact us"
          background={getBackground().cta}
          withButton
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[80px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            image: '!object-bottom screen-md:h-[300px]',
            title: `!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!text-[25px]
            screen-md:!leading-[35px] screen-md:!pb-[30px]`,
          }}
        />
      )}
      <BusinessContextDiagonal
        upTitle={businessContextDataSecond.name}
        title={businessContextDataSecond.title}
        leftContent={businessContextDataSecond.firstText}
        classes={{
          section: 'pb-[80px] screen-lg:pb-[60px] screen-md:pb-[40px]',
          upTitle: 'screen-md:!text-[14px]/[24px]',
        }}
      />
      <RunningRowsBlock
        background={getBackground().runningBg}
        runningRows={runningRowsBlockData}
      />
      <OurSolutions
        data={KillerFeaturesData}
        desktopViewOnXL
        classes={{ section: 'pt-[80px] screen-lg:pt-[60px] screen-md:pt-[40px]' }}
      />
      <CoreTechnology
        data={TechList.techList}
        classes={{ contentContainer: '!pt-0 !pb-0' }}
      />
      <BusinessContext
        title={businessContextDataThird.title}
        subTitle={businessContextDataThird.subtitle}
        leftContent={businessContextDataThird.firstText}
        rightContent={businessContextDataThird.secondText}
        subText={businessContextDataThird.bottomText}
        classes={{
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[51, 69, 33, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title={(
            <>
              94% Of First Impressions Are Design-Related.
              Let&apos;s Craft Your Website&nbsp;Today!
            </>
          )}
          btnText="contact us"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            background: 'after:hidden',
            title: `!max-w-[1080px] screen-lg:!max-w-[600px] screen-md:!text-[25px]
            screen-md:!leading-[35px] screen-md:!max-w-full screen-md:!pb-[30px]`,
          }}
        />
      )}
    </>
  );
}

export default WebflowWebsiteDevGaming;
