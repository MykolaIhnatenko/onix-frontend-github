import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export interface ITransparentCard {
  bg?: StaticImageData;
  bgTablet?: StaticImageData;
  bgMobile?: StaticImageData;
  icon?: JSX.Element;
  title?: string;
  subTitle?: string;
  text: string | ReactNode;
  classes?: {
    card?: string;
    bg?: string;
    cardTitle?: string;
    cardSubTitle?: string;
    cardText?: string;
  };
}
