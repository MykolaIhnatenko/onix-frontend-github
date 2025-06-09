import VRARContent from 'components/VRARContent/VRARContent';
import IFuture from '../interfaces/IFuture';

import styles from '../sass/MarineSafety.module.scss';

export default function Future({
  subtitle, texts, isUnderlined, children,
}: IFuture) {
  return (
    <VRARContent className={`${styles.futureContainer} ${isUnderlined ? styles.underline : ''}`}>
      <div className={styles.subheadingContainer}>
        <h3 className={styles.subheading}>{subtitle}</h3>
      </div>
      <div className={styles.leftmostContentContainer}>
        <div className={styles.mainTextContainer}>
          {texts.map((text) => <p className={styles.mainText} key={text}>{text}</p>)}
        </div>
        {children}
      </div>
    </VRARContent>
  );
}
