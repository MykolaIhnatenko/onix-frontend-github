import { ReactNode } from 'react';

export default interface IScrollTextAnimation {
  title?: string | ReactNode;
  description?: string | ReactNode;
  textList: string[];
  themeBlack?: boolean;
  scaleIndex?: number;
  scaleIndexTablet?: number;
  scaleIndexMobile?: number;
  classes?: {
    container?: string;
    title?: string;
    description?: string;
    contentContainer?: string;
    itemText?: string;
  };
}
