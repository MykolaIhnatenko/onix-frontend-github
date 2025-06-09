/* eslint-disable no-console */
import { getUrl } from './api';
import { IBlogSubcategories } from '../interfaces/IBlogSubcategory';

interface ICategoryResponse {
  data: [ICategory]
}

export interface ICategory {
  id:number;
  attributes:{
    title:string;
    url:string;
    keywords:string;
    canonical:string;
    order:number;
    seoTitle:string;
    description:string;
    markupTitle:string;
    blogSubcategories?:IBlogSubcategories;
  }
}

async function getSingleCategory(url:string): Promise<ICategory | object> {
  const params = {
    'filters[url][$eq]': url,
    'populate[blogSubcategories][sort][0]': 'order',
    'populate[blogSubcategories][fields][0]': 'name',
    'populate[blogSubcategories][fields][1]': 'url',
    'populate[blogSubcategories][populate][blogs][fields][0]': 'title',
  };
  const pageUrl = getUrl('categories', params);

  try {
    const response = await fetch(pageUrl);
    const { data } = await response.json() as ICategoryResponse;
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

export default getSingleCategory;
