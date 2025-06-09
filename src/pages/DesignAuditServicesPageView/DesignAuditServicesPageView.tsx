import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import TrustUsBlock from '../MainPage/components/TrustUsBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import ClientsBlock from '../../components/ClientsBlock/ClientsBlock';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import MachineLCalculate from '../MachineLearningPageView/components/MachineLCalculate';
import designAuditQuotesList from './data/designAuditQuotesList';
import NumbersBlock from '../../components/NumbersBlock/NumbersBlock';
import DesignAuditMainBlock from './components/DesignAuditMainBlock';
import DesignAuditCaseStudiesBlock from './components/DesignAuditCaseStudiesBlock';
import PlatformsServed from '../../components/PlatformsServed/PlatformsServed';
import designAuditPlatformsServedData from './data/designAuditPlatformsServedData';
import designAuditFaqData from './data/designAuditFaqData';
import designAuditNumberData from './data/designAuditNumberData';
import designAuditTrustUsCardsData from './data/designAuditTrustUsCardsData';
import designAuditSoftwareProductData from './data/designAuditSoftwareProductData';
import designAuditCalculateData from './data/designAuditCalculateData';
import designAuditDevelopmentServicesData from './data/designAuditDevelopmentServicesData';
import { IPageBlogs } from '../../interfaces/IPages';
import ButtonTypes from '../../constants/ButtonTypes';
import {
  ButtonType,
  CalculateMachineLVariant,
  CardBlockVariant,
  DropBlockVariant,
} from '../../constants/enums';
import StickySlider from '../../components/StickySlider/StickySlider';
import StickySliderData from './data/designAuditStickySliderData';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import TellUsAboutMD from '@/images/img_tell_us_about_md@2x.webp';
import TellUsAboutSM from '@/images/img_tell_us_about_sm@2x.webp';
import DesignAuditOurDevelopmentServicesBg from '@/images/designAuditServicesPage/ourDevelopmentServices/img_ourDevelopmentServicesDesignAuditBg@2x.webp';
import DesignAuditOurDevelopmentServicesTabletBg from '@/images/designAuditServicesPage/ourDevelopmentServices/img_ourDevelopmentServicesDesignAuditTabletBg@2x.webp';
import DesignAuditCalculateBg from '@/images/designAuditServicesPage/calculate/img_designAuditCalculateBg@2x.webp';
import DesignAuditCalculateBigBg from '@/images/designAuditServicesPage/calculate/img_designAuditCalculateBigBg@2x.webp';
import DesignAuditCalculateTabletBg from '@/images/designAuditServicesPage/calculate/img_designAuditCalculateTabletBg@2x.webp';
import DesignAuditCalculateMobileBg from '@/images/designAuditServicesPage/calculate/img_designAuditCalculateMobileBg@2x.webp';
import DesignAuditCTAFirstBg from '@/images/designAuditServicesPage/callToAction/img_designAuditCTAFirstBg.webp';
import DesignAuditCTAFirstTabletBg from '@/images/designAuditServicesPage/callToAction/img_designAuditCTAFirstTabletBg.webp';
import DesignAuditCTAFirstMobileBg from '@/images/designAuditServicesPage/callToAction/img_designAuditCTAFirstMobileBg.webp';
import DesignAuditCTASecondBg from '@/images/designAuditServicesPage/callToAction/img_designAuditCTASecondBg.webp';
import DesignAuditCTASecondTabletBg from '@/images/designAuditServicesPage/callToAction/img_designAuditCTASecondTabletBg.webp';
import DesignAuditCTASecondMobileBg from '@/images/designAuditServicesPage/callToAction/img_designAuditCTASecondMobileBg.webp';
import DesignAuditPlatformsServedBg from '@/images/designAuditServicesPage/platformsServed/img_designAuditPlatformsServedBg@2x.webp';
import DesignAuditPlatformsServedTabletBg from '@/images/designAuditServicesPage/platformsServed/img_designAuditPlatformsServedTabletBg@2x.webp';
import DesignAuditPlatformsServedMobileBg from '@/images/designAuditServicesPage/platformsServed/img_designAuditPlatformsServedMobileBg@2x.webp';
import designAuditAccordionData from './data/designAuditSoftwareProductContentData';
import AccordionWhite from 'components/AccordionWhite/AccordionWhite';
import { AccordionWhiteStyleTypes } from 'constants/AccordionStyleTypes';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';

function DesignAuditServicesPageView({ pageBlogs }: IPageBlogs) {
  const {
    screenSizes: {
      isMDDevice, isSMDevice, isXSDevice, isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      tellUs: TellUsAboutLG,
      ourDevelopmentBg: DesignAuditOurDevelopmentServicesBg,
      calculateBg: DesignAuditCalculateBg,
      callToActionFirst: DesignAuditCTAFirstBg,
      callToActionSecond: DesignAuditCTASecondBg,
      platformsServedBg: DesignAuditPlatformsServedBg,
    };
    if (isXXXLDevice) {
      bg.calculateBg = DesignAuditCalculateBigBg;
    } else if (isMDDevice) {
      bg.tellUs = TellUsAboutMD;
      bg.ourDevelopmentBg = DesignAuditOurDevelopmentServicesTabletBg;
      bg.calculateBg = DesignAuditCalculateTabletBg;
      bg.callToActionFirst = DesignAuditCTAFirstTabletBg;
      bg.callToActionSecond = DesignAuditCTASecondTabletBg;
      bg.platformsServedBg = DesignAuditPlatformsServedTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.tellUs = TellUsAboutSM;
      bg.calculateBg = DesignAuditCalculateMobileBg;
      bg.callToActionFirst = DesignAuditCTAFirstMobileBg;
      bg.callToActionSecond = DesignAuditCTASecondMobileBg;
      bg.platformsServedBg = DesignAuditPlatformsServedMobileBg;
    }
    return bg;
  };

  const isMobile = isMDDevice || isSMDevice || isXSDevice;

  return (
    <>
      <DesignAuditMainBlock />
      <DevelopmentServicesWhite
        title={designAuditDevelopmentServicesData.title}
        description={designAuditDevelopmentServicesData.desc}
        data={designAuditDevelopmentServicesData.data}
        accordionOnMobile
        customBackground={getBackground().ourDevelopmentBg}
        classes={{
          devServices: 'screen-md:!pb-0',
          titleBlock: {
            title: '!max-w-[652px] screen-md:!max-w-[330px]',
            desc: '!max-w-[697px]',
          },
          background: `!bottom-0 !top-[unset] before:!top-0
          before:!bg-[linear-gradient(0deg,_rgba(253,253,253,0)_0%,_#ffffff_100%)]`,
          bgImg: '!object-bottom min-lg:!h-[506px]',
        }}
      />
      <MachineLCalculate
        pageTitle={designAuditCalculateData.pageTitle}
        pageText={designAuditCalculateData.pageText}
        background={getBackground().calculateBg}
        data={designAuditCalculateData.data}
        variant={CalculateMachineLVariant.DESIGN_AUDIT}
      />
      <BusinessContextDiagonal
        title={designAuditSoftwareProductData.title}
        leftContent={designAuditSoftwareProductData.firstText}
        rightContent={designAuditSoftwareProductData.secondText}
        classes={{ section: '!pb-[40px]' }}
      />
      <AccordionWhite
        data={designAuditAccordionData}
        activeFirst
        accordionStyleTypes={isMobile ? AccordionWhiteStyleTypes.ACTIVE_BLACK_TITLE_AND_CONTENT : undefined}
        smallerTitleText
        classes={{ accordion: 'px-[70px] pb-[80px] min-xxxl:px-[80px] screen-lg:px-0 screen-lg:pb-0' }}
      />
      <CallToActionComponent
        id={ButtonType.LAND2}
        background={getBackground().callToActionFirst}
        withButton
        title={(
          <>
            Revolutionize Your Digital Presence with Our Design&nbsp;Expertise
          </>
        )}
        btnText="Contact us"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!p-[126px_70px] screen-lg:!p-[120px_30px] screen-md:!p-[80px_30px] 
            screen-sm:!p-[80px_15px]`,
          background: 'after:!hidden',
          title: `!max-w-[851px] !text-black screen-lg:!max-w-[708px] 
            screen-md:!pb-[20px]`,
        }}
      />
      <DesignAuditCaseStudiesBlock
        caseIds={[40, 55, 1, 1000]}
      />
      <StickySlider
        blockTitle="How We'll Build Digital Product Design Process With You"
        blockText="At Onix, our established product design workflow allows us to build designs that our customers love."
        data={StickySliderData}
        classes={{
          blockTitle: 'max-w-[734px]',
          item: 'last:border-b-0',
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().callToActionSecond}
        withButton
        title={(
          <>
            Ignite Innovation and Delight Your Users While We Will Support You in This&nbsp;Way
          </>
        )}
        btnText="speak to our expert"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!p-[126px_70px] screen-lg:!p-[100px_30px] screen-md:!p-[80px_30px] 
            screen-sm:!p-[80px_15px]`,
          background: 'after:!hidden',
          title: `!max-w-[970px] !text-black screen-lg:!max-w-[708px] 
            screen-md:!pb-[20px]`,
        }}
      />
      <PlatformsServed
        title={designAuditPlatformsServedData.title}
        text={designAuditPlatformsServedData.text}
        content={designAuditPlatformsServedData.content}
        blackTheme
        background={getBackground().platformsServedBg}
        classes={{
          backgroundImg: '!object-top',
          container: '!py-[80px] screen-md:!pb-[40px]',
          title: 'min-lg:mb-[40px]',
          text: '!mb-[60px] screen-lg:!mb-[40px] max-w-[743px]',
          content: '!pt-0 !border-t-0 border-b-2 min-xl:gap-[40px] pb-[60px] screen-lg:pb-[40px]',
          contentTitle: `!p-0 screen-xl:!pb-[40px] min-xl:!min-w-[470px]
            screen-lg:!text-[30px]/[40px] screen-md:!text-[22px]/[28px]`,
          itemContent: 'screen-xl:!max-w-full !flex !justify-between !max-w-[679px]',
          itemIcon: '!p-0 !flex-col !gap-0 !w-auto !min-w-0',
          itemIconTitle: '!mb-[20px] screen-md:!mb-[12px] screen-md:!text-[14px]/[22px]',
          icon: '!h-[60px] !w-[60px] screen-lg:!h-[50px] screen-lg:!w-[50px] screen-md:!h-[33px] screen-md:!w-[33px]',
        }}
      />
      <AchievementsBlock />
      <NumbersBlock
        data={designAuditNumberData}
        classes={{
          table: `!bg-black !mt-0 !p-[24px_70px_36px]
            min-xxxl:!p-[24px_80px_36px]
            screen-lg:!p-[20px_30px_50px]
            screen-md:!p-[10px_15px_30px]`,
          rowClasses: {
            tableRow: `!border-b-[2px] !border-solid !border-white !p-[20px_0]
              min-md:!p-[30px_0] min-lg:!flex-row min-xxl:!p-[26px_0_44px]
              not-last:!border-b-[2px] not-last:!border-solid not-last:!border-white
              last:!border-none`,
            title: '!text-white',
            text: '!text-white',
          },
        }}
      />
      <TrustUsBlock
        data={designAuditTrustUsCardsData}
        title="There are several reasons why you should choose Onix for your product design needs:"
        variant={CardBlockVariant.DESIGN_AUDIT}
        classes={{
          cardClasses: {
            card: `[&:last-of-type]:!border-b-[2px] [&:last-of-type]:!border-black
            min-md:[&:nth-of-type(5)]:!border-b-[2px] min-md:[&:nth-of-type(5)]:!border-black
            min-xl:[&:nth-of-type(4)]:!border-b-[2px] min-xl:[&:nth-of-type(4)]:!border-black`,
          },
        }}
        dropBlockVariant={DropBlockVariant.WITHOUT_DROP_BLOCK}
      />
      <ReviewBlock
        quotesList={designAuditQuotesList}
      />
      <ClientsBlock
        mainTitle="Brands We Have Worked With"
        title="[ Our clients ]"
        classes={{
          title: 'screen-md:!text-[14px]',
        }}
      />
      {pageBlogs?.length !== 0 && (
        <OurInsights
          pageBlogs={pageBlogs}
          text="Learn more about product design from our blog posts on this topic."
          classes={{ title: 'screen-lg:pb-[30px]' }}
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
      <FAQBlock faqData={designAuditFaqData} />
    </>
  );
}

export default DesignAuditServicesPageView;
