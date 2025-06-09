import MainTitle from '../../../components/MainTitle/MainTitle';
import VRARContent from '../../../components/VRARContent/VRARContent';
import IAchievedBusiness from '../interfaces/IAchievedBusiness';

import styles from '../sass/achievedBusiness.module.scss';

function AchievedBusiness({ blockTitle, data }: IAchievedBusiness) {
  return (
    <div className={styles.container}>
      <VRARContent>
        <MainTitle className={styles.blockTitle}>
          {blockTitle}
        </MainTitle>
      </VRARContent>
      <div className={styles.content}>
        {data.map(({ id, title }) => (
          <VRARContent key={id} className={styles.contentItem}>
            <div className={styles.contentContainer}>
              <VRARContent>
                <MainTitle className={styles.title} tag="h3">
                  {title}
                </MainTitle>
              </VRARContent>
              <VRARContent>
                <MainTitle className={styles.id} tag="span">
                  {id}
                </MainTitle>
              </VRARContent>
            </div>
          </VRARContent>
        ))}
      </div>
    </div>
  );
}

export default AchievedBusiness;
