import { useFormik } from 'formik';
import { ChangeEvent, useEffect, useState } from 'react';

import FileAttachment from '../../../components/ContactFormModal/components/FileAttachment';
import Budgies from './Budgies';
import TextField from '../../../components/ContactFormModal/components/TextField';
import contactSchema from '../../../validators/contactSchema';
import onSendFormMessage from '../../../store/app/contactForm/onSendFormMessage';
import { useAppDispatch, useAppSelector } from '../../../hook/reduxToolkit';
import { setIsFormSendFromPage } from '../../../store/app/contactForm/slice';
import MainTitle from '../../../components/MainTitle/MainTitle';
import { INIT_SALES_CHANNEL } from '../../../constants/constants';
import Icon from '../../../assets/icon';
import {
  ColorFileAttachment, ErrorVariant, TextFieldVariant,
} from '../../../constants/enums';
import {
  IContactFormValues,
} from '../../../store/app/contactForm/interfaces/IContactForm';
import IContactFormModal from '../interfaces/IContactFormModal';
import Modeltype from '../../../constants/Modeltype';
import getipAddress from 'api/getipAddress';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';
import ButtonWhite from 'components/UI/ButtonWhite/ButtonWhite';

import styles from '../sass/DTCContactForm.module.scss';

function DTCContactForm({
  salesChannel, resetSpecialistValue, resetTechnologyValue, setDuration, setDomains, specialists,
  technologies, duration, currentDomain, resetAllValues,
}: IContactFormModal) {
  const [uploadedFiles, setUploadedFiles] = useState<Blob[]>([]);
  const dispatch = useAppDispatch();
  const {
    isFormSubmitted,
    isShowContactForm,
  } = useAppSelector((state) => state?.contactForm);

  const objectII = {
    specialists,
    technologies,
    duration,
    currentDomain,
  };

  const initialValues = {
    company: '',
    email: '',
    name: '',
    message: '',
    country: '',
    project: [],
    client: [],
    salesChannel: salesChannel || INIT_SALES_CHANNEL,
    modeltype: Modeltype.DEDICATED_TEAM_CALCULATOR,
    captcha: '',
    referralKey: '',
    leadIp: '',
    additionalInfoField: JSON.stringify(objectII, null),
    lastSource: '',
    leadSource: process.env.NEXT_PUBLIC_BASE_URL as string,
  };
  const [status, setStatus] = useState('options');
  const isOptions = status === 'options';
  const isInformation = status === 'information';
  const clickedValues = () => {
    const result: { [key:string]: number | string } = {};

    Object.keys(specialists).forEach((specialist) => {
      if (specialists[specialist as keyof typeof specialists]) {
        result[specialist] = specialists[specialist as keyof typeof specialists];
      }
    });

    Object.keys(technologies).forEach((direction) => (
      Object.keys(technologies[direction as keyof typeof technologies]).forEach((technology) => {
        if (technologies[direction as keyof typeof technologies][technology]) {
          result[technology] = technologies[direction as keyof typeof technologies][technology];
        }
      })
    ));
    if (duration) {
      result.duration = duration;
    }
    if (currentDomain) {
      result.domain = currentDomain;
    }

    return result;
  };
  const isEmptyValues = Object.keys(clickedValues()).length === 0;

  const formik = useFormik<IContactFormValues>({
    initialValues,
    validationSchema: contactSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      await dispatch(onSendFormMessage({ values, additionalValues: clickedValues() }));
      resetForm({ values: initialValues });
      resetAllValues();
    },
  });

  const {
    values: formikValues,
    errors,
    touched,
    setFieldValue,
    handleSubmit,
    handleBlur,
    handleChange,
    isValid,
  } = formik;

  const {
    email, name, country, company, client, message, additionalInfoField,
  } = formikValues;

  const fileAttachmentOnChange = async ({ currentTarget: { files } }: ChangeEvent<HTMLInputElement>) => {
    if (files) {
      const filesArray = Array.from(files);
      const newFiles = [...uploadedFiles, ...filesArray];
      setUploadedFiles(newFiles);
      await setFieldValue('client', newFiles);
    }
  };

  const onClickHandler = () => {
    if (!isShowContactForm) {
      dispatch(setIsFormSendFromPage({ isFormSendFromPage: true }));
    }
    handleSubmit();
  };

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
    if (isFormSubmitted) {
      formikValues.project = [];
    }
  }, [isFormSubmitted, formikValues]);

  const isValidBtn = isOptions ? undefined : !isValid;

  return (
    <form
      className={styles.form}
      onSubmit={
        (event) => {
          event.preventDefault();
          onClickHandler();
        }
      }
    >
      <div className={styles.statusBlock}>
        <div className={styles.line} />
        <div className={styles.textStatusWrap}>
          <div className={isOptions ? styles.active : ''}>
            Options
            <div className={`${styles.circle} ${isOptions ? styles.active : ''}`} />
          </div>
          <div className={isInformation ? styles.active : ''}>
            Information
            <div className={`${styles.circle} ${isInformation ? styles.active : ''}`} />
          </div>
        </div>
      </div>
      <MainTitle tag="h4" className={styles.formTitle}>
        Start your project with Onix
      </MainTitle>
      {
        isEmptyValues && (
          <div className={styles.info}>
            <Icon.IconCalculator className={styles.icon} />
            <MainTitle tag="p">
              Select from available options
              on the left to get your pricing
            </MainTitle>
          </div>
        )
      }
      <div style={{ display: isInformation ? 'none' : 'block' }}>
        <Budgies
          resetSpecialistValue={resetSpecialistValue}
          resetTechnologyValue={resetTechnologyValue}
          setDuration={setDuration}
          setDomains={setDomains}
          specialists={specialists}
          technologies={technologies}
          duration={duration}
          currentDomain={currentDomain}
        />
      </div>
      <div className={styles.formContainer} style={{ display: isOptions ? 'none' : 'block' }}>
        <div className={styles.formFields}>
          <TextField
            name="name"
            value={name}
            error={touched.name && errors.name}
            onChange={handleChange}
            onBlurInput={handleBlur}
            className={styles.name}
            isAsterisk
            label="Your Name"
            errorVariant={ErrorVariant.DTC_FORM_ERROR}
            focusOnName={status === 'information'}
          />
          <TextField
            name="email"
            onChange={handleChange}
            onBlurInput={handleBlur}
            value={email}
            error={touched.email && errors.email}
            isAsterisk
            label="Your Email"
            className={styles.email}
            errorVariant={ErrorVariant.DTC_FORM_ERROR}
          />
          <TextField
            name="company"
            onChange={handleChange}
            onBlurInput={handleBlur}
            className={styles.company}
            label="Company"
            value={company}
            errorVariant={ErrorVariant.DTC_FORM_ERROR}
          />
          <TextField
            className={styles.country}
            name="country"
            value={country}
            label="Country"
            onChange={handleChange}
            onBlurInput={handleBlur}
            errorVariant={ErrorVariant.DTC_FORM_ERROR}
          />
          <TextField
            name="message"
            value={message}
            error={touched.message && errors.message}
            onChange={handleChange}
            onBlurTextArea={handleBlur}
            className={styles.details}
            label="Project Details"
            tag="textarea"
            isAsterisk
            errorVariant={ErrorVariant.DTC_FORM_DESCRIPTION_ERROR}
          />
          <TextField
            name="additionalInfoField"
            onChange={() => {}}
            value={additionalInfoField}
            isAsterisk
            label="additionalInfoField"
            classVariant={TextFieldVariant.ADDITIONAL_INFO}
          />
        </div>
        <FileAttachment
          onChange={fileAttachmentOnChange}
          name="client"
          formik={formik}
          value={client}
          error={errors.client}
          setUploadedFiles={setUploadedFiles}
          colorType={ColorFileAttachment.CALCULATOR}
        />
      </div>
      <div className={styles.btnWrapper}>
        <ButtonWhite
          disabled={isEmptyValues}
          text={isOptions ? 'Clear All' : 'Back'}
          onClick={isOptions ? resetAllValues : () => setStatus('options')}
          hasArrow={false}
        />
        {isOptions ? (
          <ButtonPrimary
            disabled={isEmptyValues || isValidBtn}
            hasArrow={false}
            text="Next"
            onClick={() => setStatus('information')}
          />
        ) : (
          <ButtonPrimary
            disabled={isEmptyValues || isValidBtn}
            hasArrow={false}
            text="Get pricing"
            typeButton="submit"
          />
        )}
      </div>
    </form>
  );
}

export default DTCContactForm;
