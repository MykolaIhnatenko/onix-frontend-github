import { StaticImageData } from 'next/image';

import { ISolutionsCard } from '../../SolutionsCardsBlock/interfaces/ISolutionsCardBlock';

export interface IOurSolutionsWithCarouselAndCards {
  firstText: string;
  secondText: string;
  carouselData:{
    row1:StaticImageData[];
    row2:StaticImageData[];
  };
  cardsData: ISolutionsCard[];
  carouselBlockBackground?: StaticImageData;
}
