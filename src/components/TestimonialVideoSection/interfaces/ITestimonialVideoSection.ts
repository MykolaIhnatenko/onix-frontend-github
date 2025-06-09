import { StaticImageData } from 'next/image';

export default interface ITestimonialVideoSection {
  upTitle?: string;
  title?: string;
  videoSrc: string;
  preview: StaticImageData;
}
