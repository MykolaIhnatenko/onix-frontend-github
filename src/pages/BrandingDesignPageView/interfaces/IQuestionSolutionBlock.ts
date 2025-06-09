import { ReactNode } from 'react';

export interface IQuestionSolutionData {
  title:ReactNode;
  rows:{
    id: number;
    content: ReactNode;
  }[]
}

export interface IQuestionSolutionBlockProps {
  data: IQuestionSolutionData;
}
