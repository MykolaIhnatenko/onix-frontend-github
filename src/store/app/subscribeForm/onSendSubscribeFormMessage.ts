import { createAsyncThunk } from '@reduxjs/toolkit';

import { clientIdGA, sourseBusterData } from '../../../utils/customerJourneyMap';
import { ISubscribeFormSendValues, ISubscribeFormValues } from './interfaces/ISubscribeForm';
import blogsFormThankHelper from '../../../utils/blogsFormThankHelper';
import PagesToSalesChannels from '../../../constants/PageToSalesChannels';

interface ISendSubscribeFormMessage {
  values: ISubscribeFormValues;
  convertedCategories?: {
    title: string;
    mailerliteId: string;
  }[];
}

const onSendSubscribeFormMessage = createAsyncThunk(
  'app/onSendSubscribeFormMessage',
  async ({ values, convertedCategories }: ISendSubscribeFormMessage, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      const sbData = sourseBusterData();
      const formattedValues: ISubscribeFormSendValues = {
        ...values,
        topics: values.topics.join(', '),
      };

      Object.keys(formattedValues).forEach((key) => {
        formData.set(key, formattedValues[key as keyof typeof values]);
      });

      Object.keys(sbData).forEach((key) => {
        formData.append(key, sbData[key as keyof typeof sbData]);
      });
      formData.append('clientIdGA', clientIdGA());
      const {
        name, email, company, topics, salesChannel,
      } = values;

      const getGroups = () => {
        if (salesChannel === PagesToSalesChannels.BLOG_SUBSCRIPTION_EBOOK_ARTICLE) return ['111162433290110954'];
        if (topics.length === 0) return ['73933072378103795'];
        if (typeof convertedCategories === 'undefined') return ['73933072378103795'];

        return convertedCategories.filter((
          { title },
        ) => topics.includes(title)).map(({ mailerliteId }) => mailerliteId);
      };

      const subscriber = {
        email,
        fields: {
          name,
          company,
        },
        groups: getGroups(),
      };

      const { data, subscribeData } = await blogsFormThankHelper(formData, subscriber);

      if (data.ok && subscribeData.ok) {
        return true;
      }
      return rejectWithValue('Error');
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export default onSendSubscribeFormMessage;
