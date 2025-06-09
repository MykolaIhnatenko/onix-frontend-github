import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import CostOptimizationTable from './components/CostOptimizationTable';
import SolutionsBlock from './components/SolutionsBlock';
import ResultsBlock from 'components/ResultsBlock/ResultsBlock';
import ChallengesBlock from './components/ChallengesBlock';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import costBusinessContextData from './data/costBusinessContextData';
import costOptimizationResultsBlockData from './data/costOptimizationResultsBlockData';
import { ButtonType } from '../../constants/enums';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import IPageStatus from '../../interfaces/IPageStatus';
import ButtonTypes from 'constants/ButtonTypes';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaWhiteBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaWhiteTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaWhiteMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaWhiteXXXLBg@2x.webp';
import IndustriesDevelopersXXXL from '@/images/industriesPage/img_developersXXXL@2x.webp';
import IndustriesMainBg from '@/images/industriesPage/img_industries_main_bg@2x.webp';
import IndustriesMainBgMobile
  from '@/images/costOptimizationCaseStudyPageView/mainBlock/img_mainScreenMobileBg@2x.webp';
import IndustriesMainBgTablet
  from '@/images/costOptimizationCaseStudyPageView/mainBlock/img_mainScreenTabletBg@2x.webp';
import MainImage from '@/images/costOptimizationCaseStudyPageView/mainBlock/img_mainImage@2x.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteXXXLBg@2x.webp';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import CostOptimizationMainScreen from './components/CostOptimizationMainScreen';
import costBusinessContextDataFirst from './data/costBusinessContextDataFirst.json';
import SolutionsBlockImage from '@/images/costOptimizationCaseStudyPageView/solutionsBlock/img_solutionsBlockImage@2x.webp';
import SolutionsBlockImageTablet from '@/images/costOptimizationCaseStudyPageView/solutionsBlock/img_solutionsBlockImageTablet@2x.webp';
import SolutionsBlockImageMobile from '@/images/costOptimizationCaseStudyPageView/solutionsBlock/img_solutionsBlockImageMobile@2x.webp';
import ImageComponent from 'components/Image/Image';
import TechnologiesBlock from 'components/TechnologiesBlock/TechnologiesBlock';
import { getTechnologiesBooking } from 'utils/getTechnologies';
import coreTechnologyData from './data/coreTechnologyData.json';
import resultsBlockWhite from 'constants/tailwindStyle';
import BusinessContext from 'components/BusinessContext/BusinessContext';

function CostOptimizationCaseStudyPageView({ saleUrl }: IPageStatus) {
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
      mainBg: IndustriesMainBg,
      mainImage: MainImage,
      ctaBg: CTAFirstBg,
      resultsBlock: ResultsBlockBg,
      solutionsBlockBg: SolutionsBlockImage,
    };
    if (isXXXLDevice) {
      bg.mainScreenRightImg = IndustriesDevelopersXXXL;
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.ctaBg = CTAFirstXXXLBg;
    } else if (isMDDevice) {
      bg.mainBg = IndustriesMainBgTablet;
      bg.ctaBg = CTAFirstTabletBg;
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.solutionsBlockBg = SolutionsBlockImageTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.mainBg = IndustriesMainBgMobile;
      bg.ctaBg = CTAFirstMobileBg;
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.solutionsBlockBg = SolutionsBlockImageMobile;
    }
    return bg;
  };

  return (
    <>
      <CostOptimizationMainScreen
        pageTitle="How Onix reduced the cost of project infrastructure using AWS resources"
        pageText="Cost optimization of the project infrastructure"
        backgroundImg={getBackground().mainBg}
        rightImg={getBackground().mainImage}
      />
      <ChallengesBlock />
      <ResultsBlock
        name={costOptimizationResultsBlockData.name}
        title={costOptimizationResultsBlockData.title}
        content={costOptimizationResultsBlockData.content}
        background={getBackground().resultsBlock}
        classes={resultsBlockWhite}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title={(
            <>
              Looking for a reliable
              {' '}
              <br className="screen-md:hidden" />
              DevOps services&nbsp;company?
            </>
          )}
          btnText="Get in touch with us"
          withButton
          buttonType={ButtonTypes.PRIMARY}
          background={getBackground().ctaBg}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[120px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)_15%] to-white`,
            image: '!object-bottom',
            title: '!text-black !max-w-[1020px] !pb-[40px] screen-md:!pb-[30px]',
          }}
        />
      )}
      <BusinessContext
        upTitle={costBusinessContextDataFirst.upTitle}
        title={costBusinessContextDataFirst.title}
        subTitle={costBusinessContextDataFirst.subTitle}
        leftContent={costBusinessContextDataFirst.firstText}
        rightContent={costBusinessContextDataFirst.secondText}
        classes={{
          section: 'pb-[80px] screen-lg:pb-[60px] screen-md:pb-[40px]',
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <ImageComponent
        src={getBackground().solutionsBlockBg}
        alt="background"
        sizes="100vw"
        className="block w-full h-auto object-cover"
      />
      <SolutionsBlock />
      <TechnologiesBlock
        technologies={getTechnologiesBooking(coreTechnologyData)}
        titleDesc={(
          <>
            Core technology stack we&nbsp;used
          </>
        )}
        noShowIcon
        classes={{
          container: `!p-[120px_70px] !bg-black min-xxxl:!p-[120px_80px]
          screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]`,
          blockTitleText: '!m-0',
          blockTitleDesc: '!mb-[80px] !text-white !w-full screen-lg:!mb-[60px] screen-md:!mb-[40px]',
          technologies: {
            technology: `!border-t-2 !border-white [&:not(:last-child)]:!border-b-0
            [&:last-child]:!border-b-2 min-lg:!flex min-lg:!items-center`,
            keyTitle: '!pt-[20px] !text-white min-md:!pt-[40px] min-lg:!pt-[40px] min-lg:!min-w-[475px]',
            technologiesList: '!p-[15px_0] min-md:!p-[18px_0_33px] min-lg:!p-[20px_0_20px_20px]',
            item: '!p-[5px_0] !text-white min-md:!p-[7px_0] min-lg:!p-[20px_0]',
          },
        }}
      />
      <BusinessContext
        upTitle={costBusinessContextData.upTitle}
        title={costBusinessContextData.title}
        leftContent={costBusinessContextData.firstText}
        rightContent={costBusinessContextData.secondText}
        subText={costBusinessContextData.subText}
        classes={{
          section: 'pb-[80px] screen-lg:pb-[60px] screen-md:pb-[40px]',
          subText: '!text-[24px]/[35px] screen-lg:!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <CostOptimizationTable />
      <CaseStudiesBlockForCases
        sliderIds={[10, 8, 29, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Need help with your project&nbsp;infrastructure?"
          btnText="contact us"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            background: 'screen-md:!object-bottom',
            title: '!max-w-[1080px] screen-md:max-w-[none]',
          }}
        />
      )}
    </>
  );
}

export default CostOptimizationCaseStudyPageView;
