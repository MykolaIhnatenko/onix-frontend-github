import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ItemText from 'components/ItemText/ItemText';

const approachData: IAccordionData[] = [
  {
    id: 111,
    number: '01',
    title: 'Access to the top-notch talent pool',
    content: (
      <ItemText
        content={[
          `Hire the most skilled dedicated software developers for your project without limiting yourself to
          a specific location. We deliver superb solutions through our best structural standards that
          complement your company's needs and budget.`,
        ]}
      />
    ),
  },
  {
    id: 112,
    number: '02',
    title: 'Full transparency',
    content: (
      <ItemText
        content={[
          `No bureaucracy and hidden procedures. All you need to do is sign NDA and contract to start working with
          our team. Moreover, our specialists provide clear reporting of the work done, including highly detailed
          invoices with the hours spent on each task.`,
        ]}
      />
    ),
  },
  {
    id: 113,
    number: '03',
    title: 'Combination of creativity, inspiration, and technology',
    content: (
      <ItemText
        content={[
          `Creative collective effort, innovative and flexible use of modern technology, and artistic commitment
          to excellence blend together to create delightful user experiences and high-performance software products.`,
        ]}
      />
    ),
  },
  {
    id: 114,
    number: '04',
    title: 'Clear communication',
    content: (
      <ItemText
        content={[
          `We create a communication plan for our clients and team to be constantly aware of the project's
          progress, provide feedback and make changes if needed. Moreover, our team members have excellent English
          skills, so there will be excellent two way communication.`,
        ]}
      />
    ),
  },
  {
    id: 115,
    number: '05',
    title: 'Consistent delivery',
    content: (
      <ItemText
        content={[
          `We use Agile methodology to add flexibility, speed, quality, and transparency to our development process.
          As a result, our team and clients enjoy a structured, iterative development process that allows for
          delivering a valuable final product on time and within budget.`,
        ]}
      />
    ),
  },
  {
    id: 116,
    number: '06',
    title: 'Efficient project management',
    content: (
      <ItemText
        content={[
          `We provide you with a project manager who prepares a document with a detailed product feature list,
          deadlines, and responsibilities. Thus, you’re continually aware of project progress and can ensure
          the team meets deadlines.`,
        ]}
      />
    ),
  },
];

const approachBlockData = {
  title: 'Dedicated development team – a win-win approach',
  text: 'Collaborate with our dedicated development team of experts '
    + 'hand-picked specifically for your business goals and reach greater heights!',
  data: approachData,
};

export default approachBlockData;
