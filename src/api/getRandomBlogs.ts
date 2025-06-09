import { getUrl } from './api';
import IBlog, { IBlogMiniBannerResponse, IContentTableItem } from '../interfaces/IBlog';
import { IPictureAttributes } from '../interfaces/IPicture';
import IBlogCategory from '../interfaces/IBlogCategory';
import { IBlogSubcategories } from '../interfaces/IBlogSubcategory';
import { IBlogAuthorAttributes } from '../interfaces/IBlogAuthor';

interface IParams {
  [key: string]: string | number | undefined;
}

export interface IRandomBlogsData {
  id: number;
  url: string;
  title?: string;
  blogTitle?: string;
  datePublication?: string;
  time_to_reading?: number;
  views?: number;
  shortContent?: string;
  description?: string;
  picture?: IPictureAttributes;
  categories?: IBlogCategory;
  blogSubcategories?: IBlogSubcategories;
  writer: IBlogAuthorAttributes;
  executor: IBlogAuthorAttributes;
  canonical?: string;
  keywords?: string;
  publishedAt: string;
  content?: string;
  contentTable?: IContentTableItem[];
  faq?: string;
  relatedBlogs?: IBlog[];
  miniBanner?: IBlogMiniBannerResponse;
}
async function getRandomBlogs(blogCategoriesIds: (number | undefined)[], limit = 6): Promise<IRandomBlogsData[]> {
  const params: IParams = {
    'pagination[limit]': limit,
    '[fields][0]': 'id',
    '[fields][1]': 'title',
    '[fields][2]': 'url',
    'fields[3]': 'datePublication',
    'fields[4]': 'time_to_reading',
    'fields[5]': 'description',
    'fields[6]': 'views',
    'fields[7]': 'blogTitle',
    'populate[picture][fields][0]': 'alternativeText',
    'populate[picture][fields][1]': 'formats',
    'populate[picture][fields][2]': 'url',
    'populate[blogSubcategories][fields][0]': 'url',
    'populate[blogSubcategories][fields][1]': 'name',
    'populate[executor][populate][0]': 'picture',
    'populate[writer][populate][1]': 'picture',
  };

  if (blogCategoriesIds.length > 0) {
    blogCategoriesIds.forEach((categoryId, index) => {
      params[`filters[categories][id][$eq][${index}]`] = categoryId;
    });
  }

  const randomBlogsUrl = getUrl('blogs/random', params);
  const randomBlogsResponse = await fetch(randomBlogsUrl);

  return await randomBlogsResponse.json() as IRandomBlogsData[];
}

export default getRandomBlogs;
