import { StaticImageData } from 'next/image';

export default interface IImageSection {
  data: {
    img: StaticImageData;
    imgTablet: StaticImageData;
    imgMobile: StaticImageData;
    height: number;
    heightTablet: number;
    heightMobile: number;
  }
  classes?: {
    section?: string;
    image?: string;
  }
}
