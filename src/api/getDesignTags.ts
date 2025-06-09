import { IDesignTagList } from '../interfaces/ITechnologies';
import { getUrl } from './api';

interface IParams {
  [propName:string]:string
}

async function getDesignTags():Promise<IDesignTagList> {
  const params:IParams = {
    sort: 'order%3Aasc',
    'fields[0]': 'name',
  };

  const designTagUrl = getUrl('design-tags', params);
  const designTagResponse = await fetch(designTagUrl);
  const { data } = await designTagResponse?.json() as IDesignTagList;
  return { data };
}
export default getDesignTags;
