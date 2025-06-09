import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export default interface IAccordionItemContentTablet {
  number?: string;
  itemTitle: string;
  content: string | string[] | ReactNode;
  image: StaticImageData;
  whiteTheme?: boolean;
  classes?: {
    item?: string;
    itemTitleContainer?: string;
    itemNumber?: string;
    itemTitle?: string;
    itemText?: string;
    itemImage?: string;
  };
}
