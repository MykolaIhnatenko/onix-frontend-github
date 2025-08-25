import MentalVideoBlock from 'components/MentalVideoBlock/MentalVideoBlock';
import { useAppSelector } from '../../hook/reduxToolkit';
import IPageStatus from 'interfaces/IPageStatus';
import { ButtonType } from 'constants/enums';
import titleMainBlock from './data/titleScreen';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import ResultsBlock from 'components/ResultsBlock/ResultsBlock';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import aboutData from './data/aboutData';
import ProductScopeData from './data/productScopeData';
import coreTechnologyData from './data/technologyData.json';
import businessContextData, { businessContextDataFirst } from './data/businessContextData';
import MainSectionBg from '../../assets/images/product3d/img_productMain.webp';
import MainSectionBgTablet from '../../assets/images/product3d/img_productMainTablet.webp';
import MainSectionBgMobile from '../../assets/images/product3d/img_productMainMobile.webp';
import ourSolutionsData from './data/ourSolutionsData';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';

import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';

function Product3dModelingAnimationView({ saleUrl }: IPageStatus) {
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
      cta: CTAFirstBg,
      resultsBlock: ResultsBlockBg,
    };
    if (isXXXLDevice) {
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.cta = CTAFirstXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      bg.Main = MainSectionBgTablet;
      bg.cta = CTAFirstTabletBg;
      bg.resultsBlock = ResultsBlockTabletBg;
    } else if (isXSDevice) {
      bg.Main = MainSectionBgMobile;
      bg.cta = CTAFirstMobileBg;
      bg.resultsBlock = ResultsBlockMobileBg;
    }
    return bg;
  };

  return (
    <>
      <MentalVideoBlock
        image={getBackground().Main}
        title={titleMainBlock}
        video="/static/video/lightVideo.mp4"
        classes={{
          video: 'object-cover',
          videoPlayer: '!aspect-auto',
          videoContainer: 'h-full',
          titleScreen: '!items-start p-[294px_70px_0] min-xxxl:p-[294px_80px_0] ',
          container: 'after:content-[\'\'] after:absolute after:inset-0 after:bottom-0 after:left-0 '
            + ' after:w-full after:h-full after:bg-gradient-to-l after:from-transparent after:to-black '
            + 'screen-lg:after:bg-[linear-gradient(0deg,_rgba(255,255,255,0)_0%,_rgb(0,0,0)_100%)]',
        }}
        idVideoBlock="product3dModelingAnimation"
      />
      <AboutProjectSection
        content={aboutData.content}
        title={aboutData.title}
      />
      <BusinessContext
        upTitle={businessContextDataFirst.name}
        title={businessContextDataFirst.title}
        subTitle={businessContextDataFirst.subtitle}
        leftContent={businessContextDataFirst.firstText}
        rightContent={businessContextDataFirst.secondText}
        subText={businessContextDataFirst.bottomText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
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
          title="Have a project in mind? Let's talk!"
          btnText="Get in touch with us"
          withButton
          background={getBackground().cta}
          id={ButtonType.CASE}
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
      <OurSolutions
        title="Solutions we provided"
        data={ourSolutionsData}
      />
      <CoreTechnology
        data={coreTechnologyData}
        blackTheme
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
      <CaseStudiesBlockForCases
        sliderIds={[49, 53, 6, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title="What is your app idea?"
          btnText="Share your vision"
          withButton
          classes={{
            cta: '!pt-0',
            background: 'screen-md:!object-bottom',
            title: '!max-w-[960px] screen-lg:!max-w-[650px] screen-md:!max-w-[300px]',
          }}
        />
      )}
    </>
  );
}

export default Product3dModelingAnimationView;
