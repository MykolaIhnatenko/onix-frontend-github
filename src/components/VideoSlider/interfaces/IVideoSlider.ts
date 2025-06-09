import { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction } from 'react';

export interface IVideoSlider {
  activeVideo: number | null,
  setActiveVideo: Dispatch<SetStateAction<number | null>>
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
