import { createAsyncThunk } from '@reduxjs/toolkit';

import { clientIdGA, sourseBusterData } from '../../../utils/customerJourneyMap';
import { IAdditionalValues, IContactFormSendValues, IContactFormValues } from './interfaces/IContactForm';
import IStore from '../../interfaces/IStore';

const onSendFormMessage = createAsyncThunk(
  'app/onSendFormMessage',
  async ({ values, additionalValues }:
  { values: IContactFormValues, additionalValues?: IAdditionalValues }, { rejectWithValue, getState }) => {
    const { client, ...restValues } = values;
    const { leavingForm, contactForm } = getState() as IStore;
    try {
      const formData = new FormData();
      const sbData = sourseBusterData();
      const formattedValues: IContactFormSendValues = {
        ...restValues,
        project: values.project.join(', '),
      };

      Object.keys(formattedValues).forEach((key) => {
        const value = formattedValues[key as keyof typeof restValues];
        if (value !== undefined) {
          formData.set(key, value);
        }
      });

      client.forEach((clientFile) => (
        formData.append('client', clientFile)
      ));

      Object.keys(sbData).forEach((key) => {
        formData.append(key, sbData[key as keyof typeof sbData]);
      });
      formData.append('clientIdGA', clientIdGA());
      if (additionalValues) {
        formData.append('additionalInfo', JSON.stringify(additionalValues, null, '\u00A0\u00A0\u00A0\u00A0'));
      }

      const data = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND as string}/api/leads/register`,
        { method: 'POST', body: formData },
      );

      if (!data.ok) {
        throw new Error('error');
      }

      return {
        data: data.ok,
        isShowContact: contactForm.isShowContactForm,
        isShowLeaving: leavingForm.isShowLeavingForm,
        salesChannel: values.salesChannel,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export default onSendFormMessage;
