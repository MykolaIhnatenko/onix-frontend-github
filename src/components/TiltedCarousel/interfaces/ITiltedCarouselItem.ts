import { StaticImageData } from 'next/image';

interface ITiltedCarouselItem {
  data: ITiltedCarouselItemData[];
}

export interface ITiltedCarouselData {
  id: number;
  reverse: boolean;
  data: ITiltedCarouselItemData[];
}

interface ITiltedCarouselItemData {
  key: number;
  img: StaticImageData;
}

export default ITiltedCarouselItem;
