import { getUrl } from './api';
import { IBlogAuthorData } from '../interfaces/IBlogAuthor';

export interface IAuthorsResponse {
  data: IBlogAuthorData[];
}

async function getAuthors(): Promise<IBlogAuthorData[]> {
  const authorUrl = getUrl('authors');
  const authorResponse = await fetch(authorUrl);
  const { data: author } = await authorResponse.json() as IAuthorsResponse;

  return author || [];
}

export default getAuthors;
