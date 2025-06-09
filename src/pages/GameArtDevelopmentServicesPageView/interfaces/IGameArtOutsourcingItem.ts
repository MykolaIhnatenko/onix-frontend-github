import { StaticImageData } from 'next/image';

interface IGameArtOutsourcingItem {
  image: StaticImageData;
  imageTablet: StaticImageData;
  imageMobile: StaticImageData;
  title: string;
  text: string;
}

export default IGameArtOutsourcingItem;
