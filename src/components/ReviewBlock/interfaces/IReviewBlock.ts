import { MotionValue } from 'framer-motion';

export interface IQuotesObj {
  id?: number;
  text: string;
  author: JSX.Element;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  index : number;
  classes?: { [key: string]: string };
}
export interface IQuotesObjData {
  id?: number;
  text: string;
  author: JSX.Element;
}

export interface IReviewBlock {
  withProjectBlock?: boolean,
  quotesList: IQuotesObjData[],
  slider?: boolean,
  classes?: { [key: string]: string },
}
