import React from 'react';
import { StaticImageData } from 'next/image';
import { useSelector } from 'react-redux';

import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import {
  ButtonType,
  CardBlockVariant,
  DropBlockVariant,
} from '../../constants/enums';
import motionGraphicsCardsBlockData, { motionGraphicsCardsHeading } from './data/motionGraphicsCardsBlockData';
import motionGraphicsDesignProcessBlockData, {
  motionGraphicsDesignProcessBlockSubtitle,
  motionGraphicsDesignProcessBlockTitle,
  motionGraphicsProcessBlockData,
} from './data/motionGraphicsDesignProcessBlockData';
import motionGraphicsCooperateBlockData from './data/motionGraphicsCooperateBlockData';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import motionGraphicsQuotesList from './data/motionGraphicsQuotesList';
import ProcessBlock from '../../components/ProcessBlock/ProcessBlock';
import MotionGraphicsNumbersBlock from './components/MotionGraphicsNumbersBlock';
import MotionGraphicsIconsContent from './components/MotionGraphicsIconsContent';
import MainTitle from '../../components/MainTitle/MainTitle';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import CooperateBlock from '../../components/CooperateBlock/CooperateBlock';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import MotionGraphicsOurWorkBlock from './components/MotionGraphicsOurWorkBlock';
import { IPageBlogs } from '../../interfaces/IPages';
import MotionGraphicsFaqData from './components/MotionGraphicsFaqData';
import TrustUsBlock from '../MainPage/components/TrustUsBlock';
import MotionMainBlock from './components/MotionMainBlock';
import CaseStudiesBg from '@/images/caseStudiesBlock/img_bottomBg.webp';
import MotionGraphicsCtaSecond from '@/images/motionGraphics/cta/img_CtaSecond@2x.webp';
import MotionGraphicsCtaSecondTablet from '@/images/motionGraphics/cta/img_CtaSecondTablet@2x.webp';
import MotionGraphicsCtaSecondMobile from '@/images/motionGraphics/cta/img_CtaSecondMobile@2x.webp';
import MotionGraphicsCtaTellUs from '@/images/motionGraphics/cta/img_CtaTellUs@2x.webp';
import MotionGraphicsCtaTellUsTablet from '@/images/motionGraphics/cta/img_CtaTellUsTablet@2x.webp';
import MotionGraphicsCtaTellUsMobile from '@/images/motionGraphics/cta/img_CtaTellUsMobile@2x.webp';
import IosContactUsBigBg1 from '@/images/iosPage/img_contact_us_big_bg1@2x.webp';
import ButtonTypes from '../../constants/ButtonTypes';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import motionGraphicsDesignServicesData from './data/motionGraphicsDesignServicesData';
import { trustUsBlockFor6Cards } from 'constants/tailwindStyle';
import DedicatedTeamCaseStudiesBgMobile from '@/images/dedicatedTeamPage/img_case_studies_bg_mobile@2x.webp';
import DedicatedTeamCaseStudiesBgTablet from '@/images/dedicatedTeamPage/img_dedicated_team_case_sudies_tablet_bg@2x.webp';
import DedicatedTeamCaseStudiesBg from '@/images/dedicatedTeamPage/img_dedicated_team_case_sudies_bg@2x.webp';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';

import styles from './sass/MotionGraphicsDesignServicesPageView.module.scss';

function MotionGraphicsDesignServicesPageView({ pageBlogs }: IPageBlogs) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      tellUs: MotionGraphicsCtaTellUs,
      igniteBrandBg: CaseStudiesBg,
      ctaSecond: MotionGraphicsCtaSecond,
      caseStudiesBg: DedicatedTeamCaseStudiesBg,
    };
    if (isXXXLDevice) {
      bg.ctaSecond = IosContactUsBigBg1;
    } else if (isMDDevice || isSMDevice) {
      bg.tellUs = MotionGraphicsCtaTellUsTablet;
      bg.ctaSecond = MotionGraphicsCtaSecondTablet;
      bg.caseStudiesBg = DedicatedTeamCaseStudiesBgTablet;
    } else if (isXSDevice) {
      bg.tellUs = MotionGraphicsCtaTellUsMobile;
      bg.ctaSecond = MotionGraphicsCtaSecondMobile;
      bg.caseStudiesBg = DedicatedTeamCaseStudiesBgMobile;
    }
    return bg;
  };

  return (
    <>
      <MotionMainBlock />
      <MotionGraphicsIconsContent />
      <CallToActionComponent
        id={ButtonType.LAND}
        withButton
        title={(
          <>
            Ready to engage your audience and tell your brand&apos;s story in a&nbsp;captivating&nbsp;way?
          </>
        )}
        btnText="Contact our specialists"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!bg-white !p-[0_70px_120px] min-xxxl:!p-[0_80px_120px] 
            screen-lg:!p-[0_30px_80px] screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]`,
          background: 'after:!hidden',
          title: `!text-black !max-w-[756px] !text-[36px] !leading-[46px]
            screen-lg:!max-w-[708px] screen-lg:!text-[30px] screen-lg:!leading-[40px]
            screen-md:!max-w-auto screen-md:!text-[24px] screen-md:!leading-[35px] screen-md:!pb-[30px]`,
        }}
      />
      <MotionGraphicsNumbersBlock />
      <AchievementsBlock />
      <ReviewBlock
        quotesList={motionGraphicsQuotesList}
      />
      <DevelopmentServicesWhite
        title={motionGraphicsDesignServicesData.title}
        description={motionGraphicsDesignServicesData.desc}
        data={motionGraphicsDesignServicesData.data}
        accordionOnMobile
        backgroundWithAccordion
        classes={{
          devServices: '!pb-0 screen-lg:!pb-[80px] screen-md:!pb-0',
          titleBlock: {
            desc: '!max-w-[720px] screen-lg:!max-w-full',
          },
          item: {
            devServicesItem: 'min-lg:!h-[196px]',
          },
        }}
      />
      <CaseStudiesBlock
        sliderIds={[36, 33, 5, 1000]}
        desc={`Discover how our team can bring your brand's vision
          to life through our motion graphic services.`}
        background={getBackground().caseStudiesBg}
        classes={{
          container: '!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
          bgContainer: '!h-[560px] screen-lg:!h-[790px] screen-md:!h-[250px]',
          bgImg: '!object-center',
          title: 'screen-md:!mb-[30px]',
          desc: `!max-w-[670px] screen-lg:!max-w-full mb-[92px] screen-lg:!mb-[60px]
            screen-md:!mb-[40px] screen-md:!text-[16px]/[24px]`,
        }}
      />
      <MotionGraphicsOurWorkBlock />
      <CallToActionComponent
        id={ButtonType.LAND2}
        background={getBackground().igniteBrandBg}
        withButton
        title={(
          <>
            Ignite your brand with a captivating motion design! Contact us today to
            schedule a consultation and get
            started on your custom visual&nbsp;storytelling.
          </>
        )}
        btnText="ASK for a consultation"
        classes={{
          cta: `!p-[120px_70px_160px] min-xxxl:!p-[120px_80px_160px] 
            screen-lg:!p-[120px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
          background: `after:!bg-gradient-to-b after:!from-black after:!to-transparent 
            after:!to-[100%] after:!top-0 min-lg:after:!h-[110px]`,
          title: `!max-w-[1090px] !text-[40px] !leading-[56px] screen-lg:!max-w-[666px] 
            screen-md:!text-[25px] screen-md:!leading-[35px] screen-md:!pb-[30px] screen-md:!max-w-full`,
        }}
      />
      <TrustUsBlock
        title="What you get with our motion graphics design services"
        dropBlockBtnTitle={motionGraphicsCardsHeading}
        data={motionGraphicsCardsBlockData}
        variant={CardBlockVariant.MOTION_GRAPHICS}
        dropBlockVariant={DropBlockVariant.WITHOUT_DROP_BLOCK}
        classes={{
          cardClasses: {
            card: trustUsBlockFor6Cards,
          },
        }}
      />
      <ProcessBlock
        title={motionGraphicsDesignProcessBlockTitle}
        subtitle={motionGraphicsDesignProcessBlockSubtitle}
        data={motionGraphicsDesignProcessBlockData}
        imagesData={motionGraphicsProcessBlockData}
        classes={{
          container: 'screen-lg:!pb-[60px] screen-md:!pb-0',
          contentInnerText: '!mt-[15px] !mb-[30px] !ml-[52px] !text-[16px] '
            + 'screen-md:!mr-[15px] min-xl:!ml-[80px] min-lg:!text-[18px] min-lg:!mb-[28px]',
        }}
      />
      <MainTitle tag="p" className={styles.teamMaintainsText}>
        Our team maintains open communication throughout the process to deliver design motion solutions that
        effectively engage your audience and achieve your business objectives.
      </MainTitle>
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().ctaSecond}
        withButton
        title={(
          <>
            Don&apos;t settle for an average design! Let our motion design experts enhance your content with
            mesmerizing animations and videos that engage, inspire, and&nbsp;drive&nbsp;results.
          </>
        )}
        btnText="Speak to Our Expert"
        classes={{
          cta: `!p-[160px_70px] min-xxxl:!p-[160px_80px]
            screen-lg:!p-[120px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
          background: `after:!bg-gradient-to-b after:!from-transparent after:!to-black
            after:!to-[100%] after:!bottom-0 min-lg:after:!h-[110px]`,
          title: `!max-w-[1200px] !text-[40px] !leading-[56px] screen-lg:!max-w-[708px]
            screen-md:!text-[25px] screen-md:!leading-[35px]`,
        }}
      />
      <CooperateBlock
        title="Why choose Onix as your motion&nbsp;design company"
        data={motionGraphicsCooperateBlockData}
        whiteTheme
        classes={{
          title: 'max-w-[763px] mb-[80px] screen-lg:mb-[60px] screen-md:mb-[40px]',
        }}
      />
      {!!pageBlogs?.length && (
        <OurInsights pageBlogs={pageBlogs} classes={{ blogTitle: 'min-md:!text-[24px]/[34px]' }} />
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
      <FAQBlock faqData={MotionGraphicsFaqData()} />
    </>
  );
}

export default MotionGraphicsDesignServicesPageView;
