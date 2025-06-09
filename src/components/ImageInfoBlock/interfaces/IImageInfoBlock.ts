import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface IDataImageBlock {
  content?: string | ReactNode;
  id: number;
  image: StaticImageData;
  number: string;
  title: string;
}

export default interface IImageInfoBlock {
  title?: string;
  data: IDataImageBlock[];
  background?: StaticImageData,
}
