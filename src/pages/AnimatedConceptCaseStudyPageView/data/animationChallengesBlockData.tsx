import getAccordionTextData, { IAccordionTextData } from 'utils/getAccordionTextData';

const data: IAccordionTextData[] = [
  {
    number: '01',
    title: 'Fluid Motion Fusion',
    content: [
      `Seamlessly blending motion elements into the website design,
      ensuring a harmonious coexistence without disrupting the user experience.`,
    ],
  },
  {
    number: '02',
    title: 'Velocity Optimization',
    content: [
      `Implementing advanced techniques to optimize animated elements, ensuring swift
      loading times and seamless user engagement without compromising animation quality.`,
    ],
  },
  {
    number: '03',
    title: 'Universal Interaction Framework',
    content: [
      `Crafting a design framework that adapts dynamically, ensuring the motion elements
      function uniformly across various devices and browsers, creating a consistent user experience.`,
    ],
  },
  {
    number: '04',
    title: 'Rhythmic Animation Sequencing',
    content: [
      `Designing animations that naturally synchronize with the user's pace, creating a rhythmic
      flow that aligns with reading speed and interaction patterns, enhancing user engagement.`,
    ],
  },
  {
    number: '05',
    title: 'Harmonious Visual Continuity',
    content: [
      `Maintaining a cohesive visual language throughout animations, aligning seamlessly with
      the overall design theme and branding elements, reinforcing brand identity and recognition.`,
    ],
  },
  {
    number: '06',
    title: 'Elegant Complexity Management',
    content: [
      `Balancing visually engaging animations with user-friendly simplicity, ensuring vital
      information is conveyed effectively without overwhelming or confusing users, resulting
      in a streamlined and intuitive experience.`,
    ],
  },
];

const animationChallengesBlockData = getAccordionTextData(data);

export default animationChallengesBlockData;
