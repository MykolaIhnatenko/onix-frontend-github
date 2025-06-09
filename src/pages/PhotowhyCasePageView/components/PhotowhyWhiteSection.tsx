import { ReactNode } from 'react';

import styles from '../sass/photowhyWhiteSection.module.scss';

function PhotowhyWhiteSection({ children }: { children: ReactNode }) {
  return (
    <section className={styles.whiteSection}>
      {children}
    </section>
  );
}

export default PhotowhyWhiteSection;
