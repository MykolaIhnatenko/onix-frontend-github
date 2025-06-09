import { getUrl } from './api';
import { IBlogsLinksList } from '../interfaces/IBlogsList';

async function getBlogsLinks(): Promise<IBlogsLinksList> {
  const url = getUrl('blogs/links');
  const response = await fetch(url);
  const data = await response.json() as IBlogsLinksList;

  return data || [];
}

export default getBlogsLinks;
