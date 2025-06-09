import { StaticImageData } from 'next/image';

import IOurCaseStudiesCard from './IOurCaseStudiesCard';

export interface IImages {
  image: StaticImageData;
  imageTablet: StaticImageData;
  imageMobile: StaticImageData;
}

export interface IOurCaseStudiesData {
  id: string;
  title: string;
  descLeft: string;
  descRight: string;
  images: IImages;
  url?: string;
}

export default interface IOurCaseStudies {
  isTablet: boolean;
  isMobile: boolean;
  upTitle: string;
  titles: string | string[];
  cardList: IOurCaseStudiesData[];
  whiteTheme?: boolean;
  classes?: {
    section?: string;
    titleContainer?: string;
    upTitle?: string;
    title?: string;
    cardsContainer?: string;
  } & IOurCaseStudiesCard['classes'];
}
