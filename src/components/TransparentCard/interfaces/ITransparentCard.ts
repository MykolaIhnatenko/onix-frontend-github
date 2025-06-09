import React from 'react';
import { StaticImageData } from 'next/image';

import { TransparentCardVariant } from '../../../constants/enums';

export interface ITransparentCard {
  bg?: StaticImageData,
  bgTablet?: StaticImageData,
  bgMobile?: StaticImageData,
  icon?: JSX.Element,
  title?: string | React.ReactNode,
  text: string | React.ReactNode,
  variant?: TransparentCardVariant,
  withoutMinWidth?: boolean,
}
