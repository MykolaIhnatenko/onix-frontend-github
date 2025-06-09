import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import { IConfetti } from './IConfettiAnimation';

export default interface IMainSection {
  title: string | ReactNode;
  backgroundImg?: StaticImageData;
  confettiData: IConfetti[];
  isMobile: boolean;
}
