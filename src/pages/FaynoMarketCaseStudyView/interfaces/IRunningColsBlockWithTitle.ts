import { StaticImageData } from 'next/image';

import { IRunningColsData } from 'components/RunningColsBlock/interfaces/IRunningColsBlock';

export default interface IRunningColsBlockWithTitle {
  title: string;
  data: IRunningColsData[];
  background: StaticImageData;
}
