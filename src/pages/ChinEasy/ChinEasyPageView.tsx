import { useAppSelector } from '../../hook/reduxToolkit';
import ChinEasyMainSection from './components/ChinEasyMainSection';
import ImageSection from '../../components/ImageSection/ImageSection';
import ChinEasySolutionsSection from './components/ChinEasySolutionsSection';
import ChinEasyColorCodingSection from './components/ChinEasyColorCodingSection';
import ChinEasyTypographySection from './components/ChinEasyTypographySection';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import ResultsBlock from 'components/ResultsBlock/ResultsBlock';
import technologies from './data/technologiesData';
import productScopeContent from './data/productScopeContent';
import childrenImageSectionData from './data/childrenImageSection';
import phonesImageSectionData from './data/phonesImageSection';
import servicesData from './data/servicesData';
import businessContextData from './data/businessContextData';
import { ButtonType } from '../../constants/enums';
import IPageStatus from 'interfaces/IPageStatus';
import howOnixDevelopedData from './data/howOnixDevelopedData';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import DragInfoBlock from 'components/DragInfoBlock/DragInfoBlock';
import projectPhasesData from './data/projectPhases';
import PhasesSectionTablet from './components/PhasesSectionTablet';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import RunningColsBlock from 'components/RunningColsBlock/RunningColsBlock';
import runningColsData from './data/runningCols';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextWithTable from 'components/BusinessContextWithTables/BusinessContextWithTable';
import businessContext from './data/businessContext';

import ServicesBg from '@/images/chinEasy/services/img_services_bg.webp';
import ServicesBgTablet from '@/images/chinEasy/services/img_services_bg_tablet.webp';
import CardBlockBg from '@/images/chinEasy/projectPhase/img_CardBlockBg.webp';
import CardBlockBgTablet from '@/images/chinEasy/projectPhase/img_CardBlockBgTablet.webp';
import CardBlockBgMobile from '@/images/chinEasy/projectPhase/img_CardBlockBgMobile.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import RunningColsBgXXXL from '@/images/runningColsBlock/img_runningColsBgXXXL.webp';
import RunningColsBg from '@/images/runningColsBlock/img_runningColsBg.webp';
import RunningColsBgTablet from '@/images/runningColsBlock/img_runningColsBgTablet.webp';
import RunningColsBgMobile from '@/images/runningColsBlock/img_runningColsBgMobile.webp';

function ChinEasyPageView({ saleUrl }: IPageStatus) {
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
      background: CTAFirstBg,
      bgCards: CardBlockBg,
      resultsBlock: ResultsBlockBg,
      services: ServicesBg,
      runningCols: RunningColsBg,
    };
    if (isXXXLDevice) {
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.background = CTAFirstXXXLBg;
      bg.runningCols = RunningColsBgXXXL;
    } else if (isMDDevice || isSMDevice) {
      bg.background = CTAFirstTabletBg;
      bg.bgCards = CardBlockBgTablet;
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.services = ServicesBgTablet;
      bg.runningCols = RunningColsBgTablet;
    } else if (isXSDevice) {
      bg.background = CTAFirstMobileBg;
      bg.bgCards = CardBlockBgMobile;
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.runningCols = RunningColsBgMobile;
    }

    return bg;
  };

  const isTabletOrMobile = isSMDevice || isXSDevice || isMDDevice;

  return (
    <>
      <ChinEasyMainSection />
      <AboutProjectSection
        title={howOnixDevelopedData.blockTitle}
        content={howOnixDevelopedData.data}
      />
      <BusinessContextWithTable
        upTitle="[ Business goals and context ]"
        title="The two-fold goal of this project was to craft:"
        content={businessContext}
        withoutAnimateTable
        classes={{
          column: `screen-md:!pb-[20px] transition-all duration-1000 ease-in-out
            hover:min-lg:bg-color-black hover:min-lg:text-color-white`,
          title: '!mb-[80px] screen-lg:!mb-[60px] screen-md:!mb-[40px]',
        }}
      />
      <ResultsBlock
        title={productScopeContent.subtitle}
        content={productScopeContent.progressBlockContent}
        background={getBackground().resultsBlock}
        productScope
        classes={{
          background: `after:absolute after:content-[""] after:w-full after:h-[120px]
            after:bg-gradient-to-b from-[rgba(253,253,253,0)_5%] to-black
            after:bottom-0 after:left-0 screen-md:after:bg-gradient-to-b from-[rgba(253,253,253,0)_5%] to-black`,
        }}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          background={getBackground().background}
          withButton
          title={(
            <>
              Are you interested
              <br className="hidden screen-md:block" />
              {' '}
              in&nbsp;M-learning app&nbsp;development?
            </>
          )}
          btnText="Contact us"
          classes={{
            cta: '!p-[120px_0] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `after:absolute after:content-[""] after:w-full after:h-[170px]
            after:bg-gradient-to-t from-[rgba(253,253,253,0)_5%] to-black
            after:top-0 after:left-0 screen-md:after:bg-gradient-to-t from-[rgba(216,213,213,0)] to-black`,
            image: '!object-right-bottom',
            title: '!pb-[40px] !max-w-[900px] screen-lg:!max-w-[643px] screen-md:max-w-[none] screen-md:!pb-[30px]',
          }}
        />
      )}
      <ImageSection data={childrenImageSectionData} />
      {!isTabletOrMobile ? (
        <DragInfoBlock
          title={projectPhasesData.title}
          data={projectPhasesData.sliderData}
        />
      ) : (
        <PhasesSectionTablet
          title={projectPhasesData.title}
          data={projectPhasesData.accordionData}
        />
      )}
      <DevelopmentServicesWhite
        title={servicesData.title}
        data={servicesData.data}
        classes={{
          devServices: 'screen-md:!p-[80px_0]',
        }}
      />
      <RunningColsBlock
        runningCols={runningColsData}
        bg={getBackground().runningCols}
      />
      <ChinEasySolutionsSection />
      <ChinEasyColorCodingSection />
      <ChinEasyTypographySection />
      <CoreTechnology data={technologies} classes={{ contentContainer: '!pb-0' }} />
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
      <ImageSection data={phonesImageSectionData} />
      <CaseStudiesBlockForCases
        sliderIds={[15, 16, 58, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          withButton
          title={(
            <>
              Are you interested
              <br className="hidden screen-md:block" />
              {' '}
              in&nbsp;M-learning app&nbsp;development?
            </>
          )}
          btnText="Contact us"
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            background: 'after:hidden',
            title: `!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!text-[25px] screen-md:!leading-[35px]
            screen-md:max-w-[none] screen-md:!pb-[30px]`,
          }}
        />
      )}
    </>
  );
}

export default ChinEasyPageView;
