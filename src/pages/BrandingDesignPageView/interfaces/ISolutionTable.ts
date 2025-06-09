import { ReactNode } from 'react';

export interface ISolutionTableData {
  title:ReactNode;
  subtitle:ReactNode;
  rows:{
    id: number;
    title: ReactNode;
    content: ReactNode;
  }[]
}

export interface IISolutionTableProps {
  data: ISolutionTableData;
}
