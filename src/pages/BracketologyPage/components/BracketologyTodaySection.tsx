import todayRose from '@/images/bracketology/todaySection/img_rose@2x.webp';
import ImageComponent from '../../../components/Image/Image';
import BracketologyPageContainer from './BracketologyPageContainer';
import BracketologyText from './BracketologyText';

import styles from '../sass/BracketologyTodaySection.module.scss';

function BracketologyTodaySection() {
  return (
    <section className={styles.todaySection}>
      <BracketologyPageContainer className={styles.container}>
        <div className={styles.roseBlock}>
          <div className={styles.roseContent}>
            <BracketologyText tag="h2" variant="title">Bracketology today</BracketologyText>
            <BracketologyText tag="p" variant="text">
              Over six years, Bach Bracket developed into the biggest fantasy platform for reality TV with
              over 580,000 unique users to date. Although similar products have emerged since then, it remains
              popular due to its simplicity and fan-focused approach.
            </BracketologyText>
            <BracketologyText tag="p" variant="text">
              Today’s Bracketology, still led by its first property Bach Bracket, is a set of fantasy leagues
              with interactive games based on weekly TV shows:
            </BracketologyText>
          </div>
          <div className={styles.roseImage}>
            <ImageComponent
              src={todayRose}
              width={600}
              height={550}
              alt="rose"
            />
          </div>
        </div>
      </BracketologyPageContainer>
    </section>
  );
}

export default BracketologyTodaySection;
