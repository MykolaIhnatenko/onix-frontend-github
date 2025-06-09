import { useAppSelector } from '../../hook/reduxToolkit';
import MentalVideoBlock from '../../components/MentalVideoBlock/MentalVideoBlock';
import ModelsSection from '../../components/ModelsSection/ModelsSection';
import AnimationTableDesign from '../../components/AnimationTableDesign/AnimationTableDesign';
import ResultsBlock from 'components/ResultsBlock/ResultsBlock';
import solomiyaResultsBlockData from './data/solomiyaResultsBlockData';
import titleMainBlock from './data/titleScreen';
import devServicesData from './data/devServicesData';
import KillerFeaturesData from './data/KillerFeaturesData';
import solomiyaModelsSectionData from './data/solomiyaModelSection';
import TableData from './data/TableData.json';
import TechData from './data/TechData.json';
import resultsData from './data/ResultsData';
import { ButtonType } from '../../constants/enums';
import Screen from '@/images/Solomiya/img_Screen.webp';
import ScreenMobile from '@/images/Solomiya/img_ScreenMobile.webp';
import ScreenTablet from '@/images/Solomiya/img_ScreenTablet.webp';
import TableBg from '@/images/Solomiya/img_TableBg.webp';
import TableBgTablet from '@/images/Solomiya/img_TableBgTablet.webp';
import TableBgMobile from '@/images/Solomiya/img_TableBgMobile.webp';
import AnimImage from '@/images/Solomiya/img_Hand.webp';
import TestimonialBg from '@/images/Solomiya/img_TestimonialBg.webp';
import TestimonialBgTablet from '@/images/Solomiya/img_TestimonialBgTablet.webp';
import TestimonialBgMobile from '@/images/Solomiya/img_TestimonialBgMobile.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import IPageStatus from 'interfaces/IPageStatus';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import resultsBlockWhite from 'constants/tailwindStyle';
import businessContextData from './data/businessContextData';
import aboutContent from './data/aboutContent.json';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import ModelsBgXXXL from '@/images/modelsSection/img_backgroundXXXL.webp';
import ModelsBg from '@/images/modelsSection/img_background.webp';
import ModelsBgTablet from '@/images/Solomiya/img_bg_models_tablet@2x.webp';
import ModelsBgMobile from '@/images/modelsSection/img_backgroundMobile.webp';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import BusinessContext from 'components/BusinessContext/BusinessContext';

function SolomiyaView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      Main: Screen,
      table: TableBg,
      testimonial: TestimonialBg,
      results: ResultsBlockBg,
      cta: CTAFirstBg,
      modelsBg: ModelsBg,
    };
    if (isXXXLDevice) {
      bg.results = ResultsBlockXXXLBg;
      bg.cta = CTAFirstXXXLBg;
      bg.modelsBg = ModelsBgXXXL;
    } else if (isMDDevice) {
      bg.Main = ScreenTablet;
      bg.table = TableBgTablet;
      bg.testimonial = TestimonialBgTablet;
      bg.results = ResultsBlockTabletBg;
      bg.cta = CTAFirstTabletBg;
      bg.modelsBg = ModelsBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.Main = ScreenMobile;
      bg.table = TableBgMobile;
      bg.testimonial = TestimonialBgMobile;
      bg.results = ResultsBlockMobileBg;
      bg.cta = CTAFirstMobileBg;
      bg.modelsBg = ModelsBgMobile;
    }
    return bg;
  };

  const isMobile = isSMDevice || isXSDevice;

  return (
    <div>
      <MentalVideoBlock
        image={getBackground().Main}
        title={titleMainBlock}
        video="/static/video/solomiya.mp4"
        classes={{
          container: 'h-full',
          video: 'object-cover',
          videoPlayer: '!aspect-auto',
        }}
        animImage={AnimImage}
      />
      <AboutProjectSection
        title={aboutContent.title}
        content={aboutContent.content}
      />
      <BusinessContext
        upTitle={businessContextData.name}
        title={businessContextData.title}
        subTitle={businessContextData.subtitle}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <ResultsBlock
        title={solomiyaResultsBlockData.title}
        content={solomiyaResultsBlockData.content}
        background={getBackground().results}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          withButton
          title={isMobile
            ? (
              <>
                Are you interested
                <br />
                {' '}
                in mental health
                <br />
                {' '}
                app&nbsp;development?
              </>
            )
            : (
              <>
                Are you interested
                <br />
                {' '}
                in mental health app&nbsp;development?
              </>
            )}
          btnText="Get in touch with us"
          background={getBackground().cta}
          classes={{
            cta: `!pt-[120px] !pb-[120px] screen-lg:!pt-[80px] screen-lg:!pb-[80px]
            screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
            background: `after:!h-[50px]
            after:!top-0 after:!left-0 after:!bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,#000_100%)]`,
            title: '!max-w-full screen-md:br:!hidden',
          }}
        />
      )}
      <DevelopmentServicesWhite
        title={devServicesData.title}
        data={devServicesData.data}
        classes={{
          devServices: 'screen-md:!p-[80px_0]',
        }}
      />
      <ModelsSection
        pageTitle={solomiyaModelsSectionData.pageTitle}
        pageText={solomiyaModelsSectionData.pageText}
        data={solomiyaModelsSectionData.data}
        background={getBackground().modelsBg}
        classes={{ card: 'pb-[80px] screen-md:pb-[60px]' }}
      />
      <OurSolutions
        title={KillerFeaturesData.title}
        data={KillerFeaturesData.content}
        desktopViewOnXL
        classes={{ section: 'pb-0 screen-lg:pb-[80px]' }}
      />
      <AnimationTableDesign
        bg={getBackground().table}
        title={TableData.title}
        titleLeft={TableData.left.title}
        titleRight={TableData.right.title}
        contentLeft={TableData.left.content}
        contentRight={TableData.right.content}
      />
      <CoreTechnology
        title={TechData.techOne.title}
        data={TechData.techOne.techList}
        classes={{
          contentContainer: '!pt-0',
        }}
      />
      <CoreTechnology
        title={TechData.techSecond.title}
        data={TechData.techSecond.techList}
        classes={{
          contentContainer: '!py-0',
        }}
      />
      <ResultsBlock
        name={resultsData.titleBlock}
        title={resultsData.title}
        content={resultsData.listPerformance}
        classes={resultsBlockWhite}
      />
      <CaseStudiesBlockForCases
        sliderIds={[53, 65, 26, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          withButton
          title={(
            <>
              Are you interested
              {' '}
              <br className="screen-md:hidden" />
              in mental health app&nbsp;development?
            </>
          )}
          btnText="Get in touch"
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            title: '!max-w-full',
          }}
        />
      )}
    </div>
  );
}

export default SolomiyaView;
