/* eslint-disable no-console */
import IFooterContentResponse from 'interfaces/IFooterContentResponse';
import { getUrl } from './api';

export default async function getFooterContent() {
  const params = {
    'populate[topFields][populate][links]': 'topFields',
    'populate[bottomFields][populate][links]': 'bottomFields',
  };

  const pageUrl = getUrl('footer-content', params);

  try {
    const response = await fetch(pageUrl);
    const { data } = await response.json() as IFooterContentResponse;
    return data?.attributes || {};
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching:', error.message);
    } else {
      console.error('Error fetching due to an unknown error');
    }
    return { id: 105 };
  }
}
