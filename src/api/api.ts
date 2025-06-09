import IPageResponse from 'interfaces/IPageResponse';
import { BACKEND_URL } from '../constants/constants';
import { IBlogsResponse, IProjectsResponse } from '../interfaces/IProjectsList';
import IRatingData from '../interfaces/IRatingData';
import IRatingDataResponse from '../interfaces/IRatingDataResponse';

export const getUrl = (prefix:string, params = {}, baseUrl = `${BACKEND_URL}/api/`) => {
  const queries = new URLSearchParams(params);
  const url = new URL(prefix, baseUrl);
  url.search = decodeURIComponent(queries.toString());
  return url.toString();
};

export async function getGoogleReview():Promise<IRatingData> {
  const url = getUrl('google-review');
  const response = await fetch(url);
  const { data: { attributes } = {} } = await response.json() as IRatingDataResponse;
  return attributes || { rating: 0, total_reviews: 0 };
}

export async function getSingleAnnualHoliday(year:string) {
  const params = {
    'filters[url][$eq]': year,
    'populate[0]': 'picture',
    'fields[0]': 'title',
    'fields[1]': 'keywords',
    'fields[2]': 'description',
    'fields[3]': 'canonical',
    'fields[4]': 'text',
  };
  const holidayUrl = getUrl('annual-holidays', params);
  const holidayResponse = await fetch(holidayUrl);

  return holidayResponse.json();
}

export async function getProjectsByIds(ids: number[]) {
  const params = {
    'fields[0]': 'header',
    'fields[1]': 'description',
    'populate[picture]': '%2A',
    'populate[page][fields][0]': 'url',
  };
  ids.forEach((id, index) => {
    Object.assign(params, { [`filters[id][$in][${index}]`]: id });
  });
  const projectUrl = getUrl('projects', params);
  try {
    const projectResponse = await fetch(projectUrl);
    const { data: projects } = await projectResponse.json() as IProjectsResponse;

    return projects;
  } catch (_) {
    return [];
  }
}

export const getLatestBlogs = async (path: string, activeBlogUrl = '', activeCategory = '') => {
  const params = {
    'filters[url][$eq]': path,
    'populate[picture]': '%2A',
    'populate[popularBlogs][populate][0]': 'picture',
    'populate[popularBlogs][fields][0]': 'url',
    'populate[popularBlogs][fields][1]': 'title',
    'populate[popularBlogs][fields][2]': 'id',
  };
  const popularBlogsUrl = getUrl('pages', params);

  const popularBlogsResponse = await fetch(popularBlogsUrl);

  const { data } = await popularBlogsResponse.json() as IPageResponse;

  const popularBlogs = data[0].attributes?.popularBlogs?.data;

  if (popularBlogs === undefined || popularBlogs.length <= 0) {
    const paramsLatestBlogs = {
      sort: 'publishedAt%3Adesc',
      'pagination[limit]': 3,
      'populate[0]': 'picture',
      'populate[1]': 'categories',
      'filters[url][$notIn][0]': activeBlogUrl,
      'filters[categories][url][$eq][1]': activeCategory,
    };

    const latestBlogsUrl = getUrl('blogs', paramsLatestBlogs);
    const latestBlogsResponse = await fetch(latestBlogsUrl);
    const { data: latestBlogs } = await latestBlogsResponse.json() as IBlogsResponse;

    return latestBlogs.map(({ attributes }) => ({
      url: attributes?.url,
      picture: attributes?.picture,
      title: attributes?.title,
    }));
  }

  return popularBlogs.map(({ attributes }) => ({
    url: attributes?.url,
    picture: attributes?.picture,
    title: attributes?.title,
  }));
};
