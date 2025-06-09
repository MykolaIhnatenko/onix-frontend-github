import { ReactNode } from 'react';

export interface IPrivacyPolicyView {
  data: IPrivacyPolicyViewData[];
  pageTitle: string;
  saleUrl?: boolean;
}

export interface IPrivacyPolicyViewData {
  title: string;
  content: ReactNode;
}
