import { StaticImageData } from 'next/image';

export default interface IManiVideoBlock {
  source: string;
  background?: StaticImageData | string;
  videoBg: StaticImageData;
  isMobile: boolean;
}
