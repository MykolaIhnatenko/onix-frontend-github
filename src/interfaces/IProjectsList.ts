import { IPagination } from './IBlogsList';
import IBlog from './IBlog';

export interface IProjectsList {
  data: IProject[];
  pagination?:IPagination
}

export interface IProject {
  id: number;
  attributes: {
    subheader: string;
    header: string;
    description: string;
    picture:{
      data: {
        attributes:{
          url: string;
          formats:{
            large:{
              url:string;
            }
          }
        }
      }
    }
    order: string;
    page : PageProjects;
  }
}

export interface PageProjects {
  data: {
    id: number;
    attributes: {
      url: string;
      view: string;
      title: string;
      description: string;
      sale: boolean;
    }
  }
}

export interface IProjectsResponse {
  data: IProject[];
  meta?:{
    pagination:IPagination
  }
}

export interface IBlogsResponse {
  data: IBlog[];
  meta?:{
    pagination:IPagination
  }
}

export interface IPaginationProjects {
  current: number;
  maxPage: number;
}
