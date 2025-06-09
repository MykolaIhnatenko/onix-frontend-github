import { StaticImageData } from 'next/image';

export default interface IManiTableBlock {
  title: string;
  data: string[][];
  headers: string[];
  titleDesc: string;
  desc: string;
  background?: StaticImageData | string;
}
