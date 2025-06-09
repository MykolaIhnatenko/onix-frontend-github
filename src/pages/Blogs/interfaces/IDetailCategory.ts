import { IBlogSubcategories } from '../../../interfaces/IBlogSubcategory';
import IBlogsResponse from '../../../interfaces/IBlogsList';

export default interface IDetailCategory {
  title: string;
  url: string;
  description?: string;
  blogSubcategories?: IBlogSubcategories;
  blogs?: IBlogsResponse;
}
