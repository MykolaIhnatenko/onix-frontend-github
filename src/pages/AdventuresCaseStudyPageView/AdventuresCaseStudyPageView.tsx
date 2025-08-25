import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import TwoImagesBlock from './components/TwoImagesBlock';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import AdventuresMainBlock from './components/AdventuresMainBlock';
import RunningRowsBlock from '../../components/RunningRowsBlock/RunningRowsBlock';
import { businessContextData, businessContextDataLast } from './data/businessContextData';
import coreTechnologyData from './data/coreTechnologyData';
import ourSolutionsContentData from './data/ourSolutionsContentData';
import adventureRunningRowsBlockData from './data/adventureRunningRowsBlockData';
import servicesData from './data/servicesData';
import aboutBlockData from './data/aboutBlockData';
import { ButtonType } from '../../constants/enums';
import ButtonTypes from '../../constants/ButtonTypes';
import IPageStatus from '../../interfaces/IPageStatus';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import RunningBg from '@/images/adventurePage/runningRowsBlock/img_runningRowsBlock_bg.webp';
import RunningBgTablet from '@/images/adventurePage/runningRowsBlock/img_runningRowsBlock_bg_tablet.webp';
import RunningBgMobile from '@/images/adventurePage/runningRowsBlock/img_runningRowsBlock_bg_mobile.webp';
import CTAFirstBg from '@/images/adventurePage/cta/img_cta_first_bg.webp';
import CTAFirstBgTablet from '@/images/adventurePage/cta/img_cta_first_bg_tablet.webp';
import CTAFirstBgMobile from '@/images/adventurePage/cta/img_cta_first_bg_mobile.webp';

function AdventuresCaseStudyPageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      runningBg: RunningBg,
      first: CTAFirstBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.runningBg = RunningBgTablet;
      bg.first = CTAFirstBgTablet;
    } else if (isXSDevice) {
      bg.runningBg = RunningBgMobile;
      bg.first = CTAFirstBgMobile;
    }
    return bg;
  };

  return (
    <>
      <AdventuresMainBlock />
      <AboutProjectSection
        title={aboutBlockData.title}
        subtitle={aboutBlockData.subtitle}
        content={aboutBlockData.content}
      />
      <BusinessContextDiagonal
        upTitle={businessContextData.name}
        title={businessContextData.title}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
      />
      <RunningRowsBlock
        background={getBackground().runningBg}
        runningRows={adventureRunningRowsBlockData}
        classes={{
          imgContainer: 'min-w-[222px] h-[148px] min-md:min-w-[367px] min-md:h-[245px] '
          + 'min-lg:min-w-[600px] min-lg:h-[400px]',
        }}
      />
      <DevelopmentServicesWhite
        title={servicesData.title}
        data={servicesData.data}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title="Ready to transform your user engagement by leveraging best-in-class design&nbsp;solutions?"
          btnText="Contact us"
          withButton
          background={getBackground().first}
          buttonType={ButtonTypes.PRIMARY}
          classes={{
            cta: '!pt-[120px] screen-lg:!pt-[80px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            title: '!text-black !max-w-[1200px] !leading-[1.4]',
          }}
        />
      )}
      <OurSolutions
        upTitle={ourSolutionsContentData.upTitle}
        title={ourSolutionsContentData.blockTitle}
        data={ourSolutionsContentData.data}
        classes={{ section: '!pb-0' }}
      />
      <CoreTechnology data={coreTechnologyData} />
      <TwoImagesBlock />
      <BusinessContext
        title={businessContextDataLast.title}
        subTitle={businessContextDataLast.subTitle}
        leftContent={businessContextDataLast.firstText}
        rightContent={businessContextDataLast.secondText}
        classes={{ subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]' }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[62, 63, 56, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              94% of first impressions are design-related. Ready to make a lasting impression?
              <span className="block">
                Let&apos;s craft your travel website&nbsp;today!
              </span>
            </>
              )}
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!px-[30px] screen-sm:!px-[15px]',
            title: '!max-w-[930px] !leading-[1.4]',
          }}
        />
      )}
    </>
  );
}

export default AdventuresCaseStudyPageView;
