import { useAppSelector } from '../../hook/reduxToolkit';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import CrossPlatformMainSection from './components/CrossPlatformMainSection';
import PlatformsSection from './components/PlatformsSection';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import CrossPlatformNumbersSection from './components/CrossPlatformNumbersSection';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import CrossPlatformDevelopmentServices from './components/CrossPlatformDevelopmentServices';
import CrossPlatformTransformCaptivating from './components/CrossPlatformTransformCaptivating';
import IndustriesWeServeBlock from '../../components/IndustriesWeServeBlock/IndustriesWeServe';
import CrossPlatformSolutionsWeProvide from './components/CrossPlatformSolutionsWeProvide';
import CrossPlatformResultsSection from './components/CrossPlatformResultsSection';
import ProcessBlock from '../../components/ProcessBlock/ProcessBlock';
import { processAccordionData, processImages, processBlockContent } from './data/processData';
import ModelsSection from '../../components/ModelsSection/ModelsSection';
import CooperateBlock from '../../components/CooperateBlock/CooperateBlock';
import ClientsBlock from '../../components/ClientsBlock/ClientsBlock';
import CrossPlatformTechnologies from './components/CrossPlatformTechnologies';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import crossPlatformServicesData from './data/developmentServices';
import { carouselBottom, carouselTop, weServeBlockData } from './data/weServeBlockData';
import cooperateList from './data/CrossPlatformCooperateList';
import quotesList from './data/quotesList';
import FaqData from './data/faqData';
import {
  ButtonType,
  ScrollVariant,
} from '../../constants/enums';
import { IPageBlogs } from '../../interfaces/IPages';
import ButtonTypes from '../../constants/ButtonTypes';
import CrossPlatformFirstImage from '@/images/crossplatformDesign/img_CrossPlatformCTAFirst@2x.webp';
import CrossPlatformFirstImageTablet from '@/images/crossplatformDesign/img_CrossPlatformCTAFirstTablet@2x.webp';
import CrossPlatformFirstImageMobile from '@/images/crossplatformDesign/img_CrossPlatformCTAFirstMobile@2x.webp';
import CrossPlatformCTASecondImage from '@/images/crossplatformDesign/img_letsTalk@2x.webp';
import CrossPlatformCTASecondTabletImage from '@/images/crossplatformDesign/img_letsTalk_tablets@2x.webp';
import CrossPlatformCTASecondMobileImage from '@/images/crossplatformDesign/img_letsTalk_mobile@2x.webp';
import CrossPlatformTellUs from '@/images/img_crossPlatformTellUs@2x.webp';
import CrossPlatformTellUsTablet from '@/images/img_crossPlatformTellUsTablet@2x.webp';
import CrossPlatformTellUsMobile from '@/images/img_crossPlatformTellUsMobile@2x.webp';
import ModelsBgXXXL from '@/images/modelsSection/img_backgroundXXXL.webp';
import ModelsBg from '@/images/modelsSection/img_background.webp';
import ModelsBgTablet from '@/images/modelsSection/img_backgroundTablet.webp';
import ModelsBgMobile from '@/images/modelsSection/img_backgroundMobile.webp';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import { XXXL_DEVICE } from 'constants/constants';
import CrossPlatformModelsSectionData from './data/CrossPlatformModelsData';
import IndustriesBgXXXL from '@/images/industriesWeServe/img_bgXXXL.webp';
import IndustriesBg from '@/images/industriesWeServe/img_bg.webp';
import IndustriesBgTablet from '@/images/industriesWeServe/img_bgTablet.webp';
import IndustriesBgMobile from '@/images/industriesWeServe/img_bgMobile.webp';
import CaseStudiesBg from '@/images/crossplatformDesign/img_bg_case_studies.webp';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';

function CrossPlatformAppDevelopmentPageView({ pageBlogs }: IPageBlogs) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      screenWidth,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      First: CrossPlatformFirstImage,
      Second: CrossPlatformCTASecondImage,
      tellUs: CrossPlatformTellUs,
      modelsBg: ModelsBg,
      industriesBg: IndustriesBg,
    };

    if (isMDDevice) {
      bg.First = CrossPlatformFirstImageTablet;
      bg.Second = CrossPlatformCTASecondTabletImage;
      bg.tellUs = CrossPlatformTellUsTablet;
      bg.modelsBg = ModelsBgTablet;
      bg.industriesBg = IndustriesBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.First = CrossPlatformFirstImageMobile;
      bg.Second = CrossPlatformCTASecondMobileImage;
      bg.tellUs = CrossPlatformTellUsMobile;
      bg.modelsBg = ModelsBgMobile;
      bg.industriesBg = IndustriesBgMobile;
    } else if (screenWidth >= XXXL_DEVICE) {
      bg.modelsBg = ModelsBgXXXL;
      bg.industriesBg = IndustriesBgXXXL;
    }

    return bg;
  };

  return (
    <>
      <CrossPlatformMainSection />
      <PlatformsSection />
      <CallToActionComponent
        id={ButtonType.LAND}
        withButton
        title={(
          <>
            Don&apos;t limit your app&apos;s potential! Unleash the power of cross-platform development
            and deliver a seamless user experience across multiple operating&nbsp;systems.
          </>
        )}
        btnText="Contact our consultant"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!bg-white !p-[100px_70px_0] min-xxxl:!p-[100px_80px_0] screen-lg:!p-[0_30px_80px]
          screen-md:!p-[0_30px] screen-sm:!p-[0_15px]`,
          background: 'after:!hidden',
          title: `!text-black !text-[36px] !leading-[46px] !max-w-[1080px] screen-lg:!text-[30px]
          screen-lg:!leading-[40px] screen-md:!text-[25px] screen-md:!leading-[35px] screen-md:!pb-[30px]`,
        }}
        btnClasses={{
          textContainer: 'screen-md:!text-[16px]',
        }}
      />
      <CrossPlatformNumbersSection />
      <AchievementsBlock />
      <ReviewBlock
        quotesList={quotesList}
      />
      <DevelopmentServicesWhite
        title={crossPlatformServicesData.title}
        data={crossPlatformServicesData.data}
        accordionOnMobile
        classes={{
          devServices: `screen-md:!pb-0
          screen-md:!bg-[url('../../../assets/images/crossplatformDesign/img_bg_industries.webp')]
          screen-md:!bg-[position:top_center] screen-md:!bg-no-repeat screen-md:!bg-contain`,
        }}
      />
      <CrossPlatformDevelopmentServices />
      <CallToActionComponent
        id={ButtonType.LAND2}
        background={getBackground().Second}
        withButton
        title={(
          <>
            Ready to conquer multiple platforms with your app?
            Reach more users, maximize efficiency, and unlock endless possibilities for your&nbsp;app!
          </>
        )}
        btnText="Let’s talk"
        buttonType={ButtonTypes.LIGHT}
        classes={{
          cta: `!bg-black !p-[80px_15px] min-md:!p-[120px_30px_160px] 
            min-lg:!p-[120px_70px_160px] min-xxxl:!p-[120px_80px_160px]`,
          background: 'after:!hidden',
          image: '!object-bottom',
          title: `!text-[25px] !leading-[35px] min-md:!max-w-[708px] min-md:!text-[30px]
          min-md:!leading-[40px] min-lg:!max-w-[960px] min-lg:!text-[40px] min-lg:!leading-[56px]`,
        }}
      />
      <CrossPlatformTransformCaptivating />
      <IndustriesWeServeBlock
        upTitle={weServeBlockData.upTitle}
        title={weServeBlockData.pageTitle}
        background={getBackground().industriesBg}
        carouselTop={carouselTop}
        carouselBottom={carouselBottom}
        carouselTopClasses={{
          animation: 'animate-crossPlatform-projects '
            + 'screen-lg:animate-crossPlatform-projects-tablet '
            + 'screen-md:animate-crossPlatform-projects-mobile',
          item: 'screen-lg:max-h-[256px]',
        }}
        carouselBottomClasses={{
          animation: 'animate-crossPlatform-projects-revert '
            + 'screen-lg:animate-crossPlatform-projects-tablet-revert '
            + 'screen-md:animate-crossPlatform-projects-mobile-revert',
          item: 'screen-lg:max-h-[256px]',
        }}
        classes={{
          title: 'min-lg:max-w-[1153px]',
        }}
      />
      <CrossPlatformSolutionsWeProvide />
      <CaseStudiesBlock
        sliderIds={[31, 40, 39, 1000]}
        desc={`Explore our featured projects and see how we've helped businesses
          achieve their goals with our cross-platform development solutions.`}
        background={CaseStudiesBg}
        classes={{
          container: '!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
          bgContainer: '',
          bgImg: '!object-contain',
          title: 'screen-md:!mb-[30px]',
          desc: `!max-w-[660px] screen-md:!max-w-full mb-[80px] screen-lg:!mb-[40px]
            screen-md:!text-[18px]/[26px]`,
        }}
      />
      <CrossPlatformResultsSection />
      <ProcessBlock
        data={processAccordionData}
        imagesData={processImages}
        subtitle={processBlockContent.subtitle}
        firstText={processBlockContent.text}
        bottomTitle="Our cross-platform development process is driven by a focus on quality,
          efficiency, and customer satisfaction!"
        classes={{
          container: '!pb-[120px] min-md:!pb-[80px]',
          accordionBlock: 'min-h-auto',
          contentInnerText: '!mt-0 !mb-[30px] !ml-[52px] screen-md:!mr-[15px] min-xl:!ml-[88px] mt-[30px] ',
        }}
      />
      <ModelsSection
        pageTitle={CrossPlatformModelsSectionData.pageTitle}
        pageText={CrossPlatformModelsSectionData.pageText}
        data={CrossPlatformModelsSectionData.data}
        background={getBackground().modelsBg}
        classes={{ section: 'pt-[160px] screen-lg:!pt-[120px] screen-lg:pb-[80px] screen-md:!py-[80px]' }}
      />
      {
        (!isSMDevice && !isXSDevice) && (
          <CallToActionComponent
            id={ButtonType.LAND3}
            withButton
            title={(
              <>
                Break free from platform limitations! We help you bridge the gap between iOS and Android,
                enhance performance, and create a consistent user experience on multiple&nbsp;platforms.
              </>
            )}
            btnText="ASK for a consultation"
            buttonType={ButtonTypes.LIGHT}
            classes={{
              cta: `!p-[0_15px_80px] min-sm:!p-[0_30px_80px] min-md:!p-[40px_30px_120px] 
                min-lg:!p-[0_70px_160px] min-xxxl:!p-[0_80px_160px]`,
              title: `!pb-[40px] !text-[25px] !leading-[35px] 
                min-md:!text-[36px] min-md:!leading-[46px] min-md:!max-w-[708px] 
                min-lg:!max-w-[1150px] min-lg:!text-[40px] min-lg:!leading-[56px]`,
            }}
          />
        )
      }
      <CooperateBlock
        title="Why choose Onix for cross-platform development services"
        data={cooperateList}
        whiteTheme
        classes={{
          title: 'max-w-[763px] mb-[80px] screen-lg:mb-[60px] screen-md:mb-[40px]',
        }}
      />
      <ClientsBlock
        title=""
        mainTitle="Brands we have worked with"
        classes={{
          clientsSection: '',
          container: 'screen-lg:!pt-[60px] screen-md:!pb-[5px] screen-md:!pt-[5px] screen-md:!pb-0',
          title: '',
          subtitle: '',
        }}
      />
      <CrossPlatformTechnologies />
      {pageBlogs?.length !== 0 && (
        <OurInsights
          pageBlogs={pageBlogs}
          classes={{ blogTitle: 'min-md:!text-[24px]/[34px]' }}
        />
      )}
      <CallToActionComponent
        id={ButtonType.LAND4}
        background={getBackground().tellUs}
        withButton
        title={(
          <>
            Tell us about your product idea and let the&nbsp;magic&nbsp;unfold.
          </>
        )}
        btnText="Speak to Our Expert"
        buttonType={ButtonTypes.LIGHT}
      />
      <FAQBlock faqData={FaqData()} withScroll={ScrollVariant.TO_TOP_ITEM} />
    </>
  );
}

export default CrossPlatformAppDevelopmentPageView;
