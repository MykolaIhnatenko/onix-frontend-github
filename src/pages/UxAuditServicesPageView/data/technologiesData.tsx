import { ITechnologiesBlocksData } from '../../../components/Technologies/interfaces/ITechnologies';

export const technologiesBlocksNames = {
  'Programming languages': [
    'PHP', 'HTML', 'JavaScript',
  ],
  Frameworks: [
    'Yii2', 'Laravel', 'Symphony', 'React', 'Angular',
  ],
  'E-Commerce platforms': [
    'Magento', 'Shopware', 'Spreker', 'SFCC',
  ],
  Databases: [
    'MySQL', 'MongoDB', 'PostgreSQL', 'Percona', 'MariaDB', 'Oracle', 'MS SQL',
  ],
  Mobile: [
    'Kotlin (Android)', 'Swift (iOS)',
  ],
  'Cloud Providers': [
    'AWS', 'Google Cloud Platform', 'Microsoft Azure', 'DigitalOcean', 'Any private cloud',
  ],
  'Microservices and Containers': [
    'Kubernetes', 'Rancher', 'Docker Swarm', 'Docker Compose',
  ],
  'CI/CD': [
    'Jenkins', 'Gitlab', 'Github', 'Teamcity', 'Circle CI', 'Travis CI', 'Bitbucket Pipelines',
  ],
  'Orchestration and Automation': [
    'Ansible', 'Puppet', 'Terraform', 'Packer', 'Consul',
  ],
};

export const technologiesBlocksData: ITechnologiesBlocksData = {
  pageTitle: 'Technologies We Use',
  subTitle: `Our UI/UX design department uses various design and management tools to create exceptional
      designs and manage projects efficiently. Some of the tools we use include:`,
};
