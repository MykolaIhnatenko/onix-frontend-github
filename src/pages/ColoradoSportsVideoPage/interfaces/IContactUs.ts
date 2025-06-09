import { ReactNode } from 'react';

import { ButtonType } from 'constants/enums';

interface IContactUs {
  content: {
    title: ReactNode,
    buttonTitle : string,
  };
  idBtn: ButtonType;
}

export default IContactUs;
