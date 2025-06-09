import { generalSans } from '../../../fonts/MainFonts';
import { systemBuildBlockData, systemBuildBlockDataMobile } from '../data/SystemBuildBlockData';
import ListSystemBuild from './ListSystemBuild';
import MainTitle from 'components/MainTitle/MainTitle';

import styles from '../sass/SystemBuildBlock.module.scss';

function SystemBuildBlock() {
  return (
    <div className={`${styles.container} ${generalSans.variable}`}>
      <h2 className={styles.title}>
        Types of online booking systems that we build:
      </h2>
      <div className={styles.contentBox}>
        <ListSystemBuild list={systemBuildBlockData} />
      </div>
      <div className={styles.contentBoxMob}>
        {systemBuildBlockDataMobile.map((item, index) => (
          <div
            key={[item.id, index].join('_')}
            className={styles.item}
          >
            <div className={styles.contentContainer}>
              <span className={styles.textItem}>
                {item.id}
              </span>
              <MainTitle tag="h3" className={styles.textItem}>
                {item.title}
              </MainTitle>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SystemBuildBlock;
