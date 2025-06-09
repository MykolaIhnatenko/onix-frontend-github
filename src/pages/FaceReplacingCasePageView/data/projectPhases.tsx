import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';

import styles from '../sass/faceReplacingSliderData.module.scss';

const projectPhasesData = [
  {
    id: 1,
    content: (
      <div className={`${styles.card}`}>
        <MainTitle tag="h3">Personalization</MainTitle>
        <ContentText tag="p" className={`${styles.card_text}`}>
          The solution empowers businesses to craft tailored content for their users, enhancing engagement.
        </ContentText>
        <ContentText tag="p" className={`${styles.card_text}`}>
          Personalized content often results in better retention and conversion rates.
        </ContentText>
        <span className={styles.card_counter}>
          01
        </span>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className={`${styles.card}`}>
        <MainTitle tag="h3">Engagement and interaction</MainTitle>
        <ContentText tag="p" className={`${styles.card_text}`}>
          Software fosters active participation and interaction by enabling users
          to feature in videos, resulting in a more immersive user experience.
        </ContentText>
        <span className={styles.card_counter}>
          02
        </span>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className={`${styles.card}`}>
        <MainTitle tag="h3">Viral marketing potential</MainTitle>
        <ContentText tag="p" className={`${styles.card_text}`}>
          Incorporating personalized, humorous videos enhances the likelihood of them being shared on
          social media platforms, amplifying the reach of marketing campaigns.
        </ContentText>
        <span className={styles.card_counter}>
          03
        </span>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className={`${styles.card}`}>
        <MainTitle tag="h3">Monetization</MainTitle>
        <ContentText tag="p" className={`${styles.card_text}`}>
          Businesses can introduce this as a premium feature or utilize it
          for advertising campaigns, potentially generating revenue.
        </ContentText>
        <span className={styles.card_counter}>
          04
        </span>
      </div>
    ),
  },
];

export default projectPhasesData;
