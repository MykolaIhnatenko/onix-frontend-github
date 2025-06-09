import { ReactNode } from 'react';

interface IBusinessContextContent {
  leftContent: string | string[] | ReactNode;
  rightContent: string | string[] | ReactNode;
  classes?: {
    contentContainer?: string,
    leftContent?: string,
    rightContent?: string,
  };
}

export default IBusinessContextContent;
