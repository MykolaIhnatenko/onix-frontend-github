import { StaticImageData } from 'next/image';

export interface IVideoSlider {
  data: {
    id: number;
    src: string;
  }[];
}

export interface IVideoSliderData {
  id:number;
  video: string;
  poster: StaticImageData;
}
