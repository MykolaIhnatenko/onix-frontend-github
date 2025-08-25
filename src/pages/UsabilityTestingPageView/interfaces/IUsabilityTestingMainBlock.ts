import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface IUsabilityTestingMainBlock {
  icon?: ReactNode;
  title: string | ReactNode;
  text?: string | ReactNode;
  background: StaticImageData;
  image?: StaticImageData;
  btnText?: string;
  saleUrl?: boolean;
  classes?: {
    container?: string;
    background?: string;
    backgroundImage?: string;
    contentContainer?: string;
    content?: string;
    textContainer?: string;
    logo?: string;
    title?: string;
    text?: string;
    btn?: string;
    image?: string;
    imageContent?: string;
  }
}

export default IUsabilityTestingMainBlock;
