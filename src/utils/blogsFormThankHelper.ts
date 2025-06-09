interface ISubscriber {
  email: string;
  fields: {
    name: string;
    company?: string;
    phone?: string;
  },
  groups?: string[];
}
const blogsFormThankHelper = async (formData: FormData, subscriber: ISubscriber) => {
  const apiKey = process.env.NEXT_PUBLIC_MAILER_LITE_API_TOKEN as string;
  const baseUrl = process.env.NEXT_PUBLIC_MAILER_LITE_BASE_URL as string;
  const url = `${baseUrl}api/subscribers`;
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  };

  const [data, subscribeData] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND as string}/api/leads/register`,
      { method: 'POST', body: formData },
    ),
    fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(subscriber),
    }),
  ]);

  return { data, subscribeData };
};

export default blogsFormThankHelper;
