import IBstevrContentBlock from '../interfaces/IBstevrContentBlock';

import styles from '../sass/bstevrContentBlock.module.scss';

function BstevrContentBlock({ children }: IBstevrContentBlock) {
  return (
    <div className={styles.content}>
      {children}
    </div>
  );
}

export default BstevrContentBlock;
