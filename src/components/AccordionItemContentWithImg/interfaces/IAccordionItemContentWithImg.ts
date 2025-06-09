import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import ButtonTypes from 'constants/ButtonTypes';
import PageLinks from 'constants/PageLinks';

export default interface IAccordionItemContentWithImg {
  children: ReactNode;
  imageAlt: string;
  image: StaticImageData;
  imageTablet?: StaticImageData;
  imageMobile?: StaticImageData;
  button?: {
    text?: string;
    type?: ButtonTypes;
    path: PageLinks;
  };
  staticImageHeight?: boolean;
  contentReverse?: boolean;
}
