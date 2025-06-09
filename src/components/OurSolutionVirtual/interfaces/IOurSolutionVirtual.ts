import { IOurSolutionVirtualItemData } from './IOurSolutionVirtualItem';

interface IOurSolutionVirtual {
  title: string;
  data: IOurSolutionVirtualItemData[];
  smallDesktop?: boolean;
  classes?: {
    section?: string;
    title?: string;
    contentContainer?: string;
  } & IOurSolutionVirtualItemData['classes'];
}

export default IOurSolutionVirtual;
