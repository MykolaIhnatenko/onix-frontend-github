import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import { VariantColorText } from '../../../constants/enums';
import IBlog from '../../../interfaces/IBlog';

export default interface IOnlineSchedulingAndBookingView {
  isBannerHidden: boolean;
  pageBlogs?: [IBlog] | [];
}

export interface IBookingBanner {
  isBannerHidden: boolean;
}

export interface ItemBuild {
  id: string;
  title: string;
}
export interface IListSystemBuild {
  list: {
    id: string;
    left: ItemBuild;
    right: ItemBuild;
  }[]
}

export interface IAboutScheduling {
  title: string;
  text: string;
  textGray: string;
  textGraySecond: string;
  textSecond: string;
  revertBlock?: boolean;
  variant?: VariantColorText;
  classes?: {
    aboutOurScheduling?: string;
    content?: string;
    titleAbout?: string;
    contentBox?: string;
    textBlack?: string;
    textGray?: string;
    reverseText?: string;
  },
}

export interface IOurInsightsBlockItem {
  title:string | ReactNode;
  img: StaticImageData;
  alt: string;
  url?:string;
}
