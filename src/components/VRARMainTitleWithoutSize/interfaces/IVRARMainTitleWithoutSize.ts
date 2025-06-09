import { ReactNode } from 'react';

import IMainTitleWithoutSize from 'components/MainTitleWithoutSize/interfaces/IMainTitleWithoutSize';

type IVRARMainTitleWithoutSize = Omit<IMainTitleWithoutSize, 'children' | 'className'> & {
  title: string | ReactNode;
  classes?: {
    container?: string;
    title?: string;
  };
};

export default IVRARMainTitleWithoutSize;
