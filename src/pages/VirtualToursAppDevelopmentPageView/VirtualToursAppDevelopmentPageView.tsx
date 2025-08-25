import { StaticImageData } from 'next/image';
import { useSelector } from 'react-redux';

import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import OurSolutionVirtual from '../../components/OurSolutionVirtual/OurSolutionVirtual';
import UsabilityTestingMainBlock from 'pages/UsabilityTestingPageView/components/UsabilityTestingMainBlock';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import ResultsBlock from 'components/ResultsBlock/ResultsBlock';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import ButtonTypes from 'constants/ButtonTypes';
import IPageStatus from 'interfaces/IPageStatus';
import { IApp } from 'store/app/interfaces/IApp';
import IStore from 'store/interfaces/IStore';
import usabilityTestingMainBlockData from './data/usabilityTestingMainBlockData';
import technologyData from './data/technologyData.json';
import howOnixDevelopedData from './data/howOnixDevelopedData.json';
import businessContextData from './data/businessContextData.json';
import resultsBlockData from './data/resultsBlockData';
import businessContextSecondData from './data/businessContextSecondData';
import resultsBlockWhite, { aboutProjectSectionWhite } from 'constants/tailwindStyle';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import ourSolutionVirtualData from './data/ourSolutionVirtualData';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';

import MainXlBg from '@/images/virtualToursAppDevelopmentPageView/img_mainBgXl@2x.webp';
import MainBg from '@/images/virtualToursAppDevelopmentPageView/img_mainBg@2x.webp';
import MainTabletBg from '@/images/virtualToursAppDevelopmentPageView/img_mainBgTablet@2x.webp';
import MainMobileBg from '@/images/virtualToursAppDevelopmentPageView/img_mainBgMobile@2x.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaWhiteBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaWhiteTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaWhiteMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaWhiteXXXLBg@2x.webp';

function VirtualToursAppDevelopmentPageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isXXXLDevice,
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      mainBackground: MainBg,
      resultsBlock: ResultsBlockBg,
      ctaFirst: CTAFirstBg,
    };
    if (isXXXLDevice) {
      bg.mainBackground = MainXlBg;
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.ctaFirst = CTAFirstXXXLBg;
    } else if (isMDDevice) {
      bg.mainBackground = MainTabletBg;
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.ctaFirst = CTAFirstTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.mainBackground = MainMobileBg;
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.ctaFirst = CTAFirstMobileBg;
    }
    return bg;
  };

  return (
    <div>
      <UsabilityTestingMainBlock
        title={usabilityTestingMainBlockData.title}
        icon={usabilityTestingMainBlockData.icon}
        background={getBackground().mainBackground}
        classes={{
          container: '!text-white max-1390:!h-screen screen-md:!min-h-[570px]',
          background: '!absolute !bottom-0 !right-0 !h-full !w-full max-1390:!h-full max-1390:!w-full',
          backgroundImage: `!w-full !h-full !object-cover !object-center max-1390:!object-left
            screen-xl:![object-position:_-50px] screen-lg:!object-center screen-md:!object-center`,
          contentContainer: 'max-1390:!flex max-1390:!pt-0 screen-lg:!block screen-lg:!pt-[146px]',
          content: 'max-1390:!pl-[70px] screen-lg:!pl-[30px] screen-md:!pl-[15px]',
          logo: '!pb-[40px] screen-lg:!pb-[30px] screen-md:!pb-[15px]',
          title: `!max-w-[520px] !pb-0 max-1390:!text-[50px] max-1390:!leading-[64px] screen-lg:!text-[40px]
            screen-lg:!leading-[56px] screen-lg:!max-w-[unset] screen-md:!text-[25px] screen-md:!leading-[35px]`,
        }}
      />
      <AboutProjectSection
        title={howOnixDevelopedData.blockTitle}
        content={howOnixDevelopedData.data}
        variant={aboutProjectSectionWhite}
      />
      <BusinessContextDiagonal
        upTitle={businessContextData.upTitle}
        title={businessContextData.title}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
        blackTheme
      />
      <ResultsBlock
        title={resultsBlockData.title}
        name={resultsBlockData.name}
        content={resultsBlockData.content}
        background={getBackground().resultsBlock}
        classes={resultsBlockWhite}
        saleUrl={saleUrl}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title="Have a project in mind?"
          btnText="Let's talk"
          withButton
          buttonType={ButtonTypes.PRIMARY}
          background={getBackground().ctaFirst}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[50px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-white`,
            image: '!object-bottom',
            title: '!text-black !pb-[40px] !max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!pb-[30px]',
          }}
        />
      )}
      <OurSolutionVirtual
        title="Solutions we provided"
        data={ourSolutionVirtualData}
      />
      <CoreTechnology
        data={technologyData}
        blackTheme
      />
      <BusinessContext
        upTitle={businessContextSecondData.upTitle}
        title={businessContextSecondData.title}
        leftContent={businessContextSecondData.firstText}
        rightContent={businessContextSecondData.secondText}
        subText={businessContextSecondData.subText}
        classes={{
          subText: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[49, 53, 6, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title="What is your app idea?"
          btnText="contact us"
          withButton
          classes={{
            cta: '!pt-0',
            title: '!text-white !max-w-[1078px] screen-lg:!max-w-[613px] screen-md:!pb-[30px]',
          }}
        />
      )}
    </div>
  );
}

export default VirtualToursAppDevelopmentPageView;
