import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface IMachineLStartBlock {
  pageTitle: ReactNode;
  subTitle?: ReactNode;
  content: JSX.Element;
  background: StaticImageData;
}
