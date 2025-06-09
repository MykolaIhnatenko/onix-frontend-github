import { ReactNode } from 'react';
import { ElementType } from 'react-spring';

export default interface IAnimationChallengesDesktop {
  list: {
    title: string | ReactNode
    subTitle?: string;
    desc: string | ReactNode;
  }[];
  iconBlack?: boolean;
  Tag?: ElementType;
  stylesVariant?: {
    contentBox?: string;
    listContainer?: string;
    content?: string;
    subTitle?: string;
    desc?: string;
  };
  classesItem?: {
    item?: string;
    title?: string;
    number?: string;
    icon?: string;
  };
}
