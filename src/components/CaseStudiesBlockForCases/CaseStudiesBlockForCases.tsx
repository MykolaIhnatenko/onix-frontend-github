import { useAppSelector } from 'hook/reduxToolkit';
import ImageComponent from 'components/Image/Image';
import ScrollSliderDefault from 'components/ScrollSliderDefault/ScrollSliderDefault';
import getCaseStudies from 'utils/getCaseStudies';
import MainTitle from 'components/MainTitle/MainTitle';
import ICaseStudiesBlockForCases from './interfaces/ICaseStudiesBlockForCases';
import DragSlider from 'components/DragSlider/DragSlider';
import Bg from '@/images/caseStudiesBlock/img_bg.webp';
import BgXXXL from '@/images/caseStudiesBlock/img_bgXXXL.webp';
import BgTablet from '@/images/caseStudiesBlock/img_bgTablet.webp';
import BgMobile from '@/images/caseStudiesBlock/img_bgMobile.webp';

function CaseStudiesBlockForCases({
  sliderIds, title = 'See other related projects', saleUrl, classes,
}: ICaseStudiesBlockForCases) {
  const {
    isXXXLDevice, isMDDevice, isSMDevice, isXSDevice,
  } = useAppSelector((state) => state.app.screenSizes);

  const isMobileOrTablet = isMDDevice || isSMDevice || isXSDevice;

  const getBackground = () => {
    if (isXXXLDevice) {
      return BgXXXL;
    }

    if (isMDDevice || isSMDevice) {
      return BgTablet;
    }

    if (isXSDevice) {
      return BgMobile;
    }

    return Bg;
  };

  const caseStudiesData = getCaseStudies(sliderIds, saleUrl);

  return (
    <section className={`relative bg-color-black ${classes?.section || ''}`}>
      <div className={`
          absolute overflow-hidden left-0 top-0 w-full h-[464px] screen-lg:h-[424px] screen-md:h-[361px]
          after:absolute after:bottom-0 after:w-full after:h-[70px]
          after:bg-gradient-to-t after:from-color-black after:to-transparent after:content-['']
        `}
      >
        <ImageComponent
          src={getBackground()}
          fill
          alt="background"
          sizes="100vw"
          quality={93}
          className="w-full h-full object-cover object-left-top"
        />
      </div>
      <div className={`relative py-[120px] screen-lg:py-[80px] ${classes?.container || ''}`}>
        <MainTitle className={`
            text-color-white mb-[40px] px-[70px] min-xxxl:px-[80px] screen-lg:px-[30px] screen-md:px-[15px]
            ${classes?.title || ''}
          `}
        >
          {title}
        </MainTitle>
        {isMobileOrTablet ? (
          <DragSlider data={caseStudiesData} />
        ) : (
          <ScrollSliderDefault data={caseStudiesData} />
        )}
      </div>
    </section>
  );
}

export default CaseStudiesBlockForCases;
