import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import { BenefitsSectionVariant } from '../../../constants/enums';

export interface IBenefitsData {
  id: number;
  content: ReactNode;
}

export interface IBenefitsSectionProps {
  data: IBenefitsData[];
  title: string;
  background?: StaticImageData;
  variant?: BenefitsSectionVariant;
}
