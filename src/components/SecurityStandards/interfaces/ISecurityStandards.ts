import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface ISecurityStandards {
  pageTitle: string;
  data: ISecurityStandardsItem[];
}

export interface ISecurityStandardsItem {
  id: number;
  icon: ReactNode;
  image: StaticImageData;
  title: string;
  text: string;
  background: StaticImageData;
}
