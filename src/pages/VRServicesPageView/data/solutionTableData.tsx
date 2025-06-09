import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';

import styles from '../sass/solutionTableData.module.scss';

const solutionTableData = [
  {
    id: 1,
    title: (
      <div className={styles.titleBlock}>
        <MainTitle tag="span" className={styles.number}>01</MainTitle>
        <MainTitle tag="h3" className={styles.titleText}>Enhances customer experience</MainTitle>
      </div>
    ),
    content: (
      <ContentText tag="p" marginAbsent className={styles.text}>
        AR/VR can provide customers with immersive and interactive experiences,
        allowing them to engage with your products in new and exciting ways. This can lead to
        increased brand loyalty and sales.
      </ContentText>

    ),
  },
  {
    id: 2,
    title: (
      <div className={styles.titleBlock}>
        <MainTitle tag="span" className={styles.number}>02</MainTitle>
        <MainTitle tag="h3" className={styles.titleText}>Boosts employee training and productivity</MainTitle>
      </div>
    ),
    content: (

      <ContentText tag="p" marginAbsent className={styles.text}>
        AR/VR technology can provide employees with realistic simulations of various
        workplace scenarios, improving their skills and knowledge while reducing the risk of
        on-the-job injuries. This leads to better job performance and productivity.
      </ContentText>

    ),
  },
  {
    id: 3,
    title: (
      <div className={styles.titleBlock}>
        <MainTitle tag="span" className={styles.number}>03</MainTitle>
        <MainTitle tag="h3" className={styles.titleText}>Provides immersive product visualization</MainTitle>
      </div>
    ),
    content: (
      <ContentText tag="p" marginAbsent className={styles.text}>
        These technologies allows customers to visualize products in 3D, providing a more
        accurate idea of what they are buying. This leads to fewer returns and increased customer satisfaction.
      </ContentText>
    ),
  },
  {
    id: 4,
    title: (
      <div className={styles.titleBlock}>
        <MainTitle tag="span" className={styles.number}>04</MainTitle>
        <MainTitle tag="h3" className={styles.titleText}>Enables remote collaboration and communication</MainTitle>
      </div>
    ),
    content: (
      <ContentText tag="p" marginAbsent className={styles.text}>
        With AR/VR technology, employees can collaborate on projects from different
        locations in real-time, making it easier to work with remote teams or clients.
        This improves efficiency and reduces travel costs.
      </ContentText>
    ),
  },
  {
    id: 5,
    title: (
      <div className={styles.titleBlock}>
        <MainTitle tag="span" className={styles.number}>05</MainTitle>
        <MainTitle tag="h3" className={styles.titleText}>Improves safety in hazardous work environments</MainTitle>
      </div>
    ),
    content: (
      <ContentText tag="p" marginAbsent className={styles.text}>
        AR/VR technology provides a safe way for employees to train for hazardous
        situations without putting themselves at risk. This leads to fewer accidents on the
        job and improved workplace safety overall.
      </ContentText>
    ),
  },
  {
    id: 6,
    title: (
      <div className={styles.titleBlock}>
        <MainTitle tag="span" className={styles.number}>06</MainTitle>
        <MainTitle tag="h3" className={styles.titleText}>Increases brand awareness and engagement</MainTitle>
      </div>
    ),
    content: (
      <ContentText tag="p" marginAbsent className={styles.text}>
        By incorporating AR/VR technology into marketing campaigns, businesses can create unique
        experiences that capture the attention of potential customers, increasing brand awareness and engagement.
      </ContentText>
    ),
  },
  {
    id: 7,
    title: (
      <div className={styles.titleBlock}>
        <MainTitle tag="span" className={styles.number}>07</MainTitle>
        <MainTitle tag="h3" className={styles.titleText}>Learning the work process</MainTitle>
      </div>
    ),
    content: (
      <ContentText tag="p" marginAbsent className={styles.text}>
        VR allows clients to gain a deeper understanding of how the work process operates,
        which can be particularly helpful for individuals who are visual or experiential learners.
        It can create a safe environment to practice and experiment with different scenarios,
        without the risk of real-world consequences or damage to equipment.
      </ContentText>
    ),
  },
];

export default solutionTableData;
