import { ICategories, ICategoriesList } from '../../../interfaces/ICategories';
import { IBlogSubcategories } from '../../../interfaces/IBlogSubcategory';

export default interface ICategoriesPageView {
  categories?:ICategoriesList;
  designItem: ICategories;
  mobileItem: ICategories;
  technologiesItem: ICategories;
}

export interface ICategoriesBlock {
  categories?:ICategoriesList;
}

export interface ICategory {
  url: string;
  title: string;
  blogSubcategories?: IBlogSubcategories;
}

export interface ISubcategory {
  href: string;
  subtitle: string;
}

export interface IRecommendedBlock {
  designItem: ICategories;
  mobileItem: ICategories;
  technologiesItem: ICategories;
}
