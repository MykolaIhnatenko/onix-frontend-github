import IBadgeItem from '../interfaces/IBadgeItem';
import Icons from '../../../assets/icon';

import styles from '../sass/BadgeItem.module.scss';

function BadgeItem({ item, closeBadge, typeBadge }: IBadgeItem) {
  return (
    <div className={styles.badge} id={typeBadge}>
      {item}
      <button
        type="button"
        className={styles.close}
        onClick={closeBadge}
      >
        <Icons.IconClose className={styles.closeIcon} />
      </button>
    </div>
  );
}

export default BadgeItem;
