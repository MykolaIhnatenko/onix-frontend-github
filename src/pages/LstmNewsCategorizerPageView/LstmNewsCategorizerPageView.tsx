import { StaticImageData } from 'next/image';
import { useSelector } from 'react-redux';

import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import UsabilityTestingMainBlock from '../UsabilityTestingPageView/components/UsabilityTestingMainBlock';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import ScrollTextAnimation from '../../components/ScrollTextAnimation/ScrollTextAnimation';
import lstmHowOnixDeveloped from './data/lstmHowOnixDeveloped.json';
import lstmBusinessContextData from './data/lstmBusinessContextData.json';
import lstmResultsBlockData from './data/lstmResultsBlockData';
import lstmOurSolutionsData from './data/lstmOurSolutionsData';
import lstmScrollTextData from './data/lstmScrollTextData';
import lstmCoreTechnologyData from './data/lstmCoreTechnologyData.json';
import lstmBusinessContextDataSecond from './data/lstmBusinessContextDataSecond';
import lstmMainBlock from './data/lstmMainBlock.json';
import { ButtonType } from '../../constants/enums';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import IPageStatus from 'interfaces/IPageStatus';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import MainBg from '@/images/lstmNewsCategorizerPage/mainBlock/img_mainBlock@2x.webp';
import MainBgTablet from '@/images/lstmNewsCategorizerPage/mainBlock/img_mainBlockTablet@2x.webp';
import MainBgMobile from '@/images/lstmNewsCategorizerPage/mainBlock/img_mainBlockMobile@2x.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';

function LstmNewsCategorizerPageView({ saleUrl }: IPageStatus) {
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
      mainBg: MainBg,
    };
    if (isXXXLDevice) {
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.ctaFirst = CTAFirstXXXLBg;
    } else if (isMDDevice) {
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.ctaFirst = CTAFirstTabletBg;
      bg.mainBg = MainBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.ctaFirst = CTAFirstMobileBg;
      bg.mainBg = MainBgMobile;
    }
    return bg;
  };

  return (
    <>
      <UsabilityTestingMainBlock
        title={lstmMainBlock.title}
        text={lstmMainBlock.text}
        background={getBackground().mainBg}
        classes={{
          container: '!text-white max-1390:!h-screen screen-md:!min-h-[570px]',
          background: '!absolute !bottom-0 !right-0 !h-full !w-full',
          backgroundImage: `!w-full !h-full !object-cover ![object-position:_left] screen-lg:!object-center
            screen-md:!object-center`,
          contentContainer: 'max-1390:!flex max-1390:!pt-0 screen-lg:!block screen-lg:!pt-[146px]',
          content: 'max-1390:!pl-[70px] screen-lg:!pl-[30px] screen-md:!pl-[15px]',
          title: `max-1390:!pb-[40px] max-1390:!text-[40px] max-1390:!leading-[56px] screen-lg:!pb-[30px]
            screen-lg:!text-[40px] screen-lg:!leading-[56px] screen-md:!text-[25px]
            screen-md:!leading-[35px] screen-md:!pb-[15px]`,
          text: `!max-w-[610px] !text-[30px] !leading-[40px] max-1390:!max-w-[540px] screen-lg:!max-w-[533px]
            max-1390:!text-[24px] max-1390:!leading-[34px] screen-md:!max-w-[420px] screen-md:!text-[20px]
            screen-md:!leading-[28px]`,
        }}
      />
      <AboutProjectSection
        title={lstmHowOnixDeveloped.blockTitle}
        content={lstmHowOnixDeveloped.data}
      />
      <BusinessContext
        upTitle={lstmBusinessContextData.upTitle}
        title={lstmBusinessContextData.title}
        subTitle={lstmBusinessContextData.subTitle}
        leftContent={lstmBusinessContextData.firstText}
        rightContent={lstmBusinessContextData.secondText}
        classes={{
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <ResultsBlock
        title={lstmResultsBlockData.title}
        content={lstmResultsBlockData.content}
        background={getBackground().resultsBlock}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title="Have a project in mind?"
          btnText="Talk to our ML expert"
          withButton
          background={getBackground().ctaFirst}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full
            after:h-[50px] after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            title: '!pb-[40px] !max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!pb-[30px]',
          }}
        />
      )}
      <OurSolutions
        title="Solutions we provide"
        data={lstmOurSolutionsData}
      />
      <ScrollTextAnimation
        textList={lstmScrollTextData.textList}
        scaleIndex={1.15}
        scaleIndexTablet={1.13}
        scaleIndexMobile={1.17}
        themeBlack
        classes={{ itemText: 'last:mb-0 screen-md:!text-[18px]/[40px]' }}
      />
      <CoreTechnology
        data={lstmCoreTechnologyData}
        classes={{ contentContainer: '!pb-0' }}
      />
      <BusinessContext
        title={lstmBusinessContextDataSecond.title}
        subTitle={lstmBusinessContextDataSecond.subTitle}
        leftContent={lstmBusinessContextDataSecond.firstText}
        rightContent={lstmBusinessContextDataSecond.secondText}
        classes={{
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[3, 4, 17, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Have a brilliant idea for a machine learning app?"
          btnText="Talk to our expert"
          withButton
          classes={{
            cta: '!pt-0',
            title: '!pb-[40px] !max-w-[930px] screen-lg:!max-w-[708px] screen-md:!pb-[30px]',
          }}
        />
      )}
    </>
  );
}

export default LstmNewsCategorizerPageView;
