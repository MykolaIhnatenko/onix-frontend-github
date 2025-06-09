/* eslint-disable no-console */
import IBlog from '../interfaces/IBlog';
import { getUrl } from './api';
import { ISingleBlogResponse } from '../interfaces/ISingleBlog';

async function getSingleBlog(url = ''):Promise<IBlog[]> {
  let key;
  let value;
  if (url) {
    key = 'filters[url][$eq]';
    value = url;
  } else {
    key = 'sort';
    value = 'datePublication%3Adesc';
  }

  const params = {
    [key]: value,
    'fields[0]': 'title',
    'fields[1]': 'url',
    'fields[2]': 'description',
    'fields[3]': 'datePublication',
    'fields[4]': 'time_to_reading',
    'fields[5]': 'canonical',
    'fields[6]': 'keywords',
    'fields[7]': 'content',
    'fields[8]': 'blogTitle',
    'fields[9]': 'relatedBlogs',
    'fields[10]': 'views',
    'fields[11]': 'mailerliteId',
    'fields[12]': 'blogTitle',
    'fields[13]': 'createdAt',
    'fields[14]': 'updatedAt',
    'fields[15]': 'ratingValue',
    'fields[16]': 'ratingCount',
    'fields[17]': 'relatedSubcategory',
    'populate[picture][fields][0]': 'alternativeText',
    'populate[picture][fields][1]': 'formats',
    'populate[picture][fields][2]': 'url',
    'populate[blogSubcategories][fields][0]': 'url',
    'populate[blogSubcategories][fields][1]': 'name',
    'populate[blogSubcategories][populate][0]': 'category',
    'populate[executor][populate][0]': 'picture',
    'populate[writer][populate][1]': 'picture',
    'populate[faq][populate][2]': 'faq',
    'populate[categories][populate][3]': 'categories',
    'populate[contentTable][populate][3]': 'contentTable',
    'populate[miniBanner][populate][4]': 'miniBanner',
    'populate[miniBanner][populate][5]': 'pictureLarge',
    'populate[miniBanner][populate][6]': 'pictureSmall',
    'pagination[limit]': 1,
  };

  const blogsUrl = getUrl('blogs', params);

  try {
    const blogsResponse = await fetch(blogsUrl);
    const { data } = await blogsResponse.json() as ISingleBlogResponse;

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
export default getSingleBlog;
