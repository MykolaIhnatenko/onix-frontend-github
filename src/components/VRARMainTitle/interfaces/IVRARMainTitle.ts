import { ReactNode } from 'react';

import IMainTitle from 'components/MainTitle/interfaces/IMainTitle';

type IVRARMainTitle = Omit<IMainTitle, 'children' | 'className'> & {
  title: string | ReactNode;
  classes?: {
    container?: string;
    title?: string;
  };
};

export default IVRARMainTitle;
