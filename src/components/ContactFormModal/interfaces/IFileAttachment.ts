import { ChangeEvent } from 'react';
import { FormikErrors, FormikProps } from 'formik';

import { IContactFormValues } from '../../../store/app/contactForm/interfaces/IContactForm';
import { ICareersContactForm } from '../../../store/careers/interfaces/ICareersContactForm';
import { ColorFileAttachment, FileAttachmentVariant } from '../../../constants/enums';

export default interface IFileAttachment {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void> | Promise<FormikErrors<IContactFormValues>>;
  value: Blob[];
  formik: FormikProps<IContactFormValues> | FormikProps<ICareersContactForm>;
  setUploadedFiles: (files: Blob[]) => void;
  error?: string | string[] | FormikErrors<Blob>[];
  colorType?: ColorFileAttachment;
  variant?: FileAttachmentVariant;
}
