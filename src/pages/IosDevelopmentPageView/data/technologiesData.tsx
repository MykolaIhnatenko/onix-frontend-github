import { ITechnologiesBlocksData } from '../../../components/Technologies/interfaces/ITechnologies';

export const technologiesBlocksNames = {
  'Backend development': [
    'Python', 'Node.js', 'Java', 'PHP',
  ],
  'Frontend development': [
    'React.js', 'Vue.js', 'CSS', 'HTML5',
  ],
  'Mobile development': [
    'Kotlin', 'Flutter', 'Swift', 'Objective-C', 'React Native',
  ],
  CMS: [
    'Shopify', 'WordPress',
  ],
  'VR/AR and 3D design': [
    'Unity', 'Visual Studio', 'Blender', 'Maya', 'Houdini', 'V-Ray',
  ],
  'Cloud storage': [
    'AWS', 'Azure', 'Google Cloud Platform', 'Heroku', 'DigitalOcean',
  ],
};

export const technologiesBlocksData: ITechnologiesBlocksData = {
  pageTitle: (
    <>
      Technologies We Use
      {' '}
      <span className="inline_block">at Onix</span>
    </>
  ),
  subTitle: (
    <>
      To deliver products of the highest quality, we use a reliable and top-notch set of technologies.
    </>
  ),
};
