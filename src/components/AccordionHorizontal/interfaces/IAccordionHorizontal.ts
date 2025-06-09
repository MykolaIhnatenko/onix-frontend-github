import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import IAccordionItemContentTablet from './IAccordionItemContentTablet';
import IAccordionItemContent from './IAccordionItemContent';

export default interface IAccordionHorizontal {
  data: IAccordionHorizontalData[];
  whiteTheme?: boolean;
  classes?: {
    accordion?: string;
    item?: string;
  } & IAccordionItemContentTablet['classes'] & IAccordionItemContent['classes'];
}

export interface IAccordionHorizontalData {
  id: number,
  number?: string,
  title: string
  content: string | string[] | ReactNode,
  image: StaticImageData
}
