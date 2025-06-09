import ICard from '../interfaces/ICard';

import styles from '../sass/Card.module.scss';

function Card({ item: { id, content } }: ICard) {
  return (
    <li className={styles.cardWrapper}>
      <span>
        0
        {id}
      </span>
      <div className={styles.border} />
      <p>
        {content}
      </p>
    </li>
  );
}

export default Card;
