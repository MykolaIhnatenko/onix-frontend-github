import { IDevelopmentServicesItemData } from 'components/DevelopmentServicesTemplate/interfaces/IDevelopmentServicesTemplate';

const salesforceDevelopmentServicesContentData: IDevelopmentServicesItemData[] = [
  {
    id: 1,
    number: '01',
    title: 'Product discovery',
    content: [
      `We always start a project by defining the pool of work by gathering your business objectives and requirements.
      This data helps us to create the functional model and the roadmap on how to accomplish it.`,
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Designing app architecture',
    content: [
      `Here, our Salesforce experts define the future app type, decide on its initial functionality,
      and design the AppExchange application architecture.`,
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Developing and testing',
    content: [
      'At this stage, we build an AppExchange application using Javascript, Visualforce, APEX, and Lightning stack.',
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Reviewing the app',
    content: [
      `Then, our security experts conduct a full-cycle review of your AppExchange app before listing it
      publicly on the Salesforce marketplace.`,
      `During a security review, we test an app for SOQL, cross-site scripting, access control protocols,
      and various other vulnerabilities specific to the Salesforce platform, such as record-sharing violations.`,
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Maintaining and Salesforce support services',
    content: [
      `Provision of all necessary maintenance and technical assistance during and after the integration is
      implemented. Finally, we make a provision of maintenance and technical assistance during the app
      integration and after it was launched.`,
    ],
  },
];

export default salesforceDevelopmentServicesContentData;
