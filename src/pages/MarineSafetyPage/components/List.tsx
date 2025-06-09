import IList from '../interfaces/IList';

import styles from '../sass/MarineSafety.module.scss';

export default function List({ className, items }: IList) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li className={styles.listItem} key={item}>
          <span className={styles.marker}>
            {'I'.repeat(index + 1)}
            .
          </span>
          <p className={styles.itemText}>{item}</p>
        </li>
      ))}
    </ul>
  );
}
