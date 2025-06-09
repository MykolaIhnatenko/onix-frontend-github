import getAccordionTextData, { IAccordionTextData } from 'utils/getAccordionTextData';

const data: IAccordionTextData[] = [
  {
    number: '01',
    title: 'Effortless idea capture',
    content: [`LIVBOX lets users quickly capture their thoughts in various formats, such as text,
       voice, or images. Whether it’s a fleeting idea, a quick sketch, or a voice memo, every
       thought is preserved in seconds.`],
  },
  {
    number: '02',
    title: 'Organizational tools',
    content: [`We developed customizable organization features like folders, tags, and
       keyword-based searches. These features help streamline the creative process, making
       finding and managing ideas easy whenever inspiration strikes.`],
  },
  {
    number: '03',
    title: 'Emotional reflection',
    content: [`LIVBOX includes tools for reflecting on the emotional context of each idea,
       allowing users to track their moods and understand how emotions influence their creative patterns.`],
  },
  {
    number: '04',
    title: 'Dashboard metrics',
    content: [`We built a dashboard that gives users valuable insights into their creative
       habits, such as note count, activity trends, top keywords, and emotional trends.
       These metrics help users better understand their creative process and optimize productivity.`],
  },
];

const solutionsAccordionData = getAccordionTextData(data);

export default solutionsAccordionData;
