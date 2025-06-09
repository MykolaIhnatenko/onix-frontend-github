import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface ICardSliderVerticalBlock {
  blockTitle: string;
  background: StaticImageData;
  data: ICardSliderVerticalBlockContentData[]
}

export interface ICardSliderVerticalBlockContentData {
  id: number;
  icon: ReactNode;
  title: string;
  bg: StaticImageData;
  bgTablet: StaticImageData;
  bgMobile: StaticImageData;
}

export interface ICardSliderVerticalBlockData {
  blockTitle: string;
  data: ICardSliderVerticalBlockContentData[]
}
