import NeedIcon1 from '@/images/salesforcePersonnelTrackingApp/needSection/img_needIcon1.webp';
import NeedIcon2 from '@/images/salesforcePersonnelTrackingApp/needSection/img_needIcon2.webp';
import NeedIcon3 from '@/images/salesforcePersonnelTrackingApp/needSection/img_needIcon3.webp';
import NeedIcon4 from '@/images/salesforcePersonnelTrackingApp/needSection/img_needIcon4.webp';
import NeedIcon5 from '@/images/salesforcePersonnelTrackingApp/needSection/img_needIcon5.webp';
import NeedIcon6 from '@/images/salesforcePersonnelTrackingApp/needSection/img_needIcon6.webp';
import CardIcon1 from '@/images/salesforcePersonnelTrackingApp/offerSection/img_cardIcon1.webp';
import CardIcon2 from '@/images/salesforcePersonnelTrackingApp/offerSection/img_cardIcon2.webp';
import CardIcon3 from '@/images/salesforcePersonnelTrackingApp/offerSection/img_cardIcon3.webp';
import CardIcon4 from '@/images/salesforcePersonnelTrackingApp/offerSection/img_cardIcon4.webp';
import CardImg1 from '@/images/salesforcePersonnelTrackingApp/offerSection/img_cardImg1.webp';
import CardImg2 from '@/images/salesforcePersonnelTrackingApp/offerSection/img_cardImg2.webp';
import CardImg3 from '@/images/salesforcePersonnelTrackingApp/offerSection/img_cardImg3.webp';
import CardImg4 from '@/images/salesforcePersonnelTrackingApp/offerSection/img_cardImg4.webp';
import Apex from '@/images/salesforcePersonnelTrackingApp/technologySection/img_apex.webp';
import Salesforce from '@/images/salesforcePersonnelTrackingApp/technologySection/img_salesforce.webp';
import Visualforce from '@/images/salesforcePersonnelTrackingApp/technologySection/img_visualforce.webp';
import Road from '@/images/salesforcePersonnelTrackingApp/technologySection/img_road.webp';

import challengesStyles from '../sass/salesforceChallengesSection.module.scss';
import mainStyles from '../sass/salesforceMainSection.module.scss';

export const secondSectionContent = [
  {
    id: 11,
    title: 'Healthcare',
    description: 'Industry',
    className: 'industry',
  },
  {
    id: 12,
    title: '2 specialists',
    description: 'Team size',
    className: 'teamSize',
  },
  {
    id: 13,
    title: 'USA',
    description: 'Location',
    className: 'location',
  },
  {
    id: 14,
    title: '2 months',
    description: 'Project duration',
    className: 'projectDuration',
  },
];

export const cards = [
  {
    id: 1,
    icon: CardIcon1,
    iconHeight: 20,
    iconWidth: 20,
    content: 'Set up regular communication that allows our team and clients to deal with a structured development '
            + 'process and produce a reliable product on time.',
    bg: CardImg1,
  },
  {
    id: 2,
    icon: CardIcon2,
    iconHeight: 20,
    iconWidth: 17,
    content: 'Because of the specific request from the client regarding the app’s UI design, we used the SF '
            + 'Lightning Aura Component to use it properly on mobile devices and include various design elements '
            + 'into the app.',
    bg: CardImg2,
  },
  {
    id: 3,
    icon: CardIcon3,
    iconHeight: 14,
    iconWidth: 20,
    content: 'Create a user-friendly mobile Salesforce app that allows clients to manage all physician liaison '
            + 'visits and meetings conveniently in one place.',
    bg: CardImg3,
  },
  {
    id: 4,
    icon: CardIcon4,
    iconHeight: 20,
    iconWidth: 10,
    content: 'Develop a seamless functionality to control and handle the financial side of the departmental activity '
            + 'of physician liaisons managed in Salesforce.',
    bg: CardImg4,
  },
];

export const mainContent = {
  title: (
    <h1 className={mainStyles.mainTitle}>
      Salesforce application
      <br />
      for personnel activity tracking
    </h1>
  ),
  description: 'How Onix developed a custom Salesforce app for physician liaison activity management and tracking',
};

export const secondContent = 'In this case study, we will show you how the Onix team created a custom application '
    + 'for Salesforce to help the company’s staff plan and manage their departmental activities and costs.';

export const challengesContent = (
  <p className={challengesStyles.chalengesParagraph}>
    A physician liaison is a healthcare professional who works to build relationships between physicians
    and other healthcare providers, usually within a specific organization or geographic region. The goal
    of this position is to improve communication and collaboration between all parties involved in patient
    care, ultimately leading to better patient outcomes. And sometimes it can be hard to control the
    departmental activities of dozens of physician liaisons, especially when they conduct lots of business
    visits and meetings outside the organization. Moreover, it’s daunting to control and manage all the
    expenses associated with these visits.
    <br />
    <br />
    That’s why our client came to us with the request to build an intuitive and easy-to-use Salesforce
    application that can help their organization keep the pace of departmental activity and field visit
    documentation. The existing outreach application was not as user-friendly as needed and didn’t reflect
    the processes of the physician liaison team.  Thus, we were asked to make a project with a more
    user-friendly interface that will make it easier for physician liaisons to plan and log their
    activity as well as record visit objectives completed and expenses.
  </p>
);

export const needContent = [
  {
    id: 1,
    img: NeedIcon1,
    content: 'Set up effective management and transparent development process',
  },
  {
    id: 2,
    img: NeedIcon2,
    content: 'Identify and gather requirements to meet project objectives',
  },
  {
    id: 3,
    img: NeedIcon3,
    content: 'Create an intuitive Salesforce app to track the information about employees’ business trips',
  },
  {
    id: 4,
    img: NeedIcon4,
    content: 'Develop an effective solution to manage expenses associated with personnel business trips',
  },
  {
    id: 5,
    img: NeedIcon5,
    content: 'Make the application adaptable for mobile phone',
  },
  {
    id: 6,
    img: NeedIcon6,
    content: 'Create a custom user interface to achieve full engagement',
  },
];

export const ourSolutions = 'Our development team conducted a detailed analysis of project requirements and '
    + 'challenges and came up with with the following solutions:';

export const technologies = [
  {
    id: 1,
    width: 100,
    height: 43,
    src: Apex,
  },
  {
    id: 2,
    width: 100,
    height: 100,
    src: Road,
  },
  {
    id: 3,
    width: 169,
    height: 89,
    src: Visualforce,
  },
  {
    id: 4,
    width: 125,
    height: 88,
    src: Salesforce,
  },
];

export const result = 'The Onix team helped our client create a truly intuitive Salesforce app for physician liaison '
    + 'staff. Our developer and designer managed to create an app for both in-person and remote meetings with '
    + 'physicians for the purpose of improving physician relations and increasing referrals. We also made '
    + 'the field visit documentation and departmental activity process easy to track and manage for company '
    + 'executives. In addition, now our clients can easily plan and log the activity of the personnel and '
    + 'control the expenses associated with their business visits.';

export const contactUsTitle = 'Need a custom Salesforce solution for your specific business needs?';
