/* eslint-disable no-console */
import { getUrl } from './api';
import { IBlogAuthorData } from '../interfaces/IBlogAuthor';
import { IPageAuthorResponse, IPageBlogsResponse } from '../interfaces/IPageResponse';
import { DEFAULT_AUTHOR_BLOGS_PAGINATION_LIMIT } from '../constants/constants';
import { IBlogsList } from '../interfaces/IBlogsList';

async function getAuthor(url: string): Promise<IBlogAuthorData[]> {
  const params = {
    'filters[url][$eq]': url,
    'populate[picture]': '%2A',
  };
  const authorUrl = getUrl('authors', params);

  try {
    const authorResponse = await fetch(authorUrl);
    const { data: author } = await authorResponse.json() as IPageAuthorResponse;

    return author || [];
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching:', error.message);
    } else {
      console.error('Error fetching due to an unknown error');
    }
    return [];
  }
}

interface IParams {
  [propName:string]:string | number | boolean
  'pagination[limit]':number;
  'pagination[start]':number;
}

export async function getAuthorBlogsList(
  executor = '',
  page = 1,
  limit = DEFAULT_AUTHOR_BLOGS_PAGINATION_LIMIT,
):Promise<IBlogsList> {
  const offset = page > 1 ? (page - 1) * limit : 0;
  const params:IParams = {
    sort: 'datePublication%3Adesc',
    'fields[0]': 'title',
    'fields[1]': 'url',
    'fields[2]': 'description',
    'fields[4]': 'datePublication',
    'fields[5]': 'time_to_reading',
    'fields[6]': 'blogTitle',
    'fields[7]': 'views',
    'pagination[limit]': limit,
    'pagination[start]': offset,
    'populate[picture][fields][0]': 'alternativeText',
    'populate[picture][fields][1]': 'formats',
    'populate[picture][fields][2]': 'url',
    'populate[executor][populate][0]': 'picture',
    'populate[writer][populate][1]': 'picture',
    'populate[blogSubcategories][fields][0]': 'name',
    ...(executor && ({ 'filters[executor][url][$eq]': executor })),
  };

  const blogsUrl = getUrl('blogs', params);

  try {
    const blogsResponse = await fetch(blogsUrl, { cache: 'no-store' });
    const {
      data,
      meta: {
        pagination = {},
      } = {},
    } = await blogsResponse.json() as IPageBlogsResponse;

    return { data, pagination };
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching:', error.message);
    } else {
      console.error('Error fetching due to an unknown error');
    }
    return {};
  }
}

export default getAuthor;
