import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import WordpressMainBlock from './components/WordpressMainBlock';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import ScrollTextAnimation from '../../components/ScrollTextAnimation/ScrollTextAnimation';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import WordpressAccordionBlock from './components/WordpressAccordionBlock';
import aboutBlockData from './data/aboutBlockData.json';
import developmentServicesData from './data/developmentServicesData';
import technologyData from './data/technologyData.json';
import businessContextDataSecond from './data/businessContextDataSecond';
import businessContextData from './data/businessContextData';
import resultsBlockData from './data/resultsBlockData';
import ListWordpress from './data/listWordpressData';
import { ButtonType } from '../../constants/enums';
import CaseStudiesBlockForCases from '../../components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import IPageStatus from 'interfaces/IPageStatus';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';

function DeployingWordpressCasePageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice, isSMDevice, isXSDevice, isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      first: CTAFirstBg,
      results: ResultsBlockBg,
    };
    if (isXXXLDevice) {
      bg.results = ResultsBlockXXXLBg;
      bg.first = CTAFirstXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      bg.first = CTAFirstTabletBg;
      bg.results = ResultsBlockTabletBg;
    } else if (isXSDevice) {
      bg.first = CTAFirstMobileBg;
      bg.results = ResultsBlockMobileBg;
    }
    return bg;
  };

  return (
    <>
      <WordpressMainBlock />
      <AboutProjectSection title={aboutBlockData.title} content={aboutBlockData.content} />
      <BusinessContext
        title={businessContextData.title}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
        subText={businessContextData.bottomText}
        classes={{
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <ResultsBlock
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        background={getBackground().results}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title="Looking for a reliable DevOps services&nbsp;company?"
          btnText="Contact us"
          background={getBackground().first}
          withButton
          classes={{
            cta: '!p-[120px_80px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[200px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            image: '!object-bottom',
            title: 'screen-lg:!max-w-[708px] screen-md:max-w-[none]',
          }}
        />
      )}
      <DevelopmentServicesWhite
        title={developmentServicesData.title}
        description={developmentServicesData.desc}
        data={developmentServicesData.data}
        classes={{
          devServices: 'screen-md:!p-[80px_0]',
        }}
      />
      <WordpressAccordionBlock />
      <CoreTechnology
        data={technologyData}
        blackTheme
      />
      <ScrollTextAnimation
        textList={ListWordpress.textList}
        scaleIndex={1.67}
        scaleIndexMobile={1.33}
      />
      <BusinessContext
        title={businessContextDataSecond.title}
        leftContent={businessContextDataSecond.firstText}
        rightContent={businessContextDataSecond.secondText}
        blackTheme
      />
      <CaseStudiesBlockForCases
        sliderIds={[25, 29, 28, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Need help with your project&nbsp;infrastructure?"
          btnText="Get in touch with us"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            title: '!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:max-w-[none]',
          }}
        />
      )}
    </>
  );
}

export default DeployingWordpressCasePageView;
