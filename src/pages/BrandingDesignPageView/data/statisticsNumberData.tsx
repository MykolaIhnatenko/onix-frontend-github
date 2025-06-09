import styles from '../sass/bdNumberBlock.module.scss';

const bdNumbersData = [
  {
    leftTitle: 80,
    leftPrefix: '%',
    leftContent: (
      <p className={`${styles.text} ${styles.textFirst}`}>
        Is how much brand recognition can increase with a
        consistent color palette for your logo, content, and promotional materials
      </p>
    ),
    centralTitle: 88,
    centralPrefix: '%',
    centralContent: (
      <p className={`${styles.text} ${styles.textCentral}`}>
        Of consumers say that authenticity is a crucial factor when deciding what brands they like and support
      </p>
    ),
    rightTitle: 85,
    rightPrefix: '%',
    rightContent: (
      <p className={`${styles.text} ${styles.textSecond}`}>
        Is how much color improves brand recognition
      </p>
    ),
  },
];

export default bdNumbersData;
