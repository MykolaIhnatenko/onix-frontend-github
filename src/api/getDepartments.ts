import { IDepartmentList } from '../interfaces/ITechnologies';
import { getUrl } from './api';

interface IParams {
  [propName:string]:string
}

async function getDepartments():Promise<IDepartmentList> {
  const params:IParams = {
    'sort[0]': 'order%3Aasc',
    'sort[1]': 'name%3Aasc',
    'fields[0]': 'name',
    'populate[careers]': '[fields][0]=name',
  };

  const designTagUrl = getUrl('departments', params);
  const designTagResponse = await fetch(designTagUrl);
  const { data } = await designTagResponse.json() as IDepartmentList;
  const filterItems = data?.filter((item) => item?.attributes?.careers?.data?.length > 0);
  return { data: filterItems };
}
export default getDepartments;
