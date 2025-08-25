import { StaticImageData } from 'next/image';

interface IFeedbackCard {
  poster: StaticImageData,
  videoSrc: string,
  title: string,
  description: string,
  country: string,
  specification: string,
  id: number,
}
export default IFeedbackCard;
