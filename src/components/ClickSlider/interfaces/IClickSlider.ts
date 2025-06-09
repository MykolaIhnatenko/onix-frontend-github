import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface IClickSlider {
  data: IClickSliderData[];
  activeShadow?: boolean;
  classes?: {
    dotsContainer?: string;
    item?: {
      container?: string;
      image?: string;
      content?: string;
      title?: string;
      textContainer?: string;
    };
  }
}

export interface IClickSliderData {
  id:number;
  title: ReactNode;
  number: string;
  text: ReactNode;
  img: StaticImageData;
  setActiveSlide?: (id:number) => void;
  imgTablet: StaticImageData;
  activeShadow?: boolean;
  classes?:{
    container?: string;
    content?: string;
    title?: string;
    textContainer?: string;
  }
}
