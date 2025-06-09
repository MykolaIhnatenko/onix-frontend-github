import { IChooseOnix } from '../interfaces/IChooseOnix';

import styles from '../sass/ChooseOnix.module.scss';

function ChooseOnix({ title, data, variant }: IChooseOnix) {
  return (
    <div className={`${styles.container} ${variant ? styles[variant] : ''}`}>
      <h2 className={styles.title}>
        {title}
      </h2>
      {data.map((item, index) => (
        <div
          className={`${styles.item}`}
          key={[item.title, index].join('_')}
        >
          <div className={styles.titleBox}>
            <div className={styles.textItem}>
              {item.id}
            </div>
            <h3 className={styles.textItem}>
              {item.title}
            </h3>
          </div>
          <p className={styles.descItem}>
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ChooseOnix;
