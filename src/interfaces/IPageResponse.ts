import IPage from './IPage';
import IBlog from './IBlog';
import { IPagination } from './IBlogsList';
import { IBlogAuthorData } from './IBlogAuthor';

export default interface IPageResponse {
  data: [IPage]
}

export interface IPageBlogsResponse {
  data: [IBlog];
  meta?:{
    pagination:IPagination
  }
}

export interface IPageAuthorResponse {
  data: IBlogAuthorData[];
}
