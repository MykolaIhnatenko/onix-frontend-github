/* eslint-disable no-console */
import { getUrl } from './api';
import { IRedirect, IRedirectResponse } from '../interfaces/IRedirectResponse';

async function fetchWithRetry(url: string, options: RequestInit, retries = 3): Promise<Response> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
  } catch (error) {
    if (retries > 0) {
      return fetchWithRetry(url, options, retries - 1);
    }
    if (error instanceof Error) {
      throw new Error(`Failed to fetch after multiple retries: ${error.message}`);
    } else {
      throw new Error('Failed to fetch after multiple retries due to an unknown error');
    }
  }
}

async function getSingleRedirect(path: string): Promise<IRedirect> {
  const params = { 'filters[url][$eq]': path };
  const redirectUrl = getUrl('redirects', params);

  try {
    const response = await fetchWithRetry(redirectUrl, { method: 'GET' });
    const { data } = await response?.json() as IRedirectResponse;

    return data[0] || {};
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching redirect:', error.message);
    } else {
      console.error('Error fetching redirect due to an unknown error');
    }
    return {};
  }
}

export default getSingleRedirect;
