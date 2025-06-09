import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import TestimonialsBlock from './components/TestimonialsBlock';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import mainScreenData from './data/mainScreenData';
import ButtonTypes from '../../constants/ButtonTypes';
import MainScreenRighImg from '@/images/videoTestimonials/main/img_main_right_side.webp';
import MainScreenBg from '@/images/videoTestimonials/main/img_main_bg.webp';
import MainScreenBgTablet from '@/images/videoTestimonials/main/img_main_bg_tablet.webp';
import MainScreenBgMobile from '@/images/videoTestimonials/main/img_main_bg_mobile.webp';
import CTABg from '@/images/videoTestimonials/cta/img_cta.webp';
import CTABg_Tablet from '@/images/videoTestimonials/cta/img_cta_tablet.webp';
import CTABg_Mobile from '@/images/videoTestimonials/cta/img_cta_mobile.webp';
import MainBlockWith1TextBtn from 'components/MainBlockWith1TextBtn/MainBlockWith1TextBtn';

function VideoTestimonialsPageView() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      mainScreen: MainScreenBg,
      cta: CTABg,
    };
    if (isMDDevice || isSMDevice) {
      bg.mainScreen = MainScreenBgTablet;
      bg.cta = CTABg_Tablet;
    } else if (isXSDevice) {
      bg.mainScreen = MainScreenBgMobile;
      bg.cta = CTABg_Mobile;
    }
    return bg;
  };

  return (
    <>
      <MainBlockWith1TextBtn
        pageTitle={mainScreenData.pageTitle}
        pageText={mainScreenData.pageText}
        btnText={mainScreenData.btnText}
        rightImg={MainScreenRighImg}
        backgroundImg={getBackground().mainScreen}
        isMobile={isXSDevice || isSMDevice || isMDDevice}
      />
      <TestimonialsBlock />
      <CallToActionComponent
        background={getBackground().cta}
        withButton
        title="Ready to achieve your own success?"
        content="Start your project easily with the Onix team today!"
        btnText="Contact us"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
          background: 'after:!hidden',
          title: '!text-black !max-w-[1078px] !pb-[40px] screen-lg:!max-w-[708px] screen-md:!pb-[30px]',
          content: '!text-black !pb-[40px] screen-md:!pb-[30px] screen-md:!text-[16px] screen-md:!leading-[24px]',
        }}
      />
    </>
  );
}

export default VideoTestimonialsPageView;
