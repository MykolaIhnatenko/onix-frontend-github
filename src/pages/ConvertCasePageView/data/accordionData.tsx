import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ItemText from 'components/ItemText/ItemText';

const accordionData: IAccordionData[] = [
  {
    id: 1,
    title: 'The primary task to do',
    content: (
      <ItemText
        content={[
          `The Onix team needed to develop a mobile app that allows instant money operations,
           such as conducting transactions and sending, receiving, or exchanging currencies using smartphones.`,
        ]}
      />
    ),
  },
  {
    id: 2,
    title: 'Setting up a transparent development\u00A0process',
    content: (
      <ItemText
        content={[
          `Our cooperation started with setting up a fine-tuned development process. On
           the part of the Onix team, highly-skilled experts were committed to making
           an app for instant money transfers. At Onix, we employ Agile methodology to
           create a seamless, effective, and transparent process. This development
           approach allows our team to make continuous improvements and avoid delays
           or any other development issues.`,
        ]}
      />
    ),
  },
  {
    id: 3,
    title: 'Building MVP',
    content: (
      <ItemText
        content={[
          `We started this project from scratch. Creating an MVP for the demo allowed us
           to understand the target audience's needs and further develop and refine the
           product based on market research. `,
        ]}
        marginBottomAbsent
      />
    ),
  },
];

export default accordionData;
