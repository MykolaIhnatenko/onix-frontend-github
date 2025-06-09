import ContentText from '../../../components/ContentText/ContentText';
import { ICrossPlatformResultsItem } from '../interfaces/ICrossPlatformResultsItem';

import styles from '../sass/CrossPlatformResultsItem.module.scss';

function IndustriesResultsItem({ id, title, text }: ICrossPlatformResultsItem) {
  return (
    <li key={id} className={styles.item}>
      <p className={styles.titleBlock}>
        <span className={styles.number}>{id}</span>
        <span className={styles.title}>{title}</span>
      </p>
      <ContentText tag="p" className={styles.text}>
        {text}
      </ContentText>
    </li>
  );
}

export default IndustriesResultsItem;
