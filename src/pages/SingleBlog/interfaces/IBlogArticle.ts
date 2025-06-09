import { IBlogMiniBanner, IContentTableItem } from '../../../interfaces/IBlog';
import IBlogAuthor, { IBlogWriters } from '../../../interfaces/IBlogAuthor';
import { IAnchorItem } from './TabletOfContent';

export interface IBlogArticle {
  html?: string;
  bgPath?: string;
  alt?: string;
  contentTable?: IContentTableItem[];
  executor?: IBlogAuthor;
  writers?: IBlogWriters;
  miniBanner?: IBlogMiniBanner[];
  isWhitepapers: boolean;
  tableOfContent?: IAnchorItem[];
  mailerliteId?: string
}
