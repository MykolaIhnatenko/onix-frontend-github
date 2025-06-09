import * as yup from 'yup';

const downloadSchema = yup.object({
  name: yup
    .string()
    .transform((value: string) => value.trim())
    .required('Field is required')
    .min(3, 'Name should be of minimum 3 characters length'),
  email: yup
    .string()
    .transform((value: string) => value.trim())
    .email('Enter a valid email')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Enter a valid email')
    .matches(/^(?!.*@(mailinator|exblog)\..*$)/, 'Blacklisted domain in email')
    .required('Field is required'),
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
