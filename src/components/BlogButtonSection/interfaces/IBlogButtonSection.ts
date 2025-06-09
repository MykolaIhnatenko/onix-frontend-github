import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export default interface IBlogButtonSection {
  children: ReactNode;
}

export interface IBlogButtonSectionImage {
  img?: StaticImageData;
  alt: string;
}
