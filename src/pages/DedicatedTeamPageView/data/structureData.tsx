import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ItemText from 'components/ItemText/ItemText';

interface IStructureData {
  id: number;
  title: string;
  data: IAccordionData[];
}

const structureData: IStructureData[] = [
  {
    id: 1,
    title: 'Required',
    data: [
      {
        id: 101,
        number: '01',
        title: 'Project managers',
        content: (
          <ItemText
            content={[
              `Focus on successful product development while ensuring your project is on time,
              on budget, and within scope.`,
            ]}
          />
        ),
      },
      {
        id: 201,
        number: '02',
        title: 'Team/Tech lead',
        content: (
          <ItemText
            content={[
              `A technical specialist who develops the service architecture
              and controls the quality of the team’s work.`,
            ]}
          />
        ),
      },
      {
        id: 301,
        number: '03',
        title: 'Backend developers',
        content: (
          <ItemText
            content={[
              'Work on building and maintaining the stability and performance of your product.',
            ]}
          />
        ),
      },
      {
        id: 401,
        number: '04',
        title: 'Frontend developers',
        content: (
          <ItemText
            content={[
              'Are responsible for the ‘client-side’ of development and focus on the look and feel of your product.',
            ]}
          />
        ),
      },
      {
        id: 501,
        number: '05',
        title: 'Mobile app developers',
        content: (
          <ItemText
            content={[
              'Specialize in mobile technology, such as building apps for Android, iOS, and cross-platform.',
            ]}
          />
        ),
      },
      {
        id: 601,
        number: '06',
        title: 'QA engineers',
        content: (
          <ItemText
            content={[
              'Help make your product bug-free and prevent defects in production.',
            ]}
          />
        ),
      },
      {
        id: 701,
        number: '07',
        title: 'UI/UX designers',
        content: (
          <ItemText
            content={[
              'Make your product attractive, enjoyable for your target audience, and user-friendly.',
            ]}
          />
        ),
      },
    ],
  },
  {
    id: 2,
    title: 'Optional (depending on the project type)',
    data: [
      {
        id: 102,
        number: '01',
        title: 'VR designer',
        content: (
          <ItemText
            content={[
              `Exploits virtual reality to simulate the user experiences and the complex object interactions
              or services with one another and with the user.`,
            ]}
          />
        ),
      },
      {
        id: 202,
        number: '02',
        title: 'System architects',
        content: (
          <ItemText
            content={[
              `Are responsible for analyzing, advising, and maintaining the proper IT components to ensure
              the right development process and meet specific clients' requirements.`,
            ]}
          />
        ),
      },
      {
        id: 302,
        number: '03',
        title: 'DevOps engineers',
        content: (
          <ItemText
            content={[
              `Сonfigure the server infrastructure, developer experience (DX), and establish continuous
              integration (CI) and continuous delivery (CD).`,
            ]}
          />
        ),
      },
      {
        id: 402,
        number: '04',
        title: '3D modelers',
        content: (
          <ItemText
            content={[
              'Build 3D characters and environments that are based on the concept art.',
            ]}
          />
        ),
      },
    ],
  },
];

export default structureData;
