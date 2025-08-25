import { ITechnologiesBlocksData } from '../../../components/Technologies/interfaces/ITechnologies';

export const technologiesBlocksNames = {
  'Backend and API development': [
    'Python', 'Node.js', 'Java', 'PHP', 'Ruby',
  ],
  'Frontend development': [
    'React.js', 'Vue.js', 'CSS', 'HTML5',
  ],
  'Mobile development': [
    'Kotlin', 'Flutter', 'Swift', 'Objective-C', 'React Native',
  ],
  AI: [
    'MATLAB', 'TensorFlow', 'PyTorch', 'SciKit-Learn', 'Pillow',
  ],
  'Platform customization': [
    'Shopify', 'WordPress', 'Salesforce', 'Magento', 'OpenCart', 'Canva',
  ],
  'VR/AR and 3D design': [
    'Unity', 'Visual Studio', 'Blender', 'Maya', 'Houdini', 'V-Ray',
  ],
  'Cloud storage': [
    'AWS', 'Azure', 'Heroku', 'DigitalOcean', 'GCP (Google Cloud Platform)',
  ],
};

export const technologiesBlocksNamesBooking = {
  Frameworks: [
    'Vue.js', 'Angular', 'Node.JS', 'Ruby On Rail', 'React Native', 'Django', 'Laravel', 'CakePHP', 'Yii/Yii2',
  ],
  'Programming Languages': [
    'Swift', 'Kotlin', 'Ruby', 'Python', 'PHP',
  ],
  Database: [
    'MongoDB', 'Postgresql', 'MySQL', 'Elasticsearch',
  ],
  'Cloud platforms': [
    'AWS', 'Azure', 'GCP',
  ],
};

export const technologiesBlocksData: ITechnologiesBlocksData = {
  pageTitle: (
    <>
      To deliver products of the highest quality,
      <br className="screen-xxxl:!hidden" />
      {' '}
      we use a reliable and top-notch set of technologies.
    </>
  ),
};
