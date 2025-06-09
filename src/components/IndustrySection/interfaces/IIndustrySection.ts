import { ReactNode } from 'react';

export interface IIndustrySection {
  sectionTitle: ReactNode;
  firstText: ReactNode;
  secondText?: ReactNode;
  data: IIndustrySectionData[];
  classes?: {
    container?: string;
    items?: string;
    item?: string;
    itemTitle?: string;
    itemText?: string;
  };
}

export interface IIndustrySectionData {
  id: number;
  title: string;
  text: string;
}
