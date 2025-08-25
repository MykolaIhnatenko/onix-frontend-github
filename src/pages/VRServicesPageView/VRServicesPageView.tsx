import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import VideoBlock from './components/VideoBlock';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import SolutionsTable from './components/SolutionsTable';
import VRSolutionsSection from './components/VrSolutionsSection';
import ArVrTechnologies from './components/ArVrTechnologies';
import PlatformsServed from '../../components/PlatformsServed/PlatformsServed';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import CaseStudiesBlock from '../../components/CaseStudiesBlock/CaseStudiesBlock';
import IndustriesWeServeBlock from '../../components/IndustriesWeServeBlock/IndustriesWeServe';
import VRServicesSection from './components/VrServicesSection';
import MainBlockWith2TextBtn from 'components/MainBlockWith2TextBtn/MainBlockWith2TextBtn';
import platformsServedData from './data/platformsServedData';
import faqData from './data/faqData';
import { carouselBottom, carouselTop, industriesWeServeBlockData } from './data/industriesWeServeCarouselData';
import quotesList from './data/quotesList';
import ButtonTypes from '../../constants/ButtonTypes';
import { IPageBlogs } from '../../interfaces/IPages';
import {
  ButtonPathVariant, ButtonType,
} from '../../constants/enums';
import IAchievements from '../../interfaces/IAchievements';

import VRTellUsBg from '@/images/vrServicesPage/img_vr_bg_call_third_desktop.webp';
import VRTellUsBgTable from '@/images/img_lastCtaTablet@2x.webp';
import VRTellUsBgMobile from '@/images/img_lastCtaMobile@2x.webp';
import VRConsultationBg from '@/images/vrServicesPage/img_vr_call_to_desktop.webp';
import VRConsultationBgTable from '@/images/vrServicesPage/img_vr_call_to_table.webp';
import VRConsultationBgMobile from '@/images/vrServicesPage/img_vr_call_to_mobile.webp';
import VRIntroBg from '@/images/vrServicesPage/img_bg_main.webp';
import VRIntroBgRight from '@/images/vrServicesPage/img_bg_vr_right .webp';
import VRIntroBgTable from '@/images/vrServicesPage/img_vr_bg_table.webp';
import VRIntroBgMobile from '@/images/vrServicesPage/img_vr_group_mobile.webp';
import IndustriesBgXXXL from '@/images/industriesWeServe/img_bgXXXL.webp';
import IndustriesBg from '@/images/industriesWeServe/img_bg.webp';
import IndustriesBgTablet from '@/images/industriesWeServe/img_bgTablet.webp';
import IndustriesBgMobile from '@/images/industriesWeServe/img_bgMobile.webp';
import CaseStudiesBg from '@/images/caseStudiesBlock/img_bottomBg.webp';
import CaseStudiesBgTablet from '@/images/caseStudiesBlock/img_bottomBgTablet.webp';

function VRServicesPage({ pageBlogs, achievements }: IPageBlogs & IAchievements) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
      isLGDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg: { [propName:string]: StaticImageData } = {
      main: VRIntroBg,
      first: VRConsultationBg,
      second: VRTellUsBg,
      industriesBg: IndustriesBg,
      caseStudiesBg: CaseStudiesBg,
    };

    if (isXXXLDevice || isLGDevice) {
      bg.industriesBg = IndustriesBgXXXL;
    } else if (isMDDevice || isSMDevice) {
      bg.main = VRIntroBgTable;
      bg.first = VRConsultationBgTable;
      bg.second = VRTellUsBgTable;
      bg.industriesBg = IndustriesBgTablet;
      bg.caseStudiesBg = CaseStudiesBgTablet;
    } else if (isXSDevice) {
      bg.main = VRIntroBgMobile;
      bg.first = VRConsultationBgMobile;
      bg.second = VRTellUsBgMobile;
      bg.industriesBg = IndustriesBgMobile;
      bg.caseStudiesBg = CaseStudiesBgTablet;
    }

    return bg;
  };

  return (
    <>
      <MainBlockWith2TextBtn
        title="AR/VR Development Services"
        firstText="Onix is an AR and VR development company that transforms
              the ordinary into cutting-edge interactive products with immersive
              customer experience. We get the most out of AR & VR capabilities to
              build excellent AR & VR solutions tailored to your business needs and goals."
        secondText={(
          <>
            Let&apos;s harness the power of augmented and virtual reality
            software development to take your company to the next level!
          </>
        )}
        btnText="Talk to our expert"
        blockBg={getBackground().main}
        rightImg={VRIntroBgRight}
      />
      <VideoBlock
        title="AR & VR development services to help
               your business ideas thrive."
        subtitle="By combining AR and VR, our experts create and merge digitized models of
                  the real world coupled with computer-generated models, ensuring a fascinating
                  experience of starting in the real world and progressing to an immersive virtual reality world."
      />
      <VRServicesSection />
      <VRSolutionsSection isMobileOrTablet={isXSDevice || isSMDevice || isMDDevice} />
      <CaseStudiesBlock
        sliderIds={[49, 7, 53, 1000]}
        background={getBackground().caseStudiesBg}
        classes={{
          container: '!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
          bgContainer: 'top-auto bottom-0 after:!top-0 after:!bottom-auto after:!bg-gradient-to-b',
          bgImg: '!object-center',
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().first}
        withButton
        title={(
          <>
            Need a fully immersive AR & VR solution for your specific&nbsp;industry?
          </>
        )}
        content={(
          <>
            Talk to our experts from the VR team and get a&nbsp;free&nbsp;consultation.
          </>
        )}
        btnText="Speak to our expert"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: '!p-[192px_70px] screen-lg:!p-[160px_30px] screen-md:!p-[40px_30px] screen-sm:!p-[40px_15px]',
          background: `after:!h-[40px] after:!bg-gradient-to-b after:!from-transparent after:!to-[#ffffff]
          after:!bottom-0 screen-lg:after:!h-[70px]`,
          title: `!max-w-[1028px] !pb-[40px] !text-black screen-lg:!max-w-[708px]
          screen-md:!pb-[20px] screen-md:!max-w-full`,
          content: `!pb-[56px] !text-center !text-black !max-w-[700px] !text-[20px] !leading-[28px]
          screen-lg:!max-w-[708px] screen-lg:!pb-[40px] screen-lg:!text-[18px] screen-lg:!leading-[26px]
          screen-md:!pb-[20px] screen-md:!max-w-full screen-md:!text-[16px] screen-md:!leading-[24px]`,
        }}
      />
      <PlatformsServed
        title={platformsServedData.title}
        text={platformsServedData.text}
        content={platformsServedData.content}
        classes={{
          container: 'screen-lg:!pb-[80px] screen-md:!pb-[40px]',
          text: 'min-md:!text-[20px]/[28px]',
          content: 'min-md:pt-[20px]',
          itemIcon: 'min-md:justify-evenly py-[20px] min-md:h-[156px]',
          itemIconTitle: 'screen-lg:!text-[18px]/[26px] screen-md:!text-[16px]/[24px] !mb-0',
        }}
      />
      <SolutionsTable />
      <CallToActionComponent
        background={getBackground().first}
        withButton
        title={(
          <>
            How much does it cost to hire a dedicated team for an AR/VR&nbsp;project?
          </>
        )}
        content={(
          <>
            Specify the number of experts and technologies you need and
            get an approximate team cost for your&nbsp;project!
          </>
        )}
        btnText="Calculate now"
        buttonType={ButtonTypes.PRIMARY}
        buttonPathVariant={ButtonPathVariant.CALCULATE}
        classes={{
          cta: '!p-[192px_70px] screen-lg:!p-[160px_30px] screen-md:!p-[40px_30px_20px] screen-sm:!p-[40px_15px_20px]',
          background: 'after:!hidden',
          title: `!max-w-[1028px] !pb-[40px] !text-black screen-lg:!max-w-[708px] screen-md:!pb-[20px]
          screen-md:!max-w-full`,
          content: `!pb-[56px] !text-center !text-black !max-w-[708px] screen-lg:!max-w-[708px] screen-lg:!pb-[40px]
          screen-lg:!text-[18px] screen-lg:!leading-[26px] screen-md:!pb-[20px] screen-md:!max-w-full
          screen-md:!text-[16px] screen-md:!leading-[24px]`,
        }}
      />
      <IndustriesWeServeBlock
        title={industriesWeServeBlockData.pageTitle}
        text={industriesWeServeBlockData.text}
        background={getBackground().industriesBg}
        carouselTop={carouselTop}
        carouselBottom={carouselBottom}
        carouselTopClasses={{
          animation: 'animate-vr-projects '
          + 'screen-lg:animate-vr-projects-tablet '
          + 'screen-md:animate-vr-projects-mobile',
        }}
        carouselBottomClasses={{
          animation: 'animate-vr-projects-revert '
            + 'screen-lg:animate-vr-projects-tablet-revert '
            + 'screen-md:animate-vr-projects-mobile-revert',
        }}
        classes={{
          carouselContainer: 'pt-[134px] screen-lg:pt-[140px]',
          text: `min-lg:max-w-[1080px] min-xxxl:max-w-[1480px] mt-[16px] screen-md:mt-[20px]
            min-lg:!text-[20px]/[28px] screen-md:!text-[14px]/[20px]
          `,
        }}
      />
      <ArVrTechnologies />
      <WhyChooseUsSection />
      <AchievementsBlock achievements={achievements} />
      <ReviewBlock quotesList={quotesList} />
      {!!pageBlogs?.length && <OurInsights pageBlogs={pageBlogs} />}
      <CallToActionComponent
        id={ButtonType.LAND4}
        background={getBackground().second}
        withButton
        title={(
          <>
            Tell us about your product idea and let the&nbsp;magic&nbsp;unfold.
          </>
        )}
        btnText="Speak to Our Expert"
        buttonType={ButtonTypes.LIGHT}
      />
      <FAQBlock faqData={faqData} />
    </>
  );
}

export default VRServicesPage;
