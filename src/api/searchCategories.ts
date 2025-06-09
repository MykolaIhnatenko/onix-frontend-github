import { getUrl } from './api';
import { ISearchResponse } from '../components/SearchInputBlock/interfaces/ISearchInput';

async function searchCategories(searchTerm: string):Promise<ISearchResponse> {
  const params = {
    'filters[title][$containsi]': searchTerm,
    'fields[0]': 'title',
    'fields[1]': 'url',
  };

  const blogsUrl = getUrl('categories', params);
  const blogsResponse = await fetch(blogsUrl);
  const { data } = await blogsResponse.json() as ISearchResponse;

  return { data };
}
export default searchCategories;
