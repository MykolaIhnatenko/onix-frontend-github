import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export default interface IMentalVideoBlock {
  title?: string | ReactNode;
  video?: string;
  image?: string | StaticImageData;
  classes?: {
    videoPlayer?: string;
    video?: string;
    container?: string;
  }
  animImage?: string | StaticImageData;
  withoutBtn?: boolean;
  idVideoBlock?: string;
  styleContainer?: string;
}
