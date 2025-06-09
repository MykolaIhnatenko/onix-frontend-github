import getAccordionTextData, { IAccordionTextData } from 'utils/getAccordionTextData';

const data: IAccordionTextData[] = [
  {
    number: '01',
    title: 'Cost savings',
    content: [
      `Offshore web development can be significantly more cost-effective than developing a website
      domestically. Many offshore developers operate in countries with lower costs of living, which
      can translate to lower hourly rates. Additionally, offshore developers may be able to work faster
      and more efficiently due to their specialized skills and experience.`,
    ],
  },
  {
    number: '02',
    title: 'Access to specialized skills',
    content: [
      `Offshore web development can provide access to specialized skills that may not be readily available
      domestically. For example, if you need a website with a specific technology stack, you may be able
      to find an offshore development team with expertise in that stack.`,
    ],
  },
  {
    number: '03',
    title: 'Increased efficiency',
    content: [
      `Offshore web development teams are often able to work around the clock, which can result in increased
      efficiency and faster project completion times. Additionally, offshore developers may be able to work
      more efficiently due to their experience with similar projects and their specialized skills.`,
    ],
  },
  {
    number: '04',
    title: 'Flexibility',
    content: [
      `Offshore web development can offer a high degree of flexibility in terms of project management and
      staffing. You can work with a team of developers that is tailored to your specific needs and budget,
      and you can scale up or down as necessary.`,
    ],
    marginBottomAbsent: true,
  },
];

export default getAccordionTextData(data);
