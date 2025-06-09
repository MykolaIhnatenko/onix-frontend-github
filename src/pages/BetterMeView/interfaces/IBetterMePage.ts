import { ReactNode } from 'react';

import { IProject } from '../../../interfaces/IProjectsList';

export interface ITasksIncludedItems {
  id: number,
  icon: ReactNode,
  description: ReactNode | string,
}
interface IBetterMePagePops {
  taskIncludedItems: ITasksIncludedItems[],
  projects: [IProject],
  saleUrl?: boolean,
}

export default IBetterMePagePops;
