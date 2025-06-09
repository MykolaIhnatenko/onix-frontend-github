import { ITab } from './ITab';

type ITabContent = Omit<ITab, 'isColumnContent' | 'classes'> & { id: number };

export interface ITabsLine {
  content: ITabContent[];
  constraintsRef: React.MutableRefObject<HTMLDivElement | null>;
  tabsRef: React.MutableRefObject<HTMLDivElement | null>;
  selectedTab: ITabContent;
  setSelectedTab: React.Dispatch<React.SetStateAction<ITabContent>>
  isDragListen: boolean;
  classes?: {
    tabsBlockWrapper?: string;
    tabsBlock?: string;
    tabTitle?: string;
    tabTitleText?: string;
  };
}
