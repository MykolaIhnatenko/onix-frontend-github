import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import IAccordionItemContent from 'components/AccordionTemplate/interfaces/IAccordionItemContent';
import IAccordionItemTitle from 'components/AccordionTemplate/interfaces/IAccordionItemTitle';

export interface IDevelopmentServicesTemplate {
  upTitle?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  subTitle?: string;
  data: IDevelopmentServicesItem[];
  background: StaticImageData;
  customBackground?: StaticImageData;
  withoutBackground?: boolean;
  accordionOnMobile?: boolean;
  backgroundWithAccordion?: boolean;
  isMobile?: boolean;
  blackTheme?: boolean;
  classes?: {
    devServices?: string;
    background?: string;
    bgImg?: string;
    content?: string;
    titleBlock?: {
      titleContainer?: string;
      title?: string;
      desc?: string;
      subTitle?: string;
    }
    accordion?: {
      accordion?: string;
      accordionItem?: string;
    } & IAccordionItemTitle['classes'] & IAccordionItemContent['classes'];
    item?: {
      devServicesItem?: string;
      containerItemLeft?: string;
      number?: string;
      title?: string;
      containerItemRight?: string;
    }
  };
}

export interface IDevelopmentServicesItem {
  id: number;
  number?: string;
  title: string | ReactNode;
  content: string[] | ReactNode;
  blackTheme?: boolean;
  classes?: {
    devServicesItem?: string;
    containerItemLeft?: string;
    number?: string;
    title?: string;
    containerItemRight?: string;
  };
}

export type IDevelopmentServicesItemData = Omit<IDevelopmentServicesItem, 'blackTheme' | 'classes'>;
