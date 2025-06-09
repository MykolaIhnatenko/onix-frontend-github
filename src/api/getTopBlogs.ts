/* eslint-disable no-console */
import { getUrl } from './api';
import { ITopBlogsList } from '../interfaces/ITopBlogsList';
import IBlog from '../interfaces/IBlog';

interface IParams {
  [propName:string]: string | number | undefined
}

async function getTopBlogs():Promise<IBlog[]> {
  const topBlogsOrders = [1, 2, 3];
  const params: IParams = {
    sort: 'topBlogOrder%3Aasc',
    'fields[0]': 'title',
    'fields[1]': 'url',
    'fields[2]': 'description',
    'fields[3]': 'maxVisibleCat',
    'fields[4]': 'datePublication',
    'fields[5]': 'time_to_reading',
    'fields[6]': 'topBlogOrder',
    'fields[7]': 'views',
    'fields[8]': 'blogTitle',
    'fields[9]': 'relatedSubcategory',
    'populate[picture][fields][0]': 'alternativeText',
    'populate[picture][fields][1]': 'formats',
    'populate[picture][fields][2]': 'url',
    'populate[categories][fields][0]': 'url',
    'populate[categories][fields][1]': 'title',
    'populate[executor][populate][0]': 'picture',
    'populate[writer][populate][1]': 'picture',
    'populate[blogSubcategories][fields][0]': 'name',
    'populate[blogSubcategories][fields][1]': 'url',
    'pagination[limit]': 3,
  };

  topBlogsOrders.forEach((order, index) => {
    params[`filters[topBlogOrder][$eq][${index}]`] = order;
  });

  const blogsUrl = getUrl('blogs', params);

  try {
    const blogsResponse = await fetch(blogsUrl);
    const {
      data,
    } = await blogsResponse.json() as ITopBlogsList;

    return data || [];
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching:', error.message);
    } else {
      console.error('Error fetching due to an unknown error');
    }
    return [];
  }
}
export default getTopBlogs;
