import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import AboutColorTextBlock from '../../components/AboutColorTextBlock/AboutColorTextBlock';
import BlackTextBlock from '../../components/BlackTextBlock/BlackTextBlock';
import IndustryBanner from '../../components/IndustryBanner/IndustryBanner';
import AboutCardBlock from '../../components/AboutCardBlock/AboutCardBlock';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import ChooseOnix from '../OnlineSchedulingAndBookingView/components/ChooseOnix';
import ContainerActiveBlocks from '../../components/ContainerActiveBlocks/ContainerActiveBlocks';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import NumbersBlock from '../../components/NumbersBlock/NumbersBlock';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import AdvantagesBlock from '../../components/AdvantagesBlock/AdvantagesBlock';
import BenefitsSection from '../BrandingDesignPageView/components/BenefitsSection';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import TravelTechnologiesBlock from './components/TravelTechnologiesBlock';
import TravelHoverAccordion from './components/TravelHoverAccordion';
import travelFaqData from './data/travelFaqData';
import blackTextBlockData from './data/blackTextBlockData.json';
import travelProcessData from './data/travelProcessData.json';
import travelNumberData from './data/travelNumberData';
import travelQuotesList from './data/travelQuotesList';
import travelAdvantagesBlockData from './data/travelAdvantagesBlockData';
import travelBenefitsSectionData from './data/travelBenefitsSectionData';
import travelChooseOnixData from './data/travelChooseOnixData';
import cardTravelData from './data/cardTravelData';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import ButtonTypes from '../../constants/ButtonTypes';
import ITravelSoftwarePageView from './interfaces/ITravelSoftwarePageView';
import {
  AboutColorTextBlockVariant,
  BenefitsSectionVariant,
  ButtonPathVariant,
  ButtonType,
  ChooseOnixVariant,
  DropBlockVariant,
} from '../../constants/enums';
import TravelCallToActionFirst from '@/images/travelHospitalityPage/callToActionBlock/img_TravelCTABg.webp';
import TravelCallToActionMobileFirst from '@/images/travelHospitalityPage/callToActionBlock/img_TravelCTAMobileBg.webp';
import TravelCallToActionTabletFirst from '@/images/travelHospitalityPage/callToActionBlock/img_TravelCTATabletBg.webp';
import TravelCTASecondBg from '@/images/travelHospitalityPage/callToActionBlock/img_TravelCTABgSecond.webp';
import TravelCTASecondTabletBg from '@/images/travelHospitalityPage/callToActionBlock/img_TravelCTASecondTabletBg.webp';
import TravelCTASecondMobileBg from '@/images/travelHospitalityPage/callToActionBlock/img_TravelCTASecondMobileBg.webp';
import TravelCallToActionThird from '@/images/travelHospitalityPage/callToActionBlock/img_TravelCTABgThird.webp';
import TravelCallToActionThirdTablet from '@/images/travelHospitalityPage/callToActionBlock/img_TravelCTABgThirdTablet.webp';
import TravelCallToActionThirdMobile from '@/images/travelHospitalityPage/callToActionBlock/img_TravelCTABgThirdMobile.webp';
import TravelCallToActionFourth from '@/images/travelHospitalityPage/callToActionBlock/img_TravelCTABgFourth.webp';
import TravelMainBg from '@/images/travelHospitalityPage/img_travelMainBg.webp';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import BgCaseStudies from '@/images/travelHospitalityPage/caseStudies/img_bg_case_studies.webp';
import BgCaseStudiesTablet from '@/images/travelHospitalityPage/caseStudies/img_bg_case_studiesTablet.webp';
import BgCaseStudiesMobile from '@/images/travelHospitalityPage/caseStudies/img_bg_case_studiesMobile.webp';
import TravelHoverAccordionBg from '@/images/travelHospitalityPage/hoverAccordion/img_travelHoverAccordionBg.webp';
import TravelHoverAccordionBgTablet from '@/images/travelHospitalityPage/hoverAccordion/img_travelHoverAccordionBgTablet.webp';
import TravelHoverAccordionBgMobile from '@/images/travelHospitalityPage/hoverAccordion/img_travelHoverAccordionBgMobile.webp';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';

import travelIndustries from './sass/travelIndustries.module.scss';

function TravelSoftwarePageView({
  isBannerHidden, pageBlogs,
}: ITravelSoftwarePageView) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      callToAction: TravelCallToActionFirst,
      callToActionSecond: TravelCTASecondBg,
      callToActionThird: TravelCallToActionThird,
      callToActionFourth: TravelCallToActionFourth,
      caseStudiesBg: BgCaseStudies,
      travelHoverAccordionBg: TravelHoverAccordionBg,
    };

    if (isMDDevice || isSMDevice) {
      bg.callToAction = TravelCallToActionTabletFirst;
      bg.callToActionSecond = TravelCTASecondTabletBg;
      bg.callToActionThird = TravelCallToActionThirdTablet;
      bg.callToActionFourth = TravelCTASecondTabletBg;
      bg.caseStudiesBg = BgCaseStudiesTablet;
      bg.travelHoverAccordionBg = TravelHoverAccordionBgTablet;
    } else if (isXSDevice) {
      bg.callToAction = TravelCallToActionMobileFirst;
      bg.callToActionSecond = TravelCTASecondMobileBg;
      bg.callToActionThird = TravelCallToActionThirdMobile;
      bg.callToActionFourth = TravelCallToActionMobileFirst;
      bg.caseStudiesBg = BgCaseStudiesMobile;
      bg.travelHoverAccordionBg = TravelHoverAccordionBgMobile;
    }

    return bg;
  };

  return (
    <div id="bannerBlock">
      <IndustryBanner
        desc="Software Development Company"
        title="Travel & Hospitality"
        imageBanner={TravelMainBg}
        isBannerHidden={isBannerHidden}
        classesVariant={travelIndustries}
        colorActive
      />
      <AboutColorTextBlock
        title="[ About Onix ]"
        text="Onix is a travel and hospitality tech company with 23+ years of experience "
        textGray="professionally turning your ideas into tailor-made software."
        textSecondBlock="We get the most out of cutting-edge technologies to build reliable travel
         and hospitality solutions that"
        textGraySecondBlock=" accomplish your business goals and keep users satisfied."
        variant={AboutColorTextBlockVariant.TRAVEL}
      />
      <TravelHoverAccordion background={getBackground().travelHoverAccordionBg} />
      <CallToActionComponent
        id={ButtonType.LAND}
        background={getBackground().callToAction}
        withButton
        title={(
          <>
            Exceptional experiences. Seamless operations. High business efficiency.
            {' '}
            <br />
            We empower you to stay ahead of the&nbsp;curve!
          </>
        )}
        btnText="Get a free consultation"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!overflow-hidden !bg-white !p-[160px_70px] min-xxxl:!p-[160px_80px]
          screen-lg:!p-[120px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
          background: `!h-[490px] screen-lg:!h-[482px] max-sm:!h-[380px]
          after:!bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#ffffff_100%)]`,
          title: `!max-w-[1085px] !text-black screen-lg:!pb-[30px]
          screen-lg:!max-w-[672px] screen-md:!pb-[30px] screen-md:!max-w-full`,
        }}
      />
      <NumbersBlock
        data={travelNumberData}
        classes={{
          table: `!bg-black !mt-0 !p-[54px_70px_0] min-xxxl:!p-[54px_80px_0]
            screen-lg:!p-[50px_30px_0] screen-md:!p-[60px_15px_0]`,
          rowClasses: {
            tableRow: `!border-b-[2px] !border-solid !border-white !p-[20px_0]
              min-md:!p-[30px_0] min-lg:!flex-row min-xxl:!p-[26px_0_30px]
              not-last:!border-b-[2px] not-last:!border-solid not-last:!border-white
              last:!border-none`,
            title: '!text-white',
            text: '!text-white',
          },
        }}
      />
      <AchievementsBlock />
      <ReviewBlock
        quotesList={travelQuotesList}
      />
      <BlackTextBlock
        title={blackTextBlockData.title}
        blockText={blackTextBlockData.block1}
        secondBlockText={blackTextBlockData.block2}
        classes={{
          container: `!p-[0px_30px_60px] min-xxxl:!p-[0px_40px_60px] screen-lg:!p-[0px_30px_40px]
          screen-md:!p-[0px_15px_40px]`,
        }}
      />
      <AboutCardBlock data={cardTravelData} classes={travelIndustries} />
      <CaseStudiesBlock
        sliderIds={[49, 50, 52, 1000]}
        upTitle="[ Our recent travel projects ]"
        background={getBackground().caseStudiesBg}
        classes={{
          container: '!pt-[80px] screen-lg:!pt-[60px] screen-md:!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
          bgContainer: `top-auto bottom-0 after:!top-0 after:!bottom-auto after:!bg-gradient-to-b
            !h-[550px] screen-lg:!h-[422px] screen-md:!h-[271px]`,
          bgImg: '!object-bottom',
          upTitle: '!text-[20px]/[28px] screen-lg:!text-[18px]/[26px] screen-md:!text-[14px]/[26px]',
          title: 'mb-[100px] screen-lg:!mb-[40px]',
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND2}
        background={getBackground().callToActionSecond}
        withButton
        title="What is your travel or hospitality app&nbsp;idea?"
        btnText="Speak to Our Expert"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!bg-white !p-[160px_70px] min-xxxl:!p-[160px_80px]
          screen-lg:!p-[120px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
          background: `!h-[480px] screen-lg:!h-[448px] screen-md:!h-[316px] after:!h-[90px]
          after:!bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#ffffff_100%)]`,
          title: `!max-w-[1085px] !text-black screen-lg:!max-w-[645px]
          screen-md:!pb-[30px] screen-md:!max-w-full`,
        }}
      />
      <BenefitsSection
        title="Using our travel software development services you can:"
        data={travelBenefitsSectionData}
        variant={BenefitsSectionVariant.TRAVEL}
      />
      <AdvantagesBlock
        blockTitle="Choose what works for you"
        data={travelAdvantagesBlockData}
        classes={{
          section: 'pb-[80px] screen-md:pb-[60px]',
        }}
      />
      <CallToActionComponent
        background={getBackground().callToActionThird}
        withButton
        title="How much does it cost to hire a dedicated team for a travel & hospitality&nbsp;project?"
        content="Specify the number of experts and technologies you need and get an approximate team
         cost for your&nbsp;project!"
        btnText="Calculate now"
        buttonPathVariant={ButtonPathVariant.CALCULATE}
        classes={{
          cta: `!relative !p-[120px_70px] min-xxxl:!p-[120px_80px] screen-lg:!p-[120px_30px]
          screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
          background: `!top-[unset] !bottom-0 !h-[495px] screen-lg:!h-[580px] screen-md:!h-[328px]
          screen-sm:!top-0 screen-sm:!bottom-[unset] after:!top-0 after:!bottom-[unset]
          after:!bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]`,
          image: 'object-[bottom_right] screen-sm:!object-[top_right]',
          title: '!max-w-[1078px] !pb-[30px] screen-lg:!max-w-[564px] screen-lg:!pb-[30px] screen-md:!max-w-full',
          content: '!max-w-[772px] !pb-[50px] screen-lg:!max-w-[680px] screen-lg:!pb-[30px] screen-md:!max-w-full',
          btn: '!max-w-[615px] screen-lg:!max-w-[420px] screen-md:!max-w-[330px]',
        }}
      />
      <AboutColorTextBlock
        title="[ We follow a proven development process to deliver your project on time and within budget! ]"
        afterTextGray="Our software development model"
        text=" is fully transparent and efficient since we use the agile approach to manage the development process."
        textSecondBlock="Our travel and hospitality software and application development team professionally
         transforms unstructured ideas into technical description documents, "
        textGraySecondBlock="creates working prototypes that visualize the project's concept, and searches
         for the best technology strategies and solutions."
        variant={AboutColorTextBlockVariant.TRAVEL_SECOND}
      />
      <ContainerActiveBlocks
        data={travelProcessData}
        dropBlockVariant={DropBlockVariant.WITHOUT_DROP_BLOCK}
        classes={{
          containerBlock: '!pt-0',
          cardBlock: {
            cardClasses: {
              card: `
                min-md:[&:nth-of-type(even)]:!border-l-0 min-xl:[&:nth-of-type(even)]:!border-l-2
                min-xl:[&:nth-of-type(1)]:!border-r-0 min-xl:[&:nth-of-type(3)]:!border-l-0
                min-md:[&:nth-of-type(3)]:!border-b-2 min-xl:[&:nth-of-type(4)]:!border-l-0
                [&:last-of-type]:!border-b-2 min-xl:[&:nth-of-type(3)]:!border-r-0
                !border-t-2 !border-l-2 !border-r-2 !border-black !w-full !h-[430px] !flex !flex-col
                !justify-between !p-[20px] !relative !z-[1] !overflow-hidden
                min-md:!flex-[0_1_50%] min-md:!z-[2] min-md:!h-[430px]
                min-lg:!p-[30px]
                min-xl:!flex-[0_1_25%] min-xl:!h-[560px] min-xl:!border-b-2
                min-xxl:!h-[520px]
              `,
              title: `!relative !z-[4] !mix-blend-difference !duration-1000
              !text-[20px] !leading-[28px] min-md:!text-[24px] min-md:!leading-[34px]`,
              iconText: '!text-[20px] !leading-[28px] min-md:!text-[24px] min-md:!leading-[34px]',
            },
          },
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND6}
        background={getBackground().callToActionFourth}
        withButton
        title="Start growing your travel business with the&nbsp;Onix&nbsp;team!"
        btnText="contact us"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!p-[160px_70px] !bg-white min-xxxl:!p-[160px_80px] screen-lg:!p-[120px_30px]
          screen-md:!p-[80px_30px_45px] screen-sm:!p-[80px_15px_45px]`,
          background: `after:!h-[80px]
          after:!bg-[linear-gradient(180deg,rgba(253,253,253,0)_15%,#ffffff_100%)]
          after:!bottom-0`,
          title: '!max-w-[968px] !text-black screen-lg:!max-w-[708px] screen-md:!pb-[30px]',
        }}
      />
      <TravelTechnologiesBlock />
      <ChooseOnix
        data={travelChooseOnixData}
        title="Why choose Onix as your travel software development company"
        variant={ChooseOnixVariant.TRAVEL}
      />
      <OurInsights
        pageBlogs={pageBlogs}
        title={(
          <>
            Our Insights Into
            <br className="screen-lg:hidden" />
            {' '}
            Travel and Hospitality Software Development
          </>
        )}
      />
      <CallToActionComponent
        id={ButtonType.LAND7}
        background={TellUsAboutLG}
        withButton
        title="Tell us about your product idea and let the&nbsp;magic&nbsp;unfold."
        btnText="Speak to Our Expert"
      />
      <FAQBlock faqData={travelFaqData} />
    </div>
  );
}

export default TravelSoftwarePageView;
