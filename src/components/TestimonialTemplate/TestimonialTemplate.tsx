import { StaticImageData } from 'next/image';

import { useAppSelector } from 'hook/reduxToolkit';
import ImageComponent from '../Image/Image';
import ContentText from '../ContentText/ContentText';
import MainTitle from '../MainTitle/MainTitle';
import PageContainer from '../PageContainer/PageContainer';
import BgLarge from '../../assets/images/testimonial/img_background_large.webp';
import Bg from '../../assets/images/testimonial/img_background.webp';
import BgTablet from '../../assets/images/testimonial/img_background_tablet.webp';
import BgMobile from '../../assets/images/testimonial/img_background_mobile.webp';
import { TestimonialSection } from 'constants/titleEnums';
import VRARContent from 'components/VRARContent/VRARContent';
import ITestimonialTemplate from './interfaces/ITestimonialTemplate';
import { XXXL_DEVICE } from 'constants/constants';

function TestimonialTemplate({
  upTitle = TestimonialSection.TESTIMONIAL_UPTITLE,
  title = TestimonialSection.TESTIMONIAL_TITLE,
  children,
}: ITestimonialTemplate) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      screenWidth,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    let bg: StaticImageData = Bg;

    if (screenWidth >= XXXL_DEVICE) {
      bg = BgLarge;
    } else if (isMDDevice || isSMDevice) {
      bg = BgTablet;
    } else if (isXSDevice) {
      bg = BgMobile;
    }

    return bg;
  };

  return (
    <section className="relative bg-black">
      <div
        className="
          absolute top-0 left-0 w-full h-[464px] screen-lg:h-[424px] screen-md:h-[361px]
          after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[100px]
          after:bg-gradient-to-b after:from-transparent after:to-black
        "
      >
        <ImageComponent
          alt="background"
          src={getBackground()}
          sizes="100vw"
          className="w-full h-full object-cover object-left-top"
        />
      </div>

      <PageContainer className="text-white pt-[120px] pb-[120px] screen-lg:pt-[80px] screen-lg:pb-[80px]">
        {upTitle && (
          <VRARContent>
            <ContentText
              tag="p"
              marginAbsent
              className="pb-[20px] screen-md:pb-[15px] screen-md:!text-[14px] screen-md:!leading-[20px]"
            >
              {upTitle}
            </ContentText>
          </VRARContent>
        )}
        <VRARContent>
          <MainTitle
            className="
              max-w-[1080px] pb-[40px]
              min-xxxl:max-w-[1480px]
              screen-md:pb-[30px]
            "
          >
            {title}
          </MainTitle>
        </VRARContent>
        {children}
      </PageContainer>
    </section>
  );
}

export default TestimonialTemplate;
