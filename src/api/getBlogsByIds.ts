/* eslint-disable no-console */
import IBlog from '../interfaces/IBlog';
import { IPageBlogsResponse } from '../interfaces/IPageResponse';
import { getUrl } from './api';

async function getBlogsByIds(ids: number[] = [], fields = {}): Promise<[IBlog] | []> {
  const params = {
    'populate[picture]': '%2A',
    'populate[picture_our_insights]': '%2A',
    'fields[0]': 'title',
    'fields[1]': 'url',
    ...fields,
  };
  ids.forEach((id, index) => {
    Object.assign(params, { [`filters[id][$in][${index}]`]: id });
  });

  const blogsUrl = getUrl('blogs', params);

  try {
    const blogsResponse = await fetch(blogsUrl);
    const { data } = await blogsResponse.json() as IPageBlogsResponse;
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

export default getBlogsByIds;
