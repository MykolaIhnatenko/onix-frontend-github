import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import FullCycleBlock from './components/FullCycleBlock';
import TechGeeksBlock from './components/TechGeeksBlock';
import quotesList from './data/quotesList';
import { processAccordionData, processBlockContent, processImages } from './data/processData';
import { faqData } from './data/accordionData';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import trustUsCardsData from './data/trustUsCardsData.json';
import trustUsBlockData from './data/trustUsBlockData.json';
import getTechnologies from '../../utils/getTechnologies';
import { technologiesBlocksNames, technologiesBlocksData } from './data/technologies';
import { carouselBottom, carouselTop, industriesWeServeBlockData } from './data/industriesWeServeCarouselData';
import {
  ButtonPathVariant,
  ButtonType,
} from '../../constants/enums';
import softwareProductBlockData from './data/softwareProductData';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import TechnologiesBlock from 'components/TechnologiesBlock/TechnologiesBlock';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import cooperateList from './data/cooperateList';
import AnimatedGradientBackground from '../../components/GradientBackground/GradientBackground';

const CallToActionComponent = dynamic(() => import(
  '../../components/CallToActionBlock/CallToActionComponent'
), { ssr: false });
const CooperateBlock = dynamic(() => import(
  '../../components/CooperateBlock/CooperateBlock'
), { ssr: false });
const IndustriesWeServeBlock = dynamic(() => import(
  '../../components/IndustriesWeServeBlock/IndustriesWeServe'
), { ssr: false });
const SoftwareProductBlock = dynamic(() => import(
  '../../components/SoftwareProductBlock/SoftwareProductBlock'
), { ssr: false });
const CaseStudiesBlock = dynamic(() => import(
  '../../components/CaseStudiesBlock/CaseStudiesBlock'
), { ssr: false });
const TrustUsBlock = dynamic(() => import(
  './components/TrustUsBlock'
), { ssr: false });
const ProcessBlock = dynamic(() => import(
  '../../components/ProcessBlock/ProcessBlock'
), { ssr: false });

function MainPage() {
  const [showReview, setShowReview] = useState(<> </>);
  const [showTech, setShowTech] = useState(<> </>);

  useEffect(() => {
    setTimeout(() => {
      setShowReview(
        <ReviewBlock
          slider
          withProjectBlock
          quotesList={quotesList}
          classes={{
            container: 'bg-white',
          }}
        />,
      );
    }, 4000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowTech(
        <>
          <CooperateBlock
            title="How to cooperate with Onix"
            data={cooperateList}
            classes={{
              section: 'screen-md:pt-[20px]',
            }}
          />
          <TechnologiesBlock
            pageTitle={technologiesBlocksData.pageTitle}
            technologies={getTechnologies(technologiesBlocksNames)}
            classes={{
              container: 'bg-white',
            }}
          />
        </>,
      );
    }, 4000);
  }, []);

  return (
    <>
      <AnimatedGradientBackground />
      <TechGeeksBlock />
      <FullCycleBlock />
      <AchievementsBlock />
      {showReview}
      <IndustriesWeServeBlock
        upTitle={industriesWeServeBlockData.upTitle}
        title={industriesWeServeBlockData.pageTitle}
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
          section: 'bg-transparent',
          title: 'min-xxxl:max-w-[1296px]',
        }}
      />
      <SoftwareProductBlock
        title={softwareProductBlockData.title}
        mainText={softwareProductBlockData.mainText}
        firstNoteText={softwareProductBlockData.firstNoteText}
        secondNoteText={softwareProductBlockData.secondNoteText}
        data={softwareProductBlockData.data}
      />
      <CaseStudiesBlock
        sliderIds={[40, 42, 26, 1000]}
        classes={{
          section: 'bg-transparent',
          container: '!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
          bgContainer: 'top-auto bottom-0 after:!top-0 after:!bottom-auto after:!bg-gradient-to-b',
          bgImg: '!object-center',
        }}
      />
      <TrustUsBlock
        data={trustUsCardsData}
        title={trustUsBlockData.title}
        disableBg
        dropBlockBtnTitle="Drop us a message"
        animatedGradient
      />
      <ProcessBlock
        data={processAccordionData}
        imagesData={processImages}
        title={processBlockContent.title}
        subtitle={processBlockContent.subtitle}
        classes={{
          container: 'bg-white',
        }}
      />
      <CallToActionComponent
        withButton
        buttonPathVariant={ButtonPathVariant.CALCULATE}
        content="Specify the number of experts and technologies you need and get an approximate cost for your project!"
        title={(
          <>
            How much does it cost to hire a&nbsp;dedicated team to build
            {' '}
            <br className="hidden screen-lg:block screen-md:hidden" />
            a&nbsp;top-tier&nbsp;solution?
          </>
        )}
        btnText="Calculate now"
        classes={{
          cta: 'bg-transparent !p-[200px_70px_180px] screen-lg:!p-[80px_30px] '
            + 'screen-md:!p-[100px_30px] screen-sm:!p-[100px_15px]',
          background: '!h-[464px] screen-lg:!h-[424px]',
          title: `!max-w-[1080px] !pb-[40px] !text-white screen-lg:!max-w-[580px] screen-md:!max-w-full
          screen-md:!pb-[15px]`,
          content: '!text-white !max-w-[670px] screen-md:!pb-[60px] screen-md:!text-[16px] screen-md:!leading-[24px]',
          btn: 'screen-lg:!text-[18px] screen-md:!text-[16px]',
        }}
      />
      {showTech}
      <CallToActionComponent
        id={ButtonType.LAND2}
        withButton
        classes={{
          cta: 'bg-transparent',
        }}
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

export default MainPage;
