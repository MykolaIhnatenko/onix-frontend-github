import { ReactNode } from 'react';

interface IFuture {
  subtitle: ReactNode,
  texts: string[],
  isUnderlined?: boolean,
  children: ReactNode,
}

export default IFuture;
