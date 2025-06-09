import { ITab } from './ITab';
import { ITabsLine } from './ITabsLine';

type ITabContent = Omit<ITab, 'isColumnContent' | 'classes'> & { id: number };

type ITabsClasses = Pick<ITab, 'classes'> & Pick<ITabsLine, 'classes'> & {
  classes?: {
    section?: string;
  };
};
export interface ITabsBlock extends ITabsClasses {
  content: ITabContent[];
  isColumnContent?: boolean;
}
