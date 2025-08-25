import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import { AndroidAppEngagementModelsVariant } from '../../../constants/enums';

interface IAndroidAppEngagementModels {
  pageTitle: ReactNode,
  pageText?: ReactNode,
  firstItemTitle: ReactNode,
  firstItemText: ReactNode,
  secondItemTitle: ReactNode,
  secondItemText: ReactNode,
  firstItemImg: StaticImageData,
  firstItemImgTablet: StaticImageData,
  firstItemImgMobile: StaticImageData,
  secondItemImg: StaticImageData,
  secondItemImgTablet: StaticImageData,
  secondItemImgMobile: StaticImageData,
  variant?: AndroidAppEngagementModelsVariant,
  classes?: {
    container?: string;
    contentContainer?: string;
    firstItemContainer?: string;
    secondItemContainer?: string;
    itemFlex?: string;
    itemContent?: string;
    imageContainer?: string;
    image?: string;
  }
}

export default IAndroidAppEngagementModels;
