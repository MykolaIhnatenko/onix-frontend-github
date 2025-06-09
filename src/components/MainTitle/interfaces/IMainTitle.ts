import { ElementType } from 'react';

export default interface IMainTitle {
  tag?: ElementType;
  className?: string;
  children?: string | React.ReactNode;
  capitalize?: boolean;
  id?: string;
}
