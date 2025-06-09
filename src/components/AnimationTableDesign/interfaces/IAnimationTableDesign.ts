import { StaticImageData } from 'next/image';

export interface IIremTableDesign {
  id: string;
  title: string;
  content: string;
}

export default interface IAnimationTableDesign {
  bg: string | StaticImageData;
  title?: string;
  titleLeft?: string;
  titleRight?: string;
  contentLeft?: IIremTableDesign[];
  contentRight?: IIremTableDesign[];
}

export interface IItemSide {
  title?: string;
  content?: IIremTableDesign[];
}
