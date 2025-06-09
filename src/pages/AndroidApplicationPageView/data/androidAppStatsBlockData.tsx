import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import { IAndroidAppStatsBlockItem } from '../interfaces/IAndroidAppStatsBlock';

import styles from '../sass/androidAppStatsBlock.module.scss';

const androidAppStatsBlockData: IAndroidAppStatsBlockItem[] = [
  {
    id: 1,
    number: (
      <MainTitle className={styles.number} tag="p">
        100%
      </MainTitle>
    ),
    subTitle: (
      <ContentText tag="p" className={styles.subTitle}>
        secure
      </ContentText>
    ),
  },
  {
    id: 2,
    title: (
      <MainTitle className={styles.title} tag="p">
        Up to
      </MainTitle>
    ),
    number: (
      <MainTitle className={styles.number} tag="p">
        99.9%
      </MainTitle>
    ),
    subTitle: (
      <ContentText tag="p" className={styles.subTitle}>
        crash-free
      </ContentText>
    ),
  },
  {
    id: 3,
    number: (
      <MainTitle className={styles.number} tag="p">
        5/5
      </MainTitle>
    ),
    subTitle: (
      <ContentText tag="p" className={styles.subTitle}>
        end-user
        {' '}
        <br className={styles.hiddenItem} />
        satisfaction rating
      </ContentText>
    ),
  },
];

export default androidAppStatsBlockData;
