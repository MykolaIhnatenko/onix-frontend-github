import { ReactNode } from 'react';

import { ButtonType } from 'constants/enums';

interface IGoodFaceContactUs {
  bg:ReactNode;
  bgMobile: ReactNode;
  title: ReactNode;
  btnTitle: string;
  idBtn: ButtonType;
  type?: string;
}

export default IGoodFaceContactUs;
