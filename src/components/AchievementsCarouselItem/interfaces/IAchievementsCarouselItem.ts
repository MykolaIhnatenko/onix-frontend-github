import { StaticImageData } from 'next/image';

import { ICarouselAutomaticData } from '../../CarouselAutomatic/interfaces/ICarouselAutomatic';

export default interface IAchievementsCarouselItem {
  src:StaticImageData;
  alt: string;
}

export interface IAchievementsBlock {
  topCarousel?: ICarouselAutomaticData[];
  title?: string,
  classes?: {
    container?: string;
    title?: string;
  };
  classesBottom?: {
    container?: string;
    item?: string;
    animation?: string;
  };
  classesTop?: {
    container?: string;
    item?: string;
    animation?: string;
  };
}
