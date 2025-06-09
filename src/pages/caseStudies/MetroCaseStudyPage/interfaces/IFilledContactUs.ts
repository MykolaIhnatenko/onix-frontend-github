import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import { ButtonType } from 'constants/enums';

interface IBasicData {
  imageSrc: StaticImageData,
  children: ReactNode,
  imageWidth: number,
  imageHeight: number,
}

export interface IFilledContactUs extends IBasicData {
  idBtn: ButtonType;
}

export interface IHalfFilledContactUs extends IBasicData {
  idBtnFirst: ButtonType;
  idBtnSecond: ButtonType;
}
