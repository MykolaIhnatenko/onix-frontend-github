import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import PageLinks from 'constants/PageLinks';

export default interface IIndustriesWeServeCarouselItem {
  title?: string | ReactNode;
  img: StaticImageData;
  alt: string;
  url: PageLinks;
  classes?: {
    container?: string;
    title?: string;
    img?: string;
  };
  isJakarta?: boolean;
}
