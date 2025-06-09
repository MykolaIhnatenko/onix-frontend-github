import { ElementType } from 'react';

export interface IJSAText {
  children: string | React.ReactNode;
  tag?: ElementType;
  variant?: 'mainTitle' | 'fs64' | 'fs16' | 'middleTitle' | 'fs38' | 'fs20';
  className?: string;
}
