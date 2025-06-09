import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface ICardItem {
  image: StaticImageData,
  classes?: string,
  children: ReactNode,
  imagePosition?: string,
  cardView: string,
  imageWidth: number,
  imageHeight: number,
}

export default ICardItem;
