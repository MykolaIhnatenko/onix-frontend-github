import Image from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import IResponsibilitySection from '../interfaces/IResponsibilitySection';

import styles from '../sass/CombinedPage.module.scss';

function ResponsibilitySection({ title, responsibilityCards }: IResponsibilitySection) {
  return (
    <div className={`${styles.responsibilitySection} ${styles.saleUrl}`}>
      <div className={styles.container}>
        <VRARContent>
          <h2 className={styles.regularH2}>{title}</h2>
        </VRARContent>
        <div className={styles.responsibilityList}>
          {responsibilityCards.map(({ id, img, text }) => (
            <VRARContent key={id} className={styles.item}>
              <div>
                <Image
                  fill
                  src={img}
                  alt="icon"
                  className={styles.responsibilityIcon}
                />
              </div>
              <p>{text}</p>
            </VRARContent>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResponsibilitySection;
