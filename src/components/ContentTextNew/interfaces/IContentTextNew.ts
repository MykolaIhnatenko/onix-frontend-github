import { ElementType } from 'react';

export default interface IContentTextNew {
  text: string | React.ReactNode;
  className?: string;
  tag?: ElementType;
  smallFontSizeOnMobile?: boolean;
}
