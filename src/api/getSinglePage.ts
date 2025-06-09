/* eslint-disable no-console */
import IPage from '../interfaces/IPage';
import IPageResponse from '../interfaces/IPageResponse';
import { getUrl } from './api';

async function getSinglePage(url = '/'):Promise<IPage> {
  const params = {
    'filters[url][$eq]': url,
    'populate[picture]': '%2A',
    'populate[popularBlogs][populate][0]': 'picture',
    'populate[popularBlogs][fields][0]': 'url',
    'populate[popularBlogs][fields][1]': 'title',
    'populate[popularBlogs][fields][2]': 'id',
    'populate[project][populate][0]': 'picture',
    'populate[createdAt]': 'createdAt',
    'populate[updatedAt]': 'updatedAt',
  };
  const pageUrl = getUrl('pages', params);

  try {
    const response = await fetch(pageUrl);
    const { data } = await response.json() as IPageResponse;
    return data[0] || {};
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching:', error.message);
    } else {
      console.error('Error fetching due to an unknown error');
    }
    return { id: 105 };
  }
}

export default getSinglePage;
