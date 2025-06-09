import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hook/reduxToolkit';
import TextField from '../../../components/ContactFormModal/components/TextField';
import { IDownloadFormValues } from '../../../store/app/downloadForm/interfaces/IDownloadForm';
import IDownloadFormProps from '../interfaces/IDownloadFormProps';
import onSendDownloadFormMessage from '../../../store/app/downloadForm/onSendDownloadFormMessage';
import downloadSchema from '../../../validators/downloadSchema';
import { ErrorVariant } from '../../../constants/enums';
import { getFormValues } from '../../../utils/blogsHelpers';
import Modeltype from '../../../constants/Modeltype';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

import styles from '../sass/downloadForm.module.scss';

function DownloadForm({
  salesChannel, variant, mailerliteId,
}: IDownloadFormProps) {
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useAppDispatch();
  const { isLoadingDownloadForm } = useAppSelector((state) => state?.downloadForm);
  const initialValues = {
    name: '',
    email: '',
    company: '',
    phone: '',
    salesChannel: salesChannel || 'Onix Website',
    blogSubscriber: true,
    modeltype: Modeltype.BLOG,
    mailerliteId: mailerliteId || '111162433290110954',
  };

  const formik = useFormik<IDownloadFormValues>({
    initialValues,
    validationSchema: downloadSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      await dispatch(onSendDownloadFormMessage({ values }));
      resetForm({ values: initialValues });
    },
  });

  const {
    values: {
      name,
      email,
      company,
      phone,
    },
    handleSubmit,
    handleBlur,
    handleChange,
    isValid,
  } = formik;

  useEffect(() => {
    const getDisabled = () => {
      setIsDisabled(true);

      if (name && email && company && phone) {
        setIsDisabled(false);
      }
      if (isLoadingDownloadForm) {
        setIsDisabled(true);
      }
    };

    getDisabled();
  }, [name, email, company, phone, isLoadingDownloadForm]);

  return (
    <form className={`${styles.downloadForm} ${variant ? styles[variant] : ''}`}>
      <div className={styles.formFields}>
        {getFormValues(formik).map(({
          id, value, name: fieldName, error, label, className,
        }) => (
          <TextField
            key={id}
            value={value}
            name={fieldName}
            onChange={handleChange}
            error={error}
            label={label}
            className={className}
            isAsterisk
            errorVariant={ErrorVariant.BLOGS}
            onBlurInput={handleBlur}
          />
        ))}
      </div>
      <div className={styles.btnWrapper}>
        <ButtonPrimary
          text="SUBSCRIBE"
          onClick={() => handleSubmit()}
          disabled={isDisabled || !isValid}
        />
      </div>
    </form>
  );
}
export default DownloadForm;
