import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export default interface IIndustryBanner {
  isBannerHidden?: boolean;
  imageBanner: string | StaticImageData;
  title: string | ReactNode;
  desc: string;
  colorActive?:boolean;
  classesVariant?: {
    bannerBlock?: string;
    titleBanner?: string;
    emptyBlock?: string;
    imageBanner?: string;
    buttonBlock?: string;
  };
}
