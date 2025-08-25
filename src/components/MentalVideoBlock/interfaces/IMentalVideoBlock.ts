import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export default interface IMentalVideoBlock {
  title?: string | ReactNode;
  video?: string;
  image?: string | StaticImageData;
  classes?: {
    container?: string;
    videoPlayer?: string;
    video?: string;
    videoContainer?: string;
    titleScreen?: string;
  }
  animImage?: string | StaticImageData;
  withoutBtn?: boolean;
  idVideoBlock?: string;
}
