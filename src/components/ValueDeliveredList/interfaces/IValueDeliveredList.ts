import { ReactNode } from 'react';

type IValueDeliveredList = {
  contentTitle: string;
  contentList: string[] | ReactNode[];
  bottomText?: string;
  classes?: {
    container?: string;
    content?: string;
    contentTitle?: string;
    bottomText?: string;
  };
};

export default IValueDeliveredList;
