import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';

import styles from '../sass/whiteNumberSliderData.module.scss';

const dragSliderData = [
  {
    id: 0,
    content: (
      <div className={styles.card}>
        <MainTitle tag="h3">Research and Competitor Analysis</MainTitle>
        <ContentText className={styles.card_text} tag="p">
          Initially, the Onix team delved into all available materials about the
          client’s business, processes, systems, and challenges to grasp the
          future web portal’s structure and user journey.
        </ContentText>
        <ContentText className={styles.card_text} tag="p">
          They also analyzed existing commercial solutions, focusing on their
          features, user experience (UX), and user interfaces (UI) to identify
          strengths, weaknesses, and areas for improvement.
        </ContentText>
        <p className={styles.card_counter}>
          01
        </p>
      </div>
    ),
  },
  {
    id: 1,
    content: (
      <div className={styles.card}>
        <MainTitle tag="h3">Web App UX/UI Design and Documentation</MainTitle>
        <ContentText className={styles.card_text} tag="p">
          With mockups for several web portal pages created previously by the Onix team,
          the designer refreshed the visual part and added the missing pages.
        </ContentText>
        <ContentText className={styles.card_text} tag="p">
          They employed an iterative design approach, collaborating closely with the client
          and developers to ensure the feasibility of design solutions.
        </ContentText>
        <ContentText className={styles.card_text} tag="p">
          A business analyst carefully documented the business logic in the software requirements
          specification.
        </ContentText>
        <p className={styles.card_counter}>
          02
        </p>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className={styles.card}>
        <MainTitle tag="h3">Prototyping</MainTitle>
        <ContentText tag="p" className={styles.card_text}>
          The designer created interactive prototypes incorporating the web portal’s key functionalities,
          transitions, and user interactions.
        </ContentText>
        <ContentText tag="p" className={styles.card_text}>
          These prototypes were used to gather feedback on usability, intuitiveness, and overall UX quality.
        </ContentText>
        <ContentText tag="p" className={styles.card_text}>
          The designer refined the prototypes through several iterations based on client feedback and usability testing.
        </ContentText>
        <span className={styles.card_counter}>
          03
        </span>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className={styles.card}>
        <MainTitle tag="h3">HCP Web Portal Development</MainTitle>
        <ContentText tag="p" className={styles.card_text}>
          Once the client approved the final design and specification, Onix’s developers
          programmed the features and functionalities for healthcare providers and provider
          support. The development team used Agile methodology, breaking
          the development into 2-week sprints.
        </ContentText>
        <ContentText tag="p" className={`${styles.card_text} ${styles.marginBottom}`}>
          The team included:
        </ContentText>
        <ContentText tag="div" className={styles.card_text}>
          <ul>
            <li><p>Project manager</p></li>
            <li><p>UX/UI designer</p></li>
            <li><p>2 full-stack software engineers</p></li>
            <li><p>Quality assurance (QA) engineer</p></li>
          </ul>
        </ContentText>
        <span className={styles.card_counter}>
          04
        </span>
      </div>
    ),
  },
];

export default dragSliderData;
