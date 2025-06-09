import { getUrl } from './api';
import ISingleCareerPageResponse from '../interfaces/ISingleCareerPageResponse';

interface IParams {
  [propName:string]:string
}

async function getCareerList() {
  const params:IParams = {
    sort: 'order%3Aasc&populate[departmentType][fields][0]=name',
  };

  const careerUrl = getUrl('careers/', params);
  const careerResponse = await fetch(careerUrl);
  return careerResponse.json().then(({ data }: ISingleCareerPageResponse) => data);
}

export default getCareerList;
