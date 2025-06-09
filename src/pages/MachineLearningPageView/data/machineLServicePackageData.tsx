import Modeltype from 'constants/Modeltype';

import styles from '../sass/servicePackage.module.scss';

const machineLServicePackageData = [
  {
    title: 'Consulting',
    subTitle: 'One-hour consultation for',
    price: 'FREE',
    btnText: 'Book consultation',
    modelType: Modeltype.CONTACT_FORM_POP_UP_ML_BOOK_CONSULTATION,
    firstListContent: {
      firstListTitle: 'What’s included:',
      firstList: [
        'One-hour session with an ML tech expert',
        'Business review to identify challenges, inefficiencies, and opportunities',
        'Defining project goals and providing our tech solutions for implementation',
      ],
    },
    secondListContent: {
      secondListTitle: 'What you’ll get:',
      secondList: [
        'Concrete, actionable recommendations to improve your opportunities through the use of ML',
        'An action plan designed to maximize benefits',
        'Identification of the most suitable ML model for your business',
        'Data-driven insights for well-informed decision-making',
      ],
    },
  },
  {
    title: 'Demo Request',
    subTitle: '1 week of development for',
    price: '$400*',
    btnText: 'Request Demo',
    modelType: Modeltype.CONTACT_FORM_POP_UP_ML_REQUEST_DEMO,
    firstListContent: {
      firstListTitle: 'What’s included:',
      firstList: [
        'One-hour session with an ML tech expert',
        'Business review to identify challenges, inefficiencies, and opportunities',
        'Assistance in developing your ML strategy',
        'Development and presentation of a demo',
        'Preparation of project documentation',
        'Estimation of budget and project duration',
      ],
    },
    secondListContent: {
      secondListTitle: 'What you’ll get:',
      secondList: [
        'Concrete, actionable recommendations to improve your opportunities through the use of ML',
        'An action plan designed to maximize benefits',
        'Identification of the most suitable ML model for your business',
        'Data-driven insights for well-informed decision-making',
        'A working demo and access  to code for your solution',
        'Technical documentation for your ML solution',
      ],
    },
    popular: true,
  },
  {
    title: 'Short-Term Development',
    subTitle: '1-3 months of development for',
    price: (
      <>
        &gt;$10,000
        {' '}
        <span className={styles.fwNormal}>per month</span>
      </>
    ),
    btnText: 'Request development',
    modelType: Modeltype.CONTACT_FORM_POP_UP_ML_REQUEST_DEVELOPMENT,
    firstListContent: {
      firstListTitle: 'What’s included:',
      firstList: [
        'One-hour session with our tech team',
        'Business review to identify challenges, inefficiencies, and opportunities',
        'Assistance in developing your ML strategy',
        'Development and presentation of a demo',
        'Preparation of project documentation',
        'Estimation of budget and project duration',
        'A dedicated team (developers, PM, QA, DevOps)',
      ],
    },
    secondListContent: {
      secondListTitle: 'What you’ll get:',
      secondList: [
        'Concrete, actionable recommendations to improve your opportunities through the use of ML',
        'An action plan designed to maximize benefits',
        'Identification of the most suitable ML model for your business',
        'Data-driven insights for well-informed decision-making',
        'A working demo and access  to code for your solution',
        'Technical documentation for your ML solution',
        'Access to and ownership of the code',
        'A completed solution with usable infrastructure (server and domain)',
        'Utilization of various ML technologies',
        'Maintenance',
        'Development services tailored to your tech stack',
        'Collaboration with your team for successful outcomes',
        'Weekly sync calls and reports',
      ],
    },
  },
  {
    title: 'Long-Term Development',
    subTitle: '1 year+ of development and maintenance*',
    price: (
      <span className={styles.fzNormal}>
        *required details
        <br />
        {' '}
        for accurate estimation
      </span>
    ),
    btnText: 'Talk to our expert',
    modelType: Modeltype.CONTACT_FORM_POP_UP_ML_TALK_TO_OUR_EXPERT,
    firstListContent: {
      firstListTitle: 'What’s included:',
      firstList: [
        'One-hour session with our tech team',
        'Review of your ML strategy focusing on ROI',
        'Business review to identify challenges, inefficiencies, and opportunities',
        'Assistance in developing your ML strategy',
        'Development and presentation of a demo',
        'Preparation of project documentation',
        'Estimation of budget and project duration',
        'A dedicated team (developers, PM, QA, DevOps)',
        'Capability to work on multiple ML projects',
        'Implementation of ML models from scratch and development of scalable solutions',
      ],
    },
    secondListContent: {
      secondListTitle: 'What you’ll get:',
      secondList: [
        'Concrete, actionable recommendations to improve your opportunities through the use of ML',
        'An action plan designed to maximize benefits',
        'Identification of the most suitable ML model for your business',
        'Data-driven insights for well-informed decision-making',
        'A working demo and access  to code for your solution',
        'Technical documentation for your ML solution',
        'Access to and ownership of the code',
        'A completed solution with usable infrastructure (server and domain)',
        'Utilization of various ML technologies',
        'Maintenance',
        'Development services tailored to your tech stack',
        'Collaboration with your team for successful outcomes',
        'Weekly sync calls and reports',
      ],
    },
  },
];

export default machineLServicePackageData;
