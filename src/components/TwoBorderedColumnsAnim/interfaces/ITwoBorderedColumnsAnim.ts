import { ReactNode } from 'react';

export interface IBorderedColumn {
  id: number;
  number?: string;
  columnTitle: string;
  desc?: ReactNode;
  list?: string[];
  offset?: number;
}

export interface ITwoBorderedColumnsAnim {
  columns: IBorderedColumn[];
  blackTheme?: boolean;
  withoutAnimateTable?: boolean;
  classes?: {
    table?: string;
    column?: string;
    columnTitle?: string;
    columnDesc?: string;
    columnList?: string;
    columnNumber?: string;
  };
}
