import { getUrl } from './api';
import { INationalHolidaysList } from '../interfaces/INationalHolidays';

interface IParams {
  [propName:string]:string
}

async function getNationalHolidays(): Promise<INationalHolidaysList> {
  const params: IParams = {
    sort: 'order%3Aasc',
    'fields[0]': 'title',
    'fields[1]': 'year',
    'fields[2]': 'description',
    'populate[holidays][populate]': 'icon',
  };

  const holidaysUrl = getUrl('annual-holidays', params);
  const holidaysResponse = await fetch(holidaysUrl);
  const { data } = await holidaysResponse.json() as INationalHolidaysList;

  return { data };
}
export default getNationalHolidays;
