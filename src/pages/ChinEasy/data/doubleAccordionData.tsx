import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ItemText from 'components/ItemText/ItemText';

const doubleAccordionData: IAccordionData[] = [
  {
    id: 1,
    number: '01',
    title: 'Intuitive onboarding and user flow',
    content: (
      <ItemText
        content={[
          `The team created a seamless onboarding process that guides users through setting up their profiles,
          selecting their learning goals, and customizing their learning experience.`,
          'Straightforward and intuitive navigation ensures a smooth user journey.',
        ]}
      />
    ),
  },
  {
    id: 7,
    number: '07',
    title: 'Multimedia content integration',
    content: (
      <ItemText
        content={[
          `Videos and photos provide insights into China’s culture, history, and traditions. Virtual
          tours and interactive cultural activities should further immerse the learners in the Chinese context.`,
        ]}
      />
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Dynamic language exercises',
    content: (
      <ItemText
        content={[
          `The exercises were designed to adapt to users&apos; proficiency levels and adjust to their performance.
          This helps ensure a challenging yet manageable learning experience.`,
          `Onix’s designers created interactive components, animations, and transitions that added a sense
          of interactivity and delight to the learning experience.`,
        ]}
      />
    ),
  },
  {
    id: 8,
    number: '08',
    title: 'Discussion boards and chats',
    content: (
      <ItemText
        content={[
          `A user-friendly interface helps interact with fellow learners, share their achievements, and participate
          in language challenges while fostering a sense of community and support among the app users.`,
        ]}
      />
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Visual vocabulary builder',
    content: (
      <ItemText
        content={[
          `The design team created images, illustrations, and contextual examples that reinforce word meanings
          and improve retention.`,
        ]}
      />
    ),
  },
  {
    id: 9,
    number: '09',
    title: 'Visual language-learning pathways',
    content: (
      <ItemText
        content={[
          `Onix’s experts designed interactive learning pathways visually representing a user’s progress
          through different language levels. This gives users a clear sense of achievement and motivates
          them to advance.`,
        ]}
      />
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Interactive pronunciation practice',
    content: (
      <ItemText
        content={[
          `Voice recognition technology enables the app to provide real-time feedback on users&apos;
          pronunciation. Visual aids, such as mouth position diagrams, were designed to help users
          master accurate pronunciation.`,
        ]}
      />
    ),
  },
  {
    id: 10,
    number: '10',
    title: 'Personalized dashboard',
    content: (
      <ItemText
        content={[
          'Users can view their learning progress, achievements, and areas for improvement and set goals.',
        ]}
      />
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Digital companions',
    content: (
      <ItemText
        content={[
          `The captivating and memorable colorful characters act as teachers and companions to the young learners
          within the app. They are always ready to offer assistance and guidance at every learning juncture and
          facilitate education and entertainment through games. This approach simplifies and enriches the process
          of learning Chinese and enhances user engagement and motivation while alleviating parents’ concerns
          about their children’s progress and development.`,
        ]}
      />
    ),
  },
  {
    id: 11,
    number: '11',
    title: 'Customization features',
    content: (
      <ItemText
        content={[
          `The app allows customizing preferences, such as font size, color schemes, and background themes,
          to create a more comfortable learning environment.`,
        ]}
      />
    ),
  },
  {
    id: 6,
    number: '06',
    title: 'Gamification',
    content: (
      <ItemText
        content={[
          `The app includes a gamified system of challenges, quizzes, and rewards that
          incentivize users to engage with the app and complete language learning milestones consistently.`,
          `Onix’s team designed and implemented gamification elements, such as badges, rewards, and progress
          tracking, to enhance user engagement and motivation.`,
        ]}
      />
    ),
  },
];

export default doubleAccordionData;
