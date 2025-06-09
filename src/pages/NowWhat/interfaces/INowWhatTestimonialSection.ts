import { ReactElement } from 'react';
import { StaticImageData } from 'next/image';

export interface INowWhatTestimonialSection {
  video: string;
  title: string;
  subtitle: string;
  text: ReactElement;
  author: string;
  position: string;
  bg: StaticImageData;
  bgTablet: StaticImageData;
  bgMobile: StaticImageData;
}
