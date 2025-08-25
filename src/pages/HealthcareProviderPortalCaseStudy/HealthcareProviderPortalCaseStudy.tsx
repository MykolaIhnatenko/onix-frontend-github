import { StaticImageData } from 'next/image';
import { useSelector } from 'react-redux';

import UsabilityTestingMainBlock from 'pages/UsabilityTestingPageView/components/UsabilityTestingMainBlock';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import HealthcareSliderBlock from './components/HealthcareSliderBlock';
import ResultsBlock from 'components/ResultsBlock/ResultsBlock';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import TechnologiesBlock from 'components/TechnologiesBlock/TechnologiesBlock';
import RunningRowsBlock from 'components/RunningRowsBlock/RunningRowsBlock';
import { IApp } from 'store/app/interfaces/IApp';
import IStore from 'store/interfaces/IStore';
import ButtonTypes from 'constants/ButtonTypes';
import IPageStatus from 'interfaces/IPageStatus';
import { getTechnologiesBooking } from 'utils/getTechnologies';
import howOnixDevelopedData from './data/howOnixDevelopedData.json';
import resultsBlockData from './data/resultsBlockData';
import businessContextBlockData from './data/businessContextBlockData';
import ourSolutionsData from './data/ourSolutionsData';
import coreTechnologyData from './data/coreTechnologyData.json';
import runningRowsBlockData from './data/runningRowsBlockData';
import resultsBlockSecondData from './data/resultsBlockSecondData';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContextWithTable from 'components/BusinessContextWithTables/BusinessContextWithTable';

import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import RunningRowsBlockBg from '@/images/healthcareProviderPortalCaseStudy/runningRowsBlock/img_runningRowsBlockBg@2x.webp';
import RunningRowsBlockBgTablet from '@/images/healthcareProviderPortalCaseStudy/runningRowsBlock/img_runningRowsBlockBgTablet@2x.webp';
import RunningRowsBlockBgMobile from '@/images/healthcareProviderPortalCaseStudy/runningRowsBlock/img_runningRowsBlockBgMobile@2x.webp';
import ResultBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteBg@2x.webp';
import ResultBgTablet from '@/images/ResultsBlockBg/img_resultsBlockWhiteTabletBg@2x.webp';
import ResultBgMobile from '@/images/ResultsBlockBg/img_resultsBlockWhiteMobileBg@2x.webp';
import ResultXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteXXXLBg@2x.webp';
import SliderBlockBg from '@/images/healthcareProviderPortalCaseStudy/sliderBlock/img_sliderBlockBg@2x.webp';
import SliderBlockTabletBg from '@/images/healthcareProviderPortalCaseStudy/sliderBlock/img_sliderBlockTabletBg@2x.webp';
import SliderBlockMobileBg from '@/images/healthcareProviderPortalCaseStudy/sliderBlock/img_sliderBlockMobileBg@2x.webp';
import CTASecondBg from '@/images/healthcareProviderPortalCaseStudy/img_CTASecondBg@2x.webp';
import CTASecondTabletBg from '@/images/healthcareProviderPortalCaseStudy/img_CTASecondTabletBg@2x.webp';
import CTASecondMobileBg from '@/images/healthcareProviderPortalCaseStudy/img_CTASecondMobileBg@2x.webp';
import IMacXL from '@/images/healthcareProviderPortalCaseStudy/mainBlock/img_iMacXL@2x.webp';
import IMac from '@/images/healthcareProviderPortalCaseStudy/mainBlock/img_iMac@2x.webp';
import IMacTablet from '@/images/healthcareProviderPortalCaseStudy/mainBlock/img_iMacTablet@2x.webp';
import IMacMobile from '@/images/healthcareProviderPortalCaseStudy/mainBlock/img_iMacMobile@2x.webp';
import MainBgXL from '@/images/healthcareProviderPortalCaseStudy/mainBlock/img_mainBgXL@2x.webp';
import MainBg from '@/images/healthcareProviderPortalCaseStudy/mainBlock/img_mainBg@2x.webp';
import MainBgTablet from '@/images/healthcareProviderPortalCaseStudy/mainBlock/img_mainBgTablet@2x.webp';
import MainBgMobile from '@/images/healthcareProviderPortalCaseStudy/mainBlock/img_mainBgMobile@2x.webp';

function HealthcareProviderPortalCaseStudy({ saleUrl }: IPageStatus) {
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
      iMac: IMac,
      resultsBlock: ResultsBlockBg,
      ctaFirst: CTAFirstBg,
      runningRowsBg: RunningRowsBlockBg,
      resultsBlockSecond: ResultBg,
      sliderBlock: SliderBlockBg,
      ctaSecond: CTASecondBg,
    };
    if (isXXXLDevice) {
      bg.mainBg = MainBgXL;
      bg.iMac = IMacXL;
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.ctaFirst = CTAFirstXXXLBg;
      bg.resultsBlockSecond = ResultXXXLBg;
    } else if (isMDDevice) {
      bg.mainBg = MainBgTablet;
      bg.iMac = IMacTablet;
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.ctaFirst = CTAFirstTabletBg;
      bg.runningRowsBg = RunningRowsBlockBgTablet;
      bg.resultsBlockSecond = ResultBgTablet;
      bg.sliderBlock = SliderBlockTabletBg;
      bg.ctaSecond = CTASecondTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.mainBg = MainBgMobile;
      bg.iMac = IMacMobile;
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.ctaFirst = CTAFirstMobileBg;
      bg.runningRowsBg = RunningRowsBlockBgMobile;
      bg.resultsBlockSecond = ResultBgMobile;
      bg.sliderBlock = SliderBlockMobileBg;
      bg.ctaSecond = CTASecondMobileBg;
    }
    return bg;
  };

  return (
    <>
      <UsabilityTestingMainBlock
        title="HCP portal development"
        background={getBackground().mainBg}
        image={getBackground().iMac}
        classes={{
          container: `!text-white max-1390:!h-screen max-1390:!max-h-[990px] screen-md:!min-h-[570px]
            screen-md:!h-[760px] screen-sm:!h-[572px] screen-sm:!overflow-hidden`,
          background: '!absolute !bottom-0 !right-0 !h-full !w-full',
          backgroundImage: `!w-full !h-full !object-cover !object-top max-1390:!object-left
          screen-xl:![object-position:_-50px] screen-lg:!object-top screen-md:!object-center`,
          contentContainer: '!relative max-1390:!flex max-1390:!pt-0 screen-lg:!block screen-lg:!pt-[146px]',
          content: 'max-1390:!pl-[70px] screen-lg:!pl-[30px] screen-md:!pl-[15px]',
          title: `!text-black !max-w-[440px] !pb-0 max-1390:!text-[50px] max-1390:!leading-[64px]
            screen-lg:!text-[40px] screen-lg:!leading-[56px] screen-lg:!max-w-[unset]
            screen-md:!text-[25px] screen-md:!leading-[35px]`,
          image: `!absolute !top-[16%] !left-[38%] !h-[80%] !w-auto !pr-[80px] screen-lg:!pr-0 screen-lg:!top-[unset]
            screen-lg:!bottom-[60px] screen-lg:!left-1/2 screen-lg:!translate-x-[-50%] screen-lg:!h-[60%]
            screen-lg:!w-max screen-sm:!h-[52%]`,
          imageContent: '!w-full !h-full !object-contain screen-lg:!object-cover screen-lg:!block',
        }}
      />
      <AboutProjectSection
        title={howOnixDevelopedData.blockTitle}
        content={howOnixDevelopedData.data}
      />
      <BusinessContextWithTable
        upTitle={businessContextBlockData.upTitle}
        title={businessContextBlockData.title}
        subTitle={businessContextBlockData.subTitle}
        content={businessContextBlockData.content}
        leftContent={businessContextBlockData.firstText}
        rightContent={businessContextBlockData.secondText}
        subText={businessContextBlockData.subText}
        withoutAnimateTable
        classes={{
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
          subText: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <ResultsBlock
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        background={getBackground().resultsBlock}
        productScope
        classes={{
          background: `after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[120px]
            after:bg-gradient-to-b from-[rgba(0,0,0,0)] to-black screen-lg:after:h-[80px]`,
        }}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Are you interested in custom
              HCP portal development?
            </>
          )}
          btnText="contact us"
          withButton
          background={getBackground().ctaFirst}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[120px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black screen-lg:after:h-[80px]`,
            image: '!object-bottom',
            title: '!pb-[40px] !max-w-[780px] screen-lg:!max-w-[620px] screen-md:!pb-[30px] screen-md:!max-w-[380px]',
          }}
        />
      )}
      <HealthcareSliderBlock background={getBackground().sliderBlock} />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Do you plan to create an&nbsp;HCP portal?
            </>
          )}
          btnText="contact us"
          withButton
          background={getBackground().ctaSecond}
          buttonType={ButtonTypes.PRIMARY}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[120px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-white screen-lg:after:h-[80px]`,
            image: '!object-bottom',
            title: '!pb-[40px] !text-black !max-w-full screen-md:!pb-[30px]',
          }}
        />
      )}
      <OurSolutions
        title="The software’s killer features"
        data={ourSolutionsData}
        desktopViewOnXL
        classes={{ section: saleUrl ? '!pt-0' : '' }}
      />
      <TechnologiesBlock
        technologies={getTechnologiesBooking(coreTechnologyData)}
        titleDesc={(
          <>
            Core technology stack we&nbsp;used
          </>
        )}
        noShowIcon
        classes={{
          container: `!p-[0_70px_120px] min-xxxl:!p-[0_80px_120px]
          screen-lg:!p-[0_30px_80px] screen-md:!p-[0_15px_80px]`,
          blockTitleText: 'm-0',
          blockTitleDesc: '!mb-[80px] !text-black !w-full screen-lg:!mb-[60px] screen-md:!mb-[40px]',
          technologies: {
            technology: `!border-b-[2px] !border-t-[2px] !border-black [&:not(:last-child)]:!border-b-0
            min-lg:!flex min-lg:!items-center`,
            keyTitle: '!pt-[20px] min-md:!pt-[40px] min-lg:!pt-[40px]',
            technologiesList: '!p-[15px_0] min-md:!p-[18px_0_33px] min-lg:!p-[20px_0_20px_20px]',
            item: '!py-[5px] min-md:!py-[7px] min-lg:!py-[20px]',
          },
        }}
      />
      <RunningRowsBlock background={getBackground().runningRowsBg} runningRows={runningRowsBlockData} />
      <ResultsBlock
        name={resultsBlockSecondData.name}
        title={resultsBlockSecondData.title}
        text={resultsBlockSecondData.text}
        content={resultsBlockSecondData.content}
        subText={resultsBlockSecondData.subText}
        background={getBackground().resultsBlockSecond}
        classes={{
          resultBlock: '!bg-white !text-black',
          line: '!bg-[#CECECE]',
          lineActive: '!bg-black',
          title: '!pb-[40px] screen-md:pb-[30px] ',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[61, 27, 26, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          withButton
          title="Are you interested in building a web portal for the healthcare industry?"
          btnText="Contact us"
          classes={{
            cta: '!pt-0',
            background: 'after:hidden',
            title: `!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!text-[25px] screen-md:!leading-[35px]
            screen-md:!pb-[30px] screen-md:max-w-[520px]`,
          }}
        />
      )}
    </>
  );
}

export default HealthcareProviderPortalCaseStudy;
