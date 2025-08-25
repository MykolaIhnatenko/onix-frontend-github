import { useAppSelector } from '../../hook/reduxToolkit';
import IPageStatus from 'interfaces/IPageStatus';
import MainBlockVolkswagen from 'components/MainBlockVolkswagen/MainBlockVolkswagen';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import AnimationBankingAccordionBlock from 'components/AnimationBankingAccordionBlock/AnimationBankingAccordionBlock';
import { ButtonPathVariant, ButtonType } from 'constants/enums';
import aboutData from './data/aboutData.json';
import businessContextData, { businessSecondContextData, businessSecondContextResultData } from './data/businessContextData';
import ProductScopeData from './data/productScopeData';
import dataDragBlock from './data/dataDragBlock';
import dataIssuesWeSolved from './data/dataIssuesWeSolved';
import dataRunningColsBlock from './data/dataRunningColsBlock';
import MainSectionBg from 'assets/images/banking-app/img_BankingApp.webp';
import MainSectionBgTablet from 'assets/images/banking-app/img_BankingAppTablet.webp';
import MainSectionBgMobile from 'assets/images/banking-app/img_BankingAppMobile.webp';
import DragInfoBlock from 'components/DragInfoBlock/DragInfoBlock';
import ImageBlock from './components/ImageBlock';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import coreTechnologyData from './data/technologyData.json';
import RunningColsBlock from 'components/RunningColsBlock/RunningColsBlock';
import OurSolutionsAccordion from 'components/OurSolutionsAccordion/OurSolutionsAccordion';
import solutionSectionData from './data/solutionSectionData';
import challengesInfoData from './data/challengesInfoData';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import DragBg from '@/images/banking-app/img_DragBg.webp';
import DragBgTablet from '@/images/banking-app/img_DragBgTablet.webp';
import DragBgMobile from '@/images/banking-app/img_DragBgMobile.webp';
import RunningBgXXXL from '@/images/runningColsBlock/img_runningColsBgXXXL.webp';
import RunningBg from '@/images/runningColsBlock/img_runningColsBg.webp';
import RunningBgTablet from '@/images/runningColsBlock/img_runningColsBgTablet.webp';
import RunningBgMobile from '@/images/runningColsBlock/img_runningColsBgMobile.webp';
import OfferedBg from '@/images/banking-app/img_OfferedBg.webp';

function BankingAppKidsView({ saleUrl }: IPageStatus) {
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
      Main: MainSectionBg,
      resultsBlock: ResultsBlockBg,
      cta: CTAFirstBg,
      drag: DragBg,
      running: RunningBg,
    };
    if (isXXXLDevice) {
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.cta = CTAFirstXXXLBg;
      bg.running = RunningBgXXXL;
    } else if (isMDDevice || isSMDevice) {
      bg.Main = MainSectionBgTablet;
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.cta = CTAFirstTabletBg;
      bg.drag = DragBgTablet;
      bg.running = RunningBgTablet;
    } else if (isXSDevice) {
      bg.Main = MainSectionBgMobile;
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.cta = CTAFirstMobileBg;
      bg.drag = DragBgMobile;
      bg.running = RunningBgMobile;
    }
    return bg;
  };

  return (
    <>
      <MainBlockVolkswagen
        title={<>A spending card & banking app for kids</>}
        subtitleText="Building a Children-Focused Banking App for Financial Literacy"
        backgroundImg={getBackground().Main}
        classes={{
          titleContainer: 'max-w-[700px] screen-lg:min-h-[100vh] screen-lg:max-w-full '
            + 'screen-lg:!pt-[154px] '
              + 'screen-md:!pt-[139px]',
          subtitle: 'text-[30px]/[40px] !font-medium max-w-[560px] '
            + 'screen-lg:max-w-full screen-sm:mr-[10px]',
        }}
      />
      <AboutProjectSection
        content={aboutData.content}
        title={aboutData.title}
      />
      <BusinessContextDiagonal
        upTitle={businessContextData.name}
        title={businessContextData.title}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
        }}
      />
      <ResultsBlock
        title={ProductScopeData.title}
        name={ProductScopeData.titleBlock}
        content={ProductScopeData.content}
        background={getBackground().resultsBlock}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Have a project in mind?
              {' '}
              <br />
              Let&apos;s&nbsp;talk!
            </>
          )}
          btnText="Get in touch with us"
          withButton
          background={getBackground().cta}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[120px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black screen-lg:after:h-[80px]`,
            image: 'screen-md:!object-bottom',
            title: `!max-w-[1078px] screen-lg:!pb-[40px] screen-lg:!max-w-[630px] screen-md:max-w-[none]
            screen-md:!pb-[30px] screen-md:br:hidden`,
          }}
        />
      )}
      <DragInfoBlock
        name={dataDragBlock.name}
        title={dataDragBlock.title}
        backgroundImg={getBackground().drag}
        data={dataDragBlock.cards}
      />
      <AnimationBankingAccordionBlock
        title="Onix’s approach to development"
        data={dataIssuesWeSolved}
      />
      <RunningColsBlock
        bg={getBackground().running}
        runningCols={dataRunningColsBlock}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title="Specify the number of experts and technologies you need and get an approximate
          team cost for your&nbsp;project!"
          btnText="Calculate now"
          withButton
          background={getBackground().cta}
          buttonPathVariant={ButtonPathVariant.CALCULATE}
          id={ButtonType.CASE}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[120px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black screen-lg:after:h-[80px]`,
            image: 'screen-md:!object-bottom',
            title: `!max-w-[1078px] screen-lg:!pb-[40px] screen-lg:!max-w-[630px] screen-md:max-w-[none]
            screen-md:!pb-[30px] screen-md:br:hidden`,
          }}
        />
      )}
      <BusinessContextDiagonal
        upTitle={businessSecondContextData.name}
        title={businessSecondContextData.title}
        leftContent={businessSecondContextData.firstText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
        }}
      />
      <ImageBlock
        image={OfferedBg}
        title="The Onix team offered the following solutions:"
        tag="p"
      />
      <OurSolutionsAccordion
        accordionData={solutionSectionData}
        list={challengesInfoData}
        stylesVariant="!bg-white"
        iconBlack
        Tag="div"
      />
      <CoreTechnology
        data={coreTechnologyData}
        blackTheme
      />
      <BusinessContext
        upTitle={businessSecondContextResultData.name}
        title={businessSecondContextResultData.title}
        subTitle={businessSecondContextResultData.subtitle}
        leftContent={businessSecondContextResultData.firstText}
        rightContent={businessSecondContextResultData.secondText}
        subText={businessSecondContextResultData.bottomText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[21, 20, 56, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Looking for a reliable tech partner to build a secure fintech&nbsp;app?"
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            background: 'screen-md:!object-bottom',
            title: '!max-w-[960px] screen-lg:!max-w-[650px] screen-md:max-w-[none]',
          }}
        />
      )}
    </>
  );
}

export default BankingAppKidsView;
