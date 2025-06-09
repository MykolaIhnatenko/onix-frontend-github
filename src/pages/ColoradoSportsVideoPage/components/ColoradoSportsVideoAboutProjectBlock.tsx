import mainContent from '../data/mainContentData';

import styles from '../sass/coloradoSportsVideoAboutProjectBlock.module.scss';

function ColoradoSportVideoAboutProjectBlock() {
  return (
    <div className={styles.aboutProject}>
      {mainContent.map(({
        id, title, subtitle, img: {
          src,
        },
      }) => (
        <div className={styles.projectItem} key={id}>
          <div className={styles.imgContainer}>
            {src}
          </div>
          <div className={styles.content}>
            <p className={styles.subtitle}>{subtitle}</p>
            <p className={styles.itemTitle}>{title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColoradoSportVideoAboutProjectBlock;
