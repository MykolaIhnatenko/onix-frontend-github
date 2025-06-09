import { useAppSelector } from '../../hook/reduxToolkit';
import MainSection from './components/MainSection';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import DevServicesThreeCardsBlack from 'components/DevServicesThreeCardsBlack/DevServicesThreeCardsBlack';
import FaynoMarketResults from './components/FaynoMarketResults';
import DragInfoBlock from 'components/DragInfoBlock/DragInfoBlock';
import PhasesSectionTablet from './components/PhasesSectionTablet';
import BorderedColumns from './components/BorderedColumns';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import RunningColsBlockWithTitle from './components/RunningColsBlockWithTitle';
import BusinessContextWithTable from 'components/BusinessContextWithTables/BusinessContextWithTable';
import CollageSectionFirst from './components/CollageSectionFirst';
import CollageSectionSecond from './components/CollageSectionSecond';
import CollageSectionThird from './components/CollageSectionThird';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import TitleMainSection from './data/TitleMainSection';
import TechList from './data/TechList';
import BusinessData from './data/BusinessData';
import howOnixDevelopedData from './data/howOnixDevelopedData';
import developmentServicesData from './data/developmentServicesData';
import DragBlockData from './data/DragBlockData';
import phasesData from './data/phasesData';
import borderedColumnsData from './data/borderedColumnsData';
import confettiAnimationData from './data/confettiAnimationData';
import RunningColsData from './data/RunningColsData';
import OurSolutionsData from './data/OurSolutionsData';
import IPageStatus from 'interfaces/IPageStatus';
import { ButtonType } from 'constants/enums';
import MainSectionBg from '@/images/faynoMarket/mainSection/img_MainSection.webp';
import MainSectionTabletBg from '@/images/faynoMarket/mainSection/img_MainSectionTablet.webp';
import MainSectionMobileBg from '@/images/faynoMarket/mainSection/img_MainSectionMobile.webp';
import CTABg from '@/images/GolfLive/cta/img_CTA_bg.webp';
import CTABgTablet from '@/images/GolfLive/cta/img_CTA_bg_tablet.webp';
import CTABgMobile from '@/images/GolfLive/cta/img_CTA_bg_mobile.webp';
import RunningColsBg from '../../assets/images/faynoMarket/runningCols/img_runningColsBg.webp';
import RunningColsBgTablet from '../../assets/images/faynoMarket/runningCols/img_runningColsBgTablet.webp';
import RunningColsBgMobile from '../../assets/images/faynoMarket/runningCols/img_runningColsBgMobile.webp';
import InterfaceBg from '../../assets/images/faynoMarket/interfaces/img_interfaces.webp';
import InterfaceBgTablet from '../../assets/images/faynoMarket/interfaces/img_interfacesTablet.webp';
import InterfaceBgMobile from '../../assets/images/faynoMarket/interfaces/img_interfacesMobile.webp';

function FaynoMarketCaseStudyView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      screenWidth,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      main: MainSectionBg,
      cta: CTABg,
      runningCols: RunningColsBg,
      interfaces: InterfaceBg,
    };

    if (isMDDevice || isSMDevice) {
      bg.main = MainSectionTabletBg;
      bg.cta = CTABgTablet;
      bg.runningCols = RunningColsBgTablet;
      bg.interfaces = InterfaceBgTablet;
    } else if (isXSDevice) {
      bg.main = MainSectionMobileBg;
      bg.cta = CTABgMobile;
      bg.runningCols = RunningColsBgMobile;
      bg.interfaces = InterfaceBgMobile;
    }

    return bg;
  };

  const isMobile = isXSDevice || isSMDevice || isMDDevice;

  return (
    <>
      <MainSection
        title={TitleMainSection}
        confettiData={confettiAnimationData}
        backgroundImg={getBackground().main}
        isMobile={isMobile}
      />
      <AboutProjectSection
        title={howOnixDevelopedData.blockTitle}
        content={howOnixDevelopedData.data}
      />
      <BusinessContextWithTable
        upTitle={BusinessData.upTitle}
        title={BusinessData.title}
        subTitle={BusinessData.subTitle}
        subText={BusinessData.subText}
        content={BusinessData.content}
        withoutAnimateTable={isMobile}
        classes={{
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
          subText: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <DevServicesThreeCardsBlack
        title={developmentServicesData.title}
        data={developmentServicesData.data}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title={(
            <>
              Are you looking for a grocery app
              {' '}
              <br className="screen-md:hidden" />
              {' '}
              development&nbsp;company?
            </>
          )}
          btnText="contact us"
          background={getBackground().cta}
          withButton
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full
            after:h-[100px] after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            image: '!object-right-bottom screen-md:h-[300px]',
            title: `!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!text-[25px] screen-md:!leading-[35px]
            screen-md:!pb-[30px] screen-md:max-w-full`,
          }}
        />
      )}
      <CollageSectionFirst isXSDevice={isXSDevice} isSMDevice={isSMDevice} isMDDevice={isMDDevice} />
      <BorderedColumns
        title={borderedColumnsData.title}
        data={borderedColumnsData.content}
        background={getBackground().interfaces}
        isMobile={isMobile}
      />
      <CollageSectionSecond isXSDevice={isXSDevice} isSMDevice={isSMDevice} isMDDevice={isMDDevice} />
      {screenWidth > 992 ? (
        <DragInfoBlock
          title={DragBlockData.title}
          data={DragBlockData.cards}
        />
      ) : (
        <PhasesSectionTablet
          title={phasesData.title}
          data={phasesData.data}
        />
      )}
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title={(
            <>
              Do you plan on building a delivery app or another solution for a&nbsp;supermarket&nbsp;chain?
            </>
          )}
          btnText="contact us"
          background={getBackground().cta}
          withButton
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full
            after:h-[100px] after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            image: '!object-right-bottom screen-md:h-[300px]',
            title: `!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!text-[25px] screen-md:!leading-[35px]
            screen-md:!pb-[30px] screen-md:max-w-full`,
          }}
        />
      )}
      <RunningColsBlockWithTitle
        title={RunningColsData.title}
        data={RunningColsData.data}
        background={getBackground().runningCols}
      />
      <OurSolutions
        data={OurSolutionsData}
        classes={{ section: 'pt-[80px] screen-lg:pt-[60px] screen-md:pt-[40px]' }}
      />
      <CoreTechnology
        data={TechList.techList}
        classes={{ contentContainer: '!py-0' }}
      />
      <FaynoMarketResults />
      <CollageSectionThird isXSDevice={isXSDevice} isSMDevice={isSMDevice} isMDDevice={isMDDevice} />
      <CaseStudiesBlockForCases
        sliderIds={[64, 45, 4, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE3}
          title={(
            <>Onix will be happy to help with your supermarket or grocery delivery app project&nbsp;too!</>
          )}
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            title: `!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!text-[25px]
            screen-md:!leading-[35px] screen-md:max-w-full screen-md:!pb-[30px]`,
          }}
        />
      )}
    </>
  );
}

export default FaynoMarketCaseStudyView;
