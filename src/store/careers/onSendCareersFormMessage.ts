import { createAsyncThunk } from '@reduxjs/toolkit';

import { ICareersContactForm } from './interfaces/ICareersContactForm';
import Modeltype from '../../constants/Modeltype';

const onSendCareersFormMessage = createAsyncThunk(
  'careers/onSendCareersFormMessage',
  async (values: ICareersContactForm, { rejectWithValue }) => {
    try {
      const {
        name, message, email, howFoundOutAboutUs, jobVacancy, country, phone, client,
      } = values;
      const formData = new FormData();
      formData.append('salesChannel', 'careers');
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('country', country);
      formData.append('howFoundOutAboutUs', howFoundOutAboutUs);
      formData.append('jobVacancy', jobVacancy);
      formData.append('message', message);
      formData.append('modeltype', Modeltype.CAREERS_FORM);

      client.forEach((clientFile) => (
        formData.append('client', clientFile)
      ));

      const data = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND as string}/api/careers/send`,
        {
          method: 'POST',
          body: formData,
        },
      );

      return data.ok;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export default onSendCareersFormMessage;
