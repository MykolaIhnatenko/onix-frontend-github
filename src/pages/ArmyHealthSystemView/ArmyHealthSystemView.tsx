import { StaticImageData } from 'next/image';

import IPageStatus from '../../interfaces/IPageStatus';
import { useAppSelector } from '../../hook/reduxToolkit';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import CaseStudiesBlockForCases from '../../components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import BusinessContextDiagonal from '../../components/BusinessContextDiagonal/BusinessContextDiagonal';
import ArmyResultsBlock from './components/ArmyResultsBlock';
import MainBlockVolkswagen from '../../components/MainBlockVolkswagen/MainBlockVolkswagen';
import OurSolutions from '../../components/OurSolutions/OurSolutions';
import DevelopmentServicesBlack from '../../components/DevelopmentServicesBlack/DevelopmentServicesBlack';
import TestimonialVideoSection from '../../components/TestimonialVideoSection/TestimonialVideoSection';
import BusinessContext from '../../components/BusinessContext/BusinessContext';
import developmentServicesData from './data/developmentServicesData';
import aboutBlockData from './data/aboutBlockData';
import businessContextData from './data/businessContextData';
import ourSolutionsData from './data/ourSolutionsData';
import technologyData from './data/technologyData.json';
import BusinessContextBlockBgMobile from '../../assets/images/clubhouse/businessContext/img_business_bg_mobile.webp';
import BusinessContextBlockBgTablet from '../../assets/images/clubhouse/businessContext/img_business_bg_tablet.webp';
import BusinessContextBlockBg from '../../assets/images/clubhouse/businessContext/img_business_bg.webp';

import RunningRowsBlockBg
  from '@/images/healthcareProviderPortalCaseStudy/runningRowsBlock/img_runningRowsBlockBg@2x.webp';
import RunningRowsBlockBgTablet
  from '@/images/healthcareProviderPortalCaseStudy/runningRowsBlock/img_runningRowsBlockBgTablet@2x.webp';
import RunningRowsBlockBgMobile
  from '@/images/healthcareProviderPortalCaseStudy/runningRowsBlock/img_runningRowsBlockBgMobile@2x.webp';
import TestimonialPreview from '@/images/armyHealthSystems/testimonial/img_video_preview.webp';
import BgWhiteLarge from '@/images/developmentServicesWhite/img_devServicesWhiteLarge.webp';
import HeroBgMobile from '@/images/armyHealthSystems/main/img_Hero_mobile.webp';
import HeroBgBigTablet from '@/images/armyHealthSystems/main/img_Hero_big_tablet.webp';
import HeroBgTablet from '@/images/armyHealthSystems/main/img_Hero_tablet.webp';
import HeroBg from '@/images/armyHealthSystems/main/img_Hero.webp';
import HeroBigBg from '@/images/armyHealthSystems/main/img_Hero_big.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';

function ArmyHealthSystemView({ saleUrl }: IPageStatus) {
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
      runningRowsBg: RunningRowsBlockBg,
      first: CTAFirstBg,
      businessContextBg: BusinessContextBlockBg,
      main: HeroBg,
    };
    if (isXXXLDevice) {
      bg.first = CTAFirstXXXLBg;
      bg.businessContextBg = BgWhiteLarge;
      bg.main = HeroBigBg;
    } else if (isLGDevice) {
      bg.main = HeroBgBigTablet;
    } else if (isMDDevice) {
      bg.first = CTAFirstTabletBg;
      bg.runningRowsBg = RunningRowsBlockBgTablet;
      bg.businessContextBg = BusinessContextBlockBgTablet;
      bg.main = HeroBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.first = CTAFirstMobileBg;
      bg.runningRowsBg = RunningRowsBlockBgMobile;
      bg.businessContextBg = BusinessContextBlockBgMobile;
      bg.main = HeroBgMobile;
    }

    return bg;
  };

  return (
    <>
      <MainBlockVolkswagen
        title={(
          <>
            Army Health System
          </>
        )}
        subtitleText={<>A Digital Wellness Solution for&nbsp;Military Readiness</>}
        backgroundImg={getBackground().main}
        classes={{
          titleContainer: 'max-w-[700px] screen-lg:min-h-[100vh] screen-lg:max-w-full '
            + 'screen-lg:!pt-[154px] '
            + 'screen-md:!pt-[139px]',
          subtitle: '!text-[30px]/[40px] !font-[500] max-w-[406px] '
            + 'min-md:!text-[24px]/[34px] '
            + 'screen-lg:max-w-[670px] screen-md:!text-[16px]/[24px] min-360:!text-[20px]/[28px]'
            + ' min-xl:!text-[30px]/[40px] screen-xl:!mt-[30px] screen-md:!mt-[15px] ',
          title: ' screen-xl:!text-[40px]/[56px] screen-md:!text-[25px]/[35px]',
        }}
      />
      <AboutProjectSection
        title={aboutBlockData.title}
        subtitle={aboutBlockData.subtitle}
        content={aboutBlockData.content}
      />
      <BusinessContextDiagonal
        upTitle={businessContextData.name}
        title={businessContextData.title}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
      />
      <DevelopmentServicesBlack
        upTitle={developmentServicesData.upTitle}
        title={developmentServicesData.title}
        data={developmentServicesData.data}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Do you need help with creating a&nbsp;solution
              {' '}
              <br className="inline screen-lg:hidden" />
              for the&nbsp;healthcare industry?
              {' '}
              <br className="inline screen-lg:hidden" />
              Our&nbsp;experts are at&nbsp;your&nbsp;service!
            </>
          )}
          btnText="Get in touch"
          withButton
          background={getBackground().first}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `!bottom-0 !top-auto min-xxxl:!h-[464px] after:content-[""] after:absolute after:top-0
            after:left-0 after:w-full after:h-[100px] after:bg-gradient-to-t from-transparent to-black`,
            image: '!object-right-bottom !object-cover',
            title: `!max-w-[1080px] screen-lg:!pb-[40px] screen-lg:!max-w-[708px] screen-md:max-w-full
            screen-md:!pb-[30px]`,
          }}
        />
      )}
      <BusinessContext
        upTitle="[ Solutions we provide ]"
        title="Our frontend development focused on usability, speed, and future scalability."
        leftContent={(
          <>
            The UI needed to work in high-pressure, mobile environments while
            being easy to use for soldiers, medical&nbsp;personnel, and&nbsp;researchers.
          </>
      )}
        classes={{
          section: 'screen-lg:!pb-0',
          leftContent: 'min-xxxl:!max-w-[710px] min-lg:!min-w-[630px]',
        }}
      />
      <OurSolutions
        data={ourSolutionsData}
        title={<>Summing up all our work for this project, these are our key&nbsp;solutions:</>}
        classes={{
          section: 'pt-0 screen-lg:!pt-[50px] screen-md:!pt-[60px]',
          title: '!text-[40px]/[56px] screen-lg:!text-[36px]/[46px] screen-md:!text-[20px]/[28px]',
        }}
        desktopViewOnXL
      />
      <TestimonialVideoSection
        upTitle="[ Project brief ]"
        title="Official project presentation to the Ministry of Defence of Ukraine"
        videoSrc="/static/video/cyberForum.mp4"
        preview={TestimonialPreview}
      />
      <CoreTechnology
        data={technologyData}
        blackTheme
        classes={{
          contentContainer: '!pt-0',
        }}
      />
      <ArmyResultsBlock background={getBackground().businessContextBg} />
      <CaseStudiesBlockForCases
        sliderIds={[79, 26, 58, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={<>Need a Scalable, Data-Driven Health Platform? Let’s Build It&nbsp;Together!</>}
          btnText="Contact us today"
          withButton
          classes={{
            cta: '!pt-0',
            title: '!text-white !max-w-[1078px] screen-md:!pb-[30px]',
          }}
        />
      )}
    </>
  );
}

export default ArmyHealthSystemView;
