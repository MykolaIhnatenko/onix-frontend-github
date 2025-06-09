import { StaticImageData } from 'next/image';

interface IContentIcon {
  id: number;
  itemIconTitle: string;
  icon: JSX.Element;
  iconMobile?: JSX.Element;
}

interface IIconBlock {
  id: number;
  itemTitle: string;
  itemContent: IContentIcon[];
}

export interface IPlatformsServedProps {
  title: string;
  text: string;
  content: IIconBlock[];
  background?: StaticImageData;
  blackTheme?: boolean;
  classes?: {
    container?: string;
    background?: string;
    backgroundImg?: string;
    title?: string;
    text?: string;
    content?: string;
    contentTitle?: string;
    itemContent?: string;
    itemIconTitle?: string;
    itemIcon?: string;
    icon?: string;
  };
}

export type IPlatformsServedData = Omit<IPlatformsServedProps, 'background' | 'classes' | 'blackTheme'>;
