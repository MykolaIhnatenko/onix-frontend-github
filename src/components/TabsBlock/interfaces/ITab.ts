import { StaticImageData } from 'next/image';

export interface ITabData {
  id: number;
  title: string;
  subTitle?: string;
  text: string | string[];
  img: StaticImageData;
  imgTablet: StaticImageData;
  imgMobile: StaticImageData;
  imageStyle?: string;
  video?: string;
}

export type ITab = Omit<ITabData, 'id'> & {
  isColumnContent?: boolean;
  classes?: {
    tab?: string;
    title?: string;
    imageContainer?: string;
    image?: string;
    video?: string;
    textBlock?: string;
    subTitle?: string;
  };
};
