import { FormikErrors, FormikTouched } from 'formik';

import { ErrorVariant } from '../../../constants/enums';

export interface IError {
  error: string | boolean | string[] | FormikErrors<Blob>[] | FormikTouched<Blob>[];
  variant?: ErrorVariant;
  isJakarta?: boolean;
}
