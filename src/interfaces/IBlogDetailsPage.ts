import ISeoData from './ISeoData';
import IBlog from './IBlog';
import { ICategoriesList, ICategoryAttributes } from './ICategories';
import IFooterContent from './IFooterContent';

export interface ISubcategoryCrumb {
  name:string;
  label?:string;
  url:string;
}

export interface IBlogDetailsPage {
  seoData:ISeoData;
  slug?:string;
  blogData:IBlog;
  categories:ICategoriesList;
  lastCrumbTitle:string;
  categoryCrumb:ICategoryAttributes;
  subcategoryCrumb:ISubcategoryCrumb;
  footerContent?: IFooterContent;
}
