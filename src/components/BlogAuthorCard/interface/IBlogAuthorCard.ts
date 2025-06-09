import { IBlogAuthorData } from '../../../interfaces/IBlogAuthor';
import { BlogPreviewsCarouselVariant } from '../../../constants/enums';

export default interface IBlogAuthorCard {
  author: IBlogAuthorData,
  sizePreviewVariant?: BlogPreviewsCarouselVariant;
  classes?: {
    contentText: string,
  },
}
