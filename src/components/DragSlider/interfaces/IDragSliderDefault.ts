import { ReactNode } from 'react';

export default interface IDragSliderDefault {
  data: ICaseStudiesData[];
  withoutDots?: boolean;
  classes?: {
    container?: string;
    slides?: string;
  };
}

export interface ICaseStudiesData {
  id: number;
  content: ReactNode;
  href?: string;
  absolute?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top'
}
