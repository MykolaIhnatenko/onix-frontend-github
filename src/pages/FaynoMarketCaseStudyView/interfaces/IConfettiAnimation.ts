import { StaticImageData } from 'next/image';

export interface IConfetti {
  id: number;
  image: StaticImageData;
  width: number;
  height: number;
  top: string;
  left: string;
  offset: number;
  rotate: number;
}

export default interface IConfettiAnimation {
  data: IConfetti[];
}
