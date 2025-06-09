import { ReactNode } from 'react';

import { BigNumberCardVariant } from '../../../constants/enums';

export default interface IBigNumberBlock {
  id:string,
  title:ReactNode,
  desc?: string;
  variant?: BigNumberCardVariant,
}
