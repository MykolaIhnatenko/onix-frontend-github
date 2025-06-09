import { IDevelopmentServicesItemData } from 'components/DevelopmentServicesTemplate/interfaces/IDevelopmentServicesTemplate';

const developmentServicesContentData: IDevelopmentServicesItemData[] = [
  {
    id: 1,
    number: '01',
    title: 'Problem – Performance',
    content: [
      `The biggest problem is the poor experience of Dynos’ server resources usage. Each dyno is limited
      in CPU performance and memory resources. Heroku runs multiple dynos on a single Amazon EC2 instance.
      Heroku’s configuration plans strictly relate to the structure of server resources, and these
      resource limitations are significant and justified. All configurations are different, and each
      requires an appropriate CPU/memory usage profile. Customers who upgrade their plan to increase
      memory have to pay for the extra unused CPU power. When you need to scale your application, the
      general cost can increased significantly.`,
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Problem – Control',
    content: [
      `Heroku requires the installation of special software that can be challenging to use. It is possible
      to connect to dynos via SSH but with a lot of limitations, full root access is blocked.`,
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Problem – Reliability',
    content: [
      `There were reliability issues related to the application. Heroku does not provide a significantly
      rich level of management of the environment. This can lead to inconvenience for clients and developers.`,
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Problem – Cost-effectiveness',
    content: [
      `Generally, Heroku has become more expensive and more challenging to maintain. Overcoming these
      challenges made it necessary for the company to leave Heroku and find a new hosting provider.`,
    ],
  },
];

export default developmentServicesContentData;
