import { useState } from 'react';

import { IHaasReedMore } from '../interfaces/IHaasReedMore';
import HaasText from './HaasText';

import styles from '../sass/HaasReedMore.module.scss';

function HaasReedMore({ content, variant }: IHaasReedMore) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${styles.reedMore} ${variant ? styles[variant] : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      role="presentation"
      tabIndex={-1}
    >
      <div className={isOpen ? styles.content : styles.contentHide}>
        {content}
      </div>
      <div className={styles.reedMoreBlock}>
        <HaasText tag="p" variant="readMore">{isOpen ? 'Read less' : 'Read more'}</HaasText>
        <span className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`} />
      </div>
    </div>
  );
}

export default HaasReedMore;
