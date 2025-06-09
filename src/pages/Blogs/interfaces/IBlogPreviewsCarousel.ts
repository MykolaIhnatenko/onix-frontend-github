import { ElementType } from 'react';

import IBlog from '../../../interfaces/IBlog';
import { BlogPreviewsCarouselVariant } from '../../../constants/enums';

export default interface IBlogPreviewsCarousel {
  blogs?: IBlog[];
  variant?: BlogPreviewsCarouselVariant;
  mainTitleTag?: ElementType;
  generalSubcategory?: boolean;
  categoryUrl?: string;
}
