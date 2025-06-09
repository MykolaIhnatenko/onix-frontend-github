import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import { UsabilityTestingMainBlockVariant } from '../../../constants/enums';

interface IUsabilityTestingMainBlock {
  icon?: ReactNode;
  title: string | ReactNode;
  text?: string | ReactNode;
  background: StaticImageData;
  image?: StaticImageData;
  variant?: UsabilityTestingMainBlockVariant;
  btnText?: string;
  saleUrl?: boolean;
}

export default IUsabilityTestingMainBlock;
