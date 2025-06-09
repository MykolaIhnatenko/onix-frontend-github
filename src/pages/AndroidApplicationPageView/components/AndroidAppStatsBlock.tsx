import { IAndroidAppStatsBlock } from '../interfaces/IAndroidAppStatsBlock';

import styles from '../sass/androidAppStatsBlock.module.scss';

function AndroidAppStatsBlock({ data, variant }: IAndroidAppStatsBlock) {
  return (
    <div className={`${styles.container} ${variant ? styles[variant] : 0}`}>
      <div className={styles.border}>
        {data.map(({
          id, title, number, subTitle,
        }) => (
          <div key={id} className={styles.containerItem}>
            {title}
            {number}
            {subTitle}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AndroidAppStatsBlock;
