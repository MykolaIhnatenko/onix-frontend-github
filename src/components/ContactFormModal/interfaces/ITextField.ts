import { ChangeEvent, FocusEventHandler } from 'react';
import { FormikErrors, FormikTouched } from 'formik';

import { IContactFormValues } from '../../../store/app/contactForm/interfaces/IContactForm';
import { ErrorVariant, TextFieldVariant } from '../../../constants/enums';

export default interface ITextField {
  className?: string;
  value?: string;
  error?: string | boolean | FormikTouched<Blob>[];
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) =>
  Promise<void> | Promise<FormikErrors<IContactFormValues>> | void;
  onBlurInput?: FocusEventHandler<HTMLInputElement>;
  onBlurTextArea?: FocusEventHandler<HTMLTextAreaElement>;
  label: string;
  isAsterisk?: boolean;
  tag?: 'textarea' | 'input';
  errorVariant?: ErrorVariant;
  spanTop?: boolean;
  focusOnName?: boolean;
  classVariant?: TextFieldVariant;
  id?: 'focus' | 'unfocused';
}
