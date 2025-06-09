import Future from './Future';
import VRARContent from 'components/VRARContent/VRARContent';
import futures from '../data/futures';
import featuresIcons from '../data/featuresIcons';

import styles from '../sass/MarineSafety.module.scss';

function FuturesSection() {
  return (
    <section className={styles.futuresOuterContainer}>
      <div className={styles.futuresInnerContainer}>
        <VRARContent className={styles.subtitleContainer}>
          <h2 className={styles.subtitle}>Additional features</h2>
        </VRARContent>
        <div>
          {futures.map(({
            subtitle,
            texts,
            isUnderlined,
            children,
          }, index) => (
            <Future
              subtitle={subtitle}
              texts={texts}
              isUnderlined={isUnderlined}
              key={['future', index].join('_')}
            >
              {children}
            </Future>
          ))}
        </div>
        <div className={styles.helpContainer}>
          <VRARContent className={styles.biggerTextContainer}>
            <h2 className={styles.biggerText}>The system thus helps:</h2>
          </VRARContent>
          <VRARContent>
            <ul className={styles.helpListContainer}>
              {featuresIcons.map(({ icon, desc }, index) => (
                <li key={['featuresIcon', index].join('_')} className={styles.helpListItem}>
                  <div className={styles.imageContainer}>
                    {icon}
                  </div>
                  <p className={styles.itemText}>
                    {desc}
                  </p>
                </li>
              ))}
            </ul>
          </VRARContent>
        </div>
      </div>
      <div className={`${styles.semicircle} ${styles.semicircle1}`} />
      <div className={`${styles.semicircle} ${styles.semicircle2}`} />
    </section>
  );
}

export default FuturesSection;
