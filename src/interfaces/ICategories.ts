import IBlogSubcategory, { IBlogSubcategories } from './IBlogSubcategory';
import IBlogsResponse, { IPagination } from './IBlogsList';
import ISeoData from './ISeoData';
import { IBreadcrumbsItem } from '../layout/interfaces/IBreadcrumbs';
import IBlog from './IBlog';
import PagesToSalesChannels from '../constants/PageToSalesChannels';
import IFooterContent from './IFooterContent';

export default interface ICategoryPage {
  seoData: ISeoData;
  category: ICategories;
  blogs: [IBlog] | [];
  pagination: IPagination;
  currentSubcategory?: IBlogSubcategory;
  blogsCategories: ICategoriesList;
  footerContent?: IFooterContent;
}

export interface ICategoryBlogsPageView {
  breadcrumbs: IBreadcrumbsItem[];
  seoData: ISeoData;
  title?: string;
  url: string;
  description?: string;
  blogSubcategories?: IBlogSubcategory[];
  blogs: [IBlog] | [];
  pagination: IPagination;
  subcategoryUrl?: string;
  salesChannel: PagesToSalesChannels;
  footerContent?: IFooterContent;
}

export interface ICategoryAttributes {
  title: string;
  markupTitle?: string;
  description?: string;
  url: string;
  order: number;
  mailerliteId: number;
  blogs?: IBlogsResponse;
  blogSubcategories?: IBlogSubcategories;
}

export interface ICategories {
  id: number;
  attributes: ICategoryAttributes;
}

export interface ICategoriesList {
  data?: ICategories[] | [];
}
