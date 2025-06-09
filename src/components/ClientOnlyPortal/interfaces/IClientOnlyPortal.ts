import { ReactNode } from 'react';

export interface IClientOnlyPortal {
  children: ReactNode;
  selector: string;
}
