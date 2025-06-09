import { StaticImageData } from 'next/image';

import ICard from './ICard';

interface IFourCardsTable {
  background?: StaticImageData;
  title: string;
  cardsData: ICard[];
  themeBlack?: boolean;
  classes?: {
    section?: string;
    container?: string;
    title?: string;
    cards?: string;
  } & ICard['classes'];
}

export default IFourCardsTable;
