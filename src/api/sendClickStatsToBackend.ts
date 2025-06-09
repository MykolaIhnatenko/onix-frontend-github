import { getUrl } from './api';

interface IData {
  data: {
    type: string,
    name: string,
    from: string,
    fromSalesChannel: string,
    to: string,
    publishedAt: Date,
  }
}
async function sendClickStatsToBackend(data: IData) {
  const url = getUrl('click-stats');
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export default sendClickStatsToBackend;
