import * as yup from 'yup';

export const nameField = yup
  .string()
  .transform((value: string) => value.trim())
  .required('Field is required')
  .min(3, 'Name should be of minimum 3 characters length');

export const emailField = yup
  .string()
  .transform((value: string) => value.trim())
  .email('Enter a valid email')
  .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Enter a valid email')
  .matches(/^(?!.*@(mailinator|exblog)\..*$)/, 'Blacklisted domain in email')
  .required('Field is required');
