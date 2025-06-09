import LinkComponent from '../../../../components/Link/Link';
import ILinkItem from '../../interfaces/ILinkItem';

import styles from '../../sass/linkItem.module.scss';

function LinkItem({ title, url }: ILinkItem) {
  return (
    <li className={styles.linkItem}>
      <LinkComponent href={url}>
        {title}
      </LinkComponent>
    </li>
  );
}

export default LinkItem;
