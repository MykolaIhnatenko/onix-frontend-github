import { ElementType, ReactNode } from 'react';

import { ScrollVariant } from '../../../constants/enums';
import { AccordionBlackStyleTypes, AccordionWhiteStyleTypes } from 'constants/AccordionStyleTypes';
import IAccordionItemContent from './IAccordionItemContent';
import IAccordionItemTitle from './IAccordionItemTitle';

export default interface IAccordion {
  data: IAccordionData[];
  activeFirst?: boolean;
  withScroll?: ScrollVariant;
  withoutAccordion?: boolean;
  faq?: boolean;
  openByHover?: boolean;
  isAccordionBlack?: boolean;
  accordionStyleTypes?: AccordionWhiteStyleTypes | AccordionBlackStyleTypes;
  borderTopFirst?: boolean;
  borderTop?: boolean;
  borderBottomLast?: boolean;
  smallerTitleText?: boolean;
  multiOpen?: boolean;
  classes?: {
    accordion?: string;
    accordionItem?: string;
  } & IAccordionItemTitle['classes'] & IAccordionItemContent['classes'];
}

export interface IAccordionData {
  id: number,
  number?: string,
  title: string | ReactNode,
  tagTitle?: ElementType,
  content: ReactNode,
}
