import { ElementType } from 'react';

export default interface IMainTitleWithoutSize {
  tag?: ElementType;
  className?: string;
  children?: string | React.ReactNode;
  capitalize?: boolean;
  id?: string;
}
