/* eslint-disable no-console */
import { DEFAULT_BLOGS_PAGINATION_LIMIT } from '../constants/constants';
import { getUrl } from './api';
import { IPageBlogsResponse } from '../interfaces/IPageResponse';
import { IBlogsList } from '../interfaces/IBlogsList';

interface IParams {
  [propName:string]:string | number | boolean
  'pagination[limit]':number;
  'pagination[start]':number;
}

async function getBlogsList(
  category = '',
  page = 1,
  isSubcategory = false,
  limit = DEFAULT_BLOGS_PAGINATION_LIMIT,
):Promise<IBlogsList> {
  const offset = page > 1 ? (page - 1) * limit : 0;
  let key;
  if (isSubcategory) {
    key = 'blogSubcategories';
  } else key = 'categories';

  const params:IParams = {
    sort: 'views%3Adesc',
    'fields[0]': 'title',
    'fields[1]': 'url',
    'fields[2]': 'description',
    'fields[3]': 'maxVisibleCat',
    'fields[4]': 'datePublication',
    'fields[5]': 'time_to_reading',
    'fields[6]': 'views',
    'fields[7]': 'blogTitle',
    'fields[8]': 'relatedSubcategory',
    'pagination[limit]': limit,
    'pagination[start]': offset,
    'populate[picture][fields][0]': 'alternativeText',
    'populate[picture][fields][1]': 'formats',
    'populate[picture][fields][2]': 'url',
    'populate[categories][fields][0]': 'url',
    'populate[categories][fields][1]': 'title',
    'populate[categories][populate][blogSubcategories]': 'blogSubcategories',
    'populate[executor][populate][0]': 'picture',
    'populate[writer][populate][1]': 'picture',
    'populate[blogSubcategories][fields][0]': 'name',
    'populate[blogSubcategories][fields][1]': 'url',
    ...(category && ({ [`filters[${key}][url][$eq]`]: category })),
  };

  const blogsUrl = getUrl('blogs', params);
  try {
    const blogsResponse = await fetch(blogsUrl);
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
export default getBlogsList;
