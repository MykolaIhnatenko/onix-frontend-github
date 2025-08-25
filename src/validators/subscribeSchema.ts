import * as yup from 'yup';

import { emailField, nameField } from 'validators/fields';

const subscribeSchema = yup.object({
  name: nameField,
  email: emailField,
});

export default subscribeSchema;
