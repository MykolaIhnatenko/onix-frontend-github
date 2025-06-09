import ISeoData from './ISeoData';
import IPicture from './IPicture';
import IBlog from './IBlog';
import { ICategoriesList } from './ICategories';
import { IPagination } from './IBlogsList';
import IFooterContent from './IFooterContent';

export interface IAuthor {
  id:number;
  attributes:{
    canonical:string;
    description:string;
    email:string;
    fullBiography:string;
    keywords:string;
    linkedin:string;
    name:string;
    picture:IPicture;
    position:string;
    shortBiography:string;
    surname:string;
    title:string;
    url:string;
    blogs: {
      data: [IBlog],
    },
  }
}

export interface IBlogAuthorPage {
  author: IAuthor;
  seoData: ISeoData;
  blogsCategories: ICategoriesList;
  authorBlogs: IBlog[];
  pagination?: IPagination;
  footerContent?: IFooterContent;
}
