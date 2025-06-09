import { ReactNode } from 'react';

import IBusinessContextTemplate from 'components/BusinessContextTemplate/interfaces/IBusinessContextTemplate';

type IBusinessContextDiagonal = Omit<IBusinessContextTemplate, 'children'> & {
  leftContent?: string | string[] | ReactNode;
  rightContent?: string | string[] | ReactNode;
  classes?: {
    leftContent?: string,
    rightContent?: string,
  } & IBusinessContextTemplate['classes'];
};

export default IBusinessContextDiagonal;
