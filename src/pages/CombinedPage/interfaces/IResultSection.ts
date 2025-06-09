import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

export default interface IResultSection {
  resultsImgSrc: string | StaticImageData;
  resultsImgAlt: string;
  stylesName: string;
  description: ReactElement;
}
