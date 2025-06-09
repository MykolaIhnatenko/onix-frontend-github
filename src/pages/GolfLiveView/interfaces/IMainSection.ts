import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export default interface IMainSection {
  title: string | ReactNode;
  backgroundImg?: StaticImageData;
}
