import styles from '../sass/goodFaceSolutionsListItem.module.scss';

function GoodFaceSolutionsListItem({ id, text } : { id: string, text: string }) {
  return (
    <li className={styles.item}>
      <h3 className={`${styles.number} number`}>{id}</h3>
      <p className="context">{text}</p>
    </li>
  );
}

export default GoodFaceSolutionsListItem;
