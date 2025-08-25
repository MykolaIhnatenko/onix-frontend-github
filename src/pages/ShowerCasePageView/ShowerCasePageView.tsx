import { useAppSelector } from 'hook/reduxToolkit';
import ResultsBlock from 'components/ResultsBlock/ResultsBlock';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import RunningRowsBlock from 'components/RunningRowsBlock/RunningRowsBlock';
import IPageStatus from 'interfaces/IPageStatus';
import howOnixDevelopedData from './data/howOnixDevelopedData.json';
import resultsBlockData from './data/resultsBlockData';
import { businessContextBlockData, businessContextBlockDataSecond, businessContextBlockDataThird } from './data/businessContextBlockData';
import ourSolutionsData from './data/ourSolutionsData';
import coreTechnologyData from './data/coreTechnologyData.json';
import runningRowsBlockData from './data/runningRowsBlockData';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import MainBlock from './components/MainBlock';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';
import TestimonialTextSection from 'components/TestimonialTextSection/TestimonialTextSection';
import testimonialData from './data/testimonialData';
import DevelopmentServicesBlack from 'components/DevelopmentServicesBlack/DevelopmentServicesBlack';
import devServicesData from './data/devServicesData';
import FourCardsTable from 'components/FourCardsTable/FourCardsTable';
import cardsData from './data/cardsData';
import ValueDeliveredList from 'components/ValueDeliveredList/ValueDeliveredList';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';

import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import RunningRowsBlockBg from '@/images/healthcareProviderPortalCaseStudy/runningRowsBlock/img_runningRowsBlockBg@2x.webp';
import RunningRowsBlockBgTablet from '@/images/healthcareProviderPortalCaseStudy/runningRowsBlock/img_runningRowsBlockBgTablet@2x.webp';
import RunningRowsBlockBgMobile from '@/images/healthcareProviderPortalCaseStudy/runningRowsBlock/img_runningRowsBlockBgMobile@2x.webp';
import MainBg from '@/images/shower/mainBlock/img_mainBg.webp';
import MainBgBigTablet from '@/images/shower/mainBlock/img_main_bg_big_tablet.webp';
import MainBgTablet from '@/images/shower/mainBlock/img_mainBgTablet.webp';
import MainBgMobile from '@/images/shower/mainBlock/img_mainBgMobile.webp';
import TableBg from '@/images/fourCardsTable/img_whiteBg.webp';
import TableBgXXXL from '@/images/fourCardsTable/img_whiteBgXXXL.webp';
import TableBgTablet from '@/images/fourCardsTable/img_whiteBgTablet.webp';
import TableBgMobile from '@/images/fourCardsTable/img_whiteBgMobile.webp';

function ShowerCasePageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isLGDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      mainBg: MainBg,
      resultsBlock: ResultsBlockBg,
      ctaFirst: CTAFirstBg,
      runningRowsBg: RunningRowsBlockBg,
      tableBg: TableBg,
    };

    if (isXXXLDevice) {
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.ctaFirst = CTAFirstXXXLBg;
      bg.tableBg = TableBgXXXL;
    } else if (isLGDevice) {
      bg.mainBg = MainBgBigTablet;
    } else if (isMDDevice) {
      bg.mainBg = MainBgTablet;
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.ctaFirst = CTAFirstTabletBg;
      bg.runningRowsBg = RunningRowsBlockBgTablet;
      bg.tableBg = TableBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.mainBg = MainBgMobile;
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.ctaFirst = CTAFirstMobileBg;
      bg.runningRowsBg = RunningRowsBlockBgMobile;
      bg.tableBg = TableBgMobile;
    }
    return bg;
  };

  return (
    <>
      <MainBlock background={getBackground().mainBg} />
      <AboutProjectSection
        title={howOnixDevelopedData.blockTitle}
        content={howOnixDevelopedData.data}
      />
      <BusinessContext
        upTitle={businessContextBlockData.upTitle}
        title={businessContextBlockData.title}
        subTitle={businessContextBlockData.subTitle}
        leftContent={businessContextBlockData.firstText}
        rightContent={businessContextBlockData.secondText}
        subText={businessContextBlockData.subText}
      />
      <ResultsBlock
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        background={getBackground().resultsBlock}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Have a project in mind?
              <br />
              Let&apos;s talk!
            </>
          )}
          btnText="Get in touch with us"
          withButton
          background={getBackground().ctaFirst}
          classes={{
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[70px]
              after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            image: '!object-right-bottom',
          }}
        />
      )}
      <FourCardsTable
        title={cardsData.title}
        cardsData={cardsData.data}
        background={getBackground().tableBg}
        classes={{
          card: '!h-full min-lg:min-h-[308px] screen-lg:!h-auto',
        }}
      />
      <DevelopmentServicesBlack
        title={devServicesData.title}
        description={devServicesData.description}
        subTitle={devServicesData.subTitle}
        data={devServicesData.data}
        classes={{
          titleBlock: {
            desc: '!max-w-[1080px] min-xxxl:!max-w-[1480px]',
          },
          devServices: 'screen-md:!pb-[80px]',
        }}
      />
      <BusinessContextDiagonal
        title={businessContextBlockDataSecond.title}
        leftContent={businessContextBlockDataSecond.firstText}
        rightContent={businessContextBlockDataSecond.secondText}
        classes={{ section: 'pb-[80px] screen-lg:pb-[60px] screen-md:pb-[40px]' }}
      />
      <RunningRowsBlock background={getBackground().runningRowsBg} runningRows={runningRowsBlockData} />
      <OurSolutions
        data={ourSolutionsData}
        desktopViewOnXL
        classes={{ section: `pt-[80px] !pb-0 screen-lg:pt-[60px] screen-md:pt-[40px] ${saleUrl ? '!pt-0' : ''}` }}
      />
      <CoreTechnology
        data={coreTechnologyData}
      />
      <TestimonialTextSection
        upTitle={testimonialData.upTitle}
        title={testimonialData.title}
        testimonialText={testimonialData.testimonialText}
        authorPosition={testimonialData.authorPosition}
        authorName={testimonialData.authorName}
      />
      <BusinessContext
        upTitle={businessContextBlockDataThird.upTitle}
        title={businessContextBlockDataThird.title}
        leftContent={businessContextBlockDataThird.firstText}
        rightContent={businessContextBlockDataThird.secondText}
        subText={businessContextBlockDataThird.subText}
        classes={{ section: '!pb-0' }}
      />
      <ValueDeliveredList
        contentTitle={businessContextBlockDataThird.bottomContentTitle}
        contentList={businessContextBlockDataThird.bottomContentList}
      />
      <CaseStudiesBlockForCases
        sliderIds={[30, 12, 45, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          withButton
          title="What is your app idea?"
          btnText="Contact us"
          classes={{
            cta: '!pt-0',
            title: `!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!text-[25px]
            screen-md:!leading-[35px] screen-md:!pb-[30px] screen-md:!max-w-[520px]`,
          }}
        />
      )}
    </>
  );
}

export default ShowerCasePageView;
