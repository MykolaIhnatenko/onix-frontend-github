import { useAppSelector } from '../../hook/reduxToolkit';
import MainBlockVolkswagen from '../../components/MainBlockVolkswagen/MainBlockVolkswagen';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import AnimProjectDetailsVr from '../../components/AnimProjectDetailsVr/AnimProjectDetailsVr';
import KillerFeaturesData from './data/killerFeaturesData';
import TechData from './data/techData.json';
import resultsData from './data/resultsData';
import aboutBlockData from './data/aboutBlockData.json';
import ProjectDetails from './data/projectDetails';
import cardsData from './data/cardsData';
import ProductScopeData from './data/productScopeData';
import {
  ButtonType,
} from '../../constants/enums';
import IPageStatus from 'interfaces/IPageStatus';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import resultsBlockWhite from 'constants/tailwindStyle';
import businessContextData, { businessContextDataSecond } from './data/businessContextData';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';
import OurSolutionVirtual from 'components/OurSolutionVirtual/OurSolutionVirtual';
import TestimonialVideoSection from '../../components/TestimonialVideoSection/TestimonialVideoSection';

import MainSectionBg from '@/images/InteractiveVrMuseum/img_HeroScreen.webp';
import MainSectionBgTablet from '@/images/InteractiveVrMuseum/img_HeroScreenTablet.webp';
import MainSectionBgMobile from '@/images/InteractiveVrMuseum/img_HeroScreenMobile.webp';
import Slide from '@/images/InteractiveVrMuseum/img_VideoSlide.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import ProjectDetailsBgMobile from '@/images/InteractiveVrMuseum/img_ProjectDetailsBgMobile.webp';
import ProjectDetailsBgTablet from '@/images/InteractiveVrMuseum/img_ProjectDetailsBgTablet.webp';
import ProjectDetailsBg from '@/images/InteractiveVrMuseum/img_ProjectDetailsBg.webp';

function InteractiveVrMuseumView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      Main: MainSectionBg,
      Project: ProjectDetailsBg,
      cta: CTAFirstBg,
      resultsBlock: ResultsBlockBg,
    };
    if (isXXXLDevice) {
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.cta = CTAFirstXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      bg.Main = MainSectionBgTablet;
      bg.Project = ProjectDetailsBgTablet;
      bg.cta = CTAFirstTabletBg;
      bg.resultsBlock = ResultsBlockTabletBg;
    } else if (isXSDevice) {
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.Main = MainSectionBgMobile;
      bg.Project = ProjectDetailsBgMobile;
      bg.cta = CTAFirstMobileBg;
    }
    return bg;
  };

  return (
    <div>
      <MainBlockVolkswagen
        title={(
          <>
            Anija Manor —
            <br className="screen-lg:hidden" />
            {' '}
            VR museum development
            <br className="screen-lg:hidden" />
            {' '}
            case study
          </>
)}
        subtitleText="Sharing Onix’s experience in interactive virtual museum development
      for Oculus Quest/Meta Quest 2"
        backgroundImg={getBackground().Main}
        classes={{
          titleContainer: 'max-w-[700px] screen-lg:min-h-[100vh] screen-lg:max-w-full '
            + 'screen-lg:!pt-[154px] '
            + 'screen-md:!pt-[139px]',
          subtitle: '!font-ibmPlexMono !text-[18px]/[26px] !font-normal max-w-[440px] '
            + 'min-md:!text-[18px]/[26px] '
            + 'screen-lg:max-w-[670px] screen-md:!text-[16px]/[24px] min-360:!text-[16px]/[24px]',
        }}
      />
      <AboutProjectSection
        content={aboutBlockData.content}
        title={aboutBlockData.title}
      />
      <BusinessContext
        upTitle={businessContextData.name}
        title={businessContextData.title}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
        subText={businessContextData.bottomText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <ResultsBlock
        title={ProductScopeData.title}
        name={ProductScopeData.titleBlock}
        content={ProductScopeData.content}
        background={getBackground().resultsBlock}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title="Are you interested in developing a virtual museum&nbsp;experience?"
          btnText="Contact us"
          withButton
          background={getBackground().cta}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[50px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            image: 'screen-md:!object-bottom',
            title: `!max-w-[1078px] screen-lg:!pb-[40px] screen-lg:!max-w-[630px] screen-md:!max-w-full
            screen-md:!pb-[30px]`,
          }}
        />
      )}
      <AnimProjectDetailsVr
        title={ProjectDetails.title}
        background={getBackground().Project}
        contentBlock={ProjectDetails.content}
      />
      <TestimonialVideoSection
        videoSrc="/static/video/VrMuseum.mp4"
        title="VR museum. Anija Manor's story"
        upTitle=""
        preview={Slide}
      />
      <BusinessContextDiagonal
        upTitle={businessContextDataSecond.name}
        title={businessContextDataSecond.title}
        subTitle={businessContextDataSecond.subtitle}
        leftContent={businessContextDataSecond.firstText}
        rightContent={businessContextDataSecond.secondText}
        classes={{
          section: '!pb-0',
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <OurSolutions
        data={KillerFeaturesData}
        desktopViewOnXL
        classes={{ section: '!pb-0 pt-[80px] screen-lg:pt-[60px] screen-md:pt-[40px]' }}
      />
      <OurSolutionVirtual
        title="Some challenges and solutions"
        data={cardsData}
      />
      <CoreTechnology
        data={TechData.techList}
        classes={{ contentContainer: '!py-0' }}
      />
      <ResultsBlock
        name={resultsData.titleBlock}
        title={resultsData.title}
        content={resultsData.listPerformance}
        classes={resultsBlockWhite}
      />
      <CaseStudiesBlockForCases
        sliderIds={[49, 18, 6, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Are you interested in developing
              <span className="inline-block">a virtual</span>
              {' '}
              museum&nbsp;experience?
            </>
          )}
          btnText="Contact us"
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            background: 'screen-md:!object-bottom',
            title: '!max-w-[920px] screen-lg:!max-w-[600px] screen-md:!max-w-full',
          }}
          withButton
        />
      )}
    </div>
  );
}

export default InteractiveVrMuseumView;
