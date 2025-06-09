import IEdplusUniqueFeaturesItem from '../interfaces/IEdplusUniqueFeaturesItem';

import styles from '../sass/edplusUniqueFeaturesItem.module.scss';

function EdplusUniqueFeaturesItem({ content }: IEdplusUniqueFeaturesItem) {
  return (
    <li className={styles.item}>
      <p className={styles.edplusTextStyle}>
        {content}
      </p>
    </li>
  );
}

export default EdplusUniqueFeaturesItem;
