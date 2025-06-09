import { IDevelopmentServicesItemData } from 'components/DevelopmentServicesTemplate/interfaces/IDevelopmentServicesTemplate';

const developmentServicesContentData: IDevelopmentServicesItemData[] = [
  {
    id: 1,
    number: '01',
    title: 'Set up a Kubernetes cluster',
    content: [
      `The first step was to create a Kubernetes cluster on the cloud provider,
      Amazon Web Services, - Amazon EKS. This cluster will be used for hosting the WordPress application.`,
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Create a Docker image for WordPress',
    content: [
      `Once we set up our Kubernetes cluster, the next step was to create a Docker image for a
      WordPress application. This image will contain all the necessary files
      and configurations to run the digital magazine.`,
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Deploy WordPress on Kubernetes',
    content: [
      `We created a Kubernetes manifest file that defines the application deployment. This
      file contains information about the Docker image we created in the previous step and how
      many replicas of the WordPress application we want to run.`,
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Use Kubernetes services for load balancing',
    content: [
      `To ensure that our client’s WordPress application is highly available and scalable, we used
      Kubernetes services to balance traffic between the application replicas.`,
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Set up persistent storage for WordPress',
    content: [
      `WordPress requires persistent storage to store data like blog posts, images, and plugins.
      We used Kubernetes persistent volumes to provide persistent storage for the online magazine.`,
    ],
  },
  {
    id: 6,
    number: '06',
    title: 'Use Kubernetes Secrets to manage sensitive data',
    content: [
      `Kubernetes Secrets is a secure, scalable, and easy way to manage sensitive information and protect
      critical data like database passwords and API keys. It helped enhance the website’s
      security, simplify management, and automate sensitive data control.`,
    ],
  },
];

export default developmentServicesContentData;
