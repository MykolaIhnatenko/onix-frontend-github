import { MouseEventHandler } from 'react';

export interface IClientOnlyPortal {
  children: React.ReactNode;
  selector: string;
}

export interface IModalLayout {
  children: React.ReactNode;
  styleType?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
