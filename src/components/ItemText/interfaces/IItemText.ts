import { ReactNode } from 'react';

export default interface IItemText {
  content: string | string[] | ReactNode;
  marginBottomAbsent?: boolean;
  classes?: {
    itemText?: string;
  };
  withAnimate?: boolean;
}
