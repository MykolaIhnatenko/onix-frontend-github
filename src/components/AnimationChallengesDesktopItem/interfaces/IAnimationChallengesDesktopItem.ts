import { ReactNode } from 'react';

export default interface IAnimationChallengesDesktopItem {
  item: {
    title: string | ReactNode
    subTitle?: string;
    desc: string | ReactNode;
  };
  index: number;
  lastItem: boolean;
  activeBlock: number;
  setActiveItem: (index: number) => void;
  iconBlack?: boolean;
  classes?: {
    item?: string;
    title?: string;
    number?: string;
    icon?: string;
  };
}
