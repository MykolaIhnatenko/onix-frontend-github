import { StaticImageData } from 'next/image';

import IPageStatus from '../../interfaces/IPageStatus';
import { useAppSelector } from '../../hook/reduxToolkit';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import BusinessContext from '../../components/BusinessContext/BusinessContext';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import aboutBlockData from './data/aboutBlockData';
import { businessContextData, businessContextDataSecond } from './data/businessContextData';
import resultsBlockData from './data/resultsBlockData';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import DevelopmentServicesWhite from '../../components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import OurSolutionVirtual from '../../components/OurSolutionVirtual/OurSolutionVirtual';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import CaseStudiesBlockForCases from '../../components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import BusinessContextDiagonal from '../../components/BusinessContextDiagonal/BusinessContextDiagonal';
import RunningRowsBlock from '../../components/RunningRowsBlock/RunningRowsBlock';
import BusinessContextWithTable from '../../components/BusinessContextWithTables/BusinessContextWithTable';
import HydraResultsBlock from './components/HydraResultsBlock';
import MainBlockVolkswagen from '../../components/MainBlockVolkswagen/MainBlockVolkswagen';
import OurSolutions from '../../components/OurSolutions/OurSolutions';
import runningRowsBlockData from './data/runningRowsBlockData';
import servicesData from './data/servicesData';
import ourSolutionVirtualData from './data/ourSolutionVirtualData';
import ourSolutionsData from './data/ourSolutionsData';
import technologyData from './data/technologyData.json';

import RunningRowsBlockBg
  from '@/images/healthcareProviderPortalCaseStudy/runningRowsBlock/img_runningRowsBlockBg@2x.webp';
import RunningRowsBlockBgTablet
  from '@/images/healthcareProviderPortalCaseStudy/runningRowsBlock/img_runningRowsBlockBgTablet@2x.webp';
import RunningRowsBlockBgMobile
  from '@/images/healthcareProviderPortalCaseStudy/runningRowsBlock/img_runningRowsBlockBgMobile@2x.webp';
import BgWhiteLarge from '@/images/developmentServicesWhite/img_devServicesWhiteLarge.webp';
import BgWhite from '@/images/developmentServicesWhite/img_devServicesWhite.webp';
import BgWhiteTablet from '@/images/developmentServicesWhite/img_devServicesWhiteTablet.webp';
import BgWhiteMobile from '@/images/developmentServicesWhite/img_devServicesWhiteMobile.webp';
import HeroBgMobile from '@/images/hydraCase/main/img_Hero_mobile.webp';
import HeroBgBigTablet from '@/images/hydraCase/main/img_Hero_big_tablet.webp';
import HeroBgTablet from '@/images/hydraCase/main/img_Hero_tablet.webp';
import HeroBg from '@/images/hydraCase/main/img_Hero.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';

function HydraCaseView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice,
      isLGDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      results: ResultsBlockBg,
      runningRowsBg: RunningRowsBlockBg,
      first: CTAFirstBg,
      businessContextBg: BgWhite,
      main: HeroBg,
    };
    if (isXXXLDevice) {
      bg.results = ResultsBlockXXXLBg;
      bg.first = CTAFirstXXXLBg;
      bg.businessContextBg = BgWhiteLarge;
      bg.main = HeroBg;
    } else if (isLGDevice) {
      bg.main = HeroBgBigTablet;
    } else if (isMDDevice) {
      bg.results = ResultsBlockTabletBg;
      bg.first = CTAFirstTabletBg;
      bg.runningRowsBg = RunningRowsBlockBgTablet;
      bg.businessContextBg = BgWhiteTablet;
      bg.main = HeroBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.results = ResultsBlockMobileBg;
      bg.first = CTAFirstMobileBg;
      bg.runningRowsBg = RunningRowsBlockBgMobile;
      bg.businessContextBg = BgWhiteMobile;
      bg.main = HeroBgMobile;
    }

    return bg;
  };

  return (
    <>
      <MainBlockVolkswagen
        title={(
          <>
            ERP System
            <br className="screen-xl:hidden min-xxxl:hidden " />
            {' '}
            Development
          </>
        )}
        subtitleText={<>A scalable solution for&nbsp;business&nbsp;process&nbsp;automation</>}
        backgroundImg={getBackground().main}
        classes={{
          titleContainer: 'max-w-[700px] screen-lg:min-h-[100vh] screen-lg:max-w-full '
            + 'screen-lg:!pt-[154px] '
            + 'screen-md:!pt-[139px]',
          subtitle: '!text-[30px]/[40px] !font-[500] max-w-[456px] '
            + 'screen-xl:!mt-[30px] screen-xl:mt-[30px]'
            + 'min-xl:!text-[30px]/[40px] min-md:!text-[24px]/[34px] '
            + 'screen-lg:max-w-[670px] screen-md:!text-[16px]/[24px] screen-md:mt-[15px] min-360:!text-[20px]/[28px]',
          title: ' screen-xl:!text-[40px]/[56px] screen-md:!text-[25px]/[35px]',
        }}
      />
      <AboutProjectSection
        title={aboutBlockData.title}
        content={aboutBlockData.content}
      />
      <BusinessContext
        upTitle={businessContextData.name}
        title={businessContextData.title}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
      />
      <ResultsBlock
        name={resultsBlockData.name}
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        background={getBackground().results}
        classes={{
          backgroundImage: 'screen-md:object-center',
        }}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={<>Ready to streamline your&nbsp;operations with ERP?</>}
          btnText="Get in touch with us"
          withButton
          background={getBackground().first}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[70px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            image: '!object-bottom',
            title: '!pb-[40px] !max-w-[780px] screen-lg:!max-w-[620px] screen-md:!pb-[30px] screen-md:max-w-[380px]',
          }}
        />
      )}
      <DevelopmentServicesWhite
        upTitle={servicesData.upTitle}
        title={servicesData.title}
        data={servicesData.data}
        classes={{
          devServices: '!pb-0',
        }}
      />
      <OurSolutionVirtual
        title="Hydra consists of four separate systems:"
        data={ourSolutionVirtualData}
        classes={{
          image: 'min-lg:!object-left min-xl:!object-center',
          contentContainer: 'screen-md:!gap-[30px]',
        }}
      />
      <BusinessContextDiagonal
        upTitle="[ Solutions we provide ]"
        title="Our main goal was to address Onix’s operational inefficiencies and enhance scalability."
        leftContent="We needed to develop a robust ERP solution to streamline critical
                     business processes and automate manual workflows."
        rightContent="To bring Hydra ERP from concept to a viable product, Onix developed a set of custom solutions:"
        classes={{
          section: '!pt-0 min-lg:!pb-[80px] min-md:!pb-[60px] screen-md:!pb-[40px]',
        }}
      />
      <RunningRowsBlock background={getBackground().runningRowsBg} runningRows={runningRowsBlockData} />
      <OurSolutions
        data={ourSolutionsData}
        classes={{
          section: 'min-lg:!pt-[80px] min-md:!pt-[60px] screen-md:!pt-[40px]',
        }}
      />
      <BusinessContextWithTable
        upTitle={businessContextDataSecond.upTitle}
        background={getBackground().businessContextBg}
        title={businessContextDataSecond.title}
        content={businessContextDataSecond.content}
        classes={{
          title: 'min-lg:mb-[80px] min-md:mb-[60px] screen-md:mb-[40px]',
          column: 'relative screen-md:!p-[20px]',
        }}
        withoutAnimateTable
      />
      <CoreTechnology
        data={technologyData}
        blackTheme
      />
      <HydraResultsBlock />
      <CaseStudiesBlockForCases
        sliderIds={[61, 28, 46, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={<>Interested in an ERP system for&nbsp;your&nbsp;business?</>}
          btnText="Let’s talk"
          withButton
          classes={{
            cta: '!pt-0',
            title: '!text-white !max-w-[1078px] screen-lg:!max-w-[613px] screen-md:!pb-[30px]',
          }}
        />
      )}
    </>
  );
}

export default HydraCaseView;
