import { useAppSelector } from 'hook/reduxToolkit';
import AboutColorTextBlock from '../../components/AboutColorTextBlock/AboutColorTextBlock';
import BlackTextBlock from '../../components/BlackTextBlock/BlackTextBlock';
import IndustryBanner from '../../components/IndustryBanner/IndustryBanner';
import ISportsAndFitnessServices from './interfaces/ISportsAndFitnessServicesView';
import aboutFitnessData from './data/aboutFitnessData.json';
import AboutCardBlock from '../../components/AboutCardBlock/AboutCardBlock';
import cardFitnessData from './data/cardFitnessData';
import OurCaseStudies from '../../components/OurCaseStudies/OurCaseStudies';
import cardOurFitness from './data/cardOurFitness';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import {
  ButtonPathVariant,
  ButtonType,
} from '../../constants/enums';
import ButtonTypes from '../../constants/ButtonTypes';
import FeaterProvideSystems from '../../components/FeaterProvideSystems/FeaterProvideSystems';
import featerProvideFitnessData from './data/featerProvideFitnesData';
import fitnessProcessData from './data/fitnesProcessData.json';
import ContainerActiveBlocks from '../../components/ContainerActiveBlocks/ContainerActiveBlocks';
import TechnologiesBlock from '../../components/TechnologiesBlock/TechnologiesBlock';
import { getTechnologiesBooking } from '../../utils/getTechnologies';
import TechnologiesBlocksFitness from './data/technologiesBlockFitness.json';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import { faqFitnessData } from '../MainPage/data/accordionData';
import OurInsightsBlockFitnessData from './data/carouselFitnessData';
import chooseOnixFitness from './data/chooseOnixFitness';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import sportsQuoteList from './data/sportsQuoteList';
import titleFeaterProvideSystems from './data/titlesFitnes';
import ChooseOnixBlock from '../../components/ChooseOnixBlock/ChooseOnixBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import { containerActiveBlocksBooking, technologiesBlockBlack } from 'constants/tailwindStyle';

import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import sportAndFitness from '@/images/fitness/img_sportAndFitness.webp';
import bgOffer from '@/images/booking/img_bg_Weoffer.webp';
import FitnessContactUsBg from '@/images/fitness/img_fitnessContactUsBg.webp';
import styles from './sass/SportsAndFitness.module.scss';

function SportsAndFitnessServicesView({
  isBannerHidden, pageBlogs,
}: ISportsAndFitnessServices) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

  return (
    <div id="bannerBlock">
      <IndustryBanner
        desc="Development Services"
        title="Sports & Fitness app"
        imageBanner={sportAndFitness}
        isBannerHidden={isBannerHidden}
        colorActive
      />
      <AboutColorTextBlock
        title="[ About Onix ]"
        text="Onix provides sports and fitness app development services "
        textGray="that offer custom solutions for your business needs. "
        text2="Our app development experts can help you create a custom sports or "
        textGray2="fitness app tailored to your requirements and objectives."
        textSecondBlock="Whether you need an app for tracking fitness progress,
         monitoring your sports performance, or simply want a custom
         solution for your sports or fitness business, "
        textGraySecondBlock="Onix is a reliable technology partner on your road to success."
      />
      <BlackTextBlock
        title={aboutFitnessData.title}
        blockText={aboutFitnessData.block1}
        secondBlockText={aboutFitnessData.block2}
      />
      <AboutCardBlock data={cardFitnessData} classes={styles} />
      <OurCaseStudies
        isTablet={isMDDevice || isSMDevice}
        isMobile={isXSDevice}
        upTitle="[ Our Cases in Sports & Fitness Development ]"
        titles={[
          'Onix is a sports app development company trusted by hundreds of clients globally.',
          `So far, we have helped many sports businesses deliver unique user experiences,
          boost digitalization, and meet customer expectations with our tech solutions.`,
          'Here are some of the projects we’ve developed for our clients:',
        ]}
        cardList={cardOurFitness}
      />
      <CallToActionComponent
        background={bgOffer}
        withButton
        content="Specify the number of experts and technologies you need
         and get an approximate team cost for your&nbsp;project!"
        title="How much does hiring a dedicated team to build a digital fitness solution&nbsp;cost?"
        btnText="Calculate now"
        buttonType={ButtonTypes.PRIMARY}
        buttonPathVariant={ButtonPathVariant.CALCULATE}
        classes={{
          cta: `!bg-white !p-[120px_70px] min-xxxl:!p-[120px_80px] screen-lg:!p-[120px_30px]
          screen-md:!p-[80px_30px_115px] screen-sm:!p-[80px_15px_115px]`,
          background: 'after:!hidden',
          title: `!max-w-[1078px] !pb-[40px] !text-black screen-lg:!pb-[30px]
          screen-lg:!max-w-[680px] screen-md:!max-w-full`,
          content: `!text-black !max-w-[900px] !pb-[40px] screen-lg:!max-w-[680px]
          screen-lg:!pb-[30px] screen-md:!max-w-full`,
          btn: '!max-w-[615px] screen-lg:!max-w-[420px] screen-md:!max-w-[330px]',
        }}
      />
      <FeaterProvideSystems
        list={featerProvideFitnessData}
        title={titleFeaterProvideSystems}
        isMobileOrTablet={isXSDevice || isSMDevice || isMDDevice}
      />
      <CallToActionComponent
        id={ButtonType.LAND}
        background={FitnessContactUsBg}
        withButton
        title="Need the best-in-class digital fitness solution for your specific&nbsp;industry?"
        btnText="Contact us"
        classes={{
          cta: `!p-[180px_70px] min-xxxl:!p-[180px_80px] screen-lg:!p-[120px_30px]
          screen-md:!p-[80px_30px_115px] screen-sm:!p-[80px_15px_115px]`,
          background: `after:!h-[70px] after:!bg-[linear-gradient(0deg,rgba(253,253,253,0)_15%,#000_100%)]
          after:!top-0 after:!left-0 min-lg:after:!h-[110px]`,
          title: '!max-w-[968px] screen-lg:!max-w-[708px] screen-lg:!pb-[30px]',
        }}
      />
      <AboutColorTextBlock
        title="[ Our Sports & Fitness Software Development Process ]"
        text="To manage the development process efficiently and stay on the same page with all project stakeholders, "
        textGray="our experts stick to Agile and Lean Inception approaches."
        textSecondBlock="These methodologies allow our sports & fitness development teams to
        choose the most suitable technology strategy, be flexible enough "
        textGraySecondBlock="to change something if the project requires it, and mitigate the risks
        initially. This is how our wellness and fitness app development processes look in detail:"
        classes={{
          containerColorBlock: '!pt-[60px] screen-md:!p-[60px_15px_0]',
          titleColorBox: 'screen-lg:!text-[20px] screen-md:!text-[14px]',
        }}
      />
      <ContainerActiveBlocks
        idBtn={ButtonType.LAND2}
        data={fitnessProcessData}
        title="Ready to kickstart your custom sports & fitness app and engage more clients than ever before?"
        btnTitle="Speak to our expert"
        classes={containerActiveBlocksBooking}
      />
      <ChooseOnixBlock
        title="Why partner with Onix?"
        data={chooseOnixFitness}
      />
      <TechnologiesBlock
        technologies={getTechnologiesBooking(TechnologiesBlocksFitness)}
        titleBlock="[ Technologies we use ]"
        titleDesc="To deliver products of the highest quality, we use a reliable and top-notch set of technologies."
        noShowIcon
        classes={technologiesBlockBlack}
      />
      <ReviewBlock quotesList={sportsQuoteList} />
      {pageBlogs?.length !== 0 && (
        <OurInsights
          pageBlogs={pageBlogs}
          title={OurInsightsBlockFitnessData}
        />
      )}
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={TellUsAboutLG}
        withButton
        title="Tell us about your product idea and let the&nbsp;magic&nbsp;unfold."
        btnText="Speak to Our Expert"
      />
      <FAQBlock faqData={faqFitnessData} />
    </div>
  );
}

export default SportsAndFitnessServicesView;
