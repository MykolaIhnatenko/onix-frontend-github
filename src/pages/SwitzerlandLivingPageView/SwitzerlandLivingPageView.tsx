import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import TechnologiesBlock from '../../components/TechnologiesBlock/TechnologiesBlock';
import UsabilityTestingMainBlock from '../UsabilityTestingPageView/components/UsabilityTestingMainBlock';
import switzerlandHowOnixDeveloped from './data/switzerlandHowOnixDeveloped';
import switzerlandBusinessContextData from './data/switzerlandBusinessContextData';
import switzerlandResultsBlockData from './data/switzerlandResultsBlockData';
import switzerlandBusinessContextDataSecond from './data/switzerlandBusinessContextDataSecond';
import switzerlandOurSolutionsData from './data/switzerlandOurSolutionsData';
import switzerlandBusinessContextDataThirt from './data/switzerlandBusinessContextDataThirt';
import {
  switzerlandTechnologiesBlocksData,
  switzerlandTechnologiesBlocksNames,
} from './data/switzerlandTechnologiesBlocksData';
import getTechnologies from '../../utils/getTechnologies';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import {
  ButtonType, UsabilityTestingMainBlockVariant,
} from '../../constants/enums';
import IPageStatus from '../../interfaces/IPageStatus';
import Running1RowsBg from '@/images/switzerlandLivingPageView/runningRowsBlock/img_runningRowsBg@2x.webp';
import Running1RowsTabletBg from '@/images/switzerlandLivingPageView/runningRowsBlock/img_runningRowsTabletBg@2x.webp';
import Running1RowsMobileBg from '@/images/switzerlandLivingPageView/runningRowsBlock/img_runningRowsMobileBg@2x.webp';
import UsersfeedbackBgImg from '@/images/switzerlandLivingPageView/usersfeedbackBlock/img_usersfeedbackBlockBg@2x.webp';
import UsersfeedbackBgImgTablet from '@/images/switzerlandLivingPageView/usersfeedbackBlock/img_usersfeedbackBlockTabletBg@2x.webp';
import UsersfeedbackBgImgMobile from '@/images/switzerlandLivingPageView/usersfeedbackBlock/img_usersfeedbackBlockMobileBg@2x.webp';
import MainBg from '@/images/switzerlandLivingPageView/mainBlock/img_mainBlockBg@2x.webp';
import MainBgTablet from '@/images/switzerlandLivingPageView/mainBlock/img_mainBlockTabletBg@2x.webp';
import MainBgMobile from '@/images/switzerlandLivingPageView/mainBlock/img_mainBlockMobileBg@2x.webp';
import MainImage from '@/images/switzerlandLivingPageView/mainBlock/img_mainImage@2x.webp';
import MainImageTablet from '@/images/switzerlandLivingPageView/mainBlock/img_mainImageTablet@2x.webp';
import MainImageMobile from '@/images/switzerlandLivingPageView/mainBlock/img_mainImageMobile@2x.webp';
import TestimonialTextSection from 'components/TestimonialTextSection/TestimonialTextSection';
import testimonialData from './data/testimonialData';
import carouselData from './data/carouselData';
import RunningRowsBlock from 'components/RunningRowsBlock/RunningRowsBlock';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';

function SwitzerlandLivingPageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      mainBg: MainBg,
      mainImage: MainImage,
      resultsBlock: ResultsBlockBg,
      ctaFirst: CTAFirstBg,
      runningBg: Running1RowsBg,
      usersfeedback: UsersfeedbackBgImg,

    };
    if (isXXXLDevice) {
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.ctaFirst = CTAFirstXXXLBg;
    } else if (isMDDevice) {
      bg.mainBg = MainBgTablet;
      bg.mainImage = MainImageTablet;
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.ctaFirst = CTAFirstTabletBg;
      bg.runningBg = Running1RowsTabletBg;
      bg.usersfeedback = UsersfeedbackBgImgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.mainBg = MainBgMobile;
      bg.mainImage = MainImageMobile;
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.ctaFirst = CTAFirstMobileBg;
      bg.runningBg = Running1RowsMobileBg;
      bg.usersfeedback = UsersfeedbackBgImgMobile;
    }
    return bg;
  };

  return (
    <>
      <UsabilityTestingMainBlock
        title={(
          <>
            Cost Comparison Platform
            {' '}
            <br />
            {' '}
            to Help Weigh
            {' '}
            <span className="inline_block">Up Municipalities</span>
            {' '}
            <span className="inline_block">in Switzerland</span>
          </>
        )}
        background={getBackground().mainBg}
        image={getBackground().mainImage}
        variant={UsabilityTestingMainBlockVariant.SWITZERLAND}
      />
      <AboutProjectSection
        title={switzerlandHowOnixDeveloped.blockTitle}
        subtitle={switzerlandHowOnixDeveloped.blockText}
        content={switzerlandHowOnixDeveloped.data}
      />
      <BusinessContext
        upTitle={switzerlandBusinessContextData.upTitle}
        title={switzerlandBusinessContextData.title}
        leftContent={switzerlandBusinessContextData.firstText}
        rightContent={switzerlandBusinessContextData.secondText}
      />
      <ResultsBlock
        title={switzerlandResultsBlockData.title}
        content={switzerlandResultsBlockData.content}
        background={getBackground().resultsBlock}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title={(
            <>
              Ready to modernize
              {' '}
              <span className="inline_block">your fintech</span>
              {' '}
              business
              {' '}
              <span className="inline_block">by leveraging</span>
              {' '}
              best-in-class&nbsp;technologies?
            </>
          )}
          btnText="Contact us"
          withButton
          background={getBackground().ctaFirst}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[120px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)_15%] to-black`,
            image: '!object-bottom',
            title: '!max-w-[1020px] !pb-[40px] screen-md:!pb-[30px]',
          }}
        />
      )}
      <BusinessContextDiagonal
        title={switzerlandBusinessContextDataSecond.title}
        leftContent={switzerlandBusinessContextDataSecond.firstText}
        rightContent={switzerlandBusinessContextDataSecond.secondText}
      />
      <OurSolutions
        title="Summing up all our work for this project, these are our leading solutions:"
        data={switzerlandOurSolutionsData}
        desktopViewOnXL
        classes={{
          section: '!pt-0 !pb-[80px]',
          title: '!text-[40px]/[56px] screen-lg:!text-[36px]/[46px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <RunningRowsBlock
        background={getBackground().runningBg}
        runningRows={carouselData}
      />
      <TechnologiesBlock
        pageTitle={switzerlandTechnologiesBlocksData.pageTitle}
        technologies={getTechnologies(switzerlandTechnologiesBlocksNames)}
        classes={{
          container: '!pt-[120px] !pb-[120px] screen-lg:!pt-[80px] screen-lg:!pb-[80px]',
          sectionTitle: '!mb-[40px] min-md:!mb-[60px] min-lg:!mb-[80px]',
          technologies: {
            technology: `!border-black [&:first-of-type]:!border-t-2 [&:last-child]:!border-b-2
            [&:not(:last-child)]:!border-b-2`,
            keyTitle: '!min-w-[280px] min-md:!pt-[40px] min-lg:!pt-[40px] min-lg:!float-left',
            technologiesList: `min-md:!p-[18px_0_33px] min-md:!overflow-auto min-lg:!p-[20px_0_20px_20px]
            min-lg:!overflow-auto min-lg:!left-0`,
            item: '!p-[5px_0] !text-black min-md:!p-[7px_0] min-lg:!p-[20px_0]',
          },
        }}
      />
      <TestimonialTextSection
        testimonialText={testimonialData.testimonialText}
        authorPosition={testimonialData.authorPosition}
        authorName={testimonialData.authorName}
      />
      <BusinessContext
        title={switzerlandBusinessContextDataThirt.title}
        leftContent={switzerlandBusinessContextDataThirt.firstText}
        rightContent={switzerlandBusinessContextDataThirt.secondText}
      />
      <CaseStudiesBlockForCases
        sliderIds={[69, 62, 33, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Do you need to develop
              {' '}
              <span className="inline_block">a custom</span>
              {' '}
              finance services platform?
              Reliable software developers are just
              {' '}
              <br className="hidden screen-lg:block screen-md:hidden" />
              one click&nbsp;away!
            </>
          )}
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            image: 'screen-md:!object-bottom',
            title: '!max-w-[1080px] screen-md:!max-w-full',
          }}
        />
      )}
    </>
  );
}

export default SwitzerlandLivingPageView;
