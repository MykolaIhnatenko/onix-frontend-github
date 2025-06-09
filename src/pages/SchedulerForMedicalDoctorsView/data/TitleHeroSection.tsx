import styles from '../sass/TitleHeroSection.module.scss';

const titleHeroSection = (
  <div className={styles.mainTitle}>
    <div className={styles.mainMarginBlock}>
      <h1 className={`${styles.title}`}>
        Scheduler for medical
        {' '}
        <br className={styles.newLineMobile} />
        {' '}
        doctors and clinic
        {' '}
        <br className={styles.newLineMobile} />
        {' '}
        administrators
      </h1>
    </div>
  </div>
);

export default titleHeroSection;
