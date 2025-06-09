import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';

import styles from '../sass/onixStoryOurWay.module.scss';

const onixStoryOurWayData = [
  {
    id: 1,
    item: (
      <>
        <div>
          <MainTitle tag="p" className={styles.bigNumber}>8</MainTitle>
          <ContentText tag="p" className={styles.subTxt}>team members 2002</ContentText>
        </div>
        <div>
          <MainTitle tag="p" className={styles.bigNumber}>80m²</MainTitle>
          <ContentText tag="p" className={styles.subTxt}>office space 2002</ContentText>
        </div>
      </>
    ),
  },
  {
    id: 2,
    item: (
      <>
        <div>
          <MainTitle tag="p" className={styles.bigNumber}>370+</MainTitle>
          <ContentText tag="p" className={styles.subTxt}>employees 2023</ContentText>
        </div>
        <div>
          <MainTitle tag="p" className={styles.bigNumber}>2177m²</MainTitle>
          <ContentText tag="p" className={styles.subTxt}>office space 2023</ContentText>
        </div>
      </>
    ),
  },
];

export default onixStoryOurWayData;
