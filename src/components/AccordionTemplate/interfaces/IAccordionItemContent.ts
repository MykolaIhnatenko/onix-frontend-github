import { ReactNode } from 'react';

import { AccordionBlackStyleTypes, AccordionWhiteStyleTypes } from 'constants/AccordionStyleTypes';

export default interface IAccordionItemContent {
  content: ReactNode;
  activeItem: boolean;
  isLastItem: boolean;
  isAccordionBlack?: boolean;
  accordionStyleTypes?: AccordionWhiteStyleTypes | AccordionBlackStyleTypes;
  borderBottomLast?: boolean;
  borderTopFirst?: boolean;
  smallerTitleText?: boolean;
  classes?: {
    showContent?: string;
    accordionItemContent?: string;
  };
}
