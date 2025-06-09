import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import { ICardSliderItem } from '../../../components/CardSlider/interfaces/ICardSlider';

import styles from '../../../components/CardSlider/sass/cardSlider.module.scss';

const designAuditCardSliderData: ICardSliderItem[] = [
  {
    id: '01',
    title: (
      <MainTitle tag="h3" className={styles.cardTitle}>
        User Research and Understanding
      </MainTitle>
    ),
    text: (
      <ContentText tag="p" className={styles.cardText}>
        Onix conducts thorough user research, including interviews and usability testing, to
        gain deep insights into user needs, preferences, and behavior.
      </ContentText>
    ),
  },
  {
    id: '02',
    title: (
      <MainTitle tag="h3" className={styles.cardTitle}>
        Innovation and Differentiation
      </MainTitle>
    ),
    text: (
      <ContentText tag="p" className={styles.cardText}>
        Onix employs a team of creative designers who stay up-to-date with the latest design
        trends and innovative approaches, ensuring unique and standout designs.
      </ContentText>
    ),
  },
  {
    id: '03',
    title: (
      <MainTitle tag="h3" className={styles.cardTitle}>
        User Experience and Usability
      </MainTitle>
    ),
    text: (
      <ContentText tag="p" className={styles.cardText}>
        Onix focuses on creating intuitive and user-friendly interfaces, employing user-centered
        design principles to optimize the user experience.
      </ContentText>
    ),
  },
  {
    id: '04',
    title: (
      <MainTitle tag="h3" className={styles.cardTitle}>
        Technical Constraints and Feasibility
      </MainTitle>
    ),
    text: (
      <ContentText tag="p" className={styles.cardText}>
        Onix collaborates closely with developers and engineers to ensure that design concepts are
        feasible and compatible with technical requirements.
      </ContentText>
    ),
  },
  {
    id: '05',
    title: (
      <MainTitle tag="h3" className={styles.cardTitle}>
        Time and Resource Management
      </MainTitle>
    ),
    text: (
      <ContentText tag="p" className={styles.cardText}>
        Onix follows a structured design process, utilizing project management techniques to manage
        time and resources and meet deadlines effectively.
      </ContentText>
    ),
  },
  {
    id: '06',
    title: (
      <MainTitle tag="h3" className={styles.cardTitle}>
        Stakeholder Alignment and Communication
      </MainTitle>
    ),
    text: (
      <ContentText tag="p" className={styles.cardText}>
        Onix maintains clear and constant communication with stakeholders, involving them in the design
        process and addressing their feedback and concerns.
      </ContentText>
    ),
  },
];

export default designAuditCardSliderData;
