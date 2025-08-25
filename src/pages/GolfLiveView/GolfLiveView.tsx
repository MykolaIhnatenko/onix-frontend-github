import { useAppSelector } from '../../hook/reduxToolkit';
import MainSection from './components/MainSection';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import ResultsBlock from 'components/ResultsBlock/ResultsBlock';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import TitleMainSection from './data/TitleMainSection';
import neededBlockData from './data/neededBlockData';
import FeaturesData from './data/FeaturesData';
import TechList from './data/TechList';
import { ButtonType } from 'constants/enums';
import IPageStatus from 'interfaces/IPageStatus';
import TestimonialVideoSection from 'components/TestimonialVideoSection/TestimonialVideoSection';
import businessContextData, { businessContextDataSecond } from './data/businessContextData';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import aboutContent from './data/aboutContent.json';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import MainSectionBg from '@/images/GolfLive/mainSection/img_MainSection.webp';
import MainSectionTabletBg from '@/images/GolfLive/mainSection/img_MainSectionTablet.webp';
import MainSectionMobileBg from '@/images/GolfLive/mainSection/img_MainSectionMobile.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import TestimonialPreview from '@/images/GolfLive/testimonialSection/img_testimonial_poster.webp';

function GolfLiveView({ saleUrl }: IPageStatus) {
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
      main: MainSectionBg,
      neededSection: ResultsBlockBg,
      cta: CTAFirstBg,
    };
    if (isXXXLDevice) {
      bg.neededSection = ResultsBlockXXXLBg;
      bg.cta = CTAFirstXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      bg.main = MainSectionTabletBg;
      bg.neededSection = ResultsBlockTabletBg;
      bg.cta = CTAFirstTabletBg;
    } else if (isXSDevice) {
      bg.main = MainSectionMobileBg;
      bg.neededSection = ResultsBlockMobileBg;
      bg.cta = CTAFirstMobileBg;
    }
    return bg;
  };

  return (
    <>
      <MainSection
        title={TitleMainSection}
        backgroundImg={getBackground().main}
      />
      <AboutProjectSection
        title={aboutContent.title}
        content={aboutContent.content}
      />
      <BusinessContext
        upTitle={businessContextData.name}
        title={businessContextData.title}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
        }}
      />
      <ResultsBlock
        title={neededBlockData.title}
        content={neededBlockData.content}
        background={getBackground().neededSection}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title={(
            <>
              Have a project in mind?
              <br />
              Let&apos;s talk!
            </>
          )}
          btnText="Get in touch with us"
          background={getBackground().cta}
          withButton
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[100px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            image: '!object-bottom screen-md:h-[300px]',
            title: `!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!text-[25px]
            screen-md:!leading-[35px] screen-md:!pb-[30px]`,
          }}
        />
      )}
      <OurSolutions
        title={FeaturesData.title}
        firstText={FeaturesData.desc}
        data={FeaturesData.content}
      />
      <CoreTechnology
        data={TechList.techList}
        classes={{ contentContainer: '!pt-0' }}
      />
      <TestimonialVideoSection
        videoSrc="/static/video/golf-live.mp4"
        preview={TestimonialPreview}
      />
      <BusinessContext
        upTitle={businessContextDataSecond.name}
        title={businessContextDataSecond.title}
        leftContent={businessContextDataSecond.firstText}
        rightContent={businessContextDataSecond.secondText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[41, 44, 46, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title={(
            <>What is your app idea?</>
          )}
          btnText="Share your vision"
          withButton
          classes={{
            cta: '!pt-0',
            title: `!max-w-[1080px] screen-lg:!max-w-[600px] screen-md:!text-[25px] screen-md:!leading-[35px]
            screen-md:max-w-[330px] screen-md:!pb-[30px]`,
          }}
        />
      )}
    </>
  );
}

export default GolfLiveView;
