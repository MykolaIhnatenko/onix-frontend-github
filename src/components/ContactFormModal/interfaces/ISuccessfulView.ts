import { StaticImageData } from 'next/image';

import { FormMessageButtonVariant } from '../../../constants/enums';

export default interface ISuccessfulView {
  variant?: FormMessageButtonVariant;
  text?: string;
  background?: StaticImageData;
}
