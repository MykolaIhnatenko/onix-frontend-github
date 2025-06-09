import { ITableOfContent } from '../interfaces/TabletOfContent';

import styles from '../sass/tableOfContent.module.scss';

function TableOfContent({ anchorItems, variant }:ITableOfContent) {
  return (
    <div className={`${styles.tabletOfContent} ${variant ? styles.tabletOfContentHidden : ''}`}>
      <div className={styles.tabletOfContentTitle}>Table of contents</div>
      <ul className={styles.tabletOfContentList}>
        {anchorItems.map((item) => (
          <li key={item.id} className={`li-${item.anchor} ${styles.tabletOfContentListItem}`}>
            <p className={styles.linkAnchor}>
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContent;
