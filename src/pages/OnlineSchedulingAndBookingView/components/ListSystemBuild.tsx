import MainTitle from 'components/MainTitle/MainTitle';
import { IListSystemBuild } from '../interfaces/IOnlineSchedulingAndBookingView';

import styles from '../sass/ListSystemBuild.module.scss';

function ListSystemBuild({ list }: IListSystemBuild) {
  return (
    <div className={styles.container}>
      {list.length > 0 && list.map(({ id, left, right }, index) => (
        <div
          key={[id, index].join('_')}
          className={styles.item}
        >
          <div className={styles.contentContainer}>
            <span className={styles.textItem}>
              {left.id}
            </span>
            <MainTitle tag="h3" className={styles.textItem}>
              {left.title}
            </MainTitle>
          </div>
          <div className={styles.contentContainer}>
            <span className={styles.textItem}>
              {right.id}
            </span>
            <MainTitle tag="h3" className={styles.textItem}>
              {right.title}
            </MainTitle>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListSystemBuild;
