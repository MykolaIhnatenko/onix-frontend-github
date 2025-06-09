import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/goodFaceForSection.module.scss';

function GoodFaceForSection() {
  return (
    <section className={styles.forSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <VRARContent>
            <h2 className={styles.title}>
              <span> AI-powered </span>
              mobile app that helps customers decide which beauty products fit them best
            </h2>
          </VRARContent>
          <VRARContent>
            <p className={styles.text}>
              This case study shares how we built an AI-powered iOS app for a cosmetics industry that empowers
              consumers to easily find safe beauty products that satisfy their specific skincare needs.
            </p>
          </VRARContent>
        </div>
      </div>
    </section>
  );
}

export default GoodFaceForSection;
