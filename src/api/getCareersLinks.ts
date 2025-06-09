import { ICareersLinksList } from '../interfaces/IBlogsList';
import getCareerList from './getCareerList';

async function getCareersLinks(): Promise<ICareersLinksList> {
  const careerList = await getCareerList();
  return careerList.map((item) => `${item?.attributes?.url}`) || [];
}

export default getCareersLinks;
