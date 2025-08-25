import React, { ChangeEvent, useState } from 'react';
import { useFormik } from 'formik';

import { useAppDispatch } from '../../../hook/reduxToolkit';
import CompanyInfoAndLocation from '../../../components/CompanyInfoAndLocation/CompanyInfoAndLocation';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';
import TextField from '../../../components/ContactFormModal/components/TextField';
import onSendCareersFormMessage from '../../../store/careers/onSendCareersFormMessage';
import { ICareersContactForm } from '../../../store/careers/interfaces/ICareersContactForm';
import FileAttachment from '../../../components/ContactFormModal/components/FileAttachment';
import { ColorFileAttachment, FileAttachmentVariant } from '../../../constants/enums';
import fieldsData from '../data/fieldsData.json';
import {
  COUNTRY, EMAIL, FOUND_OUT_US, MESSAGE, PHONE,
} from '../../../constants/constants';
import { getErrorValue } from '../../../utils/helpers';
import careersContactSchema from '../../../validators/careersContactSchema';
import ButtonCareer from 'components/UI/ButtonCareer/ButtonCareer';

import ContactFormBg from '@/images/careers/img_CareerContactBg.webp';
import styles from '../sass/CareersContactForm.module.scss';

function CareerContactForm({ vacancyName }: { vacancyName: string }) {
  const dispatch = useAppDispatch();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    country: '',
    howFoundOutAboutUs: '',
    message: '',
    jobVacancy: vacancyName,
    client: [],
  };

  const formik = useFormik<ICareersContactForm>({
    initialValues,
    validationSchema: careersContactSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      await dispatch(onSendCareersFormMessage(values));
      resetForm({ values: initialValues });
      setUploadedFiles([]);
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
    name,
    email,
    phone,
    country,
    howFoundOutAboutUs,
    message,
    client,
    jobVacancy,
  } = formikValues;

  const submitHandle = () => {
    handleSubmit();
  };

  const fileAttachmentOnChange = async ({ currentTarget: { files } }: ChangeEvent<HTMLInputElement>) => {
    if (files) {
      const filesArray = Array.from(files);
      const newFiles = [...uploadedFiles, ...filesArray];
      setUploadedFiles(newFiles);
      await setFieldValue('client', newFiles);
    }
  };

  const getFieldValue = (nameField: string) => {
    let value;
    switch (nameField) {
      case EMAIL:
        value = email;
        break;
      case PHONE:
        value = phone;
        break;
      case COUNTRY:
        value = country;
        break;
      case FOUND_OUT_US:
        value = howFoundOutAboutUs;
        break;
      case MESSAGE:
        value = message;
        break;
      default:
        value = name;
        break;
    }
    return value;
  };

  const getStyleError = (tag: string) => (tag === 'textarea' ? styles.inputErrorTextArea : styles.inputError);

  return (
    <div className={styles.container}>
      <ImageComponent
        src={ContactFormBg}
        fill
        className={styles.bg}
        sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        alt="background"
      />
      <div className={styles.contactForm}>
        <MainTitle className={styles.heading} tag="h2">Contact form</MainTitle>
        <MainTitle className={styles.description} tag="p">
          To ask for more information about the job position, please fill out the form below
        </MainTitle>
        <div className={styles.inputContainer}>
          {fieldsData.fieldsArray.map((item, index) => (
            <TextField
              key={[item.name, index].join('_')}
              name={item.name}
              value={getFieldValue(item.name)}
              error={getErrorValue(item.name, errors, touched) as string}
              onChange={handleChange}
              onBlurInput={item.tag === 'input' ? handleBlur : undefined}
              onBlurTextArea={item.tag === 'textarea' ? handleBlur : undefined}
              label={item.label}
              isAsterisk={item.isAsterisk}
              className={`${styles[item.styles]} ${getErrorValue(item.name, errors, touched)
                ? getStyleError(item.tag) : ''}`}
              tag={item.tag === 'textarea' ? 'textarea' : 'input'}
            />
          ))}
          <MainTitle className={styles.resumeText} tag="p">
            To apply for the selected job opening, please attach your resume to contact form below
          </MainTitle>
          <TextField
            name="jobVacancy"
            value={jobVacancy}
            error={errors.jobVacancy && touched.jobVacancy ? errors.jobVacancy : ''}
            onChange={handleChange}
            onBlurTextArea={handleBlur}
            label="Job Vacancy"
            className={`${styles.resumeInput} ${errors.jobVacancy ? styles.inputError : ''}`}
            isAsterisk
          />
          <FileAttachment
            onChange={fileAttachmentOnChange}
            name="client"
            value={client}
            formik={formik}
            setUploadedFiles={setUploadedFiles}
            error={errors.client}
            colorType={ColorFileAttachment.WHITE_COLOR}
            variant={FileAttachmentVariant.CAREER_FORM}
          />
          <ButtonCareer
            text="Send"
            onClick={submitHandle}
            disabled={!isValid || Object.keys(touched).length === 0}
          />
        </div>
      </div>
      <CompanyInfoAndLocation />
    </div>
  );
}

export default CareerContactForm;
