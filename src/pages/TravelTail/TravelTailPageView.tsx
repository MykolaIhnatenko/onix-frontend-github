import { StaticImageData } from 'next/image';

import TravelTailMainSection from './components/TravelTailMainSection';
import aboutContent from './data/aboutContent';
import { ButtonType } from '../../constants/enums';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import carouselData from './data/carouselData';
import TravelTailBusinessContextSection from './components/TravelTailBusinessContextSection';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import { useAppSelector } from '../../hook/reduxToolkit';
import resultsBlockData from './data/resultsBlockData';
import TravelTailFeaturesSection from './components/TravelTailFeaturesSection';
import ImageSection from '../../components/ImageSection/ImageSection';
import imageSectionData from './data/imageSection';
import technologies from './data/technologiesData';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import TravelTailResultSection from './components/TravelTailResultSection';
import IPageStatus from 'interfaces/IPageStatus';
import ourSolutionsData from './data/ourSolutionsData';
import RunningRowsBlock from 'components/RunningRowsBlock/RunningRowsBlock';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import OurSolutions from 'components/OurSolutions/OurSolutions';

import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';

function TravelTailPageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice, isSMDevice, isXSDevice, isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const background:{ [propName:string]: StaticImageData } = {
      first: ResultsBlockBg,
      second: CTAFirstBg,
    };
    if (isXXXLDevice) {
      background.first = ResultsBlockXXXLBg;
      background.second = CTAFirstXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      background.first = ResultsBlockTabletBg;
      background.second = CTAFirstTabletBg;
    } else if (isXSDevice) {
      background.first = ResultsBlockMobileBg;
      background.second = CTAFirstMobileBg;
    }
    return background;
  };

  return (
    <>
      <TravelTailMainSection />
      <AboutProjectSection
        title={aboutContent.title}
        subtitle={aboutContent.text}
        content={aboutContent.content}
      />
      <RunningRowsBlock
        runningRows={carouselData}
        classes={{
          container: 'bg-color-yellow backdrop-blur-[27.81px] screen-lg:!mt-0 screen-lg:!pt-[50px] screen-lg:!h-full '
            + 'screen-md:!pt-[30px]',
        }}
      />
      <TravelTailBusinessContextSection />
      <ResultsBlock
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        background={getBackground().first}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          background={getBackground().second}
          withButton
          title="Have a project in mind? Let's talk!"
          btnText="Get in touch with us"
          classes={{
            cta: '!p-[80px_15px_60px] min-md:!p-[80px_30px] min-lg:!p-[120px_70px] min-xxxl:!p-[120px_80px]',
            background: `
            after:bg-gradient-to-b after:from-[rgba(253,253,253,0)_5%] after:to-black
            after:!absolute after:content-[""] after:!h-[100px] after:!w-full after:!top-0
            after:left-0 after:!bg-gradient-to-t`,
            image: '!object-bottom',
            title: '!text-center !max-w-[302px] !pb-[30px] !mx-auto min-md:!max-w-full min-md:!pb-[40px]',
            content: '!mx-auto !my-[40px] min-md:!max-w-[559px]',
            btn: '!max-w-[320px] !mx-auto min-md:!max-w-[420px]',
          }}
        />
      )}
      <TravelTailFeaturesSection />
      <ImageSection data={imageSectionData} />
      <OurSolutions
        title="Design solutions implemented by Onix"
        data={ourSolutionsData}
        classes={{ section: '!pb-0' }}
      />
      <CoreTechnology
        data={technologies}
        classes={{ contentContainer: '!pb-0' }}
      />
      <TravelTailResultSection />
      <CaseStudiesBlockForCases
        sliderIds={[50, 52, 49, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Ready to build a custom travel solution that delivers the best possible user experience?"
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0',
            title: `!text-center !pb-[30px] !m-auto min-md:!pb-[40px] min-md:!max-w-[688px]
            min-lg:!max-w-[834px] min-xl:!max-w-[1080px]`,
            btn: '!max-w-[320px] !m-auto min-md:!max-w-[420px]',
          }}
        />
      )}
    </>
  );
}

export default TravelTailPageView;
