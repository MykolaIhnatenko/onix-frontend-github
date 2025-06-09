/* eslint-disable no-console */
import { ITechnologiesList } from '../interfaces/ITechnologies';
import { getUrl } from './api';

interface IParams {
  [propName:string]:string
}

async function getTechnologies():Promise<ITechnologiesList> {
  const params:IParams = {
    sort: 'order%3Aasc',
    'fields[0]': 'order',
    'fields[1]': 'name',
    'fields[2]': 'tag',
    'populate[tags]': '[fields][0]=name',
  };

  const categoriesUrl = getUrl('technologies', params);

  try {
    const categoriesResponse = await fetch(categoriesUrl);
    const { data } = await categoriesResponse.json() as ITechnologiesList;

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
export default getTechnologies;
