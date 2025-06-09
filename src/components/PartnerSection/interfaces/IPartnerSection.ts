import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import { PartnerSectionScrollVariant, PartnerSectionVariant } from '../../../constants/enums';

export interface IPartnerSection {
  pageTitle?: string;
  subTitle?: string | ReactNode;
  sectionText?: ReactNode;
  data: IPartnerSliderData[];
  background?: StaticImageData;
  variant?: PartnerSectionVariant;
  backgroundTablet?: StaticImageData;
  backgroundMobile?: StaticImageData;
  scrollVariant?: PartnerSectionScrollVariant;
  withoutScroll?: boolean;
  classes?: {
    partnerSection?: string;
    container?: string;
    innerContainer?: string;
    bgContainer?: string;
    bgImage?: string;
    contentWrapper?: string;
    title?: string;
    text?: string;
    slider?: string;
    sliderContainer?: string;
  };
}

export interface IPartnerSliderData {
  id: number;
  content: ReactNode;
}
