import * as yup from 'yup';

import { ALLOWED_FILES_EXTENSIONS, MAX_FILE_SIZE } from '../constants/constants';
import { emailField, nameField } from 'validators/fields';

const careersContactSchema = yup.object({
  name: nameField,
  email: emailField,
  phone: yup
    .string()
    .transform((value: string) => value.trim())
    .required('Field is required'),
  country: yup
    .string()
    .transform((value: string) => value.trim())
    .required('Field is required'),
  howFoundOutAboutUs: yup.string()
    .required('Field is required'),
  message: yup.string().required('Field is required'),
  jobVacancy: yup.string().required('Field is required'),
  client: yup
    .array()
    .test(
      'file-count',
      'The attached file must be less than 5 MB and be in PNG, JPEG, DOC, PDF format. Maximum of 3 attached files',
      (files) => {
        if (!files) return true;

        return files.length <= 3;
      },
    )
    .test(
      'file-extension',
      'The attached file must be less than 5 MB and be in PNG, JPEG, DOC, PDF format. Maximum of 3 attached files',
      (files) => {
        if (!files) return true;
        const allowedFilesExtensionsRegex = new RegExp(`\\.(${ALLOWED_FILES_EXTENSIONS.join('|')})$`, 'i');

        return files.every((file: File) => allowedFilesExtensionsRegex.test(file.name));
      },
    )
    .test(
      'file-size',
      'The attached file must be less than 5 MB and be in PNG, JPEG, DOC, PDF format. Maximum of 3 attached files',
      (files) => {
        if (!files) return true;

        return files.every((file: File) => file.size <= MAX_FILE_SIZE);
      },
    ),
});

export default careersContactSchema;
