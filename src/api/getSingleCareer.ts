import { getUrl } from './api';
import ISingleCareerPageResponse from '../interfaces/ISingleCareerPageResponse';

async function getSingleCareer(careerName: string) {
  const params = {
    'filters[url][$eq]': `${careerName}&populate[departmentType][fields][0]=name`,
    'populate[picture]': '%2A',
  };
  const careerUrl = getUrl('careers/', params);
  const careerResponse = await fetch(careerUrl);
  return careerResponse.json().then(({ data }: ISingleCareerPageResponse) => data);
}

export default getSingleCareer;
