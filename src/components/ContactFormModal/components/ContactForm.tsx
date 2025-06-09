import { useFormik } from 'formik';
import {
  ChangeEvent, useEffect, useRef, useState,
} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { useAppDispatch, useAppSelector } from '../../../hook/reduxToolkit';
import FileAttachment from './FileAttachment';
import SubtitleReferral from './SubtitleReferral';
import TextField from './TextField';
import BadgesList from './BadgesList';
import onSendFormMessage from '../../../store/app/contactForm/onSendFormMessage';
import inputData from '../data/inputData.json';
import contactSchema from '../../../validators/contactSchema';
import { setIsFormSendFromPage, setModeltype } from '../../../store/app/contactForm/slice';
import { getErrorValue } from 'utils/helpers';
import getipAddress from 'api/getipAddress';
import { GOOGLE_RE_CAPTCHA_KEY } from '../../../constants/constants';
import Modeltype from 'constants/Modeltype';
import { ErrorVariant, FileAttachmentVariant } from 'constants/enums';
import IContactFormModal from '../interfaces/IContactFormModal';
import { IContactFormValues } from '../../../store/app/contactForm/interfaces/IContactForm';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

import styles from '../sass/contactForm.module.scss';

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

function ContactForm({
  salesChannel, modeltypeProps, isReferralPage, id,
}: IContactFormModal) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [uploadedFiles, setUploadedFiles] = useState<Blob[]>([]);
  const [captchaValue, setCaptchaValue] = useState('');

  const dispatch = useAppDispatch();
  const {
    isFormSubmitted,
    isShowContactForm,
    isLoadingContactForm,
    modeltype,
  } = useAppSelector((state) => state?.contactForm);

  const initialValues = {
    name: '',
    email: '',
    company: '',
    country: '',
    message: '',
    client: [],
    project: [],
    salesChannel: salesChannel || 'Onix Website',
    modeltype: modeltypeProps || modeltype,
    captcha: captchaValue,
    referralKey: '',
    leadIp: '',
    lastSource: '',
    leadSource: process.env.NEXT_PUBLIC_BASE_URL as string,
  };
  const formik = useFormik<IContactFormValues>({
    initialValues,
    validationSchema: contactSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      await dispatch(onSendFormMessage({ values }));
      resetForm({ values: initialValues });
      dispatch(setModeltype({ modeltype: Modeltype.CONTACT_FORM_POP_UP }));
      recaptchaRef.current?.reset();
      setCaptchaValue('');
    },
  });
  const {
    values: formikValues,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    isValid,
  } = formik;

  const {
    message,
    client,
  } = formikValues;

  useEffect(() => {
    if (isFormSubmitted) {
      formikValues.project = [];
    }
  }, [formikValues, isFormSubmitted]);

  useEffect(() => {
    const checkReferral = async () => {
      const key = sessionStorage.getItem('referralKey');
      if (key) {
        const ip = await getipAddress();
        initialValues.leadIp = ip;
        initialValues.referralKey = key;
      }
    };
    checkReferral().catch(() => {});
    formikValues.lastSource = window.location.href;
  }, []);

  useEffect(() => {
    formikValues.salesChannel = salesChannel || 'Onix Website';
  }, [salesChannel]);

  const fileAttachmentOnChange = async ({ currentTarget: { files } }: ChangeEvent<HTMLInputElement>) => {
    if (files) {
      const filesArray = Array.from(files);
      const newFiles = [...uploadedFiles, ...filesArray];
      setUploadedFiles(newFiles);
      await setFieldValue('client', newFiles);
    }
  };

  const onChangeHandler = async (value : string | null) => {
    setCaptchaValue(value || '');
    await setFieldValue('captcha', value);
  };
  const onClickHandler = () => {
    if (!isShowContactForm) {
      dispatch(setIsFormSendFromPage({ isFormSendFromPage: true }));
    }

    handleSubmit();
  };

  return (
    <form
      id="contactForm"
      className={`d-flex ${styles.form} ${isReferralPage ? styles.referralForm : ''}`}
    >
      {isReferralPage ? <SubtitleReferral /> : <BadgesList formik={formik} /> }
      <div className={styles.formFields}>
        <div className={styles.inputFlex}>
          {inputData.map(({ isAsterisk, label, inputName }, index) => (
            <TextField
              key={[inputName, index].join('__')}
              value={formikValues[inputName as keyof typeof formikValues] as string}
              name={inputName}
              onChange={handleChange}
              onBlurInput={handleBlur}
              error={getErrorValue(inputName, errors, touched) as string}
              label={label}
              className={styles[inputName]}
              isAsterisk={isAsterisk}
              errorVariant={ErrorVariant.CONTACT_FORM}
              id={id}
            />
          ))}
        </div>
        <TextField
          value={message}
          name="message"
          onChange={handleChange}
          onBlurTextArea={handleBlur}
          error={touched.message && errors.message}
          label={isReferralPage ? 'Referral Details' : 'Project Details'}
          className={styles.details}
          isAsterisk
          tag="textarea"
          spanTop
          errorVariant={ErrorVariant.DESCRIPTION_ERROR}
        />
      </div>
      <FileAttachment
        onChange={fileAttachmentOnChange}
        name="client"
        value={client}
        formik={formik}
        setUploadedFiles={setUploadedFiles}
        error={errors.client}
        variant={FileAttachmentVariant.CONTACT_FORM}
      />
      <ReCAPTCHA
        ref={recaptchaRef}
        onChange={(value) => onChangeHandler(value)}
        sitekey={GOOGLE_RE_CAPTCHA_KEY}
        hl="en"
        className={styles.captcha}
      />
      <div className={styles.btnWrapper} style={{ cursor: !captchaValue || !isValid ? 'not-allowed' : 'pointer' }}>
        <ButtonPrimary
          text={isReferralPage ? 'SUBMIT REFERRAL' : 'Get in touch'}
          onClick={onClickHandler}
          disabled={!isValid || isLoadingContactForm || !captchaValue}
        />
      </div>
    </form>
  );
}

export default ContactForm;
