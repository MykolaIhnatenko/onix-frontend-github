/* eslint-disable no-console */
import { ICategoriesList } from '../interfaces/ICategories';
import { getUrl } from './api';

interface IParams {
  [propName:string]:string
}

interface IGetBlogsCategoriesListSetting {
  isBlogSubcategories?:boolean,
  isBlogs?:boolean,
  isBlogsPicture?:boolean,
  isBlogsAuthors?:boolean,
}

async function getBlogsCategoriesList({
  isBlogSubcategories = false, isBlogs = false, isBlogsPicture = false, isBlogsAuthors = false,
}:IGetBlogsCategoriesListSetting = {}):Promise<ICategoriesList> {
  const params:IParams = {
    sort: 'order%3Aasc',
    'fields[0]': 'title',
    'fields[1]': 'url',
    'fields[2]': 'order',
    'fields[3]': 'description',
    'fields[4]': 'mailerliteId',
    ...(isBlogSubcategories && ({
      'populate[blogSubcategories][sort][0]': 'order',
      'populate[blogSubcategories][fields][0]': 'name',
      'populate[blogSubcategories][fields][1]': 'url',
      'populate[blogSubcategories][populate][blogs][fields][0]': 'title',
    })),
    ...(isBlogs && ({
      'populate[blogs][sort]': 'views%3Adesc',
      'populate[blogs][fields][0]': 'title',
      'populate[blogs][fields][1]': 'url',
      'populate[blogs][fields][2]': 'description',
      'populate[blogs][fields][3]': 'maxVisibleCat',
      'populate[blogs][fields][4]': 'datePublication',
      'populate[blogs][fields][5]': 'time_to_reading',
      'populate[blogs][fields][6]': 'views',
      'populate[blogs][fields][7]': 'blogTitle',
      'populate[blogs][fields][8]': 'relatedSubcategory',
      'populate[blogs][populate][blogSubcategories][fields][0]': 'name',
      'populate[blogs][populate][blogSubcategories][fields][1]': 'url',
    })),
    ...(isBlogsPicture && ({
      'populate[blogs][populate][picture][fields][0]': 'alternativeText',
      'populate[blogs][populate][picture][fields][1]': 'formats',
      'populate[blogs][populate][picture][fields][2]': 'url',
    })),
    ...(isBlogsAuthors && ({
      'populate[blogs][populate][executor][fields][0]': 'name',
      'populate[blogs][populate][executor][fields][1]': 'surname',
      'populate[blogs][populate][executor][fields][2]': 'url',
      'populate[blogs][populate][executor][populate][0]': 'picture',
      'populate[blogs][populate][writer][fields][0]': 'name',
      'populate[blogs][populate][writer][fields][1]': 'surname',
      'populate[blogs][populate][writer][populate][0]': 'picture',
    })),
  };

  const categoriesUrl = getUrl('categories', params);

  try {
    const categoriesResponse = await fetch(categoriesUrl);
    const { data } = await categoriesResponse.json() as ICategoriesList;

    return { data } || {};
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching:', error.message);
    } else {
      console.error('Error fetching due to an unknown error');
    }
    return {};
  }
}
export default getBlogsCategoriesList;
