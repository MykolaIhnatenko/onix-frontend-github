import { ElementType } from 'react';

export interface IHaasText {
  children: string | React.ReactNode;
  className?: string;
  tag?: ElementType;
  variant?: 'title' | 'fs20' | 'fs18' | 'fs16' | 'fs18_27' | 'fs16_24'
  | 'testimonialText' | 'readMore' | 'results' | 'resultsFS16';
}
