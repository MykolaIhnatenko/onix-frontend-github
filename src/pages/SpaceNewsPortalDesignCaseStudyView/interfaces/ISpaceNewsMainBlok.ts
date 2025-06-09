import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import { SpaceNewsMainBlokVariant } from '../../../constants/enums';

interface ISpaceNewsMainBlok {
  title: string | ReactNode;
  text? :string | ReactNode;
  video: string;
  videoBaner: StaticImageData;
  background?: StaticImageData;
  variant?: SpaceNewsMainBlokVariant;
}

export default ISpaceNewsMainBlok;
