import MainTitle from 'components/MainTitle/MainTitle';
import ContentText from 'components/ContentText/ContentText';

import styles from '../sass/TitleMainSection.module.scss';

const titleMainSection = (
  <div className={styles.mainTitle}>
    <MainTitle tag="h1" className={styles.title}>
      Golf Live
    </MainTitle>
    <ContentText tag="p" className={styles.text}>
      A platform for online golf coaching
    </ContentText>
  </div>
);

export default titleMainSection;
