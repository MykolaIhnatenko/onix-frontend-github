import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface ISolutionsCard {
  id: number;
  title: ReactNode;
  text: React.ReactElement;
  img?: StaticImageData;
  imgTablet?: StaticImageData;
  imgMobile: StaticImageData;
  video?: string;
}

export interface ISolutionsCardBlock {
  cards: ISolutionsCard[];
}
