import ICardsBlock from '../../../components/CardsBlock/interfaces/ICardsBlock';
import ContentText from '../../../components/ContentText/ContentText';

import styles from '../../MainPage/sass/trustUsBlock.module.scss';

const trustUsCardsData: ICardsBlock[] = [
  {
    id: '01',
    title: 'Business-focused',
    content: 'We understand that software is built to meet specific business needs. We develop custom IT '
        + 'solutions to meet these needs in the most efficient way possible.',
  },
  {
    id: '02',
    title: 'Vast industry expertise',
    content: 'Onix’s expertise covers eLearning, financial technology, healthcare and insurance, fitness and sports, '
        + 'SaaS, ERP systems, video streaming apps, real estate, retail, and more.',
  },
  {
    id: '03',
    title: 'Seamless communication',
    content: 'Fully transparent communications and the high English level of our experts eliminate the traditional '
        + 'hurdles of working with outsourcing service providers.',
  },
  {
    id: '04',
    title: 'Flexibility and scalability',
    content: 'Our highly qualified solution architects, software engineers, and project managers are '
        + 'prepared to solve your most complex challenges. And you can easily scale resources up or down '
        + 'as needs change.',
  },
  {
    id: '05',
    title: 'Openness and transparency',
    content: 'No bureaucracy and hidden procedures. All you need to do is to sign an NDA and contract to '
        + 'start working with our team. Moreover, our specialists provide clear reporting of the work done, '
        + 'including highly detailed invoices with the hours spent on each task.',
  },
  {
    id: '06',
    title: 'Consistent delivery',
    content: 'We use Agile methodology to add more flexibility, speed, quality, and transparency to our '
        + 'development process. As a result, our team and clients enjoy a structured, iterative development '
        + 'process that allows for delivering a valuable final product on time.',
  },
];

export const trustUsCardsContent = {
  title: 'Benefits of Developing \n'
        + 'Custom Software with Onix',
  text: (
    <>
      <ContentText tag="p" className={styles.sectionSubTitle}>
        After more than 23 years of successfully rendering custom software development services, we have
        mastered the highest service standards and know that an individual solution is a basic requirement
        that can take a product to a successful launch.
      </ContentText>
      <ContentText tag="p" className={`${styles.sectionSubTitle} ${styles.lastSectionSubTitle}`}>
        We have established a well-defined software development cycle that ensures product quality,
        helps meet deadlines, and sticks to a client’s budget limits. But there’s more than that.
      </ContentText>
    </>
  ),
};

export default trustUsCardsData;
