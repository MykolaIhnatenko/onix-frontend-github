import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export default interface IRebrandingBlock {
  blockTitle: string;
  firstText: ReactNode;
  secondText: ReactNode;
  secondTitle: string;
  data: IRebrandingBlockData[];
  background: StaticImageData;
}

export interface IRebrandingBlockData {
  id: string;
  title: string;
}
