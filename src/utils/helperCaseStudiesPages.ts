import getSeoData from '../api/getSeoData';
import { getGoogleReview, getLatestBlogs } from '../api/api';

const getDataPage = async (path: string) => {
  const seoData = await getSeoData({ page: path });
  const latestBlogs = await getLatestBlogs(path, '', 'virtual-and-augmented-reality');
  const ratingData = await getGoogleReview();
  return {
    seoData, latestBlogs, ratingData,
  };
};

export default getDataPage;
