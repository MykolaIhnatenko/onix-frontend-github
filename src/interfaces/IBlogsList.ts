import IBlog from './IBlog';

export interface IBlogsList {
  data?: [IBlog] | [];
  pagination?:IPagination
}

export interface IPagination {
  start?:number,
  limit?:number,
  total?:number,
}

export default interface IBlogsResponse {
  data: [IBlog] | [];
}

export type IBlogsLinksList = string[];

export type ICareersLinksList = string[];
