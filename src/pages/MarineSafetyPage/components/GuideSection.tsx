import IGuideSection from '../interfaces/IGuideSection';

import styles from '../sass/MarineSafety.module.scss';

export default function GuideSection({ children }: IGuideSection) {
  return (
    <section className={styles.guideOuterContainer}>
      <div className={styles.guideInnerContainer}>
        {children}
      </div>
    </section>
  );
}
