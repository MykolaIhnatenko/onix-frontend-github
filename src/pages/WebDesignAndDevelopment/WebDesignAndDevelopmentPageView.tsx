import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import TrustUsBlock from '../MainPage/components/TrustUsBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import IndustriesWeServeBlock from '../../components/IndustriesWeServeBlock/IndustriesWeServe';
import ClientsBlock from '../../components/ClientsBlock/ClientsBlock';
import TechnologiesBlock from '../../components/TechnologiesBlock/TechnologiesBlock';
import getTechnologies from '../../utils/getTechnologies';
import AndroidAppEngagementModels from '../AndroidApplicationPageView/components/AndroidAppEngagementModels';
import WebDesignBenefits from './components/WebDesignBenefits';
import AdvantagesBlock from '../../components/AdvantagesBlock/AdvantagesBlock';
import WebProfessionals from './components/WebProfessionals';
import ContentText from '../../components/ContentText/ContentText';
import webDesignQuotesList from './data/webDesignQuotesList';
import webDesignMainScreenData from './data/webDesignMainScreenData.json';
import webDesignTrustUsCardsData from './data/webDesignTrustUsCardsData.json';
import { carouselBottom, carouselTop, webDesignIndustriesWeServeBlockData } from './data/webDesignIndustriesWeServeBlockData';
import { webDesignTechnologiesBlocksData, webDesignTechnologiesBlocksNames } from './data/webDesignTechnologiesBlocksData';
import webDesignEngagementModelsData from './data/webDesignEngagementModelsData';
import webDesignAdvantagesBlock from './data/webDesignAdvantagesBlock';
import webDesignDevelopmentServicesData from './data/webDesignDevelopmentServicesData';
import webDesignFaqData from './data/webDesignFaqData';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import { IPageBlogs } from '../../interfaces/IPages';
import {
  CardBlockVariant,
  AndroidAppEngagementModelsVariant,
  ButtonPathVariant,
  ButtonType,
} from '../../constants/enums';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import TellUsAboutMD from '@/images/img_tell_us_about_md@2x.webp';
import TellUsAboutSM from '@/images/img_tell_us_about_sm@2x.webp';
import IndustriesMainBg from '@/images/industriesPage/img_industries_main_bg@2x.webp';
import IndustriesMainBgMobile from '@/images/industriesPage/img_industries_main_bg_mobile@2x.webp';
import IndustriesMainBgTablet from '@/images/industriesPage/img_industries_main_bg_tablet@2x.webp';
import WebDesignMainScreenImg from '@/images/webDesignPage/img_web_design_main_screen@2x.webp';
import WebDesignCTAFirstBg from '@/images/webDesignPage/callToAction/img_cta_first_bg@2x.webp';
import WebDesignCTAFirstTabletBg from '@/images/webDesignPage/callToAction/img_cta_first_tablet_bg@2x.webp';
import WebDesignCTAFirstMobileBg from '@/images/webDesignPage/callToAction/img_cta_first_mobile_bg@2x.webp';
import WebDesignCTASecondBg from '@/images/webDesignPage/callToAction/img_cta_second_bg@2x.webp';
import WebDesignCTASecondTabletBg from '@/images/webDesignPage/callToAction/img_cta_second_tablet_bg@2x.webp';
import WebDesignCTASecondMobileBg from '@/images/webDesignPage/callToAction/img_cta_second_mobile_bg@2x.webp';
import WebDesignTrustUsBlockBg from '@/images/webDesignPage/trustUsBlock/img_trust_us_block_bg.webp';
import IndustriesMainBgBigDesc from '@/images/industriesPage/img_industries_main_bgBigDesc@2x.webp';
import WebDesignCTAFirstBigBg from '@/images/webDesignPage/callToAction/img_cta_first_big_bg@2x.webp';
import MainBlockWith1TextBtn from 'components/MainBlockWith1TextBtn/MainBlockWith1TextBtn';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';
import WebDesignCaseStudiesBlockMobileBg from '@/images/webDesignPage/caseStudies/img_case_studies_mobile_bg@2x.webp';
import WebDesignCaseStudiesBlockBg from '@/images/webDesignPage/caseStudies/img_case_studies_bg@2x.webp';
import WebDesignCaseStudiesBlockTabletBg from '@/images/webDesignPage/caseStudies/img_case_studies_tablet_bg@2x.webp';

import stylesTrust from './sass/webDesignTrustUsBlock.module.scss';

function WebDesignAndDevelopmentPageView({ pageBlogs }: IPageBlogs) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      callToActionFirst: WebDesignCTAFirstBg,
      mainScreen: IndustriesMainBg,
      callToActionSecond: WebDesignCTASecondBg,
      tellUs: TellUsAboutLG,
      caseStudiesBg: WebDesignCaseStudiesBlockBg,
    };
    if (isXXXLDevice) {
      bg.mainScreen = IndustriesMainBgBigDesc;
      bg.callToActionFirst = WebDesignCTAFirstBigBg;
    } else if (isMDDevice || isSMDevice) {
      bg.callToActionFirst = WebDesignCTAFirstTabletBg;
      bg.mainScreen = IndustriesMainBgTablet;
      bg.callToActionSecond = WebDesignCTASecondTabletBg;
      bg.tellUs = TellUsAboutMD;
      bg.caseStudiesBg = WebDesignCaseStudiesBlockTabletBg;
    } else if (isXSDevice) {
      bg.callToActionFirst = WebDesignCTAFirstMobileBg;
      bg.mainScreen = IndustriesMainBgMobile;
      bg.callToActionSecond = WebDesignCTASecondMobileBg;
      bg.tellUs = TellUsAboutSM;
      bg.caseStudiesBg = WebDesignCaseStudiesBlockMobileBg;
    }
    return bg;
  };

  return (
    <>
      <MainBlockWith1TextBtn
        pageTitle={webDesignMainScreenData.pageTitle}
        pageText={webDesignMainScreenData.pageText}
        btnText={webDesignMainScreenData.btnText}
        rightImg={WebDesignMainScreenImg}
        backgroundImg={getBackground().mainScreen}
        isMobile={isXSDevice || isSMDevice || isMDDevice}
      />
      <WebDesignBenefits />
      <TrustUsBlock
        data={webDesignTrustUsCardsData}
        title="Offshore Website Development Services We Offer"
        subtitle={(
          <ContentText tag="p" className={stylesTrust.text}>
            Web development services at Onix comprise well-established methodologies and a vast
            experience in conveying working and viable web solutions. Build a solid product with
            our top-notch web development services:
          </ContentText>
        )}
        dropBlockBtnTitle="Contact us"
        dropBlockTitle="Sounds interesting? Share your product idea with our expert team."
        variant={CardBlockVariant.WEB_DESIGN}
        dropBlockText="Talk to our experts and get a free consultation."
        dropBlockBgVariant={WebDesignTrustUsBlockBg}
        idBtn={ButtonType.LAND2}
        classes={{
          dropBlock:
            `!flex-[66.6666%] !p-[30px] screen-xl-1:!p-[80px_30px] screen-xl-1:!h-auto
            screen-lg:!h-[420px] screen-md:!p-[20px_20px_40px] screen-sm:!h-[430px]`,
          dropBlockTitle:
            `!text-[36px] !leading-[46px] !pb-[30px] !max-w-[667px] screen-xl-1:!pb-[40px]
            screen-xl-1:!text-[40px] screen-xl-1:!leading-[56px] screen-md:!pb-[20px]
            screen-md:!text-[25px] screen-md:!leading-[35px]`,
          dropBlockText:
            `!relative !z-[2] !m-0 !text-white !max-w-[340px] !text-[20px] !leading-[28px]
            screen-xl-1:!mx-auto screen-xl-1:!pb-[40px] screen-xl-1:!max-w-[667px]
            screen-xl-1:!text-center screen-md:!text-start screen-md:!mx-0`,
          buttonWrapper:
            `!max-w-[420px] screen-xl-1:!max-w-[320px] screen-xl-1:!mx-auto screen-lg:!max-w-[320px]
            screen-md:!min-h-[56px] screen-md:!w-full screen-md:!m-0`,
          button:
            '!max-w-[538px] screen-xl-1:!min-w-[320px] screen-md:!m-0 screen-md:!min-w-auto',
          cardClasses: {
            card:
              `screen-lg:!h-[420px] screen-sm:!h-[430px] [&:nth-child(7)]:!border-b-0
              [&:nth-child(8)]:!border-b-0 [&:nth-child(10)]:!border-b-[2px]
              [&:nth-child(10)]:!border-black screen-xl-1:[&:nth-child(10)]:!border-b-0`,
            title:
              `!text-[36px] !leading-[34px] screen-lg:!text-[24px] screen-lg:!leading-[32px]
              screen-md:!text-[20px] screen-md:!leading-[26px]`,
            boxText:
              `!pr-[5px] screen-xxl:!text-[18px] screen-xxl:!leading-[24px] screen-xl-1:!text-[16px]
              screen-xl-1:!leading-[24px] screen-md:!text-[14px] screen-md:!leading-[20px]`,
          },
        }}
      />
      <ClientsBlock
        title="[ The brands we’ve worked with ]"
        mainTitle="The brands we’ve worked with aren’t trophies, they’re friends we met on our journey!"
        classes={{
          container: '!pt-[160px] screen-xl:!pt-[80px]',
          title: '!text-[18px] !leading-[26px] screen-md:!text-[14px] screen-md:!leading-[26px]',
        }}
      />
      <ReviewBlock
        quotesList={webDesignQuotesList}
      />
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().callToActionFirst}
        withButton
        title={(
          <>
            Kickstart your business by building a top-tier web solution tailored to your customers&apos;&nbsp;needs!
          </>
        )}
        btnText="Contact us"
        classes={{
          cta: `!bg-white !p-[200px_70px] min-xxxl:!p-[200px_80px] screen-lg:!p-[160px_30px_100px]
          screen-md:!p-[60px_30px] screen-sm:!p-[60px_15px]`,
          background: `after:!h-[70px] after:!bottom-0 after:!bg-gradient-to-t after:!from-[#000000]
          min-lg:after:!h-[110px] min-xxxl:after:!h-[70px]`,
          image: 'min-xxxl:!object-bottom',
          title: '!max-w-[1115px] !pb-[60px] screen-lg:!max-w-[708px] screen-lg:!pt-[40px] screen-md:!pb-[30px]',
        }}
      />
      <IndustriesWeServeBlock
        title={webDesignIndustriesWeServeBlockData.pageTitle}
        carouselTop={carouselTop}
        carouselBottom={carouselBottom}
        carouselTopClasses={{
          animation: 'animate-webDesign-projects '
            + 'screen-lg:animate-webDesign-projects-tablet '
            + 'screen-md:animate-webDesign-projects-mobile',
          item: 'screen-lg:max-h-[256px]',
        }}
        carouselBottomClasses={{
          animation: 'animate-webDesign-projects-revert '
            + 'screen-lg:animate-webDesign-projects-tablet-revert '
            + 'screen-md:animate-webDesign-projects-mobile-revert',
          item: 'screen-lg:max-h-[256px]',
        }}
        classes={{
          container: '!pt-[80px]',
          carouselContainer: 'pt-[110px]',
        }}
      />
      <AdvantagesBlock
        blockTitle="What Advantages You Get Using Our Web Development Services"
        data={webDesignAdvantagesBlock}
        classes={{
          title: 'max-w-[871px] screen-lg:max-w-[708px]',
        }}
      />
      <TechnologiesBlock
        pageTitle={webDesignTechnologiesBlocksData.pageTitle}
        technologies={getTechnologies(webDesignTechnologiesBlocksNames, false)}
        classes={{
          container: '!pb-[80px]',
          sectionTitle: '!mb-[60px] screen-lg:!mb-[20px] screen-md:!mb-[40px]',
          technologies: {
            technology: '!overflow-visible !border-b-2 !border-black screen-md:last:!border-none',
            keyTitle: `screen-xl:!float-none screen-xl:!pb-0 min-lg:!pt-[40px]
            min-lg:!pb-[40px] min-md:!pt-[40px]`,
            technologiesList: 'min-lg:!pt-[20px] min-lg:!pb-[20px] screen-xl:!px-0 screen-xl:!left-0',
          },
        }}
      />
      <AndroidAppEngagementModels
        pageTitle={webDesignEngagementModelsData.pageTitle}
        pageText={webDesignEngagementModelsData.pageText}
        firstItemTitle={webDesignEngagementModelsData.firstItemTitle}
        firstItemText={webDesignEngagementModelsData.firstItemText}
        firstItemImg={webDesignEngagementModelsData.firstItemImg}
        firstItemImgTablet={webDesignEngagementModelsData.firstItemImgTablet}
        firstItemImgMobile={webDesignEngagementModelsData.firstItemImgMobile}
        secondItemTitle={webDesignEngagementModelsData.secondItemTitle}
        secondItemText={webDesignEngagementModelsData.secondItemText}
        secondItemImg={webDesignEngagementModelsData.secondItemImg}
        secondItemImgTablet={webDesignEngagementModelsData.secondItemImgTablet}
        secondItemImgMobile={webDesignEngagementModelsData.secondItemImgMobile}
        variant={AndroidAppEngagementModelsVariant.WEB_DESIGN}
      />
      <CallToActionComponent
        background={getBackground().callToActionSecond}
        withButton
        title={(
          <>
            How much does it cost to hire a dedicated team for a web development&nbsp;project?
          </>
        )}
        content={(
          <>
            Specify the number of experts and technologies you need and get an approximate team
            cost for your&nbsp;project!
          </>
        )}
        btnText="Calculate now"
        buttonPathVariant={ButtonPathVariant.CALCULATE}
        classes={{
          cta: `!p-[200px_70px_180px] min-xxxl:!p-[200px_80px_180px] screen-lg:!p-[80px_30px]
          screen-md:!p-[100px_30px] screen-sm:!p-[100px_15px]`,
          background: 'after:!hidden',
          title: '!max-w-[1078px] screen-lg:!max-w-[632px] screen-md:!pb-[15px] screen-md:!max-w-full',
          content: `!max-w-[667px] !pb-[56px] screen-lg:!max-w-[632px] screen-lg:!pb-[40px]
          screen-lg:!text-[18px] screen-lg:!leading-[26px] screen-md:!max-w-full screen-md:!pb-[60px]
          screen-md:!text-[16px] screen-md:!leading-[24px]`,
        }}
      />
      <WebProfessionals />
      <CaseStudiesBlock
        sliderIds={[40, 41, 1, 1000]}
        background={getBackground().caseStudiesBg}
        classes={{
          container: '!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
          bgContainer: '!h-[560px] screen-lg:!h-[790px] screen-md:!h-[250px]',
          bgImg: '!object-center',
        }}
      />
      <DevelopmentServicesWhite
        title={webDesignDevelopmentServicesData.title}
        data={webDesignDevelopmentServicesData.data}
        withoutBackground
        classes={{
          devServices: '!p-[80px_0] screen-md:!p-[80px_0]',
        }}
      />
      {!!pageBlogs?.length && (<OurInsights pageBlogs={pageBlogs} />)}
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
      />
      <FAQBlock faqData={webDesignFaqData} />
    </>
  );
}

export default WebDesignAndDevelopmentPageView;
