/* eslint-disable no-console */
import { getUrl } from './api';
import IBlogSubcategory from '../interfaces/IBlogSubcategory';

interface ISubcategoryResponse {
  data: [IBlogSubcategory]
}

async function getSingleSubcategory(url:string): Promise<IBlogSubcategory | object> {
  const params = {
    'filters[url][$eq]': url,
    'populate[category][fields][0]': 'title',
    'populate[category][fields][1]': 'url',
    'populate[category][fields][2]': 'description',
  };
  const pageUrl = getUrl('blog-subcategories', params);

  try {
    const response = await fetch(pageUrl);
    const { data } = await response.json() as ISubcategoryResponse;

    return data[0] || {};
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching:', error.message);
    } else {
      console.error('Error fetching due to an unknown error');
    }
    return {};
  }
}

export default getSingleSubcategory;
