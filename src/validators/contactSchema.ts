import * as yup from 'yup';

import { MAX_FILE_SIZE, ALLOWED_FILES_EXTENSIONS } from '../constants/constants';

const contactSchema = yup.object({
  email: yup
    .string()
    .transform((value: string) => value.trim())
    .email('Enter a valid email')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Enter a valid email')
    .matches(/^(?!.*@(mailinator|exblog)\..*$)/, 'Blacklisted domain in email')
    .required('Field is required'),
  name: yup
    .string()
    .transform((value: string) => value.trim())
    .required('Field is required')
    .min(3, 'Name should be of minimum 3 characters length'),
  company: yup
    .string()
    .transform((value: string) => value.trim())
    .required('Field is required'),
  country: yup
    .string()
    .transform((value: string) => value.trim()),
  message: yup
    .string()
    .transform((value: string) => value.trim())
    .required('Field is required')
    .min(8, 'Details should be of minimum 8 characters length'),
  client: yup
    .array()
    .test(
      'file-size',
      'The attached file must be less than 5 MB and be in PNG, JPEG, DOC, PDF format. Maximum of 3 attached files',
      (files) => {
        if (!files) return true;

        return files.every((file: File) => file.size <= MAX_FILE_SIZE);
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
      'file-count',
      'The attached file must be less than 5 MB and be in PNG, JPEG, DOC, PDF format. Maximum of 3 attached files',
      (files) => {
        if (!files) return true;

        return files.length <= 3;
      },
    )
    .test(
      'same-files',
      'Files must be unique',
      (files) => {
        let value = true;
        if (!files) {
          value = true;
        }

        const seenFiles = new Set();

        files?.forEach((file: File) => {
          const fileIdentifier = `${file.name}_${file.size}`;

          if (seenFiles.has(fileIdentifier)) {
            value = false;
          } else {
            seenFiles.add(fileIdentifier);
            value = true;
          }
        });

        return value;
      },
    ),
});

export default contactSchema;
