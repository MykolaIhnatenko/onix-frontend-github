import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import FAQBlock from '../../components/FAQBlock/FAQBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import OurExpertiseSection from '../../components/OurExpertiseSection/OurExpertiseSection';
import TrustUsBlock from '../MainPage/components/TrustUsBlock';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import ClientsBlock from '../../components/ClientsBlock/ClientsBlock';
import NumbersBlock from '../../components/NumbersBlock/NumbersBlock';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import IndustryBlockWithAnimate from '../../components/IndustryBlockWithAnimate/IndustryBlockWithAnimate';
import PlatformsServed from '../../components/PlatformsServed/PlatformsServed';
import UiUxDesignMainblock from './components/UiUxDesignMainblock';
import DesignAuditCaseStudiesBlock from 'pages/DesignAuditServicesPageView/components/DesignAuditCaseStudiesBlock';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import { IPageBlogs } from '../../interfaces/IPages';
import uiUxSecondOurExpertiseSectionContentData from './data/uiUxSecondOurExpertiseSectionContentData';
import uiUxIndustryBlockWithAnimateData from './data/uiUxIndustryBlockWithAnimateData';
import uiUxPlatformsServedData from './data/uiUxPlatformsServedData';
import uiUxTrustUsCardsData from './data/uiUxTrustUsCardsData.json';
import uiUxNumbersData from './data/uiUxNumbersData';
import uiUxQuotesList from './data/uiUxQuotesList';
import uiUxFaqData from './data/uiUxFaqData';
import {
  ButtonType,
  CardBlockVariant,
  DropBlockVariant,
} from '../../constants/enums';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import StickySlider from '../../components/StickySlider/StickySlider';
import DesignAuditPlatformsServedBg from '@/images/designAuditServicesPage/platformsServed/img_designAuditPlatformsServedBg@2x.webp';
import DesignAuditPlatformsServedTabletBg from '@/images/designAuditServicesPage/platformsServed/img_designAuditPlatformsServedTabletBg@2x.webp';
import DesignAuditPlatformsServedMobileBg from '@/images/designAuditServicesPage/platformsServed/img_designAuditPlatformsServedMobileBg@2x.webp';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import TellUsAboutMD from '@/images/img_lastCtaTablet@2x.webp';
import TellUsAboutSM from '@/images/img_lastCtaMobile@2x.webp';
import UiUxCTAFirstBg from '@/images/uiUxPage/callToAction/img_uiUxCTAFirst@2x.webp';
import UiUxCTAFirstTabletBg from '@/images/uiUxPage/callToAction/img_uiUxCTAFirstTablet@2x.webp';
import UiUxCTAFirstMobileBg from '@/images/uiUxPage/callToAction/img_uiUxCTAFirstMobile@2x.webp';
import TrustUsBlockTabletBg from '@/images/uiUxPage/trustUsBlock/img_trustUsBgMobile@2x.webp';
import StickySliderData from 'pages/DesignAuditServicesPageView/data/designAuditStickySliderData';
import { trustUsBlockFor6Cards } from 'constants/tailwindStyle';

function UiUxDesignAndDevelopmentPageView({ pageBlogs }: IPageBlogs) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      callToActionFirst: UiUxCTAFirstBg,
      tellUs: TellUsAboutLG,
      platformsServedBg: DesignAuditPlatformsServedBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.callToActionFirst = UiUxCTAFirstTabletBg;
      bg.tellUs = TellUsAboutMD;
      bg.platformsServedBg = DesignAuditPlatformsServedTabletBg;
    } else if (isXSDevice) {
      bg.callToActionFirst = UiUxCTAFirstMobileBg;
      bg.tellUs = TellUsAboutSM;
      bg.platformsServedBg = DesignAuditPlatformsServedMobileBg;
    }
    return bg;
  };

  return (
    <>
      <UiUxDesignMainblock />
      <CallToActionComponent
        id={ButtonType.LAND}
        background={getBackground().callToActionFirst}
        withButton
        title={(
          <>
            We take a holistic approach to design, considering every aspect of
            the user journey, from first impressions to final&nbsp;conversions.
          </>
        )}
        btnText="Talk to our expert"
        classes={{
          cta: '!p-[160px_70px] screen-lg:!p-[126px_30px] screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
          background: 'after:!hidden',
          title: '!max-w-[1200px] screen-lg:!pb-[30px] screen-lg:!max-w-[708px] screen-md:!pb-[20px]',
        }}
      />
      <OurExpertiseSection
        title="Onix team offers a comprehensive range of UI/UX design services, including:"
        data={uiUxSecondOurExpertiseSectionContentData(isXSDevice || isSMDevice)}
        classes={{
          container: '!pt-[80px]',
          title: 'max-w-[962px] !pb-[40px] screen-lg:!pb-[30px] screen-md:!pb-[40px]',
          accordionContainer: 'screen-lg:!p-0',
        }}
      />
      <DesignAuditCaseStudiesBlock
        caseIds={[40, 55, 13, 1000]}
      />
      <IndustryBlockWithAnimate
        blockTitle={uiUxIndustryBlockWithAnimateData.blockTitle}
        blockText={uiUxIndustryBlockWithAnimateData.blockText}
        data={uiUxIndustryBlockWithAnimateData.data}
      />
      <PlatformsServed
        title={uiUxPlatformsServedData.title}
        text={uiUxPlatformsServedData.text}
        content={uiUxPlatformsServedData.content}
        background={getBackground().platformsServedBg}
        blackTheme
        classes={{
          container: '!pt-[80px] !pb-[60px] screen-lg:!pb-[80px]',
          title: 'max-w-[743px] mb-[40px] screen-md:mb-[30px]',
          text: '!mb-[60px] screen-md:!mb-[70px] max-w-[777px]',
          content: `!pt-0 !border-t-0 border-b-2 pb-[60px] screen-lg:pb-[50px] screen-md:pb-[40px]
            last:!border-none last:!pb-0 last:!pt-[60px] screen-lg:last:!pt-[50px] screen-md:last:!pt-[40px]
            screen-xl:!flex-row screen-md:!flex-col`,
          contentTitle: `!p-0 screen-xl:!pb-[40px] min-lg:min-w-[300px]
            screen-lg:!text-[30px]/[40px] screen-md:!text-[22px]/[28px]`,
          itemContent: `!grid-cols-4 max-w-[909px] screen-xl:!grid-cols-2 screen-xl:max-w-[400px]
            gap-y-[60px] screen-md:max-w-full screen-md:gap-y-[50px]`,
          itemIcon: '!p-0 !flex-col !gap-0 min-md:!min-w-0',
          itemIconTitle: '!mb-[20px] screen-md:!mb-[15px] screen-md:!text-[16px]/[26px]',
          icon: 'screen-md:w-auto screen-md:h-auto',
        }}
      />
      <AchievementsBlock
        title="Why Choose Onix for UI/UX Design"
      />
      <NumbersBlock
        data={uiUxNumbersData}
        classes={{
          table: `!bg-black !mt-0 !p-[24px_70px_36px] min-xxxl:!p-[24px_80px_36px]
            screen-lg:!p-[20px_30px_50px] screen-md:!p-[10px_15px_30px]`,
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
        data={uiUxTrustUsCardsData}
        title="There are several reasons why you should choose Onix for your UI/UX design needs:"
        variant={CardBlockVariant.UI_UX}
        dropBlockVariant={DropBlockVariant.WITHOUT_DROP_BLOCK}
        trustUsBlockMobileBg={TrustUsBlockTabletBg}
        classes={{
          cards: '!overflow-hidden',
          bgDesktop: '!h-auto',
          cardClasses: {
            card: trustUsBlockFor6Cards,
          },
        }}
      />
      <StickySlider
        blockTitle="How We’ll Build UI/UX Design Process With You"
        blockText="At Onix, we have an established design workflow that allows us to build designs
         that our customers love successfully."
        data={StickySliderData}
      />
      <ReviewBlock
        quotesList={uiUxQuotesList}
      />
      <ClientsBlock
        mainTitle="Brands We Have Worked With"
        title="[ Our clients ]"
        classes={{
          title: 'screen-md:!text-[14px] screen-md:!leading-[20px]',
        }}
      />
      {!!pageBlogs?.length && (
        <OurInsights
          pageBlogs={pageBlogs}
          text="Learn more about UI/UX design from our blog posts on this topic. "
        />
      )}
      <CallToActionComponent
        id={ButtonType.LAND2}
        background={getBackground().tellUs}
        withButton
        title={(
          <>
            Tell us about your product idea
            and let the&nbsp;magic&nbsp;unfold.
          </>
        )}
        btnText="Speak to Our Expert"
      />
      <FAQBlock faqData={uiUxFaqData} />
    </>
  );
}

export default UiUxDesignAndDevelopmentPageView;
