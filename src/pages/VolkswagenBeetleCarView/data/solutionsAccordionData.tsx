import getAccordionTextData, { IAccordionTextData } from 'utils/getAccordionTextData';

const data: IAccordionTextData[] = [
  {
    number: '01',
    title: 'Brand Consistency',
    content: [`A style guide was created to ensure that all elements on the page,
      from color schemes to typography, aligned perfectly with Beetle’s brand guidelines.
      This helped maintain the iconic image while introducing modern accents.`],
  },
  {
    number: '02',
    title: 'UI elements',
    content: [`Non-standard grid, animation, and interactive car modules were used to create an
      immersive user experience. Rounded edges of photos and buttons represent the car's contours,
      while dynamic animation reminds the vehicle's speed. The aim was to instantly capture attention
      and engage the visitor in exploring more about the Beetle.`],
  },
  {
    number: '03',
    title: 'Seamless experience',
    content: [`Utilizing responsive design principles, the page was created to offer a seamless experience
      across all devices. The mobile-first design was prioritized, ensuring design integrity was
      maintained from smartphone to desktop.`],
  },
  {
    number: '04',
    title: 'Content Strategy',
    content: [`A tiered content structure was adopted to present the most crucial information upfront.
      This allowed for a tailored user journey, avoiding information overload.`],
  },
  {
    number: '05',
    title: 'Legal Considerations',
    content: [`Every asset and piece of content underwent a legal review to ensure it met all copyright
      and branding guidelines. User data collection methods were also verified to be GDPR compliant.`],
  },
];

const solutionsAccordionData = getAccordionTextData(data);

export default solutionsAccordionData;
