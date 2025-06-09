import { LatestBlogType } from '../../../interfaces/IBlog';

export interface ICombinedPage {
  saleUrl?: boolean;
  latestBlogs: LatestBlogType[];
  pathname: string;
}
