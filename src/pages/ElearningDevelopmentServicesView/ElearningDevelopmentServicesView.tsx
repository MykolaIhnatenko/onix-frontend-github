import { useSelector } from 'react-redux';

import IElearningDevelopmentServicesView from './interfaces/IElearningDevelopmentServicesView';
import IndustryBanner from '../../components/IndustryBanner/IndustryBanner';
import AboutColorTextBlock from '../../components/AboutColorTextBlock/AboutColorTextBlock';
import BlackTextBlock from '../../components/BlackTextBlock/BlackTextBlock';
import aboutElerningsData from './data/aboutElerningsData.json';
import aboutLearnings2Data from './data/aboutLearnings2Data.json';
import AboutCardBlock from '../../components/AboutCardBlock/AboutCardBlock';
import cardElerningsData from './data/cardElerningsData';
import OurCaseStudies from '../../components/OurCaseStudies/OurCaseStudies';
import cardOurElernings from './data/cardOurElernings';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import {
  ButtonPathVariant,
  ButtonType,
} from '../../constants/enums';
import ButtonTypes from '../../constants/ButtonTypes';
import FeaterProvideSystems from '../../components/FeaterProvideSystems/FeaterProvideSystems';
import eLearningFuturesData from './data/eLearningFuturesData';
import ScrollTextAnimation from '../../components/ScrollTextAnimation/ScrollTextAnimation';
import ContainerActiveBlocks from '../../components/ContainerActiveBlocks/ContainerActiveBlocks';
import eLearningProcessData from './data/eLearningProcessData.json';
import ChooseOnix from '../OnlineSchedulingAndBookingView/components/ChooseOnix';
import TechnologiesBlock from '../../components/TechnologiesBlock/TechnologiesBlock';
import { getTechnologiesBooking } from '../../utils/getTechnologies';
import techListELearnings from './data/techListELearnings.json';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import eLearningsQuoteList from './data/eLearningsQuoteList';
import { IApp } from '../../store/app/interfaces/IApp';
import IStore from '../../store/interfaces/IStore';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import FaqLearningData from './data/faqLearningsData';
import chooseOnixData from '../OnlineSchedulingAndBookingView/data/chooseOnixData';
import {
  titleFeaterELeraning, titleInsightELearning, titleScrollTextBlock,
} from './data/titlesELearnings';
import AdvantagesBlock from '../../components/AdvantagesBlock/AdvantagesBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import { containerActiveBlocksBooking, technologiesBlockBlack } from 'constants/tailwindStyle';
import elearningAdvantagesData from './data/elearningAdvantagesData';

import IosContactUsBg3 from '@/images/iosPage/img_contact_us_bg3@2x.webp';
import IosContactUsBgTablet3 from '@/images/iosPage/img_contact_us_bg3_tablet@2x.webp';
import IosContactUsBgMobile3 from '@/images/iosPage/img_contact_us_bg3_mobile@2x.webp';
import bgOffer from '@/images/booking/img_bg_Weoffer.webp';
import FitnessContactUsBg from '@/images/fitness/img_fitnessContactUsBg.webp';
import ElerningsBg from '@/images/elernings/img_ElearningDev@2x.webp';

function ElearningDevelopmentServicesView({ isBannerHidden, pageBlogs }: IElearningDevelopmentServicesView) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg = {
      iosThird: IosContactUsBg3,
    };
    if (isSMDevice) {
      bg.iosThird = IosContactUsBgTablet3;
    } else if (isXSDevice) {
      bg.iosThird = IosContactUsBgMobile3;
    }

    return bg;
  };

  return (
    <div id="bannerBlock">
      <IndustryBanner
        desc="Development Services"
        title="E-learning Software"
        imageBanner={ElerningsBg}
        isBannerHidden={isBannerHidden}
        colorActive
      />
      <AboutColorTextBlock
        title="[ About Onix ]"
        text="Onix is an eLearning software development company "
        textGray="that helps organizations of all sizes enhance learning, reduce manual work,
         and deliver a goal-oriented educational experience. "
        textSecondBlock="We craft custom eLearning software solutions that turn your ordinary
         learning concepts into cutting-edge interactive products with a modern, "
        textGraySecondBlock="unique and highly engaging customer experience."
      />
      <BlackTextBlock
        title={aboutElerningsData.title}
        blockText={aboutElerningsData.block1}
        secondBlockText={aboutElerningsData.block2}
      />
      <AboutCardBlock data={cardElerningsData} />
      <OurCaseStudies
        isTablet={isMDDevice || isSMDevice}
        isMobile={isXSDevice}
        upTitle="[ Our cases in eLearning development ]"
        titles={[
          `Onix is a reliable eLearning software development company that creates educational
          products to deliver unique learning processes, boost business efficiency and
          satisfy users’ expectations.`,
          'Check out the recent eLearning projects we\'ve built for our clients:',
        ]}
        cardList={cardOurElernings}
      />
      <CallToActionComponent
        background={bgOffer}
        withButton
        content="Specify the number of experts and technologies you
        need and get an approximate team cost for your&nbsp;project!"
        title="How much does it cost to hire a dedicated team to build an eLearning&nbsp;solution?"
        btnText="Calculate now"
        buttonType={ButtonTypes.PRIMARY}
        buttonPathVariant={ButtonPathVariant.CALCULATE}
        classes={{
          cta: `!bg-white !p-[120px_70px] screen-xxxl:!p-[120px_80px]
            screen-lg:!p-[120px_30px] screen-md:!p-[80px_30px_95px]
            screen-sm:!p-[80px_15px_95px]`,
          background: 'after:!hidden',
          title: '!text-black !max-w-[1085px] screen-lg:!max-w-[672px] screen-lg:!pb-[30px]',
          content: `!pb-[40px] !text-center !text-black !w-[677px] !mx-auto !text-[20px]
            screen-lg:!w-full screen-lg:!pb-[30px]`,
        }}
      />
      <FeaterProvideSystems
        list={eLearningFuturesData}
        title={titleFeaterELeraning}
        isMobileOrTablet={isXSDevice || isSMDevice || isMDDevice}
      />
      <ScrollTextAnimation
        title={titleScrollTextBlock.title}
        textList={titleScrollTextBlock.textList}
        description={titleScrollTextBlock.description}
        scaleIndex={1.26}
        scaleIndexTablet={1.17}
        scaleIndexMobile={1.17}
        themeBlack
        classes={{
          container: '!pb-0 pt-[60px] screen-md:pt-[60px]',
          title: 'screen-lg:mb-[20px]',
          description: 'screen-lg:pb-[80px] screen-md:pb-[60px]',
          itemText: 'screen-md:!text-[18px]/[40px]',
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND}
        background={FitnessContactUsBg}
        withButton
        title="Need a top-tier eLearning solution for your specific&nbsp;industry?"
        btnText="Contact us"
        classes={{
          cta: `!p-[180px_70px] screen-xxxl:!p-[180px_80px] screen-lg:!p-[126px_30px]
            screen-md:!p-[80px_30px_115px] screen-sm:!p-[80px_15px_115px]`,
          background: 'after:!hidden',
          title: `!max-w-[968px] screen-lg:!pb-[30px] screen-lg:!max-w-[666px]
            screen-md:!max-w-[unset]`,
        }}
      />
      <AboutColorTextBlock
        title="[ Cutting-edge eLearning solutions by Onix ]"
        text="We are at the forefront of revolutionizing education and training by integrating "
        textGray="the latest technologies."
        textSecondBlock="Our mission is to redefine learning experiences, making them "
        textGraySecondBlock="engaging, interactive, and highly effective."
        classes={{
          containerColorBlock: `!p-[80px_70px_0] min-xxxl:!p-[80px_80px_0] screen-lg:!p-[80px_30px_0]
          screen-md:!p-[40px_15px_0]`,
        }}
      />
      <AdvantagesBlock
        data={elearningAdvantagesData}
        classes={{
          section: 'pb-[80px] screen-lg:!p-[60px_0_80px] screen-md:!p-[30px_0_100px]',
        }}
      />
      <AboutColorTextBlock
        title="[ Our eLearning software development process ]"
        textSecondBlock="Our eLearning software developers professionally transform unstructured ideas
         into technical description documents, "
        textGraySecondBlock="create working prototypes that visualize the project's concept, and
         search for the best technology strategies and solutions."
        afterTextGray="Our software development model "
        text="is fully transparent and efficient since we use the agile
         approach to manage the development process."
        classes={{
          containerColorBlock: '!pt-[60px] screen-md:!p-[60px_15px_0]',
          titleColorBox: 'screen-lg:!text-[20px] screen-md:!text-[14px]',
        }}
      />
      <ContainerActiveBlocks
        idBtn={ButtonType.LAND2}
        data={eLearningProcessData}
        title="Let's build a game-changing eLearning software!"
        btnTitle="Speak to our expert"
        classes={containerActiveBlocksBooking}
      />
      <ChooseOnix
        data={chooseOnixData}
        title="Why choose Onix"
      />
      <TechnologiesBlock
        technologies={getTechnologiesBooking(techListELearnings)}
        titleBlock="[ Technologies we use ]"
        titleDesc="To deliver products of the highest quality, we use a reliable and top-notch set of technologies."
        noShowIcon
        classes={technologiesBlockBlack}
      />
      <BlackTextBlock
        title={aboutLearnings2Data.title}
        blockText={aboutLearnings2Data.block1}
        secondBlockText={aboutLearnings2Data.block2}
        classes={{
          container: 'screen-lg:!pb-[80px] screen-md:!pb-[60px]',
        }}
      />
      <ReviewBlock quotesList={eLearningsQuoteList} />
      {!!pageBlogs?.length && (
        <OurInsights
          pageBlogs={pageBlogs}
          title={titleInsightELearning}
        />
      )}
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().iosThird}
        withButton
        title="Tell us about your product idea and let the&nbsp;magic&nbsp;unfold."
        btnText="Speak to Our Expert"
      />
      <FAQBlock faqData={FaqLearningData()} />
    </div>
  );
}

export default ElearningDevelopmentServicesView;
