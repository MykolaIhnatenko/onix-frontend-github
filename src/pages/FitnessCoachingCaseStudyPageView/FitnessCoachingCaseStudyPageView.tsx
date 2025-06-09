import { StaticImageData } from 'next/image';
import { useSelector } from 'react-redux';

import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import DoublTextBlock from './components/DoublTextBlock';
import AchievedBusiness from './components/AchievedBusiness';
import FitnessCoachingMainBlock from './components/FitnessCoachingMainBlock';
import RebrandingBlock from './components/RebrandingBlock';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import StickySlider from '../../components/StickySlider/StickySlider';
import fitnessCoachingPlatformData from './data/fitnessCoachingPlatformData';
import fitnessCoachingBusinessData from './data/fitnessCoachingBusinessData';
import fitnessCoachingHowOnix from './data/fitnessCoachingHowOnix.json';
import fitnessCoachingResultsBlockData from './data/fitnessCoachingResultsBlockData';
import fitnessCoachingBusinessSecondData from './data/fitnessCoachingBusinessSecondData';
import fitnessCoachingOurSolutionsContentData from './data/fitnessCoachingOurSolutionsContentData';
import fitnessCoachingTechnologyData from './data/fitnessCoachingTechnologyData';
import fitnessCoachingBusinessthirdData from './data/fitnessCoachingBusinessthirdData';
import fitnessCoachingRebrandingBlockData from './data/fitnessCoachingRebrandingBlockData';
import fitnessCoachingAchievedBusinessData from './data/fitnessCoachingAchievedBusinessData.json';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import { ButtonType } from '../../constants/enums';
import RebrandingBlockBg from '@/images/fitnessCoachingCaseStudyPageView/rebrandingBlock/img_rebrandingBlockBg@2x.webp';
import RebrandingBlockTabletBg from '@/images/fitnessCoachingCaseStudyPageView/rebrandingBlock/img_rebrandingBlockTabletBg@2x.webp';
import RebrandingBlockMobileBg from '@/images/fitnessCoachingCaseStudyPageView/rebrandingBlock/img_rebrandingBlockMobileBg@2x.webp';
import RunningRowsBlockBg from '@/images/fitnessCoachingCaseStudyPageView/runningRowsBlock/img_runningRowsBlockBg@2x.webp';
import RunningRowsBlockTabletBg from '@/images/fitnessCoachingCaseStudyPageView/runningRowsBlock/img_runningRowsBlockTabletBg@2x.webp';
import RunningRowsBlockMobileBg from '@/images/fitnessCoachingCaseStudyPageView/runningRowsBlock/img_runningRowsBlockMobileBg@2x.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import IPageStatus from 'interfaces/IPageStatus';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import carouselData from './data/carouselData';
import RunningRowsBlock from 'components/RunningRowsBlock/RunningRowsBlock';
import StickySliderData from './data/fitnessCoachingStickySliderData';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextWithTable from 'components/BusinessContextWithTables/BusinessContextWithTable';

function FitnessCoachingCaseStudyPageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      resultsBlock: ResultsBlockBg,
      ctaFirst: CTAFirstBg,
      rebranding: RebrandingBlockBg,
      runningBg: RunningRowsBlockBg,
    };
    if (isXXXLDevice) {
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.ctaFirst = CTAFirstXXXLBg;
    } else if (isMDDevice) {
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.ctaFirst = CTAFirstTabletBg;
      bg.rebranding = RebrandingBlockTabletBg;
      bg.runningBg = RunningRowsBlockTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.ctaFirst = CTAFirstMobileBg;
      bg.rebranding = RebrandingBlockMobileBg;
      bg.runningBg = RunningRowsBlockMobileBg;
    }
    return bg;
  };

  return (
    <>
      <FitnessCoachingMainBlock />
      <AboutProjectSection
        title="Learn how we built a convenient platform for personal trainers
        that takes customer experience to the next level!"
        content={fitnessCoachingHowOnix}
      />
      <BusinessContext
        upTitle={fitnessCoachingBusinessData.upTitle}
        title={fitnessCoachingBusinessData.title}
        leftContent={fitnessCoachingBusinessData.firstText}
        rightContent={fitnessCoachingBusinessData.secondText}
      />
      <ResultsBlock
        title={fitnessCoachingResultsBlockData.title}
        content={fitnessCoachingResultsBlockData.content}
        background={getBackground().resultsBlock}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title="Ready to modernize your fitness business by leveraging top-tier&nbsp;technologies?"
          btnText="Get in touch with us"
          withButton
          background={getBackground().ctaFirst}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[60px_30px] screen-md:!p-[60px_30px_80px] screen-sm:!p-[60px_15px_80px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[50px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            title: '!pb-[40px] !max-w-[1078px] screen-lg:!max-w-[708px]',
          }}
        />
      )}
      <BusinessContextWithTable
        title="The platform we built benefits several groups of end-users:"
        content={fitnessCoachingPlatformData}
        withoutAnimateTable
        classes={{
          column: 'screen-md:!pb-[20px]',
          title: '!mb-[80px] screen-lg:!mb-[60px] screen-md:!mb-[40px]',
        }}
      />
      <BusinessContext
        upTitle={fitnessCoachingBusinessSecondData.upTitle}
        title={fitnessCoachingBusinessSecondData.title}
        leftContent={fitnessCoachingBusinessSecondData.firstText}
        rightContent={fitnessCoachingBusinessSecondData.secondText}
        classes={{ section: '!py-0' }}
      />
      <OurSolutions
        title={fitnessCoachingOurSolutionsContentData.blockTitle}
        data={fitnessCoachingOurSolutionsContentData.data}
        classes={{
          section: '!pb-0 pt-[80px] screen-md:pt-[60px]',
          title: '!text-[40px]/[56px] screen-lg:!text-[36px]/[46px] screen-md:!text-[25px]/[35px]',
        }}
      />
      <StickySlider
        upTitle="[ Onix design solutions ]"
        blockTitle="Make UI design clean and minimalistic. Ensure simple and intuitive UX."
        data={StickySliderData}
        classes={{
          container: '!pt-[120px] screen-lg:!pt-[80px]',
          blockTitle: 'max-w-[903px]',
          item: 'last:border-b-0',
        }}
      />
      <RebrandingBlock
        blockTitle={fitnessCoachingRebrandingBlockData.blockTitle}
        firstText={fitnessCoachingRebrandingBlockData.firstText}
        secondText={fitnessCoachingRebrandingBlockData.secondText}
        secondTitle={fitnessCoachingRebrandingBlockData.secondTitle}
        data={fitnessCoachingRebrandingBlockData.data}
        background={getBackground().rebranding}
      />
      <DoublTextBlock />
      <RunningRowsBlock
        background={getBackground().runningBg}
        runningRows={carouselData}
      />
      <CoreTechnology
        data={fitnessCoachingTechnologyData}
        classes={{ contentContainer: '!pb-0' }}
      />
      <BusinessContext
        title={fitnessCoachingBusinessthirdData.title}
        subTitle={fitnessCoachingBusinessthirdData.subTitle}
        leftContent={fitnessCoachingBusinessthirdData.firstText}
        rightContent={fitnessCoachingBusinessthirdData.secondText}
        classes={{
          section: '!pb-0',
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <AchievedBusiness
        blockTitle="Achieved business results"
        data={fitnessCoachingAchievedBusinessData}
      />
      <CaseStudiesBlockForCases
        sliderIds={[40, 41, 47, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Looking for a reliable tech partner to digitize your fitness&nbsp;business?"
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            title: '!max-w-[1078px] screen-lg:!max-w-[708px] screen-md:max-w-[none]',
          }}
        />
      )}
    </>
  );
}

export default FitnessCoachingCaseStudyPageView;
