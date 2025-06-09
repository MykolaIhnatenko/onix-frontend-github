import MainTitle from '../../../components/MainTitle/MainTitle';
import { IBenefitsData } from '../../BrandingDesignPageView/interfaces/IBenefitsSection';

import styles from '../../BrandingDesignPageView/sass/benefitsSection.module.scss';

const travelBenefitsSectionData:IBenefitsData[] = [
  {
    id: 1,
    content: (
      <div className={styles.card}>
        <MainTitle className={styles.number} tag="p">01</MainTitle>
        <MainTitle className={`${styles.text} ${styles.textMode}`} tag="h3">
          Automate day-to-day tasks and enhance business efficiency
        </MainTitle>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className={styles.card}>
        <MainTitle className={styles.number} tag="p">02</MainTitle>
        <MainTitle className={styles.text} tag="h3">
          Increase customer satisfaction by offering an enhanced travel experience
        </MainTitle>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className={styles.card}>
        <MainTitle className={styles.number} tag="p">03</MainTitle>
        <MainTitle className={`${styles.text} ${styles.textMode}`} tag="h3">
          Keep your business open 24/7 and reach customers anytime, anywhere
        </MainTitle>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className={styles.card}>
        <MainTitle className={styles.number} tag="p">04</MainTitle>
        <MainTitle className={styles.text} tag="h3">
          Gain valuable insights on guest behavior and offer more personalized offerings
        </MainTitle>
      </div>
    ),
  },
];

export default travelBenefitsSectionData;
