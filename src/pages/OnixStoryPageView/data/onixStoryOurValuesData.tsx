import ContentText from '../../../components/ContentText/ContentText';
import Icon from '../../../assets/icon';

import styles from '../sass/onixStoryOurValues.module.scss';

const ourValuesData = {
  icons: [
    <Icon.IconEmbrace />,
    <Icon.IconAppreciate />,
    <Icon.IconRespect />,
    <Icon.IconSupport />,
  ],
  titleImage: [
    'Embrace',
    'Appreciate',
    'Respect',
    'Support',
  ],
  contents: [
    {
      id: 1,
      text: (
        <ContentText tag="p" className={styles.text}>
          We
          <span className={styles.blueText}> embrace </span>
          new people, technologies, ideas, and opportunities.
          <span className={styles.blueText}> Openness </span>
          is key to growth.
        </ContentText>
      ),
    },
    {
      id: 2,
      text: (
        <ContentText tag="p" className={styles.text}>
          We
          <span className={styles.blueText}> appreciate </span>
          variety and creativity.
          <span className={styles.blueText}> Uniqueness </span>
          enriches teams, projects, and products.
        </ContentText>
      ),
    },
    {
      id: 3,
      text: (
        <ContentText tag="p" className={styles.text}>
          We
          <span className={styles.blueText}> respect </span>
          everyone and everyone’s opinions and decisions.
          <span className={styles.blueText}> Respect </span>
          is a team’s breathing air.
        </ContentText>
      ),
    },
    {
      id: 4,
      text: (
        <ContentText tag="p" className={styles.text}>
          We
          <span className={styles.blueText}> support </span>
          everyone’s effort and self-development.
          <span className={styles.blueText}> Improvement </span>
          is a team sport.
        </ContentText>
      ),
    },
  ],
};

export default ourValuesData;
