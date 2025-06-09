import { ibmPlexMono, generalSans } from '../../../fonts/MainFonts';
import { IAboutScheduling } from '../interfaces/IOnlineSchedulingAndBookingView';

import styles from '../sass/AboutScheduling.module.scss';

function AboutScheduling({
  title, text, textGray, textGraySecond, textSecond, revertBlock, variant,
}: IAboutScheduling) {
  return (
    <div className={`${styles.aboutOurScheduling} ${variant ? styles[variant] : ''}`}>
      <div className={styles.content}>
        <p className={`${styles.titleAbout} ${ibmPlexMono.variable}`}>
          {title}
        </p>
        <div className={`${styles.contentBox} ${revertBlock ? styles.reverse : ''} ${generalSans.variable}`}>
          <p className={`${styles.textBlack}`}>
            {text}
            <span className={styles.textGray}>
              {textGray}
            </span>
          </p>
          <p className={`${styles.textGray} ${revertBlock ? styles.reverseText : ''}`}>
            {textGraySecond}
            <span className={styles.textBlack}>
              {textSecond}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutScheduling;
