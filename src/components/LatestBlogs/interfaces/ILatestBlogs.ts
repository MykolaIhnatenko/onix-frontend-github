import { LatestBlogType } from '../../../interfaces/IBlog';

export interface ILatestBlogs {
  latestBlogs: LatestBlogType[];
  header: string;
  titleColor?: string;
}
