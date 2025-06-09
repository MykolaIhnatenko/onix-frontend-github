import { StaticImageData } from 'next/image';

export default interface IProjectCard {
  url?: string;
  image: string | StaticImageData;
  header: string;
  description: string;
}

export interface IItemCard {
  image: string | StaticImageData;
  isTablet?: boolean;
  isMobile?: boolean;
  header: string;
  cutTextLengthTitle: number;
  description: string;
  cutTextSym: number;
}
