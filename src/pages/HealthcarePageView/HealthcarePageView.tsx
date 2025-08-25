import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import ProcessBlock from '../../components/ProcessBlock/ProcessBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import TrustUsBlock from '../MainPage/components/TrustUsBlock';
import HealthcareNumbersBlock from './components/HealthcareNumbersBlock';
import IndustrySection from '../../components/IndustrySection/IndustrySection';
import ButtonTypes from '../../constants/ButtonTypes';
import HealthcarePartnerSection from './components/HealthcarePartnerSection';
import SecurityStandards from '../../components/SecurityStandards/SecurityStandards';
import HealthcareReviewBlock from './components/HealthcareReviewBlock';
import healthcareIosMainSectionData from './data/healthcareIosMainSectionData';
import healthcareIndustrySectionData from './data/healthcareIndustrySectionData';
import healthcareSecurityStandardsData from './data/healthcareSecurityStandardsData';
import healthcareTrustUsCardsData from './data/healthcareTrustUsCardsData.json';
import healthcareFaqData from './data/healthcareFaqData';
import { healthcareProcessAccordionData, healthcareProcessBlockContent, healthcareProcessImages } from './data/healthcareProcessData';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import { IPageBlogs } from '../../interfaces/IPages';
import {
  ButtonType,
  DropBlockVariant,
} from '../../constants/enums';
import HealthcareMainSection from './components/HealthcareMainSection';
import StickySliderData from './data/healthcareStickySliderData';
import StickySlider from '../../components/StickySlider/StickySlider';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';
import IAchievements from '../../interfaces/IAchievements';

import HealthcareCTAFirstTabletBg from '@/images/healthcare/callToAction/img_healthcareCTAFirstTabletBg.webp';
import HealthcareCTASecondTabletBg from '@/images/healthcare/callToAction/img_healthcareCTASecondTabletBg@2x.webp';
import HealthcareCTAFirstMobileBg from '@/images/healthcare/callToAction/img_healthcareCTAFirstMobileBg@2x.webp';
import HealthcareCTATellUsTabletBg from '@/images/healthcare/callToAction/img_healthcareCtaTellUsTablet@2x.webp';
import HealthcareCTATellUsMobileBg from '@/images/healthcare/callToAction/img_healthcareCtaTellUsMobile@2x.webp';
import HealthcareCTAFirstBg from '@/images/healthcare/callToAction/img_healthcareCTAFirstBg.webp';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import CaseStudiesBgIndustriesDesk from '@/images/industriesPage/img_bg_case_studies_industries@2x.webp';
import CaseStudiesBgIndustriesTablet from '@/images/industriesPage/img_bg_case_studies_industries_tablet@2x.webp';
import CaseStudiesBgIndustriesMobile from '@/images/healthcare/caseStudies/img_bg_case_studies_mobile@2x.webp';

function HealthcarePageView({ pageBlogs, achievements }: IPageBlogs & IAchievements) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      callToActionFirst: HealthcareCTAFirstBg,
      callToActionSecond: HealthcareCTAFirstBg,
      tellUs: TellUsAboutLG,
      caseStudiesBg: CaseStudiesBgIndustriesDesk,
    };
    if (isMDDevice || isSMDevice) {
      bg.callToActionFirst = HealthcareCTAFirstTabletBg;
      bg.callToActionSecond = HealthcareCTASecondTabletBg;
      bg.tellUs = HealthcareCTATellUsTabletBg;
      bg.caseStudiesBg = CaseStudiesBgIndustriesTablet;
    } else if (isXSDevice) {
      bg.callToActionFirst = HealthcareCTAFirstMobileBg;
      bg.callToActionSecond = HealthcareCTAFirstMobileBg;
      bg.tellUs = HealthcareCTATellUsMobileBg;
      bg.caseStudiesBg = CaseStudiesBgIndustriesMobile;
    }
    return bg;
  };

  return (
    <>
      <HealthcareMainSection
        sectionTitle={healthcareIosMainSectionData.sectionTitle}
        firstText={healthcareIosMainSectionData.firstText}
        secondText={healthcareIosMainSectionData.secondText}
        btnText={healthcareIosMainSectionData.btnText}
        data={healthcareIosMainSectionData.data}
      />
      <StickySlider
        blockTitle="Benefits of Onix Healthcare Software Development Services"
        blockText="Our healthcare software development services offer numerous benefits to businesses
         in the healthcare industry."
        secondBlockText="Through custom medical software development, we empower healthcare organizations
         to optimize their operations, enhance patient care, and drive overall efficiency.
         Here are the top six of them:"
        data={StickySliderData}
        classes={{
          blockTitle: 'max-w-[800px]',
          item: 'last:border-b-0',
        }}
      />
      <HealthcarePartnerSection />
      <SecurityStandards
        pageTitle={healthcareSecurityStandardsData.pageTitle}
        data={healthcareSecurityStandardsData.data}
      />
      <CallToActionComponent
        id={ButtonType.LAND2}
        background={getBackground().callToActionFirst}
        withButton
        buttonType={ButtonTypes.PRIMARY}
        title="Stay Ahead of the Curve: Embrace Technology with Our Healthcare Software Development&nbsp;Services."
        btnText="Contact us"
        classes={{
          cta: `!bg-transparent !p-[80px_70px_160px] screen-xxxl:!p-[80px_80px_160px] screen-lg:!p-[40px_30px_120px]
          screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]`,
          background: `after:!top-0 after:!bg-gradient-to-t after:!from-transparent
          after:!via-transparent after:!to-white`,
          image: '!object-bottom',
          title: `!text-black !max-w-[750px] !pb-[40px] !text-[30px] !leading-[40px] screen-lg:!max-w-[708px]
          screen-md:!text-[20px] screen-md:!leading-[28px]`,
        }}
      />
      <CaseStudiesBlock
        sliderIds={[27, 25, 28, 1000]}
        background={getBackground().caseStudiesBg}
        classes={{
          container: '!pt-[80px]',
          bgContainer: 'screen-md:!h-[270px]',
          title: 'screen-md:!max-w-[300px]',
        }}
      />
      <IndustrySection
        sectionTitle={healthcareIndustrySectionData.sectionTitle}
        firstText={healthcareIndustrySectionData.firstText}
        secondText={healthcareIndustrySectionData.secondText}
        data={healthcareIndustrySectionData.data}
        classes={{
          container: '!relative !pt-[80px] !pb-0',
          items: 'min-lg:!grow-0 min-lg:!basis-[47.9%]',
          itemTitle: '!basis-[45%] min-md:!basis-[35%] min-lg:!basis-[30%]',
          itemText: '!basis-[48%] min-md:!basis-[60%] min-lg:!basis-[62%] min-lg:!pt-[12px]',
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().callToActionSecond}
        withButton
        buttonType={ButtonTypes.PRIMARY}
        title="Transform Your Healthcare Organization: Embrace Digital Innovation
        and Enhance Patient Outcomes with Our Software Development&nbsp;Services!"
        btnText="Speak to Our Expert"
        classes={{
          cta: `!p-[160px_70px] screen-xxxl:!p-[160px_80px] screen-lg:!p-[120px_30px]
          screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
          background: 'after:!hidden',
          image: 'screen-md:!img-object-bottom',
          title: `!max-w-[1078px] !text-black !text-[30px] !leading-[40px] screen-xl:!max-w-[820px]
          screen-lg:!max-w-[708px] screen-md:!max-w-none screen-md:!text-[20px] screen-md:!leading-[28px]
          screen-md:!pb-[40px]`,
        }}
      />
      <ProcessBlock
        data={healthcareProcessAccordionData}
        imagesData={healthcareProcessImages}
        title={healthcareProcessBlockContent.title}
        subtitle={healthcareProcessBlockContent.subtitle}
        classes={{
          container: 'min-lg:!pb-[120px]',
          accordionBlock: 'min-md:h-[820px] min-xl:!h-[920px] min-xl:!min-h-[auto]',
          activeAccordionTitle: '!pb-[10px] screen-lg:!pb-[5px]',
          contentInnerText: '!m-0 !pl-[50px] !pb-[15px] min-md:!pl-[50px] min-md:!pb-[30px] '
            + 'min-lg:!pl-[55px] min-xl:!pl-[85px]',
          imagesBlock: 'min-md:max-h-[820px] min-xl:max-h-[920px]',
        }}
      />
      <AchievementsBlock achievements={achievements} />
      <HealthcareNumbersBlock />
      <TrustUsBlock
        data={healthcareTrustUsCardsData}
        title="Why Choose Onix for Healthcare Development"
        dropBlockVariant={DropBlockVariant.WITHOUT_DROP_BLOCK}
        classes={{
          CardsBlockClasses: {
            cardClasses: {
              card: `!h-[420px] min-md:!h-[430px] min-xl:!h-[500px] [&:last-of-type]:!border-b-2
              [&:last-of-type]:!border-black
              min-md:[&:nth-of-type(5)]:!border-b-2 min-md:[&:nth-of-type(5)]:!border-black
              min-xl:[&:nth-of-type(4)]:!border-b-2 min-xl:[&:nth-of-type(4)]:!border-black`,
            },
          },
        }}
      />
      <HealthcareReviewBlock />
      {!!pageBlogs?.length && (
        <OurInsights
          pageBlogs={pageBlogs}
          text="Learn more about healthcare software development from our blog posts."
        />
      )}
      <CallToActionComponent
        id={ButtonType.LAND4}
        background={getBackground().tellUs}
        withButton
        title="Tell us about your product idea
            and let the&nbsp;magic&nbsp;unfold."
        btnText="Speak to Our Expert"
        classes={{
          background: `after:bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_0%,_rgb(0,_0,_0)_100%)]
          screen-lg:after:!h-[130px]`,
        }}
      />
      <FAQBlock faqData={healthcareFaqData} />
    </>
  );
}

export default HealthcarePageView;
