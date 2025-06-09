import { StaticImageData } from 'next/image';
import { CSSProperties } from 'react';

export default interface IImage {
  src:string | StaticImageData;
  alt:string;
  sizes?: string;
  width?:number;
  height?: number;
  quality?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  loading?: 'eager' | 'lazy';
  style?: CSSProperties;
}
