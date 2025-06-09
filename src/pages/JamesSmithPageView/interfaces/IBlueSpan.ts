import { ElementType } from 'react';

export interface IBlueSpan {
  children: React.ReactNode | string;
  tag?: ElementType;
}
