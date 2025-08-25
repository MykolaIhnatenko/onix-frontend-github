import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import ICard, { ICardBlockClasses } from '../../../components/CardsBlock/interfaces/ICardsBlock';
import { DropBlockVariant } from '../../../constants/enums';

export interface ITrustUsBlock {
  title?: ReactNode,
  subtitle?: ReactNode,
  data: ICard[],
  dropBlockTitle?: string | ReactNode,
  dropBlockBtnTitle?: string,
  classes?: {
    container?: string,
    bgMobile?: string,
    sectionTitle?: string,
    buttonWrapper?: string,
    button?: string,
    CardsBlockClasses: ICardBlockClasses,
  }
  dropBlockBgVariant?: StaticImageData,
  dropBlockVariant?: DropBlockVariant,
  buttonText?: string,
  mobileBg?: StaticImageData,
  dropBlockText?: string,
  disableBg?: boolean,
  mobileBgVariant?: boolean,
  buttonFontSizeSmall?: boolean;
  withoutAnimate?: boolean;
  withBtn?: boolean;
  withoutDropBlockBg?: boolean;
  trustUsBlockBg?: StaticImageData;
  tabletBg?: StaticImageData;
  saleUrl?: boolean;
  idBtn?: string;
  trustUsBlockMobileBg?: StaticImageData;
  animatedGradient?: boolean;
  isPInDropBlockTitle?: boolean;
  hiddenTitleInTablet?: boolean;
}

export interface ITrustUsDataBlock {
  title?: string,
  subtitle?: ReactNode,
  lastCardTitle?: string | ReactNode,
  btnTitle?: string,
  dropBlockTitleVariant?: string,
}
