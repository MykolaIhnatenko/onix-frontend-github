import { StaticImageData } from 'next/image';
import { useSelector } from 'react-redux';

import img_LmsBg from '@/images/LMS/img_LmsBg@2x.webp';
import img_LmsBgTablet from '@/images/LMS/img_LmsBgTablet.webp';
import img_LmsBgMobile from '@/images/LMS/img_LmsBgMobile.webp';
import BDCallBottomDesktop from '@/images/brandingDesign/img_bd_call_bottom_desktop.webp';
import bgOffer from '@/images/booking/img_bg_Weoffer.webp';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import { IApp } from '../../store/app/interfaces/IApp';
import IStore from '../../store/interfaces/IStore';
import ILMSDevelopment from './interfaces/ILMSDevelopment';
import IndustryBanner from '../../components/IndustryBanner/IndustryBanner';
import AboutColorTextBlock from '../../components/AboutColorTextBlock/AboutColorTextBlock';
import BlackTextBlock from '../../components/BlackTextBlock/BlackTextBlock';
import aboutLMSData from './data/aboutLMSData.json';
import AboutCardBlock from '../../components/AboutCardBlock/AboutCardBlock';
import {
  ButtonPathVariant, ButtonType, VariantColorText,
} from '../../constants/enums';
import cardsLMSData from './data/cardsLMSData';
import OurCaseStudies from '../../components/OurCaseStudies/OurCaseStudies';
import cardOurLMS from './data/cardOurLMS';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import ButtonTypes from '../../constants/ButtonTypes';
import lmsProvideData from './data/lmsProvideData';
import FeaterProvideSystems from '../../components/FeaterProvideSystems/FeaterProvideSystems';
import AboutScheduling from '../OnlineSchedulingAndBookingView/components/AboutScheduling';
import lmsAppDevelopmentData from './data/lmsAppDevData';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import ContainerActiveBlocks from '../../components/ContainerActiveBlocks/ContainerActiveBlocks';
import lmsProcessData from './data/lmsProcessData.json';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import lmsQuoteList from './data/lmsQuoteList';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import faqDataLMS from './data/faqDataLMS';
import techListLMS from './data/techListLMS.json';
import SimpleTechBlock from '../../components/SimpleTechBlock/SimpleTechBlock';
import titleSpeakExpertLMS from './data/titlesLMS';
import DevelopmentServicesBlack from 'components/DevelopmentServicesBlack/DevelopmentServicesBlack';
import { containerActiveBlocksBooking } from 'constants/tailwindStyle';

import styles from './sass/view.module.scss';

function LMSDevelopmentView({ isBannerHidden, pageBlogs }: ILMSDevelopment) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      lmsBg: img_LmsBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.lmsBg = img_LmsBgTablet;
    } else if (isXSDevice) {
      bg.lmsBg = img_LmsBgMobile;
    }
    return bg;
  };

  return (
    <div id="bannerBlock">
      <IndustryBanner
        desc="Development Services"
        title="LMS Software"
        imageBanner={getBackground().lmsBg}
        isBannerHidden={isBannerHidden}
        colorActive
      />
      <AboutColorTextBlock
        title="[ About Onix ]"
        text="Onix is an LMS development company with 20+ years of experience "
        textGray="professionally building top-notch learning management systems tailored to specific business needs."
        textSecondBlock="We get the most out of cutting-edge technologies to
         deliver customizable, intuitive, and flexible LMS "
        textGraySecondBlock="software that will surely revolutionize the learning experience of your users!"
      />
      <BlackTextBlock
        title={aboutLMSData.title}
        blockText={aboutLMSData.block1}
        secondBlockText={aboutLMSData.block2}
      />
      <AboutCardBlock data={cardsLMSData} classes={styles} />
      <OurCaseStudies
        isTablet={isMDDevice || isSMDevice}
        isMobile={isXSDevice}
        upTitle="[ Our recent LMS projects ]"
        titles="Learning management systems built by Onix specialists deliver unique learning processes,
         boost business efficiency, and satisfy our clients’ expectations."
        cardList={cardOurLMS}
        whiteTheme
      />
      <CallToActionComponent
        id={ButtonType.LAND}
        background={bgOffer}
        withButton
        title="Start an eLearning business with our innovative and custom LMS adapted to your&nbsp;needs!"
        btnText="Contact us"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!bg-white !p-[160px_70px] screen-lg:!p-[120px_30px_80px] screen-md:!p-[80px_30px_60px]
          screen-sm:!p-[80px_15px_60px]`,
          background: 'after:!hidden',
          title: '!max-w-[1100px] !pb-[40px] !text-black screen-lg:!pb-[30px]',
          btn: 'screen-lg:!text-[18px] screen-md:!text-[16px]',
        }}
      />
      <FeaterProvideSystems
        list={lmsProvideData}
        title={titleSpeakExpertLMS}
        isMobileOrTablet={isXSDevice || isSMDevice || isMDDevice}
      />
      <CallToActionComponent
        background={TellUsAboutLG}
        withButton
        title="How much does it cost to hire a dedicated team to build custom LMS&nbsp;software?"
        content="Specify the number of experts and technologies you
        need and get an approximate team cost for your&nbsp;project!"
        btnText="Calculate now"
        buttonPathVariant={ButtonPathVariant.CALCULATE}
        classes={{
          cta: '!p-[180px_70px] screen-lg:!p-[120px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
          background: 'after:!hidden',
          image: 'screen-md:!object-bottom',
          title: '!max-w-[1080px] screen-lg:!max-w-[580px] screen-lg:!pb-[30px] screen-md:!max-w-none',
          content: '!pb-[50px] !max-w-[710px] screen-lg:!max-w-[700px] screen-lg:!pb-[30px] screen-md:!max-w-none',
        }}
      />
      <DevelopmentServicesBlack
        title={lmsAppDevelopmentData.pageTitle}
        data={lmsAppDevelopmentData.data}
        withoutBackground
        classes={{
          devServices: '!pt-[80px] screen-md:!p-[80px_0]',
        }}
      />
      <AboutScheduling
        title="[ Our Custom LMS Development Process ]"
        text="Our LMS development experts professionally transform unstructured
         ideas into technical description documents, "
        textGray="create working prototypes that visualize the project's concept,
        and search for the best technology strategies and solutions."
        textGraySecond="Our software development model "
        textSecond="is fully transparent and efficient since we use the agile
         approach to manage the development process."
        variant={VariantColorText.LMS_BOTTOM_PADDING}
        revertBlock
      />
      <ContainerActiveBlocks
        idBtn={ButtonType.LAND2}
        data={lmsProcessData}
        title="Unleash the power of LMS and launch your groundbreaking eLearning business with us!"
        btnTitle="Speak to our expert"
        classes={containerActiveBlocksBooking}
      />
      <ReviewBlock quotesList={lmsQuoteList} />
      <SimpleTechBlock
        list={techListLMS.techList}
        titleBlock={techListLMS.title}
        titleDesc={techListLMS.label}
      />
      {pageBlogs?.length !== 0 && (
        <OurInsights
          pageBlogs={pageBlogs}
          title={(
            <span>
              Our Insights Into
              <br />
              Building e-Learning Platforms
            </span>
          )}
        />
      )}
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={BDCallBottomDesktop}
        withButton
        title="Tell us about your product idea and let the&nbsp;magic&nbsp;unfold."
        btnText="Speak to Our Expert"
      />
      <FAQBlock faqData={faqDataLMS} />
    </div>
  );
}

export default LMSDevelopmentView;
