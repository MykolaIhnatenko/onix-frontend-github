import { FormikProps } from 'formik';

import { IContactFormValues } from '../../../store/app/contactForm/interfaces/IContactForm';

export interface IContactFormBadges {
  formik: FormikProps<IContactFormValues>;
}
