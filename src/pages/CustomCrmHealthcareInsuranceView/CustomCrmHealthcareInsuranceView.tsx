import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import IPageStatus from 'interfaces/IPageStatus';
import UsabilityTestingMainBlock from 'pages/UsabilityTestingPageView/components/UsabilityTestingMainBlock';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import MainBg from '@/images/customCrmHealthcareInsurancePage/img_mainBg@2x.webp';
import MainBgTablet from '@/images/customCrmHealthcareInsurancePage/img_mainBgTablet@2x.webp';
import MainBgMobile from '@/images/customCrmHealthcareInsurancePage/img_mainBgMobile@2x.webp';
import {
  UsabilityTestingMainBlockVariant,
} from 'constants/enums';
import howOnixDevelopedData from './data/howOnixDevelopedData.json';
import businessContextBlockData from './data/businessContextBlockData';
import ResultsBlock from 'components/ResultsBlock/ResultsBlock';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import resultsBlockData from './data/resultsBlockData';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import coreTechnologyData from './data/coreTechnologyData.json';
import businessContextBlockDataThirt from './data/businessContextBlockDataThirt';
import businessContextBlockDataSecond from './data/businessContextBlockDataSecond.json';
import DragInfoBlock from 'components/DragInfoBlock/DragInfoBlock';
import dragInfoBlockData from './data/dragInfoBlockData';
import DragInfoBlockBg from '@/images/customCrmHealthcareInsurancePage/img_dragInfoBlockBg@2x.webp';
import DragInfoBlockTabletBg from '@/images/customCrmHealthcareInsurancePage/img_dragInfoBlockBgTablet@2x.webp';
import DragInfoBlockMobileBg from '@/images/customCrmHealthcareInsurancePage/img_dragInfoBlockBgMobile@2x.webp';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import ourSolutionsData from './data/OurSolutionsData';
import usabilityTestingMainBlockData from './data/usabilityTestingMainBlockData';
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
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';
import BusinessContext from 'components/BusinessContext/BusinessContext';

function CustomCrmHealthcareInsuranceView({ saleUrl }: IPageStatus) {
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
      mainBg: MainBg,
      resultsBlock: ResultsBlockBg,
      ctaFirst: CTAFirstBg,
      dragInfoBlock: DragInfoBlockBg,
    };
    if (isXXXLDevice) {
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.ctaFirst = CTAFirstXXXLBg;
    } else if (isMDDevice) {
      bg.mainBg = MainBgTablet;
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.ctaFirst = CTAFirstTabletBg;
      bg.dragInfoBlock = DragInfoBlockTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.mainBg = MainBgMobile;
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.ctaFirst = CTAFirstMobileBg;
      bg.dragInfoBlock = DragInfoBlockMobileBg;
    }
    return bg;
  };

  return (
    <div>
      <UsabilityTestingMainBlock
        title={usabilityTestingMainBlockData.title}
        text={usabilityTestingMainBlockData.text}
        background={getBackground().mainBg}
        variant={UsabilityTestingMainBlockVariant.CUSTOM_CRM}
      />
      <AboutProjectSection
        title={howOnixDevelopedData.blockTitle}
        content={howOnixDevelopedData.data}
      />
      <BusinessContext
        upTitle={businessContextBlockData.upTitle}
        title={businessContextBlockData.title}
        subTitle={businessContextBlockData.subTitle}
        leftContent={businessContextBlockData.firstText}
        rightContent={businessContextBlockData.secondText}
        subText={businessContextBlockData.subText}
        classes={{
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
          subText: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <ResultsBlock
        title={resultsBlockData.title}
        name={resultsBlockData.name}
        content={resultsBlockData.content}
        background={getBackground().resultsBlock}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Do you need to build
              {' '}
              <span className="inline_block">a custom</span>
              {' '}
              CRM&nbsp;system?
              <br className="hidden screen-md:block" />
              {' '}
              Our experts are
              {' '}
              <span className="inline_block">at your service!</span>
            </>
          )}
          btnText="contact us"
          withButton
          background={getBackground().ctaFirst}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[50px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            image: '!object-bottom',
            title: '!pb-[40px] !max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!pb-[30px] screen-md:max-w-[none]',
          }}
        />
      )}
      <BusinessContextDiagonal
        upTitle={businessContextBlockDataSecond.upTitle}
        title={businessContextBlockDataSecond.title}
        leftContent={businessContextBlockDataSecond.firstText}
        rightContent={businessContextBlockDataSecond.secondText}
      />
      <OurSolutions
        title="This workflow is supported by a number of  app features:"
        data={ourSolutionsData}
        classes={{
          section: '!pt-0',
          title: '!text-[40px]/[56px] screen-lg:!text-[36px]/[46px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <DragInfoBlock
        data={dragInfoBlockData}
        title="Project phases"
        backgroundImg={getBackground().dragInfoBlock}
        classes={{
          bgContainer: '!w-full !h-[464px] !absolute !bottom-0 !left-0 screen-md:!h-[271px]',
          img: '!h-full !w-full',
        }}
      />
      <CoreTechnology data={coreTechnologyData} />
      <BusinessContext
        upTitle={businessContextBlockDataThirt.upTitle}
        title={businessContextBlockDataThirt.title}
        subTitle={businessContextBlockDataThirt.subTitle}
        leftContent={businessContextBlockDataThirt.firstText}
        rightContent={businessContextBlockDataThirt.secondText}
        subText={businessContextBlockDataThirt.subText}
        blackTheme
        classes={{
          contentContainer: 'screen-lg:!gap-0',
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
          subText: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[58, 26, 28, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Do you need to build
              {' '}
              <span className="inline_block">a custom</span>
              {' '}
              CRM&nbsp;system?
              <br className="hidden screen-md:block" />
              {' '}
              Our experts are
              {' '}
              <span className="inline_block">at your service!</span>
            </>
          )}
          btnText="CONTACT US"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            title: `!max-w-[1080px] screen-lg:!max-w-[680px] screen-md:!text-[25px]
            screen-md:!leading-[35px] screen-md:max-w-[none] screen-md:!pb-[30px]`,
          }}
        />
      )}
    </div>
  );
}

export default CustomCrmHealthcareInsuranceView;
