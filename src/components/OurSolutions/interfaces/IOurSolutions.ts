import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import IOurSolutionsItem from './IOurSolutionsItem';

export default interface IOurSolutions {
  upTitle?: string;
  title?: string | ReactNode;
  firstText?: string;
  secondText?: string;
  data: IOurSolutionsData[];
  desktopViewOnXL?: boolean;
  classes?: {
    section?: string;
    titleContainer?: string;
    upTitle?: string;
    title?: string;
    textBlock?: string;
    firstText?: string;
    secondText?: string;
    content?: string;
  } & IOurSolutionsItem['classes'];
}

export type IOurSolutionsData = Omit<IOurSolutionsItem, 'desktopViewOnXL'> & {
  id: number;
  imgTablet: StaticImageData;
  imgMobile: StaticImageData;
};

export interface IOurSolutionAnimation {
  url:string,
}
