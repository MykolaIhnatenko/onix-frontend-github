import { StaticImageData } from 'next/image';

interface ICard {
  id: number,
  icon: string | StaticImageData,
  iconWidth?: number,
  iconHeight?: number,
  content: string,
  bg: string | StaticImageData,
}

export interface ICardMicroCase {
  className: string,
  shadowColor: string,
  circleColor: string,
  card: ICard,
  imgHeightClassName?: string,
}
