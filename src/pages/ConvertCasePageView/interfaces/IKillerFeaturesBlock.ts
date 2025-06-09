import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export interface IKillerFeaturesData {
  id: number;
  title: ReactNode | string;
  img: StaticImageData;
  text: string | ReactNode;
}

export interface IKillerFeaturesBlockProps {
  data: IKillerFeaturesData[];
  titleSection: ReactNode | string;
  description: ReactNode | string;
}
