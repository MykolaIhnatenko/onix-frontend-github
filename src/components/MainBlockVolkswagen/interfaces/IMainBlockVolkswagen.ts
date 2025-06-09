import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export default interface IMainBlockVolkswagen {
  title?: string | ReactNode;
  subtitleText?: string | ReactNode;
  logo?: StaticImageData;
  backgroundImg: StaticImageData;
  classes?: {
    container?: string;
    bgContainer?: string;
    titleContainer?: string;
    logo?: string;
    title?: string;
    subtitle?: string;
  };
}
