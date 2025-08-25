import * as yup from 'yup';

import { emailField, nameField } from 'validators/fields';

const downloadSchema = yup.object({
  name: nameField,
  email: emailField,
  company: yup
    .string()
    .transform((value: string) => value.trim())
    .required('Field is required')
    .min(3, 'Company should be of minimum 3 characters length'),
  phone: yup
    .string()
    .transform((value: string) => value.trim())
    .required('Field is required')
    .matches(/^\+\d{1,15}$/, 'Phone number mast be in format: +XXXXXXXXXXXXXXX'),
});

export default downloadSchema;
