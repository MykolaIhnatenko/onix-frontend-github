import { useAppSelector } from 'hook/reduxToolkit';
import IOnlineSchedulingAndBookingView from './interfaces/IOnlineSchedulingAndBookingView';
import AboutScheduling from './components/AboutScheduling';
import SystemBuildBlock from './components/SystemBuildBlock';
import OurCaseStudies from '../../components/OurCaseStudies/OurCaseStudies';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import bgOffer from '@/images/booking/img_bg_Weoffer.webp';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import CalculateBackgroundLG from '@/images/img_calculate_background_lg.webp';
import BookCarouselTablet from '@/images/carousel/img_BookCarouselTablet.webp';
import BookCarouselMobile from '@/images/carousel/img_BookCarouselMobile.webp';
import BookCarousel from '@/images/carousel/img_book@2x.webp';
import {
  ButtonPathVariant, ButtonType, ChooseOnixVariant,
} from '../../constants/enums';
import ButtonTypes from '../../constants/ButtonTypes';
import FeaterProvideSystems from '../../components/FeaterProvideSystems/FeaterProvideSystems';
import IndustriesWeServeBlock from '../../components/IndustriesWeServeBlock/IndustriesWeServe';
import {
  carouselTop, carouselBottom, bookingWeServeBlockData,
} from './data/carouselData';
import ChooseOnix from './components/ChooseOnix';
import TechnologiesBlock from '../../components/TechnologiesBlock/TechnologiesBlock';
import { getTechnologiesBooking } from '../../utils/getTechnologies';
import { technologiesBlocksNamesBooking } from '../MainPage/data/technologies';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import FaqBookingData from './data/faqBookingData';
import BlackTextBlock from '../../components/BlackTextBlock/BlackTextBlock';
import aboutBookingData from './data/aboutBookinData.json';
import cardBookingData from './data/cardsBookingData';
import AboutCardBlock from '../../components/AboutCardBlock/AboutCardBlock';
import cardStudies from './data/OurCaseStudiesData';
import featerProvideSystems, { titleInsightBooking } from './data/featerProvideSystemsData';
import processBlockData from './data/ProcessBlockData.json';
import ContainerActiveBlocks from '../../components/ContainerActiveBlocks/ContainerActiveBlocks';
import chooseOnixData from './data/chooseOnixData';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import quotesList from './data/quotesList';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import IndustryBanner from 'components/IndustryBanner/IndustryBanner';
import { containerActiveBlocksBooking, technologiesBlockBlack } from 'constants/tailwindStyle';

import bookingIndustries from './sass/bookingIndustries.module.scss';

function OnlineSchedulingAndBookingView({
  isBannerHidden,
  pageBlogs,
}: IOnlineSchedulingAndBookingView) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      main: BookCarousel,
    };
    if (isMDDevice) {
      bg.main = BookCarouselTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.main = BookCarouselMobile;
    }

    return bg;
  };
  return (
    <div id="bannerBlock">
      <IndustryBanner
        title={(
          <>
            Booking System
            <br />
            & Online Scheduling
          </>
        )}
        desc="Development Services"
        imageBanner={getBackground().main}
        isBannerHidden={isBannerHidden}
        classesVariant={bookingIndustries}
        colorActive
      />
      <AboutScheduling
        title="[ About Our Scheduling Software Development Company ]"
        text="Onix is a booking software development company that builds
        comprehensive and cost-effective solutions to optimize business operations, "
        textGray="provide your customers with a smooth booking experience, and strengthen your market position."
        textGraySecond="Let&rsquo;s harness the power of a custom booking system and make your appointments "
        textSecond="and bookings work for your business while freeing up your time to focus on the work that matters!"
      />
      <BlackTextBlock
        title={aboutBookingData.title}
        blockText={aboutBookingData.block1}
        secondBlockText={aboutBookingData.block2}
      />
      <AboutCardBlock data={cardBookingData} classes={bookingIndustries} />
      <SystemBuildBlock />
      <OurCaseStudies
        isTablet={isMDDevice || isSMDevice}
        isMobile={isXSDevice}
        upTitle="[ Our case studies ]"
        titles={`Online scheduling and booking systems built by Onix specialists exceed our clients' business
          expectations!`}
        cardList={cardStudies}
        classes={{ titleCard: 'max-w-[764px]' }}
      />
      <CallToActionComponent
        background={bgOffer}
        withButton
        content="Specify the number of experts and technologies you need and get an
         approximate team cost for your&nbsp;project!"
        title="How much does it cost to hire a dedicated team to build online scheduling and booking&nbsp;system?"
        btnText="Calculate now"
        buttonType={ButtonTypes.PRIMARY}
        buttonPathVariant={ButtonPathVariant.CALCULATE}
        classes={{
          cta: `!bg-white !p-[200px_70px_64px] min-xxxl:!p-[200px_80px_64px]
            screen-lg:!p-[120px_30px] screen-md:!p-[60px_30px_60px]
            screen-sm:!p-[60px_15px_60px]`,
          background: 'after:!hidden',
          title: `!pb-[40px] !text-center !text-black !max-w-[1100px]
            screen-lg:!pb-[30px]`,
          content: `!pb-[56px] !text-center !text-black !max-w-[1039px]
            !m-[0_auto] !text-[20px] screen-lg:!max-w-[677px] screen-lg:!pb-[30px]
            screen-md:!max-w-full`,
          btn: 'screen-lg:!text-[18px]',
        }}
      />
      <FeaterProvideSystems
        list={featerProvideSystems}
        title="Core features we provide for online booking systems"
        isMobileOrTablet={isXSDevice || isSMDevice || isMDDevice}
      />
      <IndustriesWeServeBlock
        title={bookingWeServeBlockData.pageTitle}
        carouselTop={carouselTop}
        carouselBottom={carouselBottom}
        carouselTopClasses={{
          animation: 'animate-main-projects '
            + 'screen-lg:animate-main-projects-tablet '
            + 'screen-md:animate-main-projects-mobile',
        }}
        carouselBottomClasses={{
          animation: 'animate-main-projects-revert '
            + 'screen-lg:animate-main-projects-tablet-revert '
            + 'screen-md:animate-main-projects-mobile-revert',
        }}
        classes={{
          container: '!pt-[80px]',
          carouselContainer: 'pt-[110px]',
        }}
      />
      <ChooseOnix
        data={chooseOnixData}
        title="Why choose Onix"
        variant={ChooseOnixVariant.BOOKING}
      />
      <CallToActionComponent
        id={ButtonType.LAND}
        background={CalculateBackgroundLG}
        withButton
        title="Digitalize your scheduling and booking flow to reduce administrative work
        and escalate your&nbsp;revenue!"
        btnText="Contact us"
        classes={{
          cta: `!p-[186px_70px] min-xxxl:!p-[186px_80px] screen-lg:!p-[120px_30px]
            screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
          background: `after:!bg-gradient-to-b after:!from-transparent after:!to-black
            after:!to-[100%] after:!bottom-0 min-lg:after:!h-[110px]`,
          title: `!pb-[60px] !max-w-[968px]
            screen-lg:!max-w-[708px] screen-lg:!pb-[30px]`,
        }}
      />
      <AboutScheduling
        title="[ Our online booking system development process ]"
        text="Our booking app developers professionally transform unstructured
         ideas into technical description documents, "
        textGray="create working prototypes that visualize the project's concept,
         and search for the best technology strategies and solutions."
        textGraySecond="Our software development model "
        textSecond="is fully transparent and efficient since we use the agile
         approach to manage the development process."
        revertBlock
      />
      <ContainerActiveBlocks
        idBtn={ButtonType.LAND2}
        data={processBlockData}
        title="Ready to kickstart your custom online scheduling & booking system?"
        btnTitle="SPEAK TO OUR EXPERT"
        classes={containerActiveBlocksBooking}
      />
      <ReviewBlock quotesList={quotesList} />
      <TechnologiesBlock
        technologies={getTechnologiesBooking(technologiesBlocksNamesBooking)}
        titleBlock="[ Technologies we use ]"
        titleDesc="To deliver products of the highest quality, we use a reliable and top-notch set of technologies."
        noShowIcon
        classes={technologiesBlockBlack}
      />
      {!!pageBlogs?.length && (
        <OurInsights
          pageBlogs={pageBlogs}
          title={titleInsightBooking}
        />
      )}
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={TellUsAboutLG}
        withButton
        title="Tell us about your product idea and let the&nbsp;magic&nbsp;unfold."
        btnText="Speak to Our Expert"
      />
      <FAQBlock faqData={FaqBookingData()} />
    </div>
  );
}

export default OnlineSchedulingAndBookingView;
