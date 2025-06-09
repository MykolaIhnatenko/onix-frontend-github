import { ElementType } from 'react';

export default interface IVRARContentText {
  text: string;
  tag?: ElementType;
  smallFontSizeOnMobile?: boolean;
  classes?: {
    container?: string;
    text?: string;
  };
}
