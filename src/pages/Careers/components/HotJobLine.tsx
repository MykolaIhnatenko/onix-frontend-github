import React from 'react';
import Link from 'next/link';

import PageContainer from '../../../components/PageContainer/PageContainer';
import { IHotJobLine } from '../interfaces/IHotJobLine';
import Icons from '../../../assets/icon';

import styles from '../sass/HotJobLine.module.scss';

function HotJobLine({
  numberString, jobName, jobTag, link, setNextIndex, indexItem, indexNext, darkMode,
}: IHotJobLine) {
  return (
    <Link
      href={link}
      className={`${styles.container} ${darkMode ? styles.darkMode : ''}`}
      onMouseEnter={() => setNextIndex(indexItem)}
      onMouseLeave={() => setNextIndex(-1)}
    >
      <PageContainer className={`${styles.jobLine} ${indexNext === indexItem ? styles.hideBorder : ''}`}>
        <p className={styles.number}>{numberString}</p>
        <div className={styles.textContainer}>
          <h3 className={styles.jobName}>{jobName}</h3>
          <p className={styles.tagName}>{jobTag}</p>
        </div>
        <div className={styles.arrow}>
          {darkMode ? (
            <Icons.IconCareerWhiteArrow className={styles.icon} />
          ) : (
            <Icons.IconCareerArrow className={styles.icon} />)}

        </div>
      </PageContainer>
    </Link>
  );
}

export default HotJobLine;
