import IDeliverableItems from '../interfaces/IDeliverableItems';
import DelieverableItem from './DelieverableItem';

import styles from '../sass/PDPrimaryDeliverables.module.scss';

function DeliverableItems({ number, title, items }: IDeliverableItems) {
  return (
    <div className={styles.deliverable}>
      <span className={styles.number}>{number}</span>
      <h3 className={styles.title}>{title}</h3>
      <div>
        {items.map((item) => <DelieverableItem key={item} text={item} />)}
      </div>
    </div>
  );
}

export default DeliverableItems;
