import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface IResultsBlock {
  name?: string;
  title?: string | ReactNode;
  text?: ReactNode;
  titleBlock?: string;
  content: string[] | ReactNode;
  background?: StaticImageData;
  saleUrl?: boolean;
  subText?: ReactNode;
  productScope?: boolean;
  classes?: {
    resultBlock?: string;
    background?: string;
    backgroundImage?: string;
    container?: string;
    name?: string;
    titleBlock?: string;
    title?: string;
    contentContainer?: string;
    line?: string;
    lineActive?: string;
    content?: string;
    subText?: string;
  };
}

export default IResultsBlock;
