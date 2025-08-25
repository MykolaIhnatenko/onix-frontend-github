import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import TrustUsBlock from '../MainPage/components/TrustUsBlock';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import OurExpertiseSection from '../../components/OurExpertiseSection/OurExpertiseSection';
import WeOffer from './components/WeOffer';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import CooperateBlock from '../../components/CooperateBlock/CooperateBlock';
import MainBlockWith2text from 'components/MainBlockWith2text/MainBlockWith2text';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';
import TechnologiesMini from '../../components/TechnologiesMini/TechnologiesMini';
import CardSliderVerticalBlock from '../../components/CardSliderVerticalBlock/CardSliderVerticalBlock';
import webflowTrustUsCardsData from './data/webflowTrustUsCardsData.json';
import webflowOurExpertiseSectionData from './data/webflowOurExpertiseSectionData';
import webflowCaseStudiesData from './data/webflowCaseStudiesData';
import webflowPartnerSliderBlockData from './data/webflowPartnerSliderBlockData';
import webflowPartnerSliderData from './data/webflowPartnerSliderData';
import webflowQuotesList from './data/webflowQuotesList';
import WebflowFaqData from './data/webflowFaqData';
import webflowCooperateList from './data/webflowCooperateList';
import webflowTechnologiesMiniData from './data/webflowTechnologiesMiniData';
import webflowMainScreenData from './data/webflowMainScreenData';
import webflowCardSliderVertical from './data/webflowCardSliderVertical';
import { trustUsBlockFor6Cards } from 'constants/tailwindStyle';
import {
  ButtonType,
  DropBlockVariant,
  PartnerSectionScrollVariant,
  PartnerSectionVariant,
} from '../../constants/enums';
import IAchievements from '../../interfaces/IAchievements';

import WebflowCardSliderVerticalTabletBg from '@/images/webflowPage/cardSliderVertical/img_card_slider_vertical_tablet_bg.webp';
import WebflowCardSliderVerticalMobileBg from '@/images/webflowPage/cardSliderVertical/img_card_slider_vertical_mobile_bg.webp';
import WebflowCardSliderVerticalBg from '@/images/webflowPage/cardSliderVertical/img_card_slider_vertical_bg.webp';
import WebflowCATTellUsTabletBg from '@/images/webflowPage/callToAction/img_webflow_cat_tell_us_tablet_bg.webp';
import WebflowTechnologiesMobileBg from '@/images/webflowPage/technologies/img_technologies_mobile_bg.webp';
import WebflowTechnologiesTabletBg from '@/images/webflowPage/technologies/img_technologies_tablet_bg.webp';
import WebflowTechnologiesBg from '@/images/webflowPage/technologies/img_technologies_bg.webp';
import WebflowCTAFirstMobileBg from '@/images/webflowPage/callToAction/img_webflow_cta_first_mobile_bg.webp';
import WebflowCTAFirstTabletBg from '@/images/webflowPage/callToAction/img_webflow_cta_first_tablet_bg.webp';
import WebflowCTAFirstBg from '@/images/webflowPage/callToAction/img_webflow_cta_first_bg.webp';
import WebflowPageImg from '@/images/webflowPage/img_webflow@2x.webp';
import MachineSliderBlockBg from '@/images/machineLearning/partnerSlider/img@2x.webp';
import MachineSliderBlockBgTablet from '@/images/machineLearning/partnerSlider/img_bgTablet@2x.webp';
import MachineSliderBlockBgMobile from '@/images/machineLearning/partnerSlider/img_bgMobile@2x.webp';
import IndustriesMainBg from '@/images/industriesPage/img_industries_main_bg@2x.webp';
import IndustriesMainBgBigDesc from '@/images/industriesPage/img_industries_main_bgBigDesc@2x.webp';
import IndustriesMainBgTablet from '@/images/industriesPage/img_industries_main_bg_tablet@2x.webp';
import IndustriesMainBgMobile from '@/images/industriesPage/img_industries_main_bg_mobile@2x.webp';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import TellUsAboutSM from '@/images/img_tell_us_about_sm.webp';

function WebflowPageView({ achievements }: IAchievements) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      tellUs: TellUsAboutLG,
      callToActionFirst: WebflowCTAFirstBg,
      technologiesBg: WebflowTechnologiesBg,
      cardSliderVerticalBlock: WebflowCardSliderVerticalBg,
      mainScreen: IndustriesMainBg,
    };
    if (isXXXLDevice) {
      bg.mainScreen = IndustriesMainBgBigDesc;
    } else if (isMDDevice) {
      bg.tellUs = WebflowCATTellUsTabletBg;
      bg.callToActionFirst = WebflowCTAFirstTabletBg;
      bg.technologiesBg = WebflowTechnologiesTabletBg;
      bg.cardSliderVerticalBlock = WebflowCardSliderVerticalTabletBg;
      bg.mainScreen = IndustriesMainBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.tellUs = TellUsAboutSM;
      bg.callToActionFirst = WebflowCTAFirstMobileBg;
      bg.technologiesBg = WebflowTechnologiesMobileBg;
      bg.cardSliderVerticalBlock = WebflowCardSliderVerticalMobileBg;
      bg.mainScreen = IndustriesMainBgMobile;
    }
    return bg;
  };

  const expertiseSectionData = webflowOurExpertiseSectionData(isXSDevice || isSMDevice);

  return (
    <>
      <MainBlockWith2text
        title={webflowMainScreenData.title}
        firstText={webflowMainScreenData.firstText}
        secondText={webflowMainScreenData.secondText}
        blockBg={getBackground().mainScreen}
        rightImg={WebflowPageImg}
      />
      <WeOffer />
      <AchievementsBlock achievements={achievements} />
      <ReviewBlock
        quotesList={webflowQuotesList}
      />
      <CardSliderVerticalBlock
        blockTitle={webflowCardSliderVertical.blockTitle}
        data={webflowCardSliderVertical.data}
        background={getBackground().cardSliderVerticalBlock}
      />
      <PartnerSection
        scrollVariant={PartnerSectionScrollVariant.WEBFLOW}
        pageTitle={webflowPartnerSliderBlockData.pageTitle}
        subTitle={webflowPartnerSliderBlockData.subTitle}
        data={webflowPartnerSliderData}
        background={MachineSliderBlockBg}
        backgroundTablet={MachineSliderBlockBgTablet}
        backgroundMobile={MachineSliderBlockBgMobile}
        variant={PartnerSectionVariant.WEBFLOW}
        classes={{
          container: '!pt-0 !pb-[80px] !h-auto',
          bgImage: '!h-auto',
          innerContainer: 'top-0 unset',
          title: '!pt-[160px] '
            + 'screen-lg:!pt-[120px] screen-lg:!text-[50px] screen-lg:!leading-[64px] '
            + 'screen-md:!pt-[80px] screen-md:!text-[25px] screen-md:!leading-[35px] ',
          text: '!max-w-none !mb-[60px] min-md:!mb-[80px] screen-md:!mb-[60px]',
        }}
      />
      <CaseStudiesBlock
        sliderIds={[12, 23, 1000]}
        desc={webflowCaseStudiesData.desc}
        classes={{
          container: '!pt-[80px] !pb-[88px] screen-lg:!pb-[80px] screen-md:!pt-0',
          title: 'screen-md:!mb-[30px]',
          desc: '!mb-[40px] !max-w-[680px] screen-lg:!max-w-full screen-lg:!mb-[40px]',
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().callToActionFirst}
        withButton
        title={(
          <>
            Don&apos;t let the fear of time-consuming and uncertain website design hold you back!
            Let&apos;s transform your idea into a stunning reality with our
            fast and effective Webflow design&nbsp;services.
          </>
        )}
        btnText="Contact our specialists"
        classes={{
          cta: `!p-[70px_70px_160px] min-xxxl:!p-[70px_80px_160px] screen-lg:!p-[0_30px_160px]
          screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]`,
          background: 'after:!hidden',
          title: `!max-w-[1140px] !pb-[60px] !text-[30px] !leading-[40px] screen-lg:!max-w-[708px]
          screen-lg:!pt-[40px] screen-md:!pb-[30px] screen-md:!pt-0 screen-md:!text-[25px]
          screen-md:!leading-[35px]`,
        }}
      />
      <TrustUsBlock
        data={webflowTrustUsCardsData}
        title="With our Webflow design services you'll get"
        dropBlockVariant={DropBlockVariant.WITHOUT_DROP_BLOCK}
        classes={{
          sectionTitle: '!mb-[40px] min-xxl:!max-w-[1100px] screen-md:!mb-[30px]',
          CardsBlockClasses: {
            cardClasses: {
              card: trustUsBlockFor6Cards,
            },
          },
        }}
      />
      <OurExpertiseSection
        title={expertiseSectionData.title}
        firstText={expertiseSectionData.firstText}
        data={expertiseSectionData.data}
        classes={{
          title: 'min-lg:!text-[40px] min-lg:leading-[50px]',
          text: '!pb-0 !px-0 !max-w-full min-lg:!max-w-[551px] screen-md:!pt-[30px]',
          container: 'screen-lg:!pb-[40px] screen-md:!pt-[80px]',
          accordionContainer: 'screen-lg:!pb-0',
        }}
      />
      <CallToActionComponent
        title={(
          <>
            Our talented designers work closely with you to create a visually stunning website that showcases
            your products or services, engages visitors, and&nbsp;drives&nbsp;conversions!
          </>
        )}
        tag="p"
        classes={{
          cta: `!bg-white !p-[0_70px_80px] min-xxxl:!p-[0_80px_80px] screen-lg:!p-[60px_30px_80px]
          screen-md:!p-[40px_30px_80px] screen-sm:!p-[40px_15px_80px]`,
          background: 'after:!hidden',
          title: `!max-w-[1078px] !text-[30px] !leading-[40px] !p-[0] !text-black
          screen-lg:!max-w-[708px] screen-md:!text-[20px] screen-md:!leading-[28px]`,
        }}
      />
      <TechnologiesMini
        background={getBackground().technologiesBg}
        blockTitle={webflowTechnologiesMiniData.blockTitle}
        data={webflowTechnologiesMiniData.data}
      />
      <CooperateBlock
        title="Why Choose Onix as your Webflow design company"
        data={webflowCooperateList}
        whiteTheme
        classes={{
          title: 'max-w-[763px] mb-[80px] screen-lg:mb-[60px] screen-md:mb-[40px]',
        }}
      />
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
      <FAQBlock faqData={WebflowFaqData()} />
    </>
  );
}

export default WebflowPageView;
