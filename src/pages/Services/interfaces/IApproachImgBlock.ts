import { StaticImageData } from 'next/image';

export interface IApproachData {
  id: number;
  textTop: string;
  textBottom: string;
  img: StaticImageData;
  imgMobile: StaticImageData;
  imgTablet: StaticImageData;
  imgText: string;
  variant: 'first' | 'last';
}

export type ApproachImgBlockType = Omit<IApproachData, 'id' | 'textTop' | 'textBottom'>;

export type ApproachImagesBlockItemType = Omit<IApproachData, 'id'>;
