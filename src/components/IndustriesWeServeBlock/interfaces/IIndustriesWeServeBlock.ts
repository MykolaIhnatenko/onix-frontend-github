import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import { ICarouselAutomaticData } from '../../CarouselAutomatic/interfaces/ICarouselAutomatic';

export interface IIndustriesWeServeBlock {
  upTitle?: string;
  title: string | ReactNode;
  text?: string | string[];
  background?: StaticImageData;
  carouselTop?: ICarouselAutomaticData[];
  carouselBottom?: ICarouselAutomaticData[];
  carouselTopClasses?: {
    container?: string;
    item?: string;
    animation?: string;
  };
  carouselBottomClasses?: {
    container?: string;
    item?: string;
    animation?: string;
  };
  withoutBorder?: boolean;
  withoutAnimate?: boolean;
  classes?: {
    section?: string;
    container?: string;
    upTitle?: string;
    title?: string;
    text?: string;
    background?: string;
    carouselContainer?: string;
  };
}
