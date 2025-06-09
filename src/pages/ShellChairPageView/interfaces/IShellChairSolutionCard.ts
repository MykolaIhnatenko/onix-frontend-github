import { ReactElement, ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export interface IShellChairChallengesCard {
  title: ReactNode;
  text: ReactElement;
  img?: StaticImageData;
  imgTablet?: StaticImageData;
  imgMobile: StaticImageData;
  video?: string;
}
