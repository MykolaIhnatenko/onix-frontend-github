import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import RunningRowsBlock from '../../components/RunningRowsBlock/RunningRowsBlock';
import NibulonMainBlock from './components/NibulonMainBlock';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import developmentServicesData from './data/developmentServicesData';
import businessContextData, { businessContextDataLast, businessContextDataSecond } from './data/businessContextData';
import developmentServicesContentData from './data/developmentServicesContentData';
import ourSolutionsData from './data/OurSolutionsData';
import runningRowsBlockData from './data/runningRowsBlockData';
import aboutBlockData from './data/aboutBlockData.json';
import ButtonTypes from '../../constants/ButtonTypes';
import IPageStatus from '../../interfaces/IPageStatus';
import CTA_Bg from '../../assets/images/nibulon/cta/img_cta.webp';
import CTA_BgTablet from '../../assets/images/nibulon/cta/img_cta_tablet.webp';
import CTA_BgMobile from '../../assets/images/nibulon/cta/img_cta_mobile.webp';
import technologyData from './data/technologyData.json';
import RunningRowsBg from '@/images/nibulon/runningRowsBlock/img_bg.webp';
import RunningRowsBgTablet from '@/images/nibulon/runningRowsBlock/img_bg_tablet.webp';
import RunningRowsBgMobile from '@/images/nibulon/runningRowsBlock/img_bg_mobile.webp';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';

function NibulonCasePageView({ saleUrl }: IPageStatus) {
  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      cta: CTA_Bg,
      runningRows: RunningRowsBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.cta = CTA_BgTablet;
      bg.runningRows = RunningRowsBgTablet;
    } else if (isXSDevice) {
      bg.cta = CTA_BgMobile;
      bg.runningRows = RunningRowsBgMobile;
    }
    return bg;
  };

  return (
    <>
      <NibulonMainBlock />
      <AboutProjectSection
        content={aboutBlockData.content}
        subtitle={aboutBlockData.subtitle}
        title={aboutBlockData.title}
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
      <DevelopmentServicesWhite
        upTitle={developmentServicesData.upTitle}
        title={developmentServicesData.title}
        data={developmentServicesContentData}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Ready to transform your user experience
              {' '}
              <span className="inline-block screen-md:inline">by leveraging</span>
              {' '}
              best&#8209;in&#8209;class design solutions?
            </>
          )}
          btnText="Contact us"
          background={getBackground().cta}
          buttonType={ButtonTypes.PRIMARY}
          withButton
          classes={{
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[70px]
            after:bg-gradient-to-t from-[rgba(255,255,255,0)] to-[rgb(255,255,255)]`,
            image: '!object-bottom',
            title: '!text-black screen-lg:!max-w-full screen-lg:!m-0',
          }}
        />
      )}
      <BusinessContextDiagonal
        upTitle={businessContextDataSecond.name}
        title={businessContextDataSecond.title}
        leftContent={businessContextDataSecond.firstText}
        rightContent={businessContextDataSecond.secondText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
        }}
      />
      <OurSolutions
        title="Summing up all our work for this project, these are our leading solutions:"
        data={ourSolutionsData}
        classes={{
          section: '!pt-[0]',
          title: '!text-[40px]/[56px] screen-lg:!text-[36px]/[46px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <RunningRowsBlock
        runningRows={runningRowsBlockData}
        background={getBackground().runningRows}
        classes={{
          bgContainer: 'after:content-[""] after:w-full after:h-[70px] after:bg-gradient-to-b '
          + 'after:from-transparent after:to-black after:bottom-0 after:left-0 after:absolute',
        }}
      />
      <CoreTechnology
        data={technologyData}
        blackTheme
        classes={{
          contentContainer: '!pt-[40px] screen-lg:!pt-[30px] screen-md:!pt-[50px]',
        }}
      />
      <BusinessContextDiagonal
        upTitle={businessContextDataLast.name}
        title={businessContextDataLast.title}
        leftContent={businessContextDataLast.firstText}
        rightContent={businessContextDataLast.secondText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[69, 51, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              90% of users assess credibility based on&nbsp;website&nbsp;appearance. Ready to
              enhance your online presence? Let&apos;s design your
              {' '}
              <span className="inline-block screen-lg:inline">custom website.</span>
            </>
          )}
          btnText="Contact us"
          withButton
          buttonType={ButtonTypes.LIGHT}
          classes={{
            cta: '!pt-0',
            title: '!max-w-[1080px]',
          }}
        />
      )}
    </>
  );
}

export default NibulonCasePageView;
