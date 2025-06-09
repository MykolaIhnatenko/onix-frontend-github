import { IDevelopmentServicesItemData } from 'components/DevelopmentServicesTemplate/interfaces/IDevelopmentServicesTemplate';

const devopsSolutionsDevelopmentServicesContentData: IDevelopmentServicesItemData[] = [
  {
    id: 1,
    number: '01',
    title: 'Assessment and planning',
    content: [
      `Our primary objective is establishing effective communication with the development
      team and collaborating closely to achieve the desired result.`,
      `We begin with a thorough evaluation of your organization's existing processes and IT infrastructure.
      Based on our assessment, we create a comprehensive roadmap for automating these processes.`,
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Automate development and\u00A0provide continuous integration and deployment',
    content: [
      `Our approach includes configuring build servers, testing, staging, and production environments
      while automating the entire infrastructure.`,
      `Our process involves merging code changes into a unified repository and initiating automatic
      builds and test runs whenever a team member modifies version control.`,
      `Also, as part of our process, we deploy intricate applications according to the essential
      infrastructure requirements and run changes across the CI/CD pipeline to prevent any bugs or delays.`,
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Execute end-to-end security integration',
    content: [
      `We apply robust security practices from the beginning of product development, and using advanced
      and reliable tools, our specialists conduct automated security testing and compliance processes.`,
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Operations & Support',
    content: [
      'After deployment, we provide ongoing operations and support services to ensure the application runs smoothly.',
      'We proactively monitor, identify, and resolve any incidents that arise to minimize downtime.',
    ],
  },
];

export default devopsSolutionsDevelopmentServicesContentData;
