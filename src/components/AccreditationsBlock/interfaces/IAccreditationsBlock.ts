import { StaticImageData } from 'next/image';

export interface IAccreditationsBlock {
  blockTitle: string;
  firstText: string;
  secondText: string;
  background: StaticImageData;
  data: IAccreditationsBlockItem[];
}

export interface IAccreditationsBlockItem {
  img: StaticImageData;
  title: string;
}
