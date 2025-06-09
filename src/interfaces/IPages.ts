import ISeoData from './ISeoData';
import IRatingData from './IRatingData';
import IBlog, { LatestBlogType } from './IBlog';
import { ICategoriesList } from './ICategories';
import { IDesignTagList, ITechnologiesList } from './ITechnologies';
import { IPagination } from './IBlogsList';
import { IProject } from './IProjectsList';
import IOnixStatusPage from './IStatusPage';
import { INationalHolidaysList } from './INationalHolidays';
import IFooterContent from './IFooterContent';

export default interface IPages {
  seoData: ISeoData;
  ratingData?: IRatingData;
  pageBlogs?:[IBlog] | [];
  blogsCategories: ICategoriesList;
  technologiesList?: ITechnologiesList;
  designTagList?: IDesignTagList;
  projects?: [IProject];
  latestBlogs?: [IBlog] | LatestBlogType[];
  pageData?:IOnixStatusPage;
  nationalHolidays?: INationalHolidaysList;
  footerContent?: IFooterContent;
}

export interface IPageBlogs {
  pageBlogs?: [IBlog] | []
}

export interface ICaseStudiesPages extends IPages {
  projectsList: [IProject],
  pagination: IPagination,
}
