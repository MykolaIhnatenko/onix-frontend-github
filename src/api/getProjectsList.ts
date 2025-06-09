import { DEFAULT_PROJECTS_PAGINATION_LIMIT } from '../constants/constants';
import { getUrl } from './api';
import { IProjectsList, IProjectsResponse } from '../interfaces/IProjectsList';

interface IParams {
  [propName:string]:string | number | boolean
  'pagination[limit]':number;
  'pagination[start]':number;
}

async function getProjectsList(
  category = '',
  page = 1,
  limit = DEFAULT_PROJECTS_PAGINATION_LIMIT,
  names: string[] = [],
  designProject = false,
  designCategory = '',
):Promise<IProjectsList> {
  const offset = page > 1 ? (page - 1) * limit : 0;
  const typeProject = designProject ? 'design_tags' : 'tags';

  const params:IParams = {
    sort: 'order%3Aasc',
    'fields[0]': 'header',
    'fields[1]': 'description',
    'fields[2]': 'picture',
    'populate[picture]': '%2A',
    'pagination[limit]': limit,
    'pagination[start]': offset,
    'populate[page][fields][0]': 'url',
    'populate[page][fields][1]': 'view',
    'populate[page][fields][2]': 'title',
    'populate[page][fields][3]': 'description',
    'populate[tags][fields][0]': 'name',
    'populate[page][fields][4]': 'sale',
    ...(category && ({ 'filters[tags][name][$eq]': category })),
    ...(designCategory && ({ 'filters[design_tags][name][$eq]': designCategory })),
  };

  names.forEach((id, index) => {
    Object.assign(params, { [`filters[${typeProject}][name][$eq][${index}]`]: id });
  });

  const projectsUrl = getUrl('projects', params);
  const projectsResponse = await fetch(projectsUrl);

  const {
    data,
    meta: {
      pagination = {},
    } = {},
  } = await projectsResponse.json() as IProjectsResponse;

  return { data, pagination };
}
export default getProjectsList;
