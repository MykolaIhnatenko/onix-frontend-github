import { useSelector } from 'react-redux';

import ServicesMainSection from './components/ServicesMainSection';
import ServicesCustomSoftwareSection from './components/ServicesCustomSoftwareSection';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import TrustUsBlock from '../MainPage/components/TrustUsBlock';
import ServicesApproachSection from './components/ServicesApproachSection';
import ProcessBlock from '../../components/ProcessBlock/ProcessBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import { IPageBlogs } from '../../interfaces/IPages';
import { carouselBottom, carouselTop } from '../MainPage/data/industriesWeServeCarouselData';
import content from './data/industriesWeServeData';
import IndustriesWeServeBlock from '../../components/IndustriesWeServeBlock/IndustriesWeServe';
import ButtonTypes from '../../constants/ButtonTypes';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import { IApp } from '../../store/app/interfaces/IApp';
import IStore from '../../store/interfaces/IStore';
import quotesList from '../MainPage/data/quotesList';
import faqData from './data/faqData';
import trustUsCardsData, { trustUsCardsContent } from './data/trustUsCardsData';
import {
  ButtonPathVariant,
  ButtonType,
  DropBlockVariant, ScrollVariant,
} from '../../constants/enums';
import { processAccordionData, processImages } from '../MainPage/data/processData';
import processBlockContent from './data/processData';
import { trustUsBlockFor6Cards } from 'constants/tailwindStyle';
import CooperateBlock from 'components/CooperateBlock/CooperateBlock';
import cooperateList from './data/cooperateListData';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';

import ServicesTurstUsBgMobile from '@/images/services/img_trust_us_bg_mobile@2x.webp';
import ServicesCallToActionMobile4 from '@/images/img_lastCtaMobile@2x.webp';
import ServicesCallToActionTablet4 from '@/images/img_lastCtaTablet@2x.webp';
import ServicesCallToAction4 from '@/images/services/img_call_to_action4@2x.webp';
import ServicesCallToActionMobile3 from '@/images/services/img_call_to_action3_mobile@2x.webp';
import ServicesCallToActionTablet3 from '@/images/services/img_call_to_action3_tablet@2x.webp';
import ServicesCallToAction3 from '@/images/services/img_call_to_action3@2x.webp';
import ServicesCallToActionMobile2 from '@/images/services/img_call_to_action2_mobile@2x.webp';
import ServicesCallToActionTablet2 from '@/images/services/img_call_to_action2_tablet@2x.webp';
import ServicesCallToAction2 from '@/images/services/img_call_to_action2@2x.webp';
import ServicesCallToActionMobile1 from '@/images/services/img_call_to_action1_mobile@2x.webp';
import ServicesCallToActionTablet1 from '@/images/services/img_call_to_action1_tablet@2x.webp';
import ServicesCallToAction1 from '@/images/services/img_call_to_action1@2x.webp';
import IndustriesBgXXXL from '@/images/industriesWeServe/img_bgXXXL.webp';
import IndustriesBg from '@/images/industriesWeServe/img_bg.webp';
import IndustriesBgTablet from '@/images/industriesWeServe/img_bgTablet.webp';
import IndustriesBgMobile from '@/images/industriesWeServe/img_bgMobile.webp';
import CaseStudiesBg from '@/images/caseStudiesBlock/img_bottomBg.webp';
import CaseStudiesBgTablet from '@/images/caseStudiesBlock/img_bottomBgTablet.webp';

function ServicesPageView({ pageBlogs }: IPageBlogs) {
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
    const bg = {
      first: ServicesCallToAction1,
      second: ServicesCallToAction2,
      third: ServicesCallToAction3,
      fourth: ServicesCallToAction4,
      industriesBg: IndustriesBg,
      caseStudiesBg: CaseStudiesBg,
    };

    if (isXXXLDevice || isLGDevice) {
      bg.industriesBg = IndustriesBgXXXL;
    } else if (isMDDevice) {
      bg.first = ServicesCallToActionTablet1;
      bg.second = ServicesCallToActionTablet2;
      bg.third = ServicesCallToActionTablet3;
      bg.fourth = ServicesCallToActionTablet4;
      bg.industriesBg = IndustriesBgTablet;
      bg.caseStudiesBg = CaseStudiesBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.first = ServicesCallToActionMobile1;
      bg.second = ServicesCallToActionMobile2;
      bg.third = ServicesCallToActionMobile3;
      bg.fourth = ServicesCallToActionMobile4;
      bg.industriesBg = IndustriesBgMobile;
      bg.caseStudiesBg = CaseStudiesBgTablet;
    }

    return bg;
  };

  return (
    <>
      <ServicesMainSection />
      <ServicesCustomSoftwareSection />
      <IndustriesWeServeBlock
        title={content.description}
        text={content.text}
        background={getBackground().industriesBg}
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
          carouselContainer: 'pt-[90px]',
          text: `min-lg:max-w-[1080px] min-xxxl:max-w-[1480px] first:mt-[30px] screen-md:first:!m-[20px_0_15px]
            screen-md:!text-[14px]/[20px] first:max-w-[878px] last:max-w-[688px]
            screen-lg:first:max-w-[542px] screen-lg:last:max-w-[633px]
          `,
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND2}
        background={getBackground().first}
        withButton
        title={(
          <>
            Can’t Find Your Case on the&nbsp;List?
          </>
        )}
        content={(
          <>
            No worries, our team can still help you. We can start with your specific needs analysis,
            Project Discovery, and MVP development&nbsp;first.
          </>
        )}
        btnText="Speak to our expert"
        buttonType={ButtonTypes.LIGHT}
        classes={{
          cta: '!bg-white !p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[100px_30px] screen-sm:!p-[100px_15px]',
          background: 'after:!hidden',
          title: '!max-w-[1078px] !pb-[40px] screen-lg:!max-w-[708px] screen-lg:!pb-[46px] screen-md:!pb-[40px]',
          content: 'screen-lg:!pb-[40px] screen-md:!text-[16px] screen-md:!leading-[24px] screen-md:!max-w-full',
          btn: '!max-w-[420px] screen-md:!max-w-[330px]',
        }}
      />
      <ReviewBlock
        slider
        withProjectBlock
        quotesList={quotesList}
      />
      <TrustUsBlock
        data={trustUsCardsData}
        title={trustUsCardsContent.title}
        subtitle={trustUsCardsContent.text}
        buttonText={isXSDevice ? 'Speak to our expert' : 'Tell us about your product idea'}
        classes={{
          container: '!pt-0 min-md:!pt-[80px]',
          sectionTitle: `!mb-[50px] !max-w-[368px] min-md:!max-w-[565px] min-md:!mb-[30px]
          min-lg:!max-w-[800px] min-lg:!mb-[40px]`,
          CardsBlockClasses: {
            cardClasses: {
              card: trustUsBlockFor6Cards,
            },
          },
        }}
        mobileBg={ServicesTurstUsBgMobile}
        dropBlockVariant={DropBlockVariant.WITHOUT_DROP_BLOCK}
        mobileBgVariant
      />
      <CaseStudiesBlock
        sliderIds={[16, 47, 46, 1000]}
        background={getBackground().caseStudiesBg}
        classes={{
          container: '!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
          bgContainer: 'top-auto bottom-0 after:!top-0 after:!bottom-auto after:!bg-gradient-to-b',
          bgImg: '!object-center',
          desc: `!max-w-[910px] screen-lg:!max-w-full mb-[40px] screen-lg:!mb-[60px]
            screen-md:!mb-[40px] screen-md:!text-[16px]/[24px]`,
        }}
      />
      <CallToActionComponent
        background={getBackground().second}
        withButton
        title={(
          <>
            How much does it cost to hire a dedicated team to build a top-tier software&nbsp;solution?
          </>
        )}
        content={(
          <>
            Specify the number of experts and technologies you need and get an approximate
            team cost for your product&nbsp;development!
          </>
        )}
        btnText="Calculate now"
        buttonType={ButtonTypes.PRIMARY}
        buttonPathVariant={ButtonPathVariant.CALCULATE}
        classes={{
          cta: '!p-[192px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
          background: `after:!bg-[linear-gradient(180deg,rgba(253,253,253,0)_15%,#ffffff_100%)]
          after:!bottom-0 after:!left-0 min-lg:after:!h-[110px]`,
          title: '!max-w-[1100px] !text-black screen-lg:!max-w-[708px]',
          content: `!text-black !max-w-[741px] screen-lg:!max-w-[558px] screen-lg:!pb-[40px] screen-md:!text-[16px]
          screen-md:!leading-[24px] screen-md:!max-w-full`,
        }}
      />
      <ServicesApproachSection />
      <ProcessBlock
        data={processAccordionData}
        imagesData={processImages}
        subtitle={processBlockContent.subtitle}
        classes={{ container: 'min-lg:pb-[80px]' }}
      />
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().third}
        withButton
        title={(
          <>
            Proven track record, best IT minds, no hidden costs, and bureaucracy - that’s all about&nbsp;Onix!
          </>
        )}
        btnText="Speak to our expert"
        buttonType={ButtonTypes.LIGHT}
        classes={{
          cta: '!p-[200px_70px_287px] screen-lg:!p-[80px_30px] screen-md:!p-[100px_30px] screen-sm:!p-[100px_15px]',
          background: 'after:!hidden',
          image: '!object-bottom',
          title: `!max-w-[1078px] !pb-[49px] screen-lg:!max-w-[680px] screen-lg:!pb-[40px]
          screen-md:!max-w-full screen-md:!pb-[50px]`,
        }}
      />
      <CooperateBlock
        title="How We Make Development&nbsp;Different"
        subtitle={`Onix custom software developers are well-trained and gifted professionals who have
          gained many years of knowledge and experience. We believe in three key ingredients
          that help make our development process accomplished:`}
        data={cooperateList}
        classes={{
          section: 'screen-md:pt-[20px]',
          accordion: 'min-xxxl:h-[750px]',
          title: 'max-w-[683px] screen-lg:mb-[30px] screen-md:mb-[15px]',
          subTitle: '!mb-[80px] screen-lg:!mb-[60px] screen-md:!mb-[40px]',
          itemTextContainer: 'max-w-[908px]',
          itemImage: 'min-xl:max-w-[908px]',
        }}
      />
      {!!pageBlogs?.length && (
        <OurInsights
          pageBlogs={pageBlogs}
          text="Learn more about custom software development from our blog posts on this topic."
          classes={{
            text: 'max-w-[516px] pb-[60px] screen-lg:pb-[40px] screen-md:pb-[20px] screen-md:max-w-full',
          }}
        />
      )}
      <CallToActionComponent
        id={ButtonType.LAND4}
        background={getBackground().fourth}
        withButton
        title={(
          <>
            Tell us about your product idea and let the&nbsp;magic&nbsp;unfold.
          </>
        )}
        btnText="Speak to our expert"
        buttonType={ButtonTypes.LIGHT}
      />
      <FAQBlock faqData={faqData} withScroll={ScrollVariant.TO_TOP_ITEM} />
    </>
  );
}

export default ServicesPageView;
