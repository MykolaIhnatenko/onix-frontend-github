import { ElementType } from 'react';

export default interface IVRARContentTextList {
  text: string[];
  tag?: ElementType;
  smallFontSizeOnMobile?: boolean;
  classes?: {
    container?: string;
    text?: string;
  };
}
