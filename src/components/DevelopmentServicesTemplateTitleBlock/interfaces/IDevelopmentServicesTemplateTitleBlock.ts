import { ReactNode } from 'react';

export interface IDevelopmentServicesTemplateTitleBlock {
  upTitle?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  subTitle?: string;
  classes?: { readonly [key: string]: string };
}
