import { StaticImageData } from 'next/image';

export interface IBracketology {
  progressValue: string;
  progressPosition: string;
  items: IItem[];
  prevItemIndex: number;
}

export interface IItem {
  id: number;
  imgSrc: StaticImageData
}
