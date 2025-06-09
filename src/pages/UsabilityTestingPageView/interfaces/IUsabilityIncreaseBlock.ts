import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import IBusinessContext from 'components/BusinessContext/interfaces/IBusinessContext';

type IBusinessContextData = Omit<IBusinessContext, 'classes' | 'blackTheme'>;
export default interface IUsabilityIncreaseBlock {
  businessContextBlockData: IBusinessContextData;
  blockTitle: string;
  subText: string | ReactNode;
  data: IUsabilityIncreaseBlockData[];
  background: StaticImageData;
}

export interface IUsabilityIncreaseData {
  businessContextBlockData: IBusinessContextData;
  blockTitle: string;
  subText: string | ReactNode;
  data: IUsabilityIncreaseBlockData[];
}

export interface IUsabilityIncreaseBlockData {
  title: string;
  cards: ICardsData[];
}

export interface ICardsData {
  cardTitle: string;
  cardImg: StaticImageData;
  cardImgMobile: StaticImageData;
}
