import { FormikProps } from 'formik';

import { ICaseStudiesData } from '../components/ScrollSliderDefault/interfaces/IScrollSliderDefault';
import IBlog from '../interfaces/IBlog';
import { IOurInsightBlog } from '../components/OurInsightsSection/interfaces/interfaces';
import { IDownloadFormValues } from '../store/app/downloadForm/interfaces/IDownloadForm';
import { ISubscribeFormValues } from '../store/app/subscribeForm/interfaces/ISubscribeForm';
import getBlogsByIds from 'api/getBlogsByIds';
import ISeoData from 'interfaces/ISeoData';
import { ISubscribeFormMainValues } from '../store/app/subscribeMainForm/interfaces/ISubscribeForm';

import styles from '../pages/Blogs/sass/downloadForm.module.scss';
import subscribeStyles from '../pages/Blogs/sass/subscribeForm.module.scss';

export const getOurInsightsContent = (blogs: IBlog[] | [] | undefined): IOurInsightBlog[] | undefined => (
  blogs?.map((blog, index) => {
    const title = blog?.attributes?.blogTitle ? blog?.attributes?.blogTitle : blog?.attributes?.title;
    const { url } = blog.attributes;
    const envUrl = process.env.NEXT_PUBLIC_BACKEND || '';

    const pictureData = blog?.attributes?.picture?.data?.attributes?.url || '';
    const defaultPictureData = blog?.attributes?.picture_our_insights?.data?.attributes?.url;

    const urlImage = defaultPictureData ? `${envUrl}${defaultPictureData}` : `${envUrl}${pictureData}`;

    return ({
      id: index,
      link: `/blog/${url || ''}`,
      title,
      picture: urlImage,
    });
  }));

export const sortArrById = (blogs: IBlog[] | ICaseStudiesData[], ids: number[]): IBlog[] | ICaseStudiesData[] => {
  const compareFn = (a: IBlog | ICaseStudiesData, b: IBlog | ICaseStudiesData) => (
    ids.indexOf(a.id) - ids.indexOf(b.id));

  return blogs.sort(compareFn);
};

export const getFormValues = (
  formikObj: FormikProps<IDownloadFormValues> | FormikProps<ISubscribeFormValues>,
  variant = '',
) => {
  let formValues;
  if ('phone' in formikObj.values) {
    const {
      values: {
        name, email, company, phone,
      },
      touched,
      errors,
    } = formikObj as FormikProps<IDownloadFormValues>;

    formValues = [
      {
        id: 1,
        value: name,
        name: 'name',
        error: touched.name && errors.name,
        label: 'Your Name',
        className: styles.name,
        isAsterisk: true,
      },
      {
        id: 2,
        value: email,
        name: 'email',
        error: touched.email && errors.email,
        label: 'Work Email',
        className: styles.email,
        isAsterisk: true,
      },
      {
        id: 3,
        value: company,
        name: 'company',
        error: touched.company && errors.company,
        label: 'Company Name',
        className: styles.company,
        isAsterisk: true,
      },
      {
        id: 4,
        value: phone,
        name: 'phone',
        error: touched.phone && errors.phone,
        label: 'Phone Number',
        className: styles.additionalInfo,
        isAsterisk: true,
      },
    ];
  } else {
    const {
      values: {
        name, email, company,
      },
      touched,
      errors,
    } = formikObj;

    formValues = [
      {
        id: 1,
        value: name,
        name: 'name',
        error: touched.name && errors.name,
        label: 'Your Name',
        className: subscribeStyles.name,
        isAsterisk: true,
      },
      {
        id: 2,
        value: email,
        name: 'email',
        error: touched.email && errors.email,
        label: 'Work Email',
        className: subscribeStyles.email,
        isAsterisk: true,
      },
      {
        id: 3,
        value: company,
        name: 'company',
        error: touched.company && errors.company,
        label: 'Company',
        className: subscribeStyles.company,
        isAsterisk: true,
      },
    ];
  }

  if (formValues.length === 3 && !variant) {
    return formValues.filter((item) => item.name !== 'company');
  }

  return formValues;
};

export const getFormValuesMain = (
  formikObj: FormikProps<ISubscribeFormMainValues>,
) => {
  const {
    values: { name, email, position },
    touched,
    errors,
  } = formikObj;

  return [
    {
      id: 1,
      value: name,
      name: 'name',
      error: touched.name && errors.name,
      label: 'Your Name',
      className: styles.name,
      isAsterisk: true,
    },
    {
      id: 2,
      value: position,
      name: 'position',
      error: touched.position && errors.position,
      label: 'Position',
      className: styles.company,
      isAsterisk: true,
    },
    {
      id: 3,
      value: email,
      name: 'email',
      error: touched.email && errors.email,
      label: 'Email',
      className: styles.email,
      isAsterisk: true,
    },
  ];
};

export const getBlogsList = async (seoData: ISeoData, array: number[]) => {
  const arrayId = seoData?.popularBlogs?.data && seoData?.popularBlogs?.data.length > 0
    ? seoData?.popularBlogs?.data.map((element) => element.id) : array;
  const pageBlogs = await getBlogsByIds(arrayId);
  return { pageBlogs, arrayId };
};
