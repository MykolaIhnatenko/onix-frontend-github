import IBlogAuthor, { IBlogWriters } from 'interfaces/IBlogAuthor';

interface IBlogSubcategory {
  id: number | string;
  attributes: {
    name: string;
    url: string;
  }
}
export default interface IBanner {
  title?: string;
  date: string;
  subcategories?: IBlogSubcategory[];
  timeToReading?: number;
  views?: number;
  executor?: IBlogAuthor;
  writers?: IBlogWriters;
  isWhitepapers: boolean;
}
