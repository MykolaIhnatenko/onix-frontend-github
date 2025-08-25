import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import PageLinks from 'constants/PageLinks';

interface ICaseStudyCarouselItem {
  id: string,
  qualityImg?: number,
  img: {
    sm:StaticImageData;
    md:StaticImageData;
    lg:StaticImageData;
  },
  title: string | ReactNode,
  solution: string | ReactNode,
  description?: string | ReactNode,
  result: string | ReactNode,
  icon: StaticImageData,
  url: PageLinks,
  logoSizes: {
    lg: {
      width:number,
      height:number,
    },
    sm: {
      width:number,
      height:number,
    },
  },
  data?: string[],
  cucumberVariant?: boolean,
  headerVariant?: boolean,
  eyeBlackStyle?: boolean,
  eyeBlackStyleMobile?: boolean,
}

export default ICaseStudyCarouselItem;
