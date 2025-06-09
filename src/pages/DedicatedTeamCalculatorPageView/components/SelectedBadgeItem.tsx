import ISelectedBadgeItem from '../interfaces/ISelectedBadgeItem';
import Icons from '../../../assets/icon';
import { EXPERT, EXPERTS } from '../../../constants/constants';

import styles from '../sass/SelectedBadgeItem.module.scss';

function SelectedBadgeItem({
  item, itemCounter, closeBadge, typeBadge,
}: ISelectedBadgeItem) {
  return (
    <div className={styles.badge} key={[itemCounter, item].join('_')}>
      <span id={typeBadge}>
        {`${itemCounter} — ${item}`}
        &nbsp;
        {item === 1 ? EXPERT : EXPERTS}
      </span>
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

export default SelectedBadgeItem;
