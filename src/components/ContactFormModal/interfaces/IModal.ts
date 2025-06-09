import { ReactNode } from 'react';

export interface IModal {
  children: ReactNode;
  isShow: boolean;
  isVisible?: boolean;
  onClose?: () => void;
}
