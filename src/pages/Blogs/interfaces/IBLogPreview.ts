import { ElementType } from 'react';

import IBlog from '../../../interfaces/IBlog';
import { BlogPreviewsCarouselVariant } from '../../../constants/enums';

export interface IBLogPreview {
  item:IBlog;
  variant?: BlogPreviewsCarouselVariant;
  priority?: boolean;
  mainTitleTag?: ElementType;
  generalSubcategory?: boolean;
  categoryUrl?: string;
  ref?: React.RefObject<HTMLDivElement>;
}
