import IUXExpertiseItem from '../interfaces/IUXExpertiseItem';

import styles from '../sass/UXExpertise.module.scss';

function UXExpertiseItem({ id, title, content }: IUXExpertiseItem) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      {content}
      <span className={styles.counter}>
        0
        {id}
      </span>
    </div>
  );
}

export default UXExpertiseItem;
