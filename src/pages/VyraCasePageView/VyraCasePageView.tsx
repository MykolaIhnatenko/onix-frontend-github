import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import VyraVideoBlock from './components/VyraVideoBlock';
import VyraResultsBlock from './components/VyraResultsBlock';
import VyraMainBlock from './components/VyraMainBlock';
import VyraDevelopmentServices from './components/VyraDevelopmentServices';
import ScrollTextAnimation from '../../components/ScrollTextAnimation/ScrollTextAnimation';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import aboutBlockData from './data/aboutBlockData.json';
import resultsBlockData from './data/resultsBlockData';
import ourSolutionsContentData from './data/ourSolutionsContentData';
import { businessContextData } from './data/businessContextData';
import { ButtonType } from '../../constants/enums';
import coreTechnologyData from './data/technologyData.json';
import scrollTextData from './data/scrollTextData';
import IPageStatus from 'interfaces/IPageStatus';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAResultBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAResultTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAResultMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAResultXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';

function VyraCasePageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      second: ResultsBlockBg,
      third: CTAResultBg,
    };
    if (isXXXLDevice) {
      bg.second = ResultsBlockXXXLBg;
      bg.third = CTAResultXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      bg.second = ResultsBlockTabletBg;
      bg.third = CTAResultTabletBg;
    } else if (isXSDevice) {
      bg.second = ResultsBlockMobileBg;
      bg.third = CTAResultMobileBg;
    }
    return bg;
  };

  return (
    <>
      <VyraMainBlock />
      <AboutProjectSection
        title={aboutBlockData.title}
        content={aboutBlockData.content}
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
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        background={getBackground().second}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title="Have a project in mind? Let's talk!"
          btnText="Get in touch with us"
          background={getBackground().third}
          withButton
          classes={{
            cta: '!p-[120px_0_120px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[70px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)_15%] to-black`,
            title: `!max-w-[615px] screen-lg:!max-w-[515px] screen-lg:!pb-[40px] screen-md:!max-w-[320px]
            screen-md:!pb-[30px]`,
            btn: 'screen-md:w-[330px]',
          }}
        />
      )}
      <VyraDevelopmentServices />
      <OurSolutions
        title={ourSolutionsContentData.blockTitle}
        data={ourSolutionsContentData.data}
        classes={{ section: '!pt-0' }}
      />
      <CoreTechnology
        data={coreTechnologyData}
        blackTheme
      />
      <ScrollTextAnimation
        textList={scrollTextData.textList}
        scaleIndex={1.67}
        scaleIndexMobile={1.33}
      />
      <VyraVideoBlock />
      <VyraResultsBlock />
      <CaseStudiesBlockForCases
        sliderIds={[45, 25, 16, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="What is your app idea?"
          btnText="Contact to our experts"
          withButton
          classes={{
            cta: '!pt-0',
            title: '!pb-[40px] screen-md:!pb-[30px]',
            btn: 'screen-md:w-[330px]',
          }}
        />
      )}
    </>
  );
}

export default VyraCasePageView;
