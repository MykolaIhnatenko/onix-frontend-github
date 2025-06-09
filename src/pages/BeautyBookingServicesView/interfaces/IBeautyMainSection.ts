import { StaticImageData } from 'next/image';

export default interface IBeautyMainSection {
  title: string;
  desc: string;
  background: StaticImageData | string;
}
