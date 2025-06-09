import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import NestbDesignMainBlock from './components/NestbDesignMainBlock';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import { ButtonType } from '../../constants/enums';
import coreNestbTechnologyData from './data/coreNestbTechnologyData';
import developmentServicesNestbData from './data/developmentServicesNestbData';
import resultsNestbBlockData from './data/resultsNestbBlockData';
import howOnixDevelopedData from './data/howOnixDevelopedData';
import CTAFirstBg from '../../assets/images/nestbDesignCaseStudy/ctaBlock/img_CTAFirstBg@2x.webp';
import CTAFirstXXXLBg from '../../assets/images/nestbDesignCaseStudy/ctaBlock/img_CTAFirstXXXLBg@2x.webp';
import CTAFirstTabletBg from '../../assets/images/nestbDesignCaseStudy/ctaBlock/img_CTAFirstTabletBg@2x.webp';
import CTAFirstMobileBg from '../../assets/images/nestbDesignCaseStudy/ctaBlock/img_CTAFirstMobileBg@2x.webp';
import businessContextBlockData from './data/businessContextBlockData';
import ourSolutionsContentData from './data/ourSolutionsContentData';
import IPageStatus from '../../interfaces/IPageStatus';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import DevelopmentServicesBlack from 'components/DevelopmentServicesBlack/DevelopmentServicesBlack';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';

function NestbDesignCaseStudyView({ saleUrl }: IPageStatus) {
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
      ctaFirst: CTAFirstBg,
    };
    if (isXXXLDevice) {
      bg.ctaFirst = CTAFirstXXXLBg;
    }
    if (isMDDevice || isSMDevice) {
      bg.ctaFirst = CTAFirstTabletBg;
    } else if (isXSDevice) {
      bg.ctaFirst = CTAFirstMobileBg;
    }
    return bg;
  };

  return (
    <>
      <NestbDesignMainBlock />
      <AboutProjectSection
        title={howOnixDevelopedData.blockTitle}
        subtitle={howOnixDevelopedData.blockText}
        content={howOnixDevelopedData.data}
      />
      <BusinessContext
        upTitle={businessContextBlockData.upTitle}
        title={businessContextBlockData.title}
        leftContent={businessContextBlockData.firstText}
        rightContent={businessContextBlockData.secondText}
      />
      <DevelopmentServicesBlack
        upTitle={developmentServicesNestbData.upTitle}
        title={developmentServicesNestbData.title}
        data={developmentServicesNestbData.data}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title="Ready to transform your online presence by leveraging best-in-class branding&nbsp;solutions?"
          btnText="Contact us"
          withButton
          background={getBackground().ctaFirst}
          classes={{
            cta: '!bg-white !p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[50px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            title: '!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!max-w-full screen-md:!pb-[30px]',
          }}
        />
      )}
      <OurSolutions
        title={ourSolutionsContentData.blockTitle}
        firstText={ourSolutionsContentData.firstText}
        secondText={ourSolutionsContentData.secondText}
        data={ourSolutionsContentData.data}
        desktopViewOnXL
        classes={{ section: '!pb-0' }}
      />
      <CoreTechnology
        title="Core technology stack we&nbsp;used"
        data={coreNestbTechnologyData}
      />
      <ResultsBlock
        title={resultsNestbBlockData.title}
        content={resultsNestbBlockData.content}
        classes={{
          resultBlock: 'bg-transparent !text-black !pt-0',
          line: '!bg-[#CECECE]',
          lineActive: '!bg-black',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[62, 69, 56, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title="94% of First Impressions Are Design-Driven: Boost Your Business with our UI/UX Design&nbsp;Services"
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            background: 'after:hidden',
            title: `!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!text-[25px]
            screen-md:!leading-[35px] screen-md:!max-w-full screen-md:!pb-[30px]`,
          }}
        />
      )}
    </>
  );
}

export default NestbDesignCaseStudyView;
