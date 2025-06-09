import { StaticImageData } from 'next/image';
import { ElementType } from 'react';

export default interface IImageBlock {
  title: string;
  image: StaticImageData;
  tag?: ElementType;
}
