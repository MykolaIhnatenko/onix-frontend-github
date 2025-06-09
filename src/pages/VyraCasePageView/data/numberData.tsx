import styles from '../../BrandingDesignPageView/sass/bdNumberBlock.module.scss';

const bdNumbersData = [
  {
    leftTitle: 20,
    leftPrefix: '+',
    leftContent: (
      <p className={`${styles.text} ${styles.textFirst}`}>
        companies up-skilled
        {' '}
        <span>in sustainability</span>
      </p>
    ),
    centralTitle: 20,
    centralPrefix: '%+',
    centralContent: (
      <p className={`${styles.text} ${styles.textCentral}`}>
        increase in user engagement
      </p>
    ),
    rightTitle: 2000,
    rightPrefix: '+',
    rightContent: (
      <p className={`${styles.text} ${styles.textSecond}`}>
        employees across
      </p>
    ),
  },
];

export default bdNumbersData;
