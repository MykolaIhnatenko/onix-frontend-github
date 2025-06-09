import { BlogPreviewsCarouselVariant, BlogSubcategoryVariant } from '../../../constants/enums';

export default interface IBlogInfoBlock {
  datePublication?: string;
  timeToReading?: number;
  views?: number;
  variant?: BlogSubcategoryVariant;
  carouselVariant?: BlogPreviewsCarouselVariant;
}
