import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import ICard, { ICardBlockClasses } from '../../../components/CardsBlock/interfaces/ICardsBlock';
import { CardBlockVariant, DropBlockVariant } from '../../../constants/enums';

export interface ITrustUsBlock {
  title?: ReactNode,
  subtitle?: ReactNode,
  data: ICard[],
  dropBlockTitle?: string | ReactNode,
  dropBlockBtnTitle?: string,
  variant?: CardBlockVariant,
  classes?: ICardBlockClasses,
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
}

export interface ITrustUsDataBlock {
  title?: string,
  subtitle?: ReactNode,
  lastCardTitle?: string | ReactNode,
  btnTitle?: string,
  dropBlockTitleVariant?: string,
}
