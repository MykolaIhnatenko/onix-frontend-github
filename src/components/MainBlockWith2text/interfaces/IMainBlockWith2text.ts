import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface IMainBlockWith2text {
  title: ReactNode;
  firstText: string;
  secondText: string;
  blockBg: StaticImageData;
  rightImg: StaticImageData;
}

export default IMainBlockWith2text;
