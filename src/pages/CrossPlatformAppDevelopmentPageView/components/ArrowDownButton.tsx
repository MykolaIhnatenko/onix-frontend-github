import Icons from '../../../assets/icon';

import styles from '../sass/ArrowDownButton.module.scss';

function ArrowDownButton() {
  return (
    <div className={styles.arrowWrapper}>
      <Icons.IconArrowDown height={28} className={styles.arrowDown} />
    </div>
  );
}

export default ArrowDownButton;
