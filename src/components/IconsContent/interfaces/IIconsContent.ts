import { ReactNode } from 'react';

export interface IIconsContent {
  data: IIconsContentItem[];
  classes?: {
    container?: string;
    containerItemWrapper?: string;
    containerItem?: string;
    iconContainer?: string;
    title?: string;
  };
}

export interface IIconsContentItem {
  id: number;
  icon: ReactNode;
  lessIcon?: ReactNode;
  title: ReactNode;
}
