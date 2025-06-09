import IPicture from './IPicture';
import IBlogCategory from './IBlogCategory';
import IBlogAuthor, { IBlogWriters } from './IBlogAuthor';
import { IBlogSubcategories } from './IBlogSubcategory';
import { MiniBannerPictureType } from '../pages/SingleBlog/interfaces/IMiniBannerProps';
import IBooklet from './IBooklet';

export type LatestBlogType = Pick<IBlogAttributes, 'url' | 'picture' | 'title'>;

export interface IContentTableItem {
  id: number;
  title: string;
  anchor: string;
}
export interface IBlogMiniBannerAttributes {
  url: string;
  title: string;
  miniBannerName: string;
  buttonText: string;
  pictureLarge: MiniBannerPictureType;
  pictureSmall: MiniBannerPictureType;
}
export interface IBlogMiniBanner {
  id: number;
  attributes: IBlogMiniBannerAttributes;
}

export interface IBlogMiniBannerResponse {
  data: IBlogMiniBanner[];
}

export interface IBlogRelatedSubcategory {
  id:number,
  url: string;
  label: string;
  categoryUrl: string;
}

export interface IBlogAttributes {
  url: string;
  title?: string;
  blogTitle?: string;
  datePublication?: string;
  time_to_reading?: number;
  shortContent?: string;
  description?: string;
  picture?: IPicture;
  categories?: IBlogCategory;
  blogSubcategories?: IBlogSubcategories;
  writer?: IBlogWriters;
  executor: IBlogAuthor;
  canonical?: string;
  keywords?: string;
  publishedAt: string;
  content?: string;
  contentTable?: IContentTableItem[];
  faq?: string;
  relatedBlogs?: IBlog[];
  relatedSubcategory?: IBlogRelatedSubcategory[] ;
  miniBanner?: IBlogMiniBannerResponse;
  createdAt?: string;
  updatedAt?: string;
  booklet?: IBooklet;
  views?: number;
  mailerliteId?: string;
  picture_our_insights?: IPicture;
  ratingValue?: number;
  ratingCount?: number;
}

export default interface IBlog {
  id: number;
  attributes: IBlogAttributes;
  picture?: IPicture;
}
