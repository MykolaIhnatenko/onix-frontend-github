import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface IOurSolutionVirtualItem {
  img: StaticImageData;
  imgTablet: StaticImageData;
  imgMobile: StaticImageData;
  title: string;
  text: string | ReactNode;
  smallDesktop?: boolean;
  classes?: {
    card?: string;
    imageContainer?: string;
    textContainer?: string;
    cardItemTitle?: string;
    cardItemText?: string;
  };
}

export interface IOurSolutionVirtualItemData extends IOurSolutionVirtualItem {
  id: number;
}
