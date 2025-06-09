import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import { TransparentCardVariant } from '../../../constants/enums';
import { ITransparentCard } from './ITransparentCard';

export interface IModelsSection {
  pageTitle?: string | ReactNode;
  pageText?: string;
  data: IModelsSectionData[];
  background?: StaticImageData;
  variant?: TransparentCardVariant;
  classes?: {
    section?: string;
    bg?: string;
    bgImg?: string;
    title?: string;
    text?: string;
  } & ITransparentCard['classes'];
}

export type IModelsSectionData = Omit<ITransparentCard, 'classes'> & { id: number };
