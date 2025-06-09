import { StaticImageData } from 'next/image';

interface IGoodFaceScalableImageProps {
  src: StaticImageData;
  alt: string;
  spot?: StaticImageData ;
  type?: string ;
}

export default IGoodFaceScalableImageProps;
