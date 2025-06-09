import { ReactNode } from 'react';

interface IIndustryBlockWithAnimate {
  blockTitle: ReactNode;
  blockText: ReactNode;
  data: IIndustryBlockWithAnimateData[]
}

export interface IIndustryBlockWithAnimateData {
  id: number;
  number: string;
  text: string;
  title: string;
}

export default IIndustryBlockWithAnimate;
