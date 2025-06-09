import Image from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import IResultSection from '../interfaces/IResultSection';

import styles from '../sass/CombinedPage.module.scss';

function ResultSection({
  resultsImgSrc, resultsImgAlt, stylesName, description,
}: IResultSection) {
  return (
    <div className={styles.resultSection}>
      {resultsImgSrc && (
      <Image
        fill
        sizes="100vh"
        src={resultsImgSrc}
        alt={resultsImgAlt}
      />
      )}
      <div className={`${styles.overlay} ${styles[stylesName]}`} />
      <div className={styles.container}>
        <VRARContent>
          <h2 className={styles.boldH2}>Results</h2>
        </VRARContent>
        <VRARContent>
          <p>
            {description}
          </p>
        </VRARContent>
      </div>
    </div>
  );
}

export default ResultSection;
