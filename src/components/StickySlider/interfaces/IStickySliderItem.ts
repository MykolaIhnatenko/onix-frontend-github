import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface IStickySliderData {
  id: number;
  number?: string;
  title: string;
  text: string | ReactNode;
  image: StaticImageData;
}

export default interface IStickySliderItem extends IStickySliderData {
  classes?: {
    item?: string;
    itemTitleContainer?: string;
    itemNumber?: string;
    itemTitle?: string;
    itemContent?: string;
    itemText?: string;
    itemImage?: string;
    imageContainer?: string;
    image?: string;
  };
}
