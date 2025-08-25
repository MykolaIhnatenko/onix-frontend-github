import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import getTechnologies from '../../utils/getTechnologies';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import IndustriesWeServeBlock from '../../components/IndustriesWeServeBlock/IndustriesWeServe';
import TrustUsBlock from '../MainPage/components/TrustUsBlock';
import ProcessBlock from '../../components/ProcessBlock/ProcessBlock';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import TechnologiesBlock from '../../components/TechnologiesBlock/TechnologiesBlock';
import SoftwareProductBlock from '../../components/SoftwareProductBlock/SoftwareProductBlock';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import AndroidAppOffer from './components/AndroidAppOffer';
import AndroidAppStatsBlock from './components/AndroidAppStatsBlock';
import ClientsBlock from '../../components/ClientsBlock/ClientsBlock';
import ApproachSection from '../../components/Approachblock/ApproachSection';
import AndroidAppEngagementModels from './components/AndroidAppEngagementModels';
import MainBlockWith2text from 'components/MainBlockWith2text/MainBlockWith2text';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import androidAppQuotesList from './data/androidAppQuotesList';
import androidAppDevelopmentData from './data/androidAppDevelopmentData';
import androidAppSoftwareProductData from './data/androidAppSoftwareProductData';
import androidAppStatsBlockData from './data/androidAppStatsBlockData';
import AndroidAppFaqData from './components/AndroidAppFaqData';
import androidMainScreenData from './data/androidMainScreenData';
import { androidAppIndustriesCarouselData, androidCarouselBottom } from './data/androidAppIndustriesCarouselData';
import { androidProcessAccordionData, androidProcessBlockContent, androidProcessImages } from './data/androidAppProcessData';
import { androidAppTrustUsBlockData, androidAppTrustUsCardsData } from './data/androidAppTrustUsBlockData';
import { androidAppTechnologiesBlocksData, androidAppTechnologiesBlocksNames } from './data/androidAppTechnologiesBlockData';
import androidAppApproachBlockData from './data/androidAppApproachData';
import androidAppEngagementModelsData from './data/androidAppEngagementModelsData';
import { carouselTop } from '../MainPage/data/industriesWeServeCarouselData';
import { ButtonType } from '../../constants/enums';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import approachBlockClasses from './tailwind/approachSection';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';
import IAchievements from '../../interfaces/IAchievements';

import AndroidAppLetDevelopBg from '@/images/androidApplication/img_androidLetDevelopBg.webp';
import AndroidAppLetDevelopTabletBg from '@/images/androidApplication/img_androidLetDevelopTabletBg@2x.webp';
import AndroidAppLetDevelopMobileBg from '@/images/androidApplication/img_androidLetDevelopMobileBg.webp';
import AndroidAppCallTellUsBg from '@/images/img_android_tell_us_bg.webp';
import AndroidAppCallTellUsTabletBg from '@/images/img_android_tell_us_tablet_bg.webp';
import AndroidAppCallTellUsMobileBg from '@/images/img_android_tell_us_mobile_bg.webp';
import AndroidAppCallBg from '@/images/img_android_call_bg@2x.webp';
import TellUsAboutSM from '@/images/img_lastCtaMobile@2x.webp';
import TellUsAboutMD from '@/images/img_lastCtaTablet@2x.webp';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import AndroidAppStartBlockBg from '@/images/androidApplication/startBlock/img_android_app_start_block_bg@2x.png';
import AndroidAppStartBlockTabletBg from '@/images/androidApplication/startBlock/img_android_app_start_block_tablet_bg@2x.png';
import AndroidAppStartBlockMobileBg from '@/images/androidApplication/startBlock/img_android_app_start_block_mobile_bg@2x.png';
import AndroidPageImg from '@/images/androidApplication/startBlock/img_right_col_bg@2x.png';
import IndustriesBgXXXL from '@/images/industriesWeServe/img_bgXXXL.webp';
import IndustriesBg from '@/images/industriesWeServe/img_bg.webp';
import IndustriesBgTablet from '@/images/industriesWeServe/img_bgTablet.webp';
import IndustriesBgMobile from '@/images/industriesWeServe/img_bgMobile.webp';

function AndroidApplicationPageView({ achievements }:IAchievements) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
      isLGDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      mainScreen: AndroidAppStartBlockBg,
      tellUs: TellUsAboutLG,
      androidCall: AndroidAppCallBg,
      androidTellUs: AndroidAppCallTellUsBg,
      androidAppLetDevelop: AndroidAppLetDevelopBg,
      industriesBg: IndustriesBg,
    };

    if (isXXXLDevice || isLGDevice) {
      bg.industriesBg = IndustriesBgXXXL;
    } else if (isMDDevice || isSMDevice) {
      bg.mainScreen = AndroidAppStartBlockTabletBg;
      bg.tellUs = TellUsAboutMD;
      bg.androidCall = AndroidAppCallBg;
      bg.androidTellUs = AndroidAppCallTellUsTabletBg;
      bg.androidAppLetDevelop = AndroidAppLetDevelopTabletBg;
      bg.industriesBg = IndustriesBgTablet;
    } else if (isXSDevice) {
      bg.mainScreen = AndroidAppStartBlockMobileBg;
      bg.tellUs = TellUsAboutSM;
      bg.androidCall = AndroidAppCallBg;
      bg.androidTellUs = AndroidAppCallTellUsMobileBg;
      bg.androidAppLetDevelop = AndroidAppLetDevelopMobileBg;
      bg.industriesBg = IndustriesBgMobile;
    }
    return bg;
  };

  return (
    <>
      <MainBlockWith2text
        title={androidMainScreenData.title}
        firstText={androidMainScreenData.firstText}
        secondText={androidMainScreenData.secondText}
        blockBg={getBackground().mainScreen}
        rightImg={AndroidPageImg}
      />
      <AndroidAppOffer />
      <AchievementsBlock achievements={achievements} />
      <DevelopmentServicesWhite
        title={androidAppDevelopmentData.title}
        description={androidAppDevelopmentData.desc}
        data={androidAppDevelopmentData.data}
        withoutBackground
        accordionOnMobile
        classes={{
          devServices: 'screen-md:!pb-0',
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND2}
        background={getBackground().androidCall}
        withButton
        content={(
          <>
            Using our Product Discovery phase services, you can validate your product
            concept and test its market feasibility and&nbsp;viability!
          </>
        )}
        title={(
          <>
            If you&apos;re not sure about your Android app idea, we can
            give you professional advice on your future product&apos;s&nbsp;viability.
          </>
        )}
        btnText="Talk to our experts"
        classes={{
          cta: 'px-[70px]',
          background: 'after:!content-none',
          title: '!max-w-[1080px] !text-white',
          content: 'screen-lg:!max-w-[670px] screen-lg:!pb-[40px]',
        }}
      />
      <ReviewBlock
        quotesList={androidAppQuotesList}
      />
      <SoftwareProductBlock
        title={androidAppSoftwareProductData.title}
        mainText={androidAppSoftwareProductData.mainText}
        data={androidAppSoftwareProductData.data}
        background={androidAppSoftwareProductData.background}
      />
      <CaseStudiesBlock
        sliderIds={[40, 50, 30, 1000]}
        classes={{
          container: '!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
        }}
      />
      <AndroidAppStatsBlock
        data={androidAppStatsBlockData}
      />
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().androidTellUs}
        withButton
        title={(
          <>
            What is your Android app&nbsp;idea?
          </>
        )}
        btnText="Contact to our experts"
        classes={{
          cta: 'screen-lg:!p-[98px_30px_120px] screen-md:!p-[60px_30px_80px] screen-sm:!p-[60px_15px_80px]',
          background: 'after:!content-none',
          title: '!text-white !pb-[56px] screen-lg:!pb-[40px]',
          btn: 'screen-md:!p-[16px_5px]',
        }}
      />
      <ApproachSection
        title={androidAppApproachBlockData.title}
        data={androidAppApproachBlockData.data}
        isMobileOrTablet={isXSDevice || isSMDevice || isMDDevice}
        smallerTitleText
        classes={approachBlockClasses}
      />
      <IndustriesWeServeBlock
        upTitle={androidAppIndustriesCarouselData.upTitle}
        title={androidAppIndustriesCarouselData.pageTitle}
        background={getBackground().industriesBg}
        carouselTop={carouselTop}
        carouselBottom={androidCarouselBottom}
        carouselTopClasses={{
          animation: 'animate-android-projects '
            + 'screen-lg:animate-android-projects-tablet '
            + 'screen-md:animate-android-projects-mobile',
        }}
        carouselBottomClasses={{
          animation: 'animate-android-projects-revert '
            + 'screen-lg:animate-android-projects-tablet-revert '
            + 'screen-md:animate-android-projects-mobile-revert',
        }}
        classes={{ carouselContainer: 'screen-lg:pt-[40px]' }}
      />
      <ProcessBlock
        data={androidProcessAccordionData}
        imagesData={androidProcessImages}
        title={androidProcessBlockContent.title}
        subtitle={androidProcessBlockContent.subtitle}
        firstText={androidProcessBlockContent.firstText}
        secondText={androidProcessBlockContent.secondText}
        classes={{ container: '!pb-[120px] screen-lg:!pb-[80px]' }}
      />
      <CallToActionComponent
        id={ButtonType.LAND4}
        background={getBackground().androidAppLetDevelop}
        withButton
        title={(
          <>
            No matter what idea you have, we can transform it into a powerful and&nbsp;profitable&nbsp;tool!
          </>
        )}
        btnText="Let's develop your app"
        classes={{
          cta: '!py-[200px] screen-lg:!p-[126px_30px] screen-md:!p-[80px_30px_100px] screen-sm:!p-[80px_15px_100px]',
          background: 'after:!height-[70px]',
          title: 'text-white !pb-[56px] !max-w-[1130px] screen-lg:!pb-[40px]',
        }}
      />
      <TrustUsBlock
        idBtn={ButtonType.LAND5}
        data={androidAppTrustUsCardsData}
        title={androidAppTrustUsBlockData.title}
        dropBlockTitle={androidAppTrustUsBlockData.lastCardTitle}
        dropBlockBtnTitle={androidAppTrustUsBlockData.btnTitle}
        classes={{
          sectionTitle: '!max-w-[1078px] screen-lg:!mb-[40px] screen-md:!mb-[30px]',
          CardsBlockClasses: {
            dropBlock: `!bg-black !w-full !relative !z-[2] !p-[20px] !justify-between
            screen-xl:!h-[320px] screen-xl:!justify-start screen-xl:!p-[84px_30px]
            screen-md:!h-[320px] screen-md:!justify-between screen-md:!p-[20px]`,
            dropBlockTitle: 'screen-xl:!pb-[40px]',
            buttonWrapper: 'screen-xl:!w-[420px] screen-xl:!max-w-[420px] screen-md:!w-full',
          },
        }}
      />
      <TechnologiesBlock
        pageTitle={androidAppTechnologiesBlocksData.pageTitle}
        technologies={getTechnologies(androidAppTechnologiesBlocksNames)}
        classes={{
          sectionTitle: '!max-w-[1006px]',
          technologies: {
            technology: '[&:not(:last-child)]:!border-b-[2px] !border-black',
            keyTitle: `!w-[17%] !min-w-[280px] min-md:!pt-[40px] min-lg:!pt-[40px]
            min-lg:!float-none min-xl:!float-left`,
            technologiesList: `min-md:!p-[13px_0_28px_0] min-lg:!left-0 min-lg:!overflow-visible
              min-xl:!p-[20px_0_20px_20px] min-xl:!overflow-auto`,
            item: '!py-[5px] min-md:!py-[12px] min-lg:!py-[20px] [&:last-of-type]:!mr-0',
          },
        }}
      />
      <AndroidAppEngagementModels
        pageTitle={androidAppEngagementModelsData.pageTitle}
        firstItemTitle={androidAppEngagementModelsData.firstItemTitle}
        firstItemText={androidAppEngagementModelsData.firstItemText}
        firstItemImg={androidAppEngagementModelsData.firstItemImg}
        firstItemImgTablet={androidAppEngagementModelsData.firstItemImgTablet}
        firstItemImgMobile={androidAppEngagementModelsData.firstItemImgMobile}
        secondItemTitle={androidAppEngagementModelsData.secondItemTitle}
        secondItemText={androidAppEngagementModelsData.secondItemText}
        secondItemImg={androidAppEngagementModelsData.secondItemImg}
        secondItemImgTablet={androidAppEngagementModelsData.secondItemImgTablet}
        secondItemImgMobile={androidAppEngagementModelsData.secondItemImgMobile}
      />
      <ClientsBlock
        title="[ Our clients ]"
        mainTitle="The brands we've worked with aren't trophies, they're friends we make on our journey!"
        classes={{
          clientsSection: '',
          container: '!pt-[80px]',
          title: '!mt-0',
          subtitle: 'screen-lg:!pb-10',
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND6}
        background={getBackground().tellUs}
        withButton
        title={(
          <>
            Tell us about your product idea
            and let the&nbsp;magic&nbsp;unfold.
          </>
        )}
        btnText="Speak to Our Expert"
      />
      <FAQBlock faqData={AndroidAppFaqData()} />
    </>
  );
}

export default AndroidApplicationPageView;
