import NeedIcon1 from '@/images/salesforceSupportAutomationApp/needSection/img_needIcon1.webp';
import NeedIcon2 from '@/images/salesforceSupportAutomationApp/needSection/img_needIcon2.webp';
import NeedIcon3 from '@/images/salesforceSupportAutomationApp/needSection/img_needIcon3.webp';
import NeedIcon4 from '@/images/salesforceSupportAutomationApp/needSection/img_needIcon4.webp';
import NeedIcon5 from '@/images/salesforceSupportAutomationApp/needSection/img_needIcon5.webp';
import CardIcon1 from '@/images/salesforceSupportAutomationApp/offerSection/img_cardIcon1.webp';
import CardIcon2 from '@/images/salesforceSupportAutomationApp/offerSection/img_cardIcon2.webp';
import CardImg1 from '@/images/salesforceSupportAutomationApp/offerSection/img_cardImg1.webp';
import CardImg2 from '@/images/salesforceSupportAutomationApp/offerSection/img_cardImg2.webp';
import Apex from '@/images/salesforceSupportAutomationApp/technologySection/img_apex.webp';
import Road from '@/images/salesforceSupportAutomationApp//technologySection/img_road.webp';
import Wave from '@/images/salesforceSupportAutomationApp/technologySection/img_wave.webp';
import mainStyles from '../sass/salesforceMainSection.module.scss';
import challengesStyles from '../sass/salesforceChallengesSection.module.scss';

export const secondSectionContent = [
  {
    id: 0,
    title: 'Healthcare',
    description: 'Industry',
    className: 'industry',
  },
  {
    id: 1,
    title: '1 specialist',
    description: 'Team size',
    className: 'teamSize',
  },
  {
    id: 2,
    title: 'USA',
    description: 'Location',
    className: 'location',
  },
  {
    id: 3,
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
    iconWidth: 17,
    content: 'Creating a custom Salesforce app to register cases from medical staff',
    bg: CardImg1,
  },
  {
    id: 2,
    icon: CardIcon2,
    iconHeight: 20,
    iconWidth: 20,
    content: 'Optimizing the process for users of working with different types of forms for registering cases '
        + 'on support',
    bg: CardImg2,
  },
];

export const mainContent = {
  title: (
    <h1 className={`${mainStyles.mainTitle} ${mainStyles.processAutomation}`}>
      Salesforce application for support center processes automation
    </h1>
  ),
  description: ' How Onix developed a custom Salesforce app to enhance and automate the process of request '
      + 'registration by medical support center',
};

export const secondContent = 'In this case study, we’ll tell you about how Onix experts developed a custom Salesforce '
    + 'app to help medical center staff register requests from doctors in accordance with the types of these requests.';

export const challengesContent = (
  <p className={`${challengesStyles.chalengesParagraph} ${challengesStyles.processAutomation}`}>
    The client has already used the Salesforce platform to manage processes in the medical center. They
    approached the Onix team as it was necessary to create an application that will help the support staff
    to register requests from doctors in accordance with the types of these requests. In other words, it was
    necessary to make sure that for each request, an employee of those support opens a certain form to fill
    out. Since Salesforce doesn’t provide this functionality by default, the main challenge was to develop
    the new custom functionality.
  </p>
);

export const needContent = [
  {
    id: 1,
    img: NeedIcon1,
    content: 'Conduct an in-depth requirements elicitation to meet project objectives',
  },
  {
    id: 2,
    img: NeedIcon2,
    content: 'Tune effective management and streamlined development process',
  },
  {
    id: 3,
    img: NeedIcon3,
    content: 'Create an intuitive app for Salesforce to automate request management',
  },
  {
    id: 4,
    img: NeedIcon4,
    content: 'Make a custom user interface that is easy to use by support staff',
  },
  {
    id: 5,
    img: NeedIcon5,
    content: 'Develop a comprehensive registration form',
  },
];

export const ourSolutions = 'Our task was to optimize the registration form and make it easy to gather requests. By '
    + 'default, Salesforce forms have lists of fields to fill out and can’t be hidden under the required conditions. '
    + 'Our team has created a registration form that only shows the fields that are relevant for a particular '
    + 'type of incoming request. For example, by selecting the request type «Provider», the form will show the '
    + 'user only the fields required to fill in for the «Provider» type. Further, the request is registered in '
    + 'the system and users can work with this particular request.';

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
    width: 108,
    height: 108,
    src: Wave,
  },
];

export const result = 'As a result, we got an application that is successfully used by the employees of the medical '
    + 'center. We created the following flow for the app: a support employee answers a call and receives a request; '
    + 'a support employee registers a request by filling out a form in our application; the request is saved '
    + 'in the system and then transferred to the responsible persons of the medical center. Now, this system '
    + 'helps teams to enhance registration processes and save employees time on more value-generating tasks.';

export const contactUsTitle = 'Looking for a custom Salesforce app development for your specific business needs?';
