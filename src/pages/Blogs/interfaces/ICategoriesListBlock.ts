import { ICategoriesList } from '../../../interfaces/ICategories';
import { CategoryVariant } from '../../../constants/enums';

export default interface ICategoriesListBlock {
  categories?: ICategoriesList;
}

export interface ICategoryItem {
  title: string;
  url: string;
  subcategoryUrl?: string;
  variant?: CategoryVariant;
}
