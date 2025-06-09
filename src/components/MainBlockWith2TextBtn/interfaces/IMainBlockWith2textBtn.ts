import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface IMainBlockWith2TextBtn {
  title: ReactNode;
  firstText: string;
  secondText: string | ReactNode;
  blockBg: StaticImageData;
  rightImg: StaticImageData;
  btnText: string;
}

export default IMainBlockWith2TextBtn;
