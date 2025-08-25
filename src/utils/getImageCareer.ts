import { StaticImageData } from 'next/image';

import { DepartmentsCareer } from '../constants/enums';
import img_Designers from '../assets/images/singleCareer/careerInfo/img_Designers.webp';
import img_PM from '../assets/images/singleCareer/careerInfo/img_PM.webp';
import img_Market from '../assets/images/singleCareer/careerInfo/img_Market.webp';
import img_Sales from '../assets/images/singleCareer/careerInfo/img_Sales.webp';
import img_QA from '../assets/images/singleCareer/careerInfo/img_QA.webp';
import img_HR from '../assets/images/singleCareer/careerInfo/img_HR.webp';
import img_Finance from '../assets/images/singleCareer/careerInfo/img_Finance.webp';
import img_Wordpress from '../assets/images/singleCareer/careerInfo/img_Wordpress.webp';
import img_Vue from '../assets/images/singleCareer/careerInfo/img_VueJS.webp';
import img_Unity from '../assets/images/singleCareer/careerInfo/img_Unity.webp';
import img_Ruby from '../assets/images/singleCareer/careerInfo/img_Ruby.webp';
import img_React from '../assets/images/singleCareer/careerInfo/img_React.webp';
import img_Python from '../assets/images/singleCareer/careerInfo/img_Python.webp';
import img_MachineLearning from '../assets/images/singleCareer/careerInfo/img_MachineLearning.webp';
import img_PHP from '../assets/images/singleCareer/careerInfo/img_PHP.webp';
import img_NodeJS from '../assets/images/singleCareer/careerInfo/img_NodeJS.webp';
import img_Java from '../assets/images/singleCareer/careerInfo/img_Java.webp';
import img_IOS from '../assets/images/singleCareer/careerInfo/img_IOS.webp';
import img_Flutter from '../assets/images/singleCareer/careerInfo/img_Flutter.webp';
import img_DevOps from '../assets/images/singleCareer/careerInfo/img_DevOps.webp';
import img_Android from '../assets/images/singleCareer/careerInfo/img_Android.webp';
import img_3D from '../assets/images/singleCareer/careerInfo/img_3D.webp';
import img_PeopleOps from '../assets/images/singleCareer/careerInfo/img_PeopleOps.webp';
import img_Lower from '../assets/images/singleCareer/careerInfo/img_Lower.webp';
import img_TeachDepart from '../assets/images/singleCareer/careerInfo/img_TeachDepart.webp';

const getImageCareer = (department: DepartmentsCareer) => {
  let image: StaticImageData;
  switch (department) {
    case DepartmentsCareer.DESIGNERS:
      image = img_Designers;
      break;
    case DepartmentsCareer.PM:
      image = img_PM;
      break;
    case DepartmentsCareer.MARKET:
      image = img_Market;
      break;
    case DepartmentsCareer.SALES:
      image = img_Sales;
      break;
    case DepartmentsCareer.QA:
      image = img_QA;
      break;
    case DepartmentsCareer.HR:
      image = img_HR;
      break;
    case DepartmentsCareer.FINANCE:
      image = img_Finance;
      break;
    case DepartmentsCareer.WORDPRESS:
      image = img_Wordpress;
      break;
    case DepartmentsCareer.VUE:
      image = img_Vue;
      break;
    case DepartmentsCareer.UNITY:
      image = img_Unity;
      break;
    case DepartmentsCareer.RUBY:
      image = img_Ruby;
      break;
    case DepartmentsCareer.REACT:
      image = img_React;
      break;
    case DepartmentsCareer.PYTHON:
      image = img_Python;
      break;
    case DepartmentsCareer.MACHINE_LEARNING:
      image = img_MachineLearning;
      break;
    case DepartmentsCareer.PHP:
      image = img_PHP;
      break;
    case DepartmentsCareer.NODE_JS:
      image = img_NodeJS;
      break;
    case DepartmentsCareer.JAVA:
      image = img_Java;
      break;
    case DepartmentsCareer.IOS:
      image = img_IOS;
      break;
    case DepartmentsCareer.FLUTTER:
      image = img_Flutter;
      break;
    case DepartmentsCareer.DEV_OPS:
      image = img_DevOps;
      break;
    case DepartmentsCareer.ANDROID:
      image = img_Android;
      break;
    case DepartmentsCareer.IIID:
      image = img_3D;
      break;
    case DepartmentsCareer.PEOPLE_OPS:
      image = img_PeopleOps;
      break;
    case DepartmentsCareer.LOWER:
      image = img_Lower;
      break;
    case DepartmentsCareer.TECH_DEPART:
      image = img_TeachDepart;
      break;
    default:
      image = img_Designers;
      break;
  }
  return image;
};

export default getImageCareer;
