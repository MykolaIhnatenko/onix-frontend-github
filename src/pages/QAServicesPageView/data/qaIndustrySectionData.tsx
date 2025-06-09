import MainTitle from '../../../components/MainTitle/MainTitle';

import styles from '../sass/qaIndustrySection.module.scss';

const qaIndustrySectionData = {
  sectionTitle: (
    <MainTitle tag="h2" className={styles.title}>
      With our software testing and QA services you can:
    </MainTitle>
  ),
  data: [
    {
      id: 1,
      number: '01',
      text: 'Identify customer needs and prioritize features when working on updates or new products.',
    },
    {
      id: 2,
      number: '02',
      text: 'Create software that meets the needs of their users more effectively.',
    },
    {
      id: 3,
      number: '03',
      text: `Ensure that software complies with industry standards and regulations to offer
       customers a secure experience while using them.`,
    },
    {
      id: 4,
      number: '04',
      text: `Reduce the likelihood of costly mistakes that could potentially harm
       a business's reputation or cause financial losses.`,
    },
    {
      id: 5,
      number: '05',
      text: 'Save time and money while reducing the risk of releasing faulty products or services.',
    },
  ],
};

export default qaIndustrySectionData;
