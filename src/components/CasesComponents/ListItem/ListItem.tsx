import ContentText from '../../ContentText/ContentText';
import IListItem from './interfaces/IListItem';

import styles from './sass/ListItem.module.scss';

function ListItem({ item }: IListItem) {
  return (
    <li className={styles.listItem}>
      <span className={styles.circle} />
      <ContentText className={styles.text} tag="p">
        {item}
      </ContentText>
    </li>
  );
}

export default ListItem;
