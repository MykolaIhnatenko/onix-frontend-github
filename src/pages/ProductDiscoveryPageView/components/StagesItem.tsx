import IStagesItem from '../interfaces/IStagesItem';

import styles from '../sass/ProcessDiscoveryHowItWorks.module.scss';

function StagesItem({ number, text }: IStagesItem) {
  return (
    <div className={styles.stages_item}>
      <p className={styles.number}>{number}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default StagesItem;
