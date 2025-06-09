import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface IRealizationBlockProps {
  imgSrc: StaticImageData,
  title: ReactNode,
  content: ReactNode,
  imgWidth: number,
  imgHeight: number,
}

export default IRealizationBlockProps;
