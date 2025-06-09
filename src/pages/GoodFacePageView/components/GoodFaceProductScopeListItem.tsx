import styles from '../sass/goodFaceProductScopeListItem.module.scss';

function GoodFaceProductScopeListItem({ text } :{ text : string }) {
  return (
    <li className={styles.item}>
      {text}
    </li>
  );
}

export default GoodFaceProductScopeListItem;
