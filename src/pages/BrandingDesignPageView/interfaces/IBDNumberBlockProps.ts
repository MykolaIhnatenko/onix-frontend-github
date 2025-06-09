import React from 'react';

import { NumbersBlockDataVariant } from '../../../constants/enums';

export interface INumbersBlockItem {
  leftTitle: number,
  leftPrefix: string,
  leftContent: React.ReactNode,
  centralTitle: number,
  centralPrefix: string,
  centralContent: React.ReactNode,
  rightTitle: number,
  rightPrefix: string,
  rightContent: React.ReactNode,
  leftPostfix?: string,
}
export interface IBDNumberBlockProps {
  variant?: NumbersBlockDataVariant;
  data:INumbersBlockItem[];
}
