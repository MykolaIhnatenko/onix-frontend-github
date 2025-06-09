import { StaticImageData } from 'next/image';
import { ElementType, ReactNode } from 'react';

import { ButtonPathVariant } from '../../../constants/enums';

export default interface ICallToActionBlock {
  background?: StaticImageData;
  title?: string | ReactNode;
  content?: string | ReactNode;
  withButton?: boolean;
  btnText?: string;
  buttonType?: string;
  buttonPathVariant?: ButtonPathVariant;
  tag?: ElementType;
  btnFontSizeSmallOnMobile?: boolean;
  classes?: {
    cta?: string;
    background?: string;
    image?: string;
    contentBlock?: string;
    title?: string;
    content?: string;
    btn?: string;
  };
  onClick?: () => void
  sizesBg?: string;
  id?: string;
  btnClasses?: {
    container?: string;
    content?: string;
    textContainer?: string;
    icon?: string;
  };
}
