import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface IBusinessContextTemplate {
  background?: StaticImageData;
  upTitle?: string;
  title: string | ReactNode;
  subTitle?: string | ReactNode;
  subText?: string | ReactNode;
  children: ReactNode;
  blackTheme?: boolean;
  isJakarta?: boolean;
  isButton?: boolean;
  buttonText?: string;
  classes?: {
    section?: string;
    upTitle?: string;
    title?: string;
    subTitle?: string;
    subText?: string;
    bgContainer?: string;
    bgImage?: string;
  };
}

export default IBusinessContextTemplate;
