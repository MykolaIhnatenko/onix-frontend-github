import { Dispatch, SetStateAction } from 'react';

import { IAuthor } from '../../../interfaces/IBlogAuthorPage';
import IBlog from '../../../interfaces/IBlog';
import { IPagination } from '../../../interfaces/IBlogsList';

export interface IAuthorPageView {
  setsScrollHeight?: Dispatch<SetStateAction<number>>;
  author: IAuthor;
  authorBlogs: IBlog[];
  pagination?: IPagination;
}

export type IntroductionSectionType = Pick<IAuthorPageView, 'author'>;

export type BlogsSectionType = Pick<IAuthorPageView, 'authorBlogs' | 'pagination'> & {
  name: string;
  surname: string;
  url: string;
};
