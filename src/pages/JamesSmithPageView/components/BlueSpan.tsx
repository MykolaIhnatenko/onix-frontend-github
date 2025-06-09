import { IBlueSpan } from '../interfaces/IBlueSpan';

import styles from '../sass/JSAText.module.scss';

function BlueSpan({
  children, tag: Tag = 'span',
}: IBlueSpan) {
  return (
    <Tag className={styles.blueText}>
      {children}
    </Tag>
  );
}

export default BlueSpan;
