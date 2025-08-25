import dynamic from 'next/dynamic';
import { StaticImageData } from 'next/image';

import MainBlock from './components/MainBlock';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import AnimatedGradientBackground from '../../components/GradientBackground/GradientBackground';
import IAchievements from '../../interfaces/IAchievements';
import faqData from './data/faqData';
import { IPageBlogs } from '../../interfaces/IPages';
import PageBlogs from './components/PageBlogs';
import AiSolutions from './components/AiSolutions';
import AuditConsultationProcessBlock from './components/AuditConsultationProcessBlock/AuditConsultationProcessBlock';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import NumbersBlock from 'pages/MainPage/components/NumbersBlock/NumbersBlock';
import WhatWeDo from 'pages/MainPage/components/WhatWeDo/WhatWeDo';
import ThreeStepsBlock from 'pages/MainPage/components/ThreeStepsBlock/ThreeStepsBlock';
import { carouselBottom, carouselTop } from './data/industriesWeServeCarouselMainData';
import businessContextDataMain from './data/businessContextData';
import trustUsCardsData from './data/trustUsCardsData';
import { ButtonType, DropBlockVariant } from '../../constants/enums';
import { useAppSelector } from '../../hook/reduxToolkit';
import ButtonTypes from '../../constants/ButtonTypes';
import { getTechnologiesBooking } from '../../utils/getTechnologies';
import { technologiesBlocksNames } from './data/technologies';
import CardsBlockMain from 'pages/MainPage/components/CardsBlockMain';

import CTAFirstBg from '@/images/mainPage/cta/img_ctaWhiteBg@2x.webp';
import CTAFirstTabletBg from '@/images/mainPage/cta/img_ctaWhiteTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/mainPage/cta/img_ctaWhiteMobileBg@2x.webp';
import JoinOurBg from '@/images/mainPage/JoinOur/img_join.webp';
import JoinOurTabletBg from '@/images/mainPage/JoinOur/img_join_tablet.webp';
import JoinOurMobileBg from '@/images/mainPage/JoinOur/img_join_mobile.webp';

const CaseStudiesBlock = dynamic(() => import(
  '../../components/CaseStudiesBlock/CaseStudiesBlock'
), { ssr: false });
const VRARCallToActionComponent = dynamic(() => import(
  '../../components/VRARCallToActionBlock/VRARCallToActionComponent'
), { ssr: false });
const LogosOfOurClients = dynamic(() => import(
  '../../components/LogosOfOurClients/LogosOfOurClients'
), { ssr: false });
const WhyOnixBeats = dynamic(() => import(
  './components/WhyOnixBeats/WhyOnixBeats'
), { ssr: false });
const TestimonialsSlider = dynamic(() => import(
  '../../components/TestimonialsSlider/TestimonialsSlider'
), { ssr: false });
const BusinessContext = dynamic(() => import(
  '../../components/BusinessContext/BusinessContext'
), { ssr: false });
const IndustriesWeServeBlock = dynamic(() => import(
  '../../components/IndustriesWeServeBlock/IndustriesWeServe'
), { ssr: false });
const CaseStudiesBlockForCases = dynamic(() => import(
  '../../components/CaseStudiesBlockForCases/CaseStudiesBlockForCases'
), { ssr: false });
const TechnologiesBlock = dynamic(() => import(
  '../../components/TechnologiesBlock/TechnologiesBlock'
), { ssr: false });
const JoinOurNewsletterBlock = dynamic(() => import(
  './components/JoinOurNewsletterBlock/JoinOurNewsletterBlock'
), { ssr: false });

function MainPage({ pageBlogs, achievements }: IPageBlogs & IAchievements) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      cta: CTAFirstBg,
      joinOur: JoinOurBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.cta = CTAFirstTabletBg;
      bg.joinOur = JoinOurTabletBg;
    } else if (isXSDevice) {
      bg.cta = CTAFirstMobileBg;
      bg.joinOur = JoinOurMobileBg;
    }
    return bg;
  };

  return (
    <>
      <AnimatedGradientBackground id="noiseFilterBgMain" />
      <MainBlock />
      <CardsBlockMain
        data={trustUsCardsData}
        withoutAnimate={false}
        hiddenTitleInTablet
        classes={{
          CardsBlockClasses: {
            cardClasses: {
              card: 'min-xl:!h-[calc(100vw/3)] min-lg:!h-[360px] min-xl:!h-[calc(100vw/2)] '
                + 'min-md:[&:nth-of-type(8)]:!border-b-2 min-md:[&:nth-of-type(8)]:!border-black '
                + 'min-xl:[&:nth-of-type(9)]:!border-b-2 min-xl:[&:nth-of-type(9)]:!border-black '
                + 'screen-lg:!py-[30px] screen-md:!p-[20px_15px] '
                + '[&:nth-of-type(1)]:!border-l-0 [&:nth-of-type(4)]:!border-l-0 [&:nth-of-type(7)]:!border-l-0 '
                + 'screen-xl:[&:nth-of-type(3)]:!border-l-0 screen-xl:[&:nth-of-type(5)]:!border-l-0 '
                + 'screen-xl:[&:nth-of-type(9)]:!border-l-0 screen-xl:[&:nth-of-type(9)]:!border-b-0 '
                + '[&:nth-of-type(3)]:!border-r-0 [&:nth-of-type(6)]:!border-r-0 [&:nth-of-type(9)]:!border-r-0 '
                + 'screen-xl:[&:nth-of-type(2)]:!border-r-0 screen-xl:[&:nth-of-type(4)]:!border-r-0 '
                + 'screen-xl:[&:nth-of-type(8)]:!border-r-0 screen-xl:[&:nth-of-type(3)]:!border-r-[2px] '
                + 'screen-xl:[&:nth-of-type(9)]:!border-r-[2px] screen-xl:[&:nth-of-type(9)]:!border-t-0 '
                + 'screen-xl:[&:nth-of-type(7)]:!border-b-[2px] screen-md:!border-r-0 screen-md:!border-l-0 '
                + 'screen-md:[&:nth-of-type(9)]:!border-r-0 screen-md:[&:nth-of-type(3)]:!border-r-0 '
                + 'screen-md:[&:nth-of-type(7)]:!border-b-0 screen-md:[&:nth-of-type(9)]:!border-t-[2px] '
                + 'screen-md:[&:nth-of-type(9)]:!border-b-[2px] ',
              content: 'screen-lg:!py-[30px] screen-md:!p-[20px_15px]',
              title: '!text-[34px]/[1.2] screen-lg:!text-[28px]/[1.3] screen-md:!text-[24px]/[1.3]',
              iconText: 'select-none !text-[34px]/[1.2] screen-lg:!text-[28px]/[1.3] screen-md:!text-[24px]/[1.3]',
              boxText: '!text-[16px]/[1.5] screen-lg:!text-[16px]/[1.5] screen-lg:!basis-full '
                + 'screen-md:!text-[14px]/[1.5]',
              invisibleIcon: '!hidden',
            },
            cards: 'screen-xl:!border-b-[2px] screen-xl:!border-black screen-md:!border-b-0',
          },
        }}
        dropBlockVariant={DropBlockVariant.WITHOUT_DROP_BLOCK}
        disableBg
        animatedGradient
      />
      <NumbersBlock />
      <AchievementsBlock achievements={achievements} />
      <WhatWeDo />
      <ThreeStepsBlock />
      <CaseStudiesBlock
        sliderIds={[71, 72, 73, 74]}
        title={(
          <>
            Our real results speak louder
            {' '}
            <span className="inline-block">than promises</span>
          </>
        )}
        withoutDots
        classes={{
          section: 'bg-transparent',
          container: '!py-[100px] screen-lg:!py-[80px] screen-md:!py-[60px]',
          title: '!font-jakartaSans !mb-[60px] screen-lg:!mb-[40px] screen-md:!mb-[30px] '
          + 'screen-lg:!text-[38px]/[1.2] screen-md:!text-[28px]/[1.3]',
        }}
      />
      <LogosOfOurClients />
      <WhyOnixBeats />
      <TestimonialsSlider />
      <BusinessContext
        title={businessContextDataMain.title}
        subTitle={businessContextDataMain.subTitle}
        leftContent={businessContextDataMain.firstText}
        rightContent={businessContextDataMain.secondText}
        isJakarta
        isButton
        buttonText="Hire a team"
        classes={{
          section: 'bg-white !py-[100px] screen-lg:!py-[80px] screen-md:!py-[60px]',
          title: 'screen-lg:!text-[38px]/[1.2] screen-lg:mb-[30px] screen-md:!mb-[20px] screen-md:!text-[28px]/[1.2]',
          subTitle: '!mb-[30px] screen-lg:!mb-[20px] screen-md:!text-[18px]/[1.4] screen-md:!mb-[20px]',
          contentContainer: 'screen-lg:!gap-[20px] screen-md:!gap-[15px]',
        }}

      />
      <IndustriesWeServeBlock
        title="Our experience across industries"
        carouselTop={carouselTop}
        carouselBottom={carouselBottom}
        withoutAnimate={false}
        withoutBorder
        carouselTopClasses={{
          animation: 'animate-main-projects '
                + 'screen-lg:animate-main-projects-tablet '
                + 'screen-md:animate-main-projects-mobile',
          item: 'ml-[40px] screen-lg:ml-[100px] screen-md:ml-[30px]',
        }}
        carouselBottomClasses={{
          animation: 'animate-main-projects-revert '
                + 'screen-lg:animate-main-projects-tablet-revert '
                + 'screen-md:animate-main-projects-mobile-revert',
          item: 'ml-[40px] screen-lg:ml-[100px] screen-md:ml-[30px]',
        }}
        classes={{
          section: 'bg-transparent',
          carouselContainer: '!gap-[100px] screen-lg:!gap-[80px] screen-md:!gap-[60px] screen-md:!pt-[60px]',
          container: 'py-[100px] screen-lg:py-[80px] screen-md:py-[60px]',
          title: 'font-jakartaSans !leading-[1.2] screen-lg:!text-[38px]/[1.2] screen-md:!text-[28px]/[1.3]',
        }}
      />
      <CaseStudiesBlockForCases
        title="Our projects"
        animatedTitle
        sliderIds={[75, 76, 77, 78, 1001]}
        withoutBackground
        withoutDots
        classes={{
          container: '!pt-0 !pb-[100px] screen-lg:!pb-[80px] screen-md:!pb-[60px]',
          section: 'bg-transparent',
          title: '!font-jakartaSans normal-case font-medium tracking-[-0.01em] mb-[60px]'
            + ' screen-lg:mb-[40px] screen-lg:!text-[50px] screen-md:!text-[28px] screen-md:mb-[30px] ',
        }}
      />
      <TechnologiesBlock
        technologies={getTechnologiesBooking(technologiesBlocksNames)}
        titleDesc={(
          <>
            The right tools to fix what others&nbsp;broke
          </>
        )}
        animatedText
        isJakarta
        classes={{
          container: 'bg-white !p-[100px_70px] min-xxxl:!p-[100px_80px]'
            + ' screen-lg:!p-[80px_30px] screen-md:!p-[60px_15px]',
          blockTitleText: '!m-0',
          blockTitleDesc: '!mb-[60px] !text-black !w-full screen-lg:!text-[38px]'
            + ' screen-lg:!mb-[40px] screen-md:!text-[28px] screen-md:!mb-[30px]',
          technologies: {
            technology: '!border-b-0 !border-black !py-[0px] gap-[30px] max-1310:gap-0 max-1310:overflow-visible '
              + '!border-t-2 [&:last-child]:!border-b-2 flex align-center max-1310:flex-col screen-lg:gap-[25px] '
              + 'screen-md:gap-[15px]',
            keyTitle: '!text-[28px]/[1.3] !p-0 min-lg:!w-[100%] min-xl:!w-[450px] flex-shrink-0 '
              + '!my-[30px] screen-lg:!m-[30px_0_0px] screen-md:!mt-[20px] screen-md:!text-[20px]/[1.4] '
              + 'max-1310:!mb-0',
            technologiesList: '!p-0 !pl-[10px] !overflow-hidden flex items-center max-1310:!pb-[30px] flex-wrap '
              + 'screen-md:flex-wrap  screen-md:mb-[20px] screen-md:gap-[15px_0] screen-lg:!pl-[0px] '
              + 'max-1310:!pt-[25px] screen-lg:!pt-0 screen-md:!pb-0',
            item: '!p-0 screen-lg:!mr-[20px] screen-md:!mr-[15px]',
            iconTitle: '!font-medium !text-[18px]/[1.4] screen-md:!text-[16px]/[1.5]',
          },
        }}
      />
      <AiSolutions />
      <AuditConsultationProcessBlock />
      <VRARCallToActionComponent
        id={ButtonType.LAND4}
        background={getBackground().cta}
        withButton
        isJakarta
        buttonType={ButtonTypes.PRIMARY}
        title={(
          <>
            This step gives you valuable insight even if you decide
            not to move forward
            {' '}
            <br className="hidden screen-lg:block screen-md:hidden" />
            {' '}
            (but&nbsp;we’re confident you&nbsp;will!).
          </>
        )}
        btnText="Book free audit now"
        classes={{
          cta: '!p-[100px_0] screen-lg:!p-[80px_30px] screen-md:!p-[60px_15px]',
          background: `after:absolute after:content-[""] after:w-full after:h-[100px]
            after:bg-gradient-to-t from-[rgba(253,253,253,0)_5%] to-white
            after:top-0 after:left-0 screen-md:after:bg-gradient-to-t from-[rgba(216,213,213,0)] to-white`,
          title: '!text-black font-jakartaSans !text-[38px]/[1.2] screen-xl:px-[70px] tracking-[-0.01em] tb-[40px] '
            + ' screen-lg:max-w-[708px] screen-lg:px-0 screen-lg:!text-[34px]'
            + ' screen-md:!text-[24px] screen-md:!tb-[30px]',
          btn: '!font-jakartaSans !normal-case !tracking-[-0.01em]',
        }}
      />
      {!!pageBlogs?.length && <PageBlogs pageBlogs={pageBlogs} />}
      <JoinOurNewsletterBlock bg={getBackground().joinOur} />
      <FAQBlock
        title="FAQs"
        faqData={faqData}
        animatedText
        borderTop
        classes={{
          container: '!pb-0 pt-[100px] screen-lg:!pt-[80px] screen-md:!pt-[60px]',
          title: '!font-jakartaSans pb-[60px] min-xxxl:pb-[60px] screen-lg:!pb-[40px] '
            + ' screen-lg:!text-[38px]'
            + ' screen-md:!text-[28px] screen-md:!pb-[30px]',
          accordion: {
            accordionTitle: '!leading-[31px] !h-fit screen-lg:!leading-[31px] screen-md:!leading-[25px]'
              + ' screen-md:mr-[20px]',
          },
        }}
      />
    </>
  );
}

export default MainPage;
