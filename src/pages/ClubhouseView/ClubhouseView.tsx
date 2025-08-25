import { StaticImageData } from 'next/image';

import IPageStatus from '../../interfaces/IPageStatus';
import { useAppSelector } from '../../hook/reduxToolkit';
import MainSection from './components/MainSection';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import CaseStudiesBlockForCases from '../../components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import ImageSection from '../../components/ImageSection/ImageSection';
import TestimonialVideoSection from '../../components/TestimonialVideoSection/TestimonialVideoSection';
import TechnologiesBlock from '../../components/TechnologiesBlock/TechnologiesBlock';
import { getTechnologiesBooking } from '../../utils/getTechnologies';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import RunningRowsBlock from '../../components/RunningRowsBlock/RunningRowsBlock';
import OurSolutions from '../../components/OurSolutions/OurSolutions';
import ClubhouseResultsBlock from './components/ClubhouseResultsBlock';
import ResultsInNumbersBlock from './components/ResultsInNumbersBlock';
import ClubhouseBusinessContext from './components/ClubhouseBusinessContext';
import coreTechnologyData from './data/coreTechnologyData.json';
import aboutBlockData from './data/aboutBlockData';
import {
  responsiveImageSectionData, responsiveImageSectionDataSecond,
  responsiveImageSectionDataThird,
} from './data/childrenImageSection';
import resultsBlockData from './data/resultsBlockData';
import { businessContextDataSecond } from './data/businessContextData';
import runningRowsBlockData from './data/runningRowsBlockData';
import ourSolutionsData from './data/ourSolutionsContentData';
import BusinessContextDiagonal from '../../components/BusinessContextDiagonal/BusinessContextDiagonal';

import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import MainBgXXXl from '@/images/clubhouse/main/img_main_bg_xxxl.webp';
import MainBgBigTablet from '@/images/clubhouse/main/img_main_bg_big_tablet.webp';
import MainBg from '@/images/clubhouse/main/img_main_bg.webp';
import MainBgTablet from '@/images/clubhouse/main/img_main_bg_tablet.webp';
import MainBgMobile from '@/images/clubhouse/main/img_main_bg_mobile.webp';
import TestimonialPreview from '@/images/clubhouse/img_testimonial_preview.webp';
import RunningRowsBlockBg
  from '@/images/clubhouse/runningRowsBlock/img_runningRowsBlockBg@2x.webp';
import RunningRowsBlockBgTablet
  from '@/images/clubhouse/runningRowsBlock/img_runningRowsBlockBgTablet@2x.webp';
import RunningRowsBlockBgMobile
  from '@/images/clubhouse/runningRowsBlock/img_runningRowsBlockBgMobile@2x.webp';
import BusinessContextBlockBg
  from '@/images/clubhouse/businessContext/img_business_bg.webp';
import BusinessContextBlockBgTablet
  from '@/images/clubhouse/businessContext/img_business_bg_tablet.webp';
import BusinessContextBlockBgMobile
  from '@/images/clubhouse/businessContext/img_business_bg_mobile.webp';

function ClubhouseView({ saleUrl }: IPageStatus) {
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
      first: CTAFirstBg,
      main: MainBg,
      runningRowsBg: RunningRowsBlockBg,
      businessContextBg: BusinessContextBlockBg,
    };
    if (isXXXLDevice) {
      bg.results = ResultsBlockXXXLBg;
      bg.first = CTAFirstXXXLBg;
      bg.main = MainBgXXXl;
    } else if (isLGDevice) {
      bg.main = MainBgBigTablet;
    } else if (isMDDevice) {
      bg.results = ResultsBlockTabletBg;
      bg.first = CTAFirstTabletBg;
      bg.main = MainBgTablet;
      bg.runningRowsBg = RunningRowsBlockBgTablet;
      bg.businessContextBg = BusinessContextBlockBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.results = ResultsBlockMobileBg;
      bg.first = CTAFirstMobileBg;
      bg.main = MainBgMobile;
      bg.runningRowsBg = RunningRowsBlockBgMobile;
      bg.businessContextBg = BusinessContextBlockBgMobile;
    }

    return bg;
  };

  return (
    <>
      <MainSection backgroundImg={getBackground().main} />
      <AboutProjectSection
        title={aboutBlockData.title}
        subtitle={aboutBlockData.subtitle}
        content={aboutBlockData.content}
      />
      <ClubhouseBusinessContext background={getBackground().businessContextBg} />
      <ResultsBlock
        name={resultsBlockData.name}
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        background={getBackground().results}
      />
      <ImageSection data={responsiveImageSectionData} />
      <BusinessContextDiagonal
        upTitle={businessContextDataSecond.name}
        title={businessContextDataSecond.title}
        leftContent={businessContextDataSecond.firstText}
        classes={{
          section: 'pb-[80px] screen-lg:pb-[60px] screen-md:pb-[40px]',
        }}
      />
      <ImageSection data={responsiveImageSectionDataSecond} />
      <OurSolutions
        data={ourSolutionsData}
        desktopViewOnXL
        classes={{
          section: 'py-[80px] screen-lg:!py-[60px] screen-md:!p-[40px_0]',
        }}
      />
      <RunningRowsBlock background={getBackground().runningRowsBg} runningRows={runningRowsBlockData} />
      <TechnologiesBlock
        technologies={getTechnologiesBooking(coreTechnologyData)}
        titleDesc={(
          <>
            Core technology stack we&nbsp;used
          </>
        )}
        noShowIcon
        classes={{
          container: '!p-[120px_70px] min-xxxl:!p-[120px_80px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
          blockTitleText: '!m-0',
          blockTitleDesc: '!mb-[80px] !text-black !w-full screen-lg:!mb-[60px] screen-md:!mb-[40px]',
          technologies: {
            technology: '!border-b-0 !border-black '
              + '!border-t-2 [&:last-child]:!border-b-2',
            keyTitle: '!pt-[20px] min-md:!pt-[40px] min-lg:!pt-[40px]',
            technologiesList: '!p-[15px_0] min-md:!p-[18px_0_33px] min-lg:!p-[20px_0_20px_20px]',
            item: '!p-[5px_0] min-md:!p-[7px_0] min-lg:!p-[20px_0]',
          },
        }}
      />
      <TestimonialVideoSection
        videoSrc="/static/video/clubhouse.mp4"
        preview={TestimonialPreview}
      />
      <ClubhouseResultsBlock />
      <ImageSection data={responsiveImageSectionDataThird} />
      <ResultsInNumbersBlock />
      <CaseStudiesBlockForCases
        sliderIds={[47, 48, 41, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Have a Fitness Project in Mind? Let’s&nbsp;Talk!
            </>
          )}
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0',
            title: 'max-w-[800px] screen-md:!max-w-full',
          }}
        />
      )}
    </>
  );
}

export default ClubhouseView;
