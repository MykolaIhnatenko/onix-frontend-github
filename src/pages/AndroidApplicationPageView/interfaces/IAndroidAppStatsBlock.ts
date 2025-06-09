import { ReactNode } from 'react';

import { VariantStatsBlock } from '../../../constants/enums';

export interface IAndroidAppStatsBlock {
  data: IAndroidAppStatsBlockItem[],
  variant?: VariantStatsBlock,
}

export interface IAndroidAppStatsBlockItem {
  id: number,
  title?: ReactNode,
  number: ReactNode,
  subTitle: ReactNode,
}
