import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ItemText from 'components/ItemText/ItemText';
import ItemList from 'components/ItemList/ItemList';

const dataIssuesWeSolved: IAccordionData[] = [
  {
    id: 1,
    title: 'Establishing a transparent development\u00A0approach',
    content: (
      <ItemText
        content={[
          `At Onix, our aim is to commence collaborations with a streamlined, efficient, and transparent approach.
          We employ Agile methodologies to ensure optimal flexibility, pace, and quality throughout our development.`,
          `This framework empowers us to swiftly implement ongoing enhancements and adapt
          seamlessly to challenges if they arise.`,
        ]}
      />
    ),
  },
  {
    id: 2,
    title: 'Lean Inception stage',
    content: (
      <>
        <ItemList
          listTitle="We helped the client:"
          list={[
            'understand the project’s core idea and the problem it solves.',
            'identify the target audience’s demographics, behaviors, and pain points.',
            'identify essential features that address the target audience’s needs.',
          ]}
        />
        <ItemText
          content={[
            `We set clear expectations by defining the main concept, audience, and features upfront,
            enabling efficient project delivery.`,
          ]}
        />
      </>
    ),
  },
  {
    id: 3,
    title: 'Building an MVP',
    content: (
      <>
        <ItemText
          content={[
            'We ensured the MVP addressed the core functionalities so the app was usable.',
          ]}
        />
        <ItemList
          listTitle="The MVP included such features:"
          list={[
            'Authorization',
            'Onboarding',
            'Invite your friend feature',
            'Account settings',
          ]}
        />
        <ItemText
          content={[
            `We collaborated with the client to prioritize features and make informed decisions
            to optimize the development.`,
            `This strategic approach helped us meet the client's deadline while laying the
            groundwork for future enhancements.`,
          ]}
          marginBottomAbsent
        />
      </>
    ),
  },
];

export default dataIssuesWeSolved;
