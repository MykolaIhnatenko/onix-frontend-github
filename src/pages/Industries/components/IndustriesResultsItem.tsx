import ContentText from '../../../components/ContentText/ContentText';
import { IIndustriesResultsItem } from '../interfaces/IIndustriesResultsItem';

import styles from '../sass/industriesResultsItem.module.scss';

function IndustriesResultsItem({ id, title, text }: IIndustriesResultsItem) {
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
