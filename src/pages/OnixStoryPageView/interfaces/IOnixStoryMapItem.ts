import { ReactNode } from 'react';

import { OnixStoryMapItemContentVariant, OnixStoryMapItemVariant } from '../../../constants/enums';

interface IOnixStoryMapItem {
  title: string;
  top: number;
  left: number;
  content: IOnixStoryMapItemContent[];
  variant?: OnixStoryMapItemVariant;
}

interface IOnixStoryMapItemContent {
  contentLeft: number;
  contentTop: number;
  number: string;
  flag: ReactNode;
  contentVariant: OnixStoryMapItemContentVariant;
}

export interface IOnixStoryOurClientsAcordion {
  data: IOnixStoryMapAccordionData[];
}

export interface IOnixStoryMapAccordionData {
  title: string;
  content: IOnixStoryMapAccordionItem[];
}

export interface IOnixStoryMapAccordionItem {
  number: string;
  flag: ReactNode;
  country: string;
}

export default IOnixStoryMapItem;
