import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

interface IOurSolutionsItem {
  title?: string | ReactNode;
  text: ReactNode | string | string[];
  img: StaticImageData;
  animationUrl?: string;
  type?: number;
  desktopViewOnXL?: boolean;
  classes?: {
    item?: string;
    itemContent?: string;
    itemTitle?: string;
    itemImageContainer?: string;
    itemImage?: string;
  };
}

export default IOurSolutionsItem;

export interface IOurSolutionAnimation {
  url: string;
  type?: number;
}
