/* eslint-disable no-console */
import { getUrl } from './api';
import { ISearchResponse } from '../components/SearchInputBlock/interfaces/ISearchInput';

async function searchBlogs(searchTerm: string):Promise<ISearchResponse> {
  const params = {
    sort: 'datePublication%3Adesc',
    'filters[title][$containsi]': searchTerm,
    'fields[0]': 'title',
    'fields[1]': 'url',
  };

  const blogsUrl = getUrl('blogs', params);

  try {
    const blogsResponse = await fetch(blogsUrl);
    const { data } = await blogsResponse.json() as ISearchResponse;

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
export default searchBlogs;
