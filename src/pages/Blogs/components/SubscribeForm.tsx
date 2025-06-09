import { useFormik } from 'formik';

import ISubscribeFormProps from '../interfaces/ISubscribeFormProps';
import onSendSubscribeFormMessage from '../../../store/app/subscribeForm/onSendSubscribeFormMessage';
import { useAppDispatch, useAppSelector } from '../../../hook/reduxToolkit';
import subscribeSchema from '../../../validators/subscribeSchema';
import TextField from '../../../components/ContactFormModal/components/TextField';
import { ISubscribeFormValues } from '../../../store/app/subscribeForm/interfaces/ISubscribeForm';
import Topics from './Topics';
import { ErrorVariant } from '../../../constants/enums';
import { getFormValues } from '../../../utils/blogsHelpers';
import Modeltype from '../../../constants/Modeltype';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

import styles from '../sass/subscribeForm.module.scss';

function SubscribeForm({
  salesChannel, categories, variant, idFocus,
}: ISubscribeFormProps) {
  const dispatch = useAppDispatch();
  const { isLoadingSubscribeForm } = useAppSelector((state) => state?.subscribeForm);
  const initialValues = {
    name: '',
    email: '',
    topics: [],
    company: '',
    salesChannel: salesChannel || 'Onix Website',
    blogSubscriber: true,
    modeltype: Modeltype.BLOG,
  };

  const convertedCategories = categories?.data?.map((
    { attributes: { title, mailerliteId } },
  ) => ({ title, mailerliteId: mailerliteId?.toString() || '' }));

  const formik = useFormik<ISubscribeFormValues>({
    initialValues,
    validationSchema: subscribeSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      await dispatch(onSendSubscribeFormMessage({ values, convertedCategories }));
      resetForm({ values: initialValues });
    },
  });

  const {
    values: {
      topics,
    },
    handleSubmit,
    handleBlur,
    handleChange,
    isValid,
    touched,
  } = formik;

  return (
    <form className={`${styles.subscribeForm} ${variant ? styles[variant] : ''}`}>
      <div className={styles.formFields}>
        {getFormValues(formik, variant).map(({
          id, value, name: fieldName, error, label, className, isAsterisk,
        }) => (
          <TextField
            key={id}
            value={value}
            name={fieldName}
            onChange={handleChange}
            error={error}
            label={label}
            className={className}
            isAsterisk={isAsterisk}
            errorVariant={ErrorVariant.BLOGS}
            onBlurInput={handleBlur}
            id={idFocus}
          />
        ))}
      </div>
      {!variant && (
        <Topics categories={categories} formik={formik} values={topics} />
      )}
      <div className={styles.btnWrapper}>
        <ButtonPrimary
          text="SUBSCRIBE"
          onClick={() => handleSubmit()}
          disabled={isLoadingSubscribeForm || !isValid || Object.keys(touched).length === 0}
        />
      </div>
    </form>
  );
}
export default SubscribeForm;
