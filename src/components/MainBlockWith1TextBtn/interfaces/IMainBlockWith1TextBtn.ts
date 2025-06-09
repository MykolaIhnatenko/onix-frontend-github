import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface IMainBlockWith1TextBtn {
  pageTitle: string;
  pageText: string | ReactNode;
  btnText: string;
  backgroundImg: StaticImageData;
  rightImg: StaticImageData;
  isMobile: boolean;
}
