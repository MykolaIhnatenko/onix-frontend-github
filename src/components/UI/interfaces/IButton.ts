import { MouseEvent } from 'react';

import { ArrowVariant } from '../../../constants/enums';

export type ClickHandler = ((event: MouseEvent) => void);
export default interface IButton {
  text: string;
  styleContainer?: string;
  hasArrow?: boolean;
  onClick?: ClickHandler;
  disabled?: boolean;
  arrowVariant?: ArrowVariant;
  fontSizeSmallOnMobile?: boolean;
  typeButton?: 'button' | 'submit';
  id?: string;
  isJakarta?: boolean;
  classes?: {
    container?: string;
    content?: string;
    textContainer?: string;
    icon?: string;
  };
}
