import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ItemText from 'components/ItemText/ItemText';

export const accordionData: IAccordionData[] = [
  {
    id: 1,
    number: '01',
    title: 'Messaging',
    content: (
      <ItemText
        content={[
          'Allowing users to conveniently and efficiently communicate with others through text-based conversations.',
        ]}
      />
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Search engines',
    content: (
      <ItemText
        content={[
          `Providing users with seamless interactions with search engines,
          enhancing their ability to browse and access information efficiently.`,
        ]}
      />
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Web browsers',
    content: (
      <ItemText
        content={[
          'Allowing users to navigate web browsers, facilitating smoother online searches and content consumption.',
        ]}
      />
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Social media',
    content: (
      <ItemText
        content={[
          `Enabling users to effortlessly compose posts, comments,
          and engage with their network on various social media channels.`,
        ]}
      />
    ),
  },
];

export const listData = [
  {
    title: 'Messaging',
    desc:
      'Allowing users to conveniently and efficiently communicate with others through text-based conversations.',
  },
  {
    id: 2,
    title: 'Search engines',
    desc:
      `Providing users with seamless interactions with search engines,
      enhancing their ability to browse and access information efficiently.`,
  },
  {
    id: 3,
    title: 'Web browsers',
    desc:
      'Allowing users to navigate web browsers, facilitating smoother online searches and content consumption.',
  },
  {
    id: 4,
    title: 'Social media',
    desc:
      `Enabling users to effortlessly compose posts, comments,
      and engage with their network on various social media channels.`,
  },
];
