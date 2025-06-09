import { ElementType } from 'react';

export interface IBracketologyText {
  children: string | React.ReactNode;
  className?: string;
  tag?: ElementType;
  variant?: 'mainTitle' | 'title' | 'subtitle' | 'fs_28' | 'fs_30' | 'fs_18' | 'text'
  | 'challengeCardTitle' | 'challengeCardContent' | 'number' | 'flowCardTitle';
}
