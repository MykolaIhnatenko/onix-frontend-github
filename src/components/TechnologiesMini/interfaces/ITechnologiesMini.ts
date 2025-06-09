import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface ITechnologiesMini {
  blockTitle: string;
  background: StaticImageData;
  data: ITechnologiesMiniContentData[];
}

export interface ITechnologiesMiniContentData {
  id: number;
  title: string;
  icon: ReactNode;
}

export interface ITechnologiesMiniData {
  blockTitle: string;
  data: ITechnologiesMiniContentData[];
}
