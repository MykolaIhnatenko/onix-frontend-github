import getAccordionTextData, { IAccordionTextData } from 'utils/getAccordionTextData';

const data: IAccordionTextData[] = [
  {
    id: 1,
    number: '01',
    title: 'User Interface (UI) Design',
    content: [
      `We specialize in crafting visually appealing and intuitive interfaces that
      enhance usability and create a seamless experience for your users.`,
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'User Experience (UX) Design',
    content: [
      `Our UX design expertise focuses on understanding user needs, behavior, and motivations
      to create engaging and delightful experiences for your audience.`,
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Mobile App Design',
    content: [
      `We create innovative and user-friendly designs for mobile applications, ensuring a seamless
      and enjoyable experience across different devices.`,
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Web Design',
    content: [
      `Our web design services combine aesthetics and functionality to create captivating websites
      that drive engagement and effectively convey your brand.`,
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Interaction Design',
    content: [
      `We design interactive elements and transitions that enhance user engagement and guide them
      through a seamless and intuitive digital experience.`,
    ],
  },
  {
    id: 6,
    number: '06',
    title: 'Prototyping and Wireframing',
    content: [
      `We utilize prototyping and wireframing techniques to create tangible representations of your
      digital product, allowing for early testing and feedback.`,
    ],
  },
  {
    id: 7,
    number: '07',
    title: 'Usability Testing',
    content: [
      `Our usability testing services involve gathering user feedback and insights through rigorous
      testing, helping you identify and address design usability issues to optimize the user experience.`,
    ],
  },
  {
    id: 8,
    number: '08',
    title: 'Branding and Identity Design',
    content: [
      `We help you define and establish your brand's identity through thoughtful design, including
      logo design, color palettes, typography, and brand guidelines.`,
    ],
  },
  {
    id: 9,
    number: '09',
    title: '3D Game Art Design',
    content: [
      `We specialize in creating stunning 3D art assets, characters, environments, and animations for
      immersive and visually captivating gaming experiences.`,
    ],
  },
];

const designAuditAccordionData = getAccordionTextData(data);

export default designAuditAccordionData;
