import { ElementType, ReactNode } from 'react';

import { AccordionBlackStyleTypes, AccordionWhiteStyleTypes } from 'constants/AccordionStyleTypes';

export interface IIconRotate {
  activeItem: boolean;
  isAccordionBlack?: boolean;
  accordionStyleTypes?: AccordionWhiteStyleTypes | AccordionBlackStyleTypes;
  smallerTitleText?: boolean;
  classes?: {
    iconContainer?: string;
    iconRotateContainer?: string;
    rectangle1?: string;
    rectangle2?: string;
  };
}

export interface IAccordionItemTitleContainer {
  number?: string;
  title: string | ReactNode;
  tagTitle?: ElementType;
  smallerTitleText?: boolean;
  classes?: {
    titleContainer?: string;
    accordionNumber?: string;
    accordionTitle?: string;
  };
}

export default interface IAccordionItemTitle {
  number?: string;
  title: string | ReactNode;
  tagTitle?: ElementType;
  onClick?: () => void;
  onMouseEnter?: () => void;
  activeItem: boolean;
  withoutAccordion?: boolean;
  isAccordionBlack?: boolean;
  accordionStyleTypes?: AccordionWhiteStyleTypes | AccordionBlackStyleTypes;
  smallerTitleText?: boolean;
  classes?: {
    accordionItemTitle?: string;
    accordionItemTitleOpen?: string;
    withoutAccordion?: string;
  } & IAccordionItemTitleContainer['classes'] & IIconRotate['classes'];
}
