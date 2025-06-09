import { IDevelopmentServicesItemData } from 'components/DevelopmentServicesTemplate/interfaces/IDevelopmentServicesTemplate';

const developmentServicesSecondData: IDevelopmentServicesItemData[] = [
  {
    id: 1,
    number: '01',
    title: 'Choosing Docker to accelerate migration',
    content: [
      `The migration of working applications from Heroku seemed like a daunting task. Fortunately,
      Docker technology helped to speed up the migrating process to AWS. It allows for packaging
      the application with all dependencies in a container environment that can run on any Linux
      system. Once built, Docker containers can run anywhere. Docker containers encapsulate the
      Linux virtual file system, providing much of a virtual machine's portability and isolation.
      The main difference is in the size of resources. As a result, these lightweight containers
      can load in minutes. We were confident Docker would be vital to speed up the migration to AWS.`,
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Costs optimization',
    content: [
      `Our specialists compared the costs of using AWS and Heroku. Heroku costs around $800 per month.
      We calculated that using the same capacity on AWS would cost $600-650.`,
      `Migrating to AWS and monitoring the load, we've reduced the capacity of servers and services,
      cutting costs by nearly $200 per month. We also developed a chart of the application and
      interactions with all services.`,
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Configuration',
    content: [
      `Further, we wrote a configuration called Dockerfile. It resembles bash and it is easy to understand.
      Docker images are based on specific parent images and stacked in layers. As a best practice, we
      recommend using only official docker images to ensure that there is no malware inside. Using official
      docker images is not a guarantee of their security. It is recommended to use additional software to
      scan already built images for security vulnerabilities and to check all of them to avoid any unexpected
      issues in the future.`,
      `In our RoR application, the main task was to install dependencies and configure the complex software
      components in our stack. That was a tedious trial-and-error process, but the ability to test everything
      in a local environment was a huge advantage.`,
      `Deploying a new application in Docker didn't take much time. When Ruby had to be upgraded from version
      2.3.3 to 2.4.10, the transition took no more than an hour, dispelling any doubts about Docker.`,
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Environment configuration',
    content: [
      `The second thing to do was to configure the environment in AWS. To save time, we decided to use Elastic
      Beanstalk, which comes with different versions of built-in Docker. Dockerization was simple and mainly
      consisted of creating a Docker image from code in the repository. The basis of the app's Dockerfile was
      also used for the dockerization of the worker (sidekiq).`,
    ],
  },
];

export default developmentServicesSecondData;
