import { ReactNode } from 'react';

interface IAboutProjectContentVariant {
  list?: string;
  listItem?: string;
  itemTitle?: string;
  itemText?: string;
}

interface IAboutProjectVariant {
  section?: string;
  container?: string;
  mainTitle?: string;
  subTitle?: string;
  content?: IAboutProjectContentVariant
}

export default interface IAboutProjectProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode,
  content: IAboutProjectContent[],
  variant?: IAboutProjectVariant,
}
export interface IAboutProjectContent {
  id: number;
  title: string | ReactNode;
  text: string;
}

export interface IAboutProjectBlockProps {
  content: IAboutProjectContent[];
  variant?: IAboutProjectContentVariant;
}
