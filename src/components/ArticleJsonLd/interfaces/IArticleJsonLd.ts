import { IBlogAttributes } from '../../../interfaces/IBlog';

export default interface IArticleJsonLd {
  articleType: 'Article' | 'BlogPosting';
  attributes: IBlogAttributes;
}
