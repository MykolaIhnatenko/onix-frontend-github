import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import PageLinks from 'constants/PageLinks';

export interface ICaseStudiesData {
  id: number;
  content:ReactNode;
}

interface ICaseStudyCarouselItem {
  id: string;
  img: {
    sm:StaticImageData;
    md:StaticImageData;
    lg:StaticImageData;
  };
  qualityImg?: number;
  title: string | ReactNode;
  subTitle: string | ReactNode;
  description: string | ReactNode;
  text: string | ReactNode;
  url: PageLinks;
  icon: StaticImageData;
  logoSizes: {
    lg: {
      width:number;
      height:number;
    };
    sm: {
      width:number;
      height:number;
    };
  };
  data?: string[];
  cucumberVariant?: boolean;
  headerVariant?: boolean;
  eyeBlackStyle?: boolean;
  eyeBlackStyleMobile?: boolean;
}

export default ICaseStudyCarouselItem;
