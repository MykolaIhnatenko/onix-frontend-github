import { getUrl } from './api';
import IOnixStatusPage from '../interfaces/IStatusPage';

export interface IOnixStatusResponse {
  data: IOnixStatusPage;
}

async function getStatusPage(): Promise<IOnixStatusPage> {
  const onixStatusUrl = getUrl('onix-status');
  const onixStatusResponse = await fetch(onixStatusUrl);
  const { data } = await onixStatusResponse.json() as IOnixStatusResponse;

  return data;
}

export default getStatusPage;
