import ISeoData from './ISeoData';
import { IBreadcrumbsItem } from '../layout/interfaces/IBreadcrumbs';
import { ICategories, ICategoriesList } from './ICategories';
import IBlog from './IBlog';
import IFooterContent from './IFooterContent';

export interface IBlogsPage {
  seoData:ISeoData;
  slug?:string;
  categories:ICategoriesList;
  newestBlog: IBlog[];
  trendingArticles: IBlog[] | [];
  footerContent?: IFooterContent;
}
export interface IBlogsScreen {
  description:string;
  categories:ICategoriesList;
  seoData: ISeoData;
  breadcrumbs: IBreadcrumbsItem[],
  newestBlog: IBlog[],
  trendingArticles: IBlog[] | [],
  footerContent?: IFooterContent;
}

export type TitleSectionType = Pick<IBlogsScreen, 'description' | 'seoData'>;
export type CategoriesPageType = Pick<IBlogsPage, 'categories' | 'seoData'> & {
  designItem: ICategories;
  mobileItem: ICategories;
  technologiesItem: ICategories;
};
