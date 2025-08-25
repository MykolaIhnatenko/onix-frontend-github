import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import CallToActionComponent from '../../../components/CallToActionBlock/CallToActionComponent';
import { ButtonType } from 'constants/enums';
import { generalSans } from 'fonts/MainFonts';

import BlogsCallToActionBlockBg from '@/images/blogsPage/img_blogs_call_to_action_block@2x.webp';
import BlogsCallToActionBlockBgTablet from '@/images/blogsPage/img_blogs_call_to_action_block_tablet@2x.webp';
import BlogsCallToActionBlockBgMobile from '@/images/blogsPage/img_blogs_call_to_action_block_mobile@2x.webp';

function BlogsLastSections() {
  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);

  const getBackground = ():StaticImageData => {
    if (isXSDevice) {
      return BlogsCallToActionBlockBgMobile;
    }
    if (isMDDevice || isSMDevice) {
      return BlogsCallToActionBlockBgTablet;
    }
    return BlogsCallToActionBlockBg;
  };

  return (
    <div className={generalSans.variable}>
      <CallToActionComponent
        id={ButtonType.BLOG}
        background={getBackground()}
        withButton
        title="Tell us about your product idea and let the magic&nbsp;unfold."
        btnText="Speak to Our Expert"
        sizesBg="(max-width: 768px) 50vw, (min-width: 768px) 66vw"
        classes={{
          cta: `!max-w-[1920px] !m-[120px_auto_0] !p-[160px_70px_160px] 
            screen-lg:!p-[160px_30px_160px] screen-md:!mt-[80px] screen-md:!p-[80px_15px_80px]
          `,
        }}
      />
    </div>
  );
}

export default BlogsLastSections;
