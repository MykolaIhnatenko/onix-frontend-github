import { IDevelopmentServicesItemData } from 'components/DevelopmentServicesTemplate/interfaces/IDevelopmentServicesTemplate';

const developmentServicesContentData: IDevelopmentServicesItemData[] = [
  {
    id: 1,
    number: '01',
    title: 'Scenario Selection',
    content: [
      `The user selects a training scenario in the main menu depending on the topic they need.
      Each of the scenarios is a step-by-step medical training simulation.`,
    ],
  },
  {
    id: 2,
    number: '02',
    title: '360° Simulation',
    content: [
      `The user views the chosen scenario’s first round, a 360° video, e.g.,
      of a conversation between nurses in a hospital ward where they can examine the patient,
      the medical devices, and the environment.`,
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Decision Point',
    content: [
      `In the round’s interactive closing part, the user must choose one of the proposed decisions, e.g.,
      taking a patient’s temperature or administering medicine.`,
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Interactive Rounds',
    content: [
      `The user’s answer unlocks the next round, where things are moving according to their right or wrong
      choices, e.g., the patient develops a fever after taking a drug. The user watches the round’s video,
      and the cycle continues.`,
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Test Results',
    content: [
      'After the final round, the user can see their test results.',
    ],
  },
];

export default developmentServicesContentData;
