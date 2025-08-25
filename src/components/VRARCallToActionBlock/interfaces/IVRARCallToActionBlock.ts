import { StaticImageData } from 'next/image';
import { ElementType, ReactNode } from 'react';

import { ButtonPathVariant } from '../../../constants/enums';

export default interface IVRARCallToActionBlock {
  background?: StaticImageData;
  title?:string | ReactNode;
  content?:string | ReactNode;
  withButton?:boolean;
  btnText:string;
  buttonType?:string;
  buttonPathVariant?: ButtonPathVariant;
  btnFontSizeSmallOnMobile?: boolean;
  tag?: ElementType;
  id?: string;
  isJakarta?: boolean;
  classes?: {
    cta?: string;
    background?: string;
    contentBlock?: string;
    image?: string;
    title?: string;
    content?: string;
    btn?: string;
  };
}
