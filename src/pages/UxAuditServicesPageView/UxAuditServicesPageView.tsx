import { useAppSelector } from '../../hook/reduxToolkit';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import UXAuditServicesSection from './components/UXAuditServicesSection';
import UXMainSection from './components/UXMainSection';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';
import TechnologiesBlock from '../../components/TechnologiesBlock/TechnologiesBlock';
import getTechnologies from '../../utils/getTechnologies';
import UXNumbersSection from './components/UXNumbersSection';
import UXServiceSection from './components/UXServiceSection';
import ProcessBlock from '../../components/ProcessBlock/ProcessBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import UXBenefitsSection from './components/UXBenefitsSection';
import UXExpertise from './components/UXExpertise';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import { technologiesBlocksData, technologiesBlocksNames } from './data/technologiesData';
import { processAccordionData, processImages, processBlockContent } from './data/processData';
import quotesList from './data/testimonialsData';
import faqData from './data/faqData';
import reasonsData from './data/reasonsData';
import {
  ButtonType,
} from '../../constants/enums';
import { IPageBlogs } from '../../interfaces/IPages';
import ButtonTypes from '../../constants/ButtonTypes';
import UXCallToActionSecondImage from '../../assets/images/uxAudit/img_bg_how_much.webp';
import UXCallToActionSecondTabletImage from '../../assets/images/uxAudit/img_bg_how_much_tablet.webp';
import UXCallToActionSecondMobileImage from '../../assets/images/uxAudit/img_bg_how_much_mobile.webp';
import TellUsAboutLG from '@/images/img_lastCta@2x.webp';
import TellUsAboutMD from '@/images/img_lastCtaTablet@2x.webp';
import TellUsAboutSM from '@/images/img_lastCtaMobile@2x.webp';
import UXCallToActionImage from '../../assets/images/uxAudit/img_bg_we.webp';
import UXCallToActionTabletImage from '../../assets/images/uxAudit/img_bg_we_tablet.webp';
import UXCallToActionMobileImage from '../../assets/images/uxAudit/img_bg_we_moblie.webp';
import IosContactUsBigBg1 from '../../assets/images/iosPage/img_contact_us_big_bg1@2x.webp';
import UXCallToActionSecondBigImage from '../../assets/images/uxAudit/img_cta_big_bg@2x.webp';
import CaseStudiesBg from '@/images/caseStudiesBlock/img_bottomBg.webp';
import CaseStudiesBgTablet from '@/images/caseStudiesBlock/img_bottomBgTablet.webp';

function UXAuditPageView({ pageBlogs }: IPageBlogs) {
  const {
    screenSizes: {
      isSMDevice,
      isMDDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      First: UXCallToActionImage,
      Second: UXCallToActionSecondImage,
      third: TellUsAboutLG,
      caseStudiesBg: CaseStudiesBg,
    };
    if (isXXXLDevice) {
      bg.Second = IosContactUsBigBg1;
      bg.third = UXCallToActionSecondBigImage;
    } else if (isSMDevice || isMDDevice) {
      bg.First = UXCallToActionTabletImage;
      bg.Second = UXCallToActionSecondTabletImage;
      bg.third = TellUsAboutMD;
      bg.caseStudiesBg = CaseStudiesBgTablet;
    } else if (isXSDevice) {
      bg.First = UXCallToActionMobileImage;
      bg.Second = UXCallToActionSecondMobileImage;
      bg.third = TellUsAboutSM;
      bg.caseStudiesBg = CaseStudiesBgTablet;
    }

    return bg;
  };

  return (
    <>
      <UXMainSection />
      <UXNumbersSection />
      <UXExpertise />
      <UXAuditServicesSection />
      <CallToActionComponent
        id={ButtonType.LAND2}
        background={getBackground().First}
        withButton
        title={(
          <>
            Ready to improve your website&apos;s user&nbsp;experience?
          </>
        )}
        content={(
          <>
            Let our Onix Design & UX Audit Services team identify your product pain points
            and provide actionable&nbsp;recommendations.
          </>
        )}
        btnText="Contact us"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!bg-white !p-[160px_70px] min-xxxl:!p-[160px_80px] screen-lg:!p-[120px_30px]
          screen-md:!p-[80px_30px_115px] screen-sm:!p-[80px_15px_115px]`,
          background: 'after:!hidden',
          title: `!max-w-[1170px] !pb-[40px] !text-black screen-lg:!max-w-[680px]
          screen-md:!pb-[30px] screen-md:!max-w-full`,
          content: `!max-w-[1078px] !pb-[40px] !text-black screen-lg:!max-w-[708px] screen-md:!max-w-full
          screen-md:!text-[16px] screen-md:!leading-[24px]`,
        }}
      />
      <UXServiceSection />
      <ProcessBlock
        data={processAccordionData}
        imagesData={processImages}
        title={processBlockContent.title}
        subtitle={processBlockContent.subtitle}
        bottomTitle="Once the UX Audit is complete, you will have a comprehensive assessment to determine if a
          mobile app or website redesign is necessary."
        classes={{
          container: '!pb-80px min-md:!pb-120px',
          contentInnerText: '!mt-0 !ml-[54px] !mb-[30px] min-xl:!ml-[88px]',
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND4}
        background={getBackground().Second}
        withButton
        title={(
          <>
            Is your website struggling with low engagement rates or high bounce rates? Let us help
            improve your user experience with a comprehensive UX&nbsp;audit.
          </>
        )}
        btnText="Speak to Our Expert"
        classes={{
          cta: `!p-[160px_70px_120px] min-xxxl:!p-[160px_80px_120px] screen-lg:!p-[120px_30px]
          screen-md:!p-[80px_30px_40px] screen-sm:!p-[80px_15px_40px]`,
          background: `after:!h-[70px] after:!bg-gradient-to-b after:!from-[rgba(253,253,253,0)_15%]
          after:!to-[#000000] after:!bottom-0 screen-lg:after:!h-[110px]`,
          title: `!max-w-[1200px] screen-lg:!max-w-[708px] screen-lg:!pb-[30px] screen-lg:!text-[36px]
          screen-lg:!leading-[46px] screen-md:!text-[25px]
          screen-md:!leading-[35px] screen-md:!max-w-full`,
        }}
      />
      <AchievementsBlock
        title="Why Choose Onix for Design Audit"
      />
      <UXBenefitsSection />
      <PartnerSection
        pageTitle="There are several reasons why you should choose Onix as your UX audit agency:"
        data={reasonsData}
        classes={{
          container: '!pb-[120px]'
            + 'screen-lg:!pt-[80px] screen-lg:!pb-[80px]'
            + 'screen-md:!pt-[40px]',
          title: '!mb-[40px] screen-lg:!mb-[20px]',
        }}
      />
      <TechnologiesBlock
        pageTitle={technologiesBlocksData.pageTitle}
        subTitle={technologiesBlocksData.subTitle}
        technologies={getTechnologies(technologiesBlocksNames)}
        classes={{
          sectionSubTitle: `!mb-[40px] screen-lg:!mb-0 screen-md:!mb-[20px] screen-md:!mt-[30px]
          screen-md:!text-[14px] screen-md:!leading-[26px] min-lg:!mb-[40px]`,
        }}
      />
      <CaseStudiesBlock
        sliderIds={[40, 55, 13, 1000]}
        desc={`Our design case studies highlight our team's expertise in
          creating user-centered designs that drive results.`}
        desc2={`We showcase our process and methodology, as well as the
          challenges we faced and how we overcame them.`}
        background={getBackground().caseStudiesBg}
        classes={{
          container: '!pt-[90px] screen-md:!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
          bgContainer: 'top-auto bottom-0 after:!top-0 after:!bottom-auto after:!bg-gradient-to-b',
          bgImg: '!object-center',
          title: 'screen-md:!mb-[30px]',
        }}
      />
      <ReviewBlock quotesList={quotesList} />
      <CallToActionComponent
        id={ButtonType.LAND5}
        background={getBackground().First}
        withButton
        title={(
          <>
            Don&apos;t let poor usability or accessibility hold back your website&apos;s potential.
            Let us conduct a UX audit and provide recommendations for&nbsp;enhancement.
          </>
        )}
        btnText="Get in touch with us"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!p-[160px_70px] min-xxxl:!p-[160px_80px] screen-lg:!p-[120px_30px] screen-md:!p-[80px_30px]
          screen-sm:!p-[80px_15px]`,
          background: 'after:!hidden',
          title: `!text-black !max-w-[1050px] !text-[30px] !leading-[40px] screen-lg:!max-w-[708px]
          screen-md:!text-[20px] screen-md:!leading-[28px] screen-md:!max-w-full`,
        }}
      />
      {pageBlogs?.length !== 0 && (
        <OurInsights
          pageBlogs={pageBlogs}
          text="Learn more about UI/UX design from our blog posts on this topic."
        />
      )}
      <CallToActionComponent
        id={ButtonType.LAND6}
        background={getBackground().third}
        withButton
        title={(
          <>
            Tell us about your product idea and let the&nbsp;magic&nbsp;unfold.
          </>
        )}
        btnText="Speak to Our Expert"
      />
      <FAQBlock faqData={faqData} />
    </>
  );
}

export default UXAuditPageView;
