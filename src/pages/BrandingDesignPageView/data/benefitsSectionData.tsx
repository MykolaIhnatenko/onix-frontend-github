import MainTitle from '../../../components/MainTitle/MainTitle';
import { IBenefitsData } from '../interfaces/IBenefitsSection';

import styles from '../sass/benefitsSection.module.scss';

const benefitsSectionData:IBenefitsData[] = [
  {
    id: 1,
    content: (
      <div className={styles.card}>
        <MainTitle className={styles.number} tag="div">01</MainTitle>
        <MainTitle className={styles.text} tag="h3">Increased brand recognition</MainTitle>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className={styles.card}>
        <MainTitle className={styles.number} tag="div">02</MainTitle>
        <MainTitle className={styles.text} tag="h3">High credibility and trust</MainTitle>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className={styles.card}>
        <MainTitle className={styles.number} tag="div">03</MainTitle>
        <MainTitle className={styles.text} tag="h3">Differentiation from competitors</MainTitle>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className={styles.card}>
        <MainTitle className={styles.number} tag="div">04</MainTitle>
        <MainTitle className={styles.text} tag="h3">Enhanced customer loyalty</MainTitle>
      </div>
    ),
  },
  {
    id: 5,
    content: (
      <div className={styles.card}>
        <MainTitle className={styles.number} tag="div">05</MainTitle>
        <MainTitle className={styles.text} tag="h3">Brand consistency and cohesion</MainTitle>
      </div>
    ),
  },
  {
    id: 6,
    content: (
      <div className={styles.card}>
        <MainTitle className={styles.number} tag="div">06</MainTitle>
        <MainTitle className={styles.text} tag="h3">Expanded market reach</MainTitle>
      </div>
    ),
  },
];

export default benefitsSectionData;
