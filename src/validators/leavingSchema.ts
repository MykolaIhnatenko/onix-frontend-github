import * as yup from 'yup';

const leavingSchema = yup.object({
  company: yup
    .string()
    .transform((value: string) => value.trim()),
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
  message: yup
    .string()
    .transform((value: string) => value.trim())
    .required('Field is required')
    .min(8, 'Details should be of minimum 8 characters length'),
});

export default leavingSchema;
