import { StaticImageData } from 'next/image';

import { ButtonPathVariant, CardBlockVariant, DropBlockVariant } from '../../../constants/enums';

export default interface ICard {
  id: string;
  title: string;
  content: string;
  list?: string[];
}

export interface ICardClasses {
  card?: string;
  title?: string;
  text?: string;
  iconContainer?: string;
  iconText?: string;
  icon?: string;
  content?: string;
  contentContainer?: string;
  box?: string;
  boxText?: string;
  listContainer?: string;
  itemList?: string;
  fontList?: string;
  invisibleIcon?: string;
}

export interface ICardProps {
  id: string;
  title: string;
  content: string;
  activeId: string;
  setActiveId: (id: string) => void;
  variant?: CardBlockVariant;
  list?: string[];
  withoutAnimate?: boolean;
  cardIndex: number;
  classes?: ICardClasses;
}

export interface ICardBlockClasses {
  cards?: string;
  bgMobile?: string;
  bgDesktop?: string;
  dropBlock?: string;
  dropBlockBg?: string;
  dropBlockTitle?: string;
  dropBlockText?: string;
  buttonWrapper?: string;
  button?: string;
  cardClasses?: ICardClasses;
}

export interface ICardBlockData {
  data: ICard[];
  bg?: StaticImageData;
  tabletBg?: StaticImageData;
  mobileBg?: StaticImageData;
  dropBlockTitle?: string | React.ReactNode;
  dropBlockBtnTitle?: string;
  dropBlockTitleVariant?: string,
  dropBlockText?: string,
  dropBlockBgVariant?: CardBlockVariant,
  variant?: CardBlockVariant;
  dropBlockBg?: StaticImageData;
  dropBlockBtnVariant?: ButtonPathVariant;
  disableBg?: boolean;
  dropBlockVariant?: DropBlockVariant;
  disableInfoBlock?: boolean;
  withoutAnimate?: boolean;
  withBtn?: boolean;
  withoutDropBlockBg?: boolean;
  idBtn?: string;
  classes?: ICardBlockClasses;
  animatedGradient?: boolean;
}
