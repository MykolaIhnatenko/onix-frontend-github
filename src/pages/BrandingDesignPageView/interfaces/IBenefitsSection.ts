import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface IBenefitsData {
  id: number;
  content: ReactNode;
}

export interface IBenefitsSectionProps {
  data: IBenefitsData[];
  title: string;
  background?: StaticImageData;
  classes?: {
    section?: string;
    background?: string;
    container?: string;
    title?: string;
    cardsBlock?: string;
  };
}
