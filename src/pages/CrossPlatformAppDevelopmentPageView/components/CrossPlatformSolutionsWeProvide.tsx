import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import solutionsWeProvideData from '../data/solutionsWeProvideData';

import styles from '../sass/PlatformsSection.module.scss';

export default function CrossPlatformSolutionsWeProvide() {
  return (
    <PageContainer className={`${styles.container} ${styles.solutions}`}>
      <MainTitle className={styles.sectionTitle}>
        Solutions we provide
      </MainTitle>
      <div className={styles.platformsList}>
        {
          solutionsWeProvideData.map(({ id, icon, title }, index) => (
            <div
              className={`${styles.platformsList_item} ${styles.solutionsWeProvideItem}`}
              key={[id, index].join('_')}
            >
              <div className={styles.iconWrapper}>
                {icon}
              </div>
              {title}
            </div>
          ))
        }
      </div>
    </PageContainer>
  );
}
