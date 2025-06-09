const challengeContent = [
  {
    id: '01',
    content: 'Firstly, we compared the costs of using AWS and Heroku. Heroku had cost around $800 per month. '
            + 'We calculated that using the same capacity on AWS would cost $600-650.',
  },
  {
    id: '02',
    content: 'We also developed a chart of the application and interactions with all services.',
  },
  {
    id: '03',
    content: 'We wrote a configuration called Dockerfile.',
  },
  {
    id: '04',
    content: 'In the case of our RoR application, the main task was to make dependencies get installed and '
            + 'configure the complex software components in our stack. The ability to test everything in a local '
            + 'environment was a huge advantage.',
  },
  {
    id: '05',
    content: 'While configuring the environment in AWS, we used Elastic Beanstalk. Dockerization of the '
            + 'application mainly consisted of creating a Docker image from code in the repository. The basis '
            + 'of the app’s Dockerfile was also used for dockerization of the worker (sidekiq).',
  },
];

export default challengeContent;
