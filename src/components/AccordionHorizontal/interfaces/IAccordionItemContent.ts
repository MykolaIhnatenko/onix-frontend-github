import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export default interface IAccordionItemContent {
  activeItem: boolean;
  itemTitle: string | ReactNode;
  content: string | string[] | ReactNode;
  image: StaticImageData;
  contentWidth: number;
  classes?: {
    itemContentContainer?: string;
    itemContent?: string;
    itemTextContainer?: string;
    itemTitle?: string;
    itemImage?: string;
  };
}
