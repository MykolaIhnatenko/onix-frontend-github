import styles from '../sass/PDPrimaryDeliverables.module.scss';

function DelieverableItem({ text }: { text: string }) {
  return (
    <p className={styles.item}>
      ﹂
      {' '}
      {text}
    </p>
  );
}

export default DelieverableItem;
