import { ReactNode } from 'react';

export default interface IItemList {
  listTitle?: string;
  list: string[] | ReactNode[];
  marginBottomAbsent?: boolean;
  withAnimate?: boolean;
}
