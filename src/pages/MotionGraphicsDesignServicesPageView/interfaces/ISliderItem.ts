import { StaticImageData } from 'next/image';

interface ISliderItem {
  id: number,
  mainImage: StaticImageData,
  secondaryImage?: StaticImageData,
  secondaryImagePositionId?: number,
  visibil: boolean,
  animateNumber: number,
}

export default ISliderItem;
