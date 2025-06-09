import { getUrl } from './api';
import { IBlogSubcategories } from '../interfaces/IBlogSubcategory';
import { ISearchResponse } from '../components/SearchInputBlock/interfaces/ISearchInput';

async function searchSubcategories(searchTerm: string):Promise<ISearchResponse> {
  const params = {
    'filters[name][$containsi]': searchTerm,
    'fields[0]': 'name',
    'fields[1]': 'url',
    'populate[category][field][0]': 'url',
  };

  const blogsUrl = getUrl('blog-subcategories', params);
  const blogsResponse = await fetch(blogsUrl);
  const { data } = await blogsResponse.json() as IBlogSubcategories;
  const mappedData = data?.map(({
    id,
    attributes: {
      name, url, category: {
        data: {
          attributes: {
            url: categoryUrl,
          },
        },
      },
    },
  }) => (
    { id, attributes: { title: name, url, categoryUrl } }
  ));

  return { data: mappedData };
}
export default searchSubcategories;
