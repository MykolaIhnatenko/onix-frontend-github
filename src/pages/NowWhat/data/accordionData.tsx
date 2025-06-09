import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';

const accordionData: IAccordionData[] = [
  {
    id: 1,
    title: (
      <>
        Setting up a transparent
        {' '}
        <br className="screen-lg:hidden" />
        development process
      </>
    ),
    content: [
      `At Onix, we strive to start our cooperation with
      a seamless, effective and transparent process.`,
      `To guarantee a high level of flexibility, speed,
      and quality in our development process, we employ
      an Agile methodology.`,
      `This approach allows us to make continuous
      improvements quickly and flexibly address any
      issues or delays.`,
    ],
  },
  {
    id: 2,
    title: 'Product discovery stage',
    content: [
      `Onix started development from the product discovery phase.
      This step is essential to eliminate potential financial risks
      while making the development process smoother and more predictable.`,
      `Initially, the decision on which technology to use for
      the forum was unclear, so we suggested a 40-hour exploration period.`,
      `Our developer tried building the first version of the forum using different technologies before settling
      on the most suitable option.`,
    ],
  },
  {
    id: 3,
    title: 'Building MVP',
    content: [
      `Onix started this project from scratch. Creating
      a minimum viable product (MVP) allowed us to reduce
      the time and money invested in launching the product.`,
      `This approach enables us to test the client's idea with minimal investment, gather feedback from
      real users, and further develop and refine the product based on market research.`,
      `Ultimately, this allows our client to get their product
      to market quickly and efficiently.`,
    ],
  },
];

export default accordionData;
