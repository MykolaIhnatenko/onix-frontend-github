import { createAsyncThunk } from '@reduxjs/toolkit';

import { clientIdGA, sourseBusterData } from '../../../utils/customerJourneyMap';
import { IDownloadFormValues } from './interfaces/IDownloadForm';
import blogsFormThankHelper from '../../../utils/blogsFormThankHelper';
import blacklistedEmails from 'constants/blacklistedEmails';

const onSendDownloadFormMessage = createAsyncThunk(
  'app/onSendDownloadFormMessage',
  async ({ values }: { values: IDownloadFormValues }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      const sbData = sourseBusterData();
      const isBlacklisted = blacklistedEmails.includes(values.email.trim().toLowerCase());
      if (isBlacklisted) {
        return {
          data: true,
        };
      }

      Object.keys(values).forEach((key) => {
        formData.set(key, values[key as keyof typeof values]);
      });

      Object.keys(sbData).forEach((key) => {
        formData.append(key, sbData[key as keyof typeof sbData]);
      });
      formData.append('clientIdGA', clientIdGA());

      const {
        name, email, company, phone, mailerliteId,
      } = values;

      const subscriber = {
        email,
        fields: {
          name,
          company,
          phone,
        },
        groups: [mailerliteId],
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

export default onSendDownloadFormMessage;
