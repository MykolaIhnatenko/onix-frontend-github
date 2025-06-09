import { StaticImageData } from 'next/image';

export default interface ITravelTailDesignSolutionsCard {
  title: string;
  text: React.ReactElement;
  img: StaticImageData;
  imgTablet: StaticImageData;
  imgMobile: StaticImageData;
}
