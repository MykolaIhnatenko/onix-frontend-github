import { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface IFeedbackCard {
  poster: StaticImageData,
  videoSrc: string,
  title: string,
  description: string,
  country: string,
  specification: string,
  id: number,
  activeVideo: number | null,
  setActiveVideo: Dispatch<SetStateAction<number | null>>
}
export default IFeedbackCard;
