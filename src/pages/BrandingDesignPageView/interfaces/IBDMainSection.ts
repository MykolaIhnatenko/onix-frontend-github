import { StaticImageData } from 'next/image';

export interface IBDMainSectionData {
  id: number;
  image: StaticImageData;
  imageMobile: StaticImageData;
  text: string;
  titleImg: string;
}
