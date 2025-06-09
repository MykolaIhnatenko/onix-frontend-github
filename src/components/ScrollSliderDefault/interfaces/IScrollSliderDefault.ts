import { ReactNode } from 'react';

export default interface IScrollSliderDefault {
  data: ICaseStudiesData[];
  offset?: number;
  classes?: {
    scrollContainer?: string;
    stickyWrapper?: string;
  };
}

export interface ICaseStudiesData {
  id: number;
  content: ReactNode;
  href?: string;
  absolute?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
}
