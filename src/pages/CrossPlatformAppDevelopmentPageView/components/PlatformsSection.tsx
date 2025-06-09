import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import platformData from '../data/platformsData';

import styles from '../sass/PlatformsSection.module.scss';

export default function PlatformsSection() {
  return (
    <PageContainer className={styles.container}>
      <MainTitle className={styles.sectionTitle}>
        Let&apos;s create an app that shines on every platform!
      </MainTitle>
      <div className={styles.platformsList}>
        {
          platformData.map(({ id, icon, title }, index) => (
            <div
              className={styles.platformsList_item}
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
