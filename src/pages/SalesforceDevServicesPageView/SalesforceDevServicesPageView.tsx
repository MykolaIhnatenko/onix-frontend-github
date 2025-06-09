import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import TrustUsBlock from '../MainPage/components/TrustUsBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import CooperateBlock from '../../components/CooperateBlock/CooperateBlock';
import IndustriesWeServeBlock from '../../components/IndustriesWeServeBlock/IndustriesWeServe';
import SalesforceClientsSection from './components/SalesforceClientsSection';
import SalesforceNumberBlock from './components/SalesforceNumberBlock';
import AccreditationsBlock from '../../components/AccreditationsBlock/AccreditationsBlock';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import { IPageBlogs } from '../../interfaces/IPages';
import salesforceQuotesList from './data/salesforceQuotesList';
import { carouselBottom, carouselTop, salesforceIndustriesWeServeBlockData } from './data/salesforceIndustriesWeServeBlockData';
import salesforceTrustUsCardsData from './data/salesforceTrustUsCardsData.json';
import salesforceFaqData from './data/salesforceFaqData';
import salesforceDevelopmentServicesData from './data/salesforceDevelopmentServicesData';
import salesforceCooperateBlockData from './data/salesforceCooperateBlockData';
import salesforceMainScreenData from './data/salesforceMainSectionData';
import salesforceAccreditationsBlock from './data/salesforceAccreditationsBlock';
import {
  CardBlockVariant,
  DropBlockVariant,
  ButtonType,
} from '../../constants/enums';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import TellUsAboutMD from '@/images/salesforcePage/img_tell_us_about_md@2x.webp';
import TellUsAboutSM from '@/images/img_tell_us_about_sm.webp';
import IndustriesMainBg from '@/images/industriesPage/img_industries_main_bg@2x.webp';
import IndustriesMainBgBigDesc from '@/images/industriesPage/img_industries_main_bgBigDesc@2x.webp';
import IndustriesMainBgTablet from '@/images/industriesPage/img_industries_main_bg_tablet@2x.webp';
import IndustriesMainBgMobile from '@/images/industriesPage/img_industries_main_bg_mobile@2x.webp';
import TalkToLG from '@/images/salesforcePage/callToAction/img_talk_toLG.webp';
import TalkToMD from '@/images/salesforcePage/callToAction/img_talk_toMD.webp';
import TalkToSM from '@/images/salesforcePage/callToAction/img_talk_toSM.webp';
import SalesforceMainScreenImg from '@/images/salesforcePage/img_salesforceMain@2x.webp';
import SalesforceAccreditationsBg from '@/images/salesforcePage/accreditations/img_accreditationsBlockBg.webp';
import SalesforceAccreditationsTabletBg from '@/images/salesforcePage/accreditations/img_accreditationsBlockTabletBg.webp';
import SalesforceAccreditationsMobileBg from '@/images/salesforcePage/accreditations/img_accreditationsBlockMobileBg.webp';
import MainBlockWith2TextBtn from 'components/MainBlockWith2TextBtn/MainBlockWith2TextBtn';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import { trustUsBlockFor6Cards } from 'constants/tailwindStyle';
import IndustriesBgXXXL from '@/images/industriesWeServe/img_bgXXXL.webp';
import IndustriesBg from '@/images/industriesWeServe/img_bg.webp';
import IndustriesBgTablet from '@/images/industriesWeServe/img_bgTablet.webp';
import IndustriesBgMobile from '@/images/industriesWeServe/img_bgMobile.webp';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';
import SalesforceCaseStudiesBg from '@/images/salesforcePage/caseStudies/img_caseStudiesSalesforceBg.webp';
import SalesforceCaseStudiesMobileBg from '@/images/salesforcePage/caseStudies/img_caseStudiesSalesforceMobileBg_new.webp';
import SalesforceCaseStudiesTabletBg from '@/images/salesforcePage/caseStudies/img_caseStudiesSalesforceTabletBg_new.webp';

function SalesforceDevServicesPageView({ pageBlogs }: IPageBlogs) {
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
      tellUs: TellUsAboutLG,
      talkTo: TalkToLG,
      mainScreen: IndustriesMainBg,
      accreditations: SalesforceAccreditationsBg,
      industriesBg: IndustriesBg,
      caseStudiesBg: SalesforceCaseStudiesBg,
    };

    if (isXXXLDevice || isLGDevice) {
      bg.mainScreen = IndustriesMainBgBigDesc;
      bg.industriesBg = IndustriesBgXXXL;
    } else if (isMDDevice || isSMDevice) {
      bg.tellUs = TellUsAboutMD;
      bg.talkTo = TalkToMD;
      bg.mainScreen = IndustriesMainBgTablet;
      bg.accreditations = SalesforceAccreditationsTabletBg;
      bg.industriesBg = IndustriesBgTablet;
      bg.caseStudiesBg = SalesforceCaseStudiesTabletBg;
    } else if (isXSDevice) {
      bg.tellUs = TellUsAboutSM;
      bg.talkTo = TalkToSM;
      bg.mainScreen = IndustriesMainBgMobile;
      bg.accreditations = SalesforceAccreditationsMobileBg;
      bg.industriesBg = IndustriesBgMobile;
      bg.caseStudiesBg = SalesforceCaseStudiesMobileBg;
    }

    return bg;
  };

  return (
    <>
      <MainBlockWith2TextBtn
        title={salesforceMainScreenData.pageTitle}
        firstText={salesforceMainScreenData.pageText}
        secondText={salesforceMainScreenData.pageSecondText}
        btnText={salesforceMainScreenData.btnText}
        blockBg={getBackground().mainScreen}
        rightImg={SalesforceMainScreenImg}
      />
      <CooperateBlock
        title="Onix Salesforce Application Development Services"
        data={salesforceCooperateBlockData}
        whiteTheme
        classes={{
          section: 'pb-[80px]',
          title: 'max-w-[664px]',
          itemContent: 'min-xl:pl-[30px]',
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND2}
        background={getBackground().talkTo}
        withButton
        title={(
          <>
            Don&apos;t settle for a one-size-fits-all Salesforce solution. Create your
            own app and supercharge your&nbsp;business!
          </>
        )}
        btnText="Talk to our expert"
        classes={{
          cta: `!bg-white !p-[160px_70px] min-xxxl:!p-[160px_80px] screen-lg:!p-[126px_30px_120px]
          screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
          background: 'after:!hidden',
          title: '!max-w-[1078px] !pb-[60px] screen-lg:!max-w-[708px] screen-lg:!pb-[46px] screen-md:!pb-[40px]',
        }}
      />
      <SalesforceClientsSection />
      <DevelopmentServicesWhite
        title={salesforceDevelopmentServicesData.title}
        data={salesforceDevelopmentServicesData.data}
        classes={{
          devServices: 'screen-md:!p-[80px_0]',
          titleBlock: {
            title: '!max-w-[1300px]',
          },
          item: {
            containerItemRight: '!flex !flex-col !justify-end',
            containerItemLeft: '!justify-end !flex-col',
            number: `!text-[96px] !leading-[132px] !font-normal !mr-0 !w-full 
            screen-lg:!text-[50px] screen-lg:!leading-[64px] screen-lg:!font-medium screen-lg:!mb-[10px] 
            screen-md:!text-[40px] screen-md:!leading-[50px] screen-md:!mb-[5px]`,
            title: '!text-[30px] !leading-[40px] screen-md:!text-[20px] screen-md:!leading-[28px]',
          },
        }}
      />
      <CaseStudiesBlock
        sliderIds={[27, 29, 1000]}
        background={getBackground().caseStudiesBg}
        classes={{
          container: '!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
        }}
      />
      <SalesforceNumberBlock />
      <AccreditationsBlock
        background={getBackground().accreditations}
        data={salesforceAccreditationsBlock}
        blockTitle="Our Salesforce Accreditations"
        firstText="Our developers hold the Salesforce Certifications and possess the essential skills and
         knowledge to craft highly customized applications and integrations within the Onix ecosystem."
        secondText="Certification ensures more cost-effective solutions tailored precisely to the
         organization's requirements, ultimately driving innovation and competitive advantage."
      />
      <ReviewBlock
        quotesList={salesforceQuotesList}
      />
      <IndustriesWeServeBlock
        upTitle={salesforceIndustriesWeServeBlockData.upTitle}
        title={salesforceIndustriesWeServeBlockData.pageTitle}
        background={getBackground().industriesBg}
        carouselTop={carouselTop}
        carouselBottom={carouselBottom}
        carouselTopClasses={{
          animation: 'animate-salesforce-projects '
            + 'screen-lg:animate-salesforce-projects-tablet '
            + 'screen-md:animate-salesforce-projects-mobile',
        }}
        carouselBottomClasses={{
          animation: 'animate-salesforce-projects-revert '
            + 'screen-lg:animate-salesforce-projects-tablet-revert '
            + 'screen-md:animate-salesforce-projects-mobile-revert',
        }}
        classes={{
          title: 'min-lg:max-w-[1127px]',
          carouselContainer: 'screen-lg:!gap-[40px]',
        }}
      />
      <TrustUsBlock
        data={salesforceTrustUsCardsData}
        title="Why Hire Onix Salesforce Developers?"
        variant={CardBlockVariant.SALESFORCE}
        dropBlockVariant={DropBlockVariant.WITHOUT_DROP_BLOCK}
        classes={{
          cardClasses: {
            card: trustUsBlockFor6Cards,
          },
        }}
      />
      {!!pageBlogs?.length && (
        <OurInsights
          pageBlogs={pageBlogs}
          classes={{ title: '!pb-[40px]' }}
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
      />
      <FAQBlock faqData={salesforceFaqData} />
    </>
  );
}

export default SalesforceDevServicesPageView;
