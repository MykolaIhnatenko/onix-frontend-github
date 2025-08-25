import { useAppSelector } from '../../hook/reduxToolkit';
import ModelsSection from '../../components/ModelsSection/ModelsSection';
import AnimationTypographySection from '../../components/AnimationTypographySection/AnimationTypographySection';
import TechnologiesBlock from '../../components/TechnologiesBlock/TechnologiesBlock';
import CallToActionBlock from '../../components/CallToActionBlock/CallToActionComponent';
import ResultsBlock from 'components/ResultsBlock/ResultsBlock';
import ImageComponent from 'components/Image/Image';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';
import BusinessContextWithTable from 'components/BusinessContextWithTables/BusinessContextWithTable';
import TechnologiesData from './data/TechnologiesData.json';
import businessContextBlockData from './data/businessContextBlockData';
import ModelsSectionData from './data/ModelsSectionData';
import ourSolutionsData from './data/ourSolutionsData';
import ourSolutionsContentData from './data/ourSolutionsContentData';
import howOnixDevelopedData from './data/howOnixDevelopedData';
import businessContextBlockDataSecond from './data/businessContextBlockDataSecond';
import businessContextBlockDataThirt from './data/businessContextBlockDataThirt';
import resultsBlockData from './data/resultsBlockData';
import resultsBlockWhite, { aboutProjectSectionWhite } from 'constants/tailwindStyle';
import SchedulerResultsBlock from './components/SchedulerResultsBlock';
import { getTechnologiesBooking } from '../../utils/getTechnologies';
import { ButtonType } from '../../constants/enums';
import IPageStatus from 'interfaces/IPageStatus';
import MainBlockVolkswagen from '../../components/MainBlockVolkswagen/MainBlockVolkswagen';

import HeroScreen from '@/images/scheduleDoctor/img_HeroSection@2x.webp';
import HeroScreenXXXL from '@/images/scheduleDoctor/img_HeroSectionXXXL@2x.webp';
import HeroScreenTablet from '@/images/scheduleDoctor/img_HeroSectionTablet@2x.webp';
import HeroScreenMobile from '@/images/scheduleDoctor/img_HeroSectionMobile@2x.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import SolutionBg from '@/images/scheduleDoctor/img_Solution@2x.webp';
import SolutionBgTablet from '@/images/scheduleDoctor/img_SolutionTablet@2x.webp';
import SolutionBgMobile from '@/images/scheduleDoctor/img_SolutionMobile@2x.webp';
import classes from './sass/schedulerStyles.module.scss';

function SchedulerForMedicalDoctorsView({ saleUrl }: IPageStatus) {
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
      Main: HeroScreen,
      results: ResultsBlockBg,
      solution: SolutionBg,
    };
    if (isXXXLDevice) {
      bg.Main = HeroScreenXXXL;
      bg.results = ResultsBlockXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      bg.Main = HeroScreenTablet;
      bg.results = ResultsBlockTabletBg;
      bg.solution = SolutionBgTablet;
    } else if (isXSDevice) {
      bg.Main = HeroScreenMobile;
      bg.results = ResultsBlockMobileBg;
      bg.solution = SolutionBgMobile;
    }
    return bg;
  };

  return (
    <>
      <MainBlockVolkswagen
        title={(
          <>
            Scheduler for&nbsp;medical
            {' '}
            <br className="screen-lg:hidden" />
            {' '}
            doctors and clinic
            {' '}
            <br className="screen-lg:hidden" />
            {' '}
            administrators
          </>
        )}
        backgroundImg={getBackground().Main}
        classes={{
          container: 'h-screen min-h-[750px] max-h-[1400px] '
            + 'screen-lg:h-full screen-lg:!min-h-[950px] screen-lg:max-h-full '
            + 'screen-md:h-[780px] '
            + 'screen-sm:h-[640px] ',
          titleContainer: 'max-w-[700px] screen-xl:max-w-[500px] screen-lg:min-h-[100vh] screen-lg:max-w-full '
            + 'screen-lg:!pt-[144px] '
            + 'screen-md:!pt-[129px]',
          title: '!text-color-black',
        }}
      />

      <AboutProjectSection
        title={howOnixDevelopedData.blockTitle}
        subtitle={howOnixDevelopedData.blockText}
        content={howOnixDevelopedData.data}
        variant={aboutProjectSectionWhite}
      />
      <BusinessContext
        upTitle={businessContextBlockData.upTitle}
        title={businessContextBlockData.title}
        subTitle={businessContextBlockData.subTitle}
        leftContent={businessContextBlockData.firstText}
        rightContent={businessContextBlockData.secondText}
        subText={businessContextBlockData.subText}
        blackTheme
        classes={{
          section: '!pb-[40px] screen-md:!pb-[30px]',
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
          subText: '!mt-[80px] screen-md:!mt-[60px] !text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <ModelsSection
        data={ModelsSectionData.data}
        classes={{
          section: '!pt-0 screen-lg:pb-[80px]',
          card: 'p-[40px_40px_80px] screen-md:p-[20px_20px_60px]',
        }}
      />
      <OurSolutions
        title={ourSolutionsData.blockTitle}
        firstText={ourSolutionsData.firstText}
        data={ourSolutionsContentData}
      />
      <BusinessContextWithTable
        title={businessContextBlockDataSecond.title}
        content={businessContextBlockDataSecond.content}
        leftContent={businessContextBlockDataSecond.leftContent}
        rightContent={businessContextBlockDataSecond.rightContent}
        withoutAnimateTable
        blackTheme
        classes={{
          column: 'group/column',
          columnTitle: 'group-first/column:pr-[142px]',
        }}
      />
      <div className={classes.container}>
        <div className={classes.image}>
          <ImageComponent
            src={getBackground().solution}
            alt="background"
            sizes="100vw"
          />
        </div>
        <BusinessContextDiagonal
          upTitle={businessContextBlockDataThirt.upTitle}
          title={businessContextBlockDataThirt.title}
          subTitle={businessContextBlockDataThirt.subTitle}
          leftContent={businessContextBlockDataThirt.content}
          subText={businessContextBlockDataThirt.subText}
          classes={{
            section: '!pb-0',
            subTitle: '!mb-[30px] screen-md:!mb-[20px] !text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
            subText: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
          }}
        />
      </div>
      <TechnologiesBlock
        technologies={getTechnologiesBooking(TechnologiesData)}
        titleDesc="Core technology stack we&nbsp;used"
        noShowIcon
        classes={{
          container: `!p-[120px_70px] !bg-white min-xxxl:!p-[120px_80px]
          screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]`,
          blockTitleText: '!m-0',
          blockTitleDesc: '!text-black !mb-[80px] !w-full screen-lg:!mb-[60px] screen-md:!mb-[40px]',
          technologies: {
            technology: '!border-b-2 !border-black [&:not(:last-child)]:!border-t-2 [&:not(:last-child)]:!border-b-2',
            keyTitle: '!pt-[20px] !text-black min-md:!pt-[40px] min-lg:!pt-[40px]',
            technologiesList: '!py-[15px] !text-black min-md:!p-[18px_0_33px] min-lg:!p-[20px_0_20px_20px]',
            item: '!p-[5px_0] !text-black min-md:!p-[7px_0] min-lg:!p-[20px_0]',
          },
        }}
      />
      <SchedulerResultsBlock
        background={getBackground().results}
      />
      <AnimationTypographySection />
      <ResultsBlock
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        classes={resultsBlockWhite}
      />
      <CaseStudiesBlockForCases
        saleUrl={saleUrl}
        sliderIds={[26, 27, 29, 1000]}
      />
      {!saleUrl && (
        <CallToActionBlock
          id={ButtonType.CASE}
          withButton
          title="What is your app idea?"
          btnText="Share your vision"
          classes={{
            cta: '!pt-0',
            background: 'after:!hidden',
            title: '!max-w-[800px] screen-lg:!max-w-[708px] screen-md:!max-w-[330px]',
          }}
        />
      )}
    </>
  );
}

export default SchedulerForMedicalDoctorsView;
