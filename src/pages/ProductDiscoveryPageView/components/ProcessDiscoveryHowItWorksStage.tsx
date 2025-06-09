import IProcessDiscoveryHowItWorksStage from '../interfaces/IProcessDiscoveryHowItWorksStage';
import StagesItem from './StagesItem';

import styles from '../sass/ProcessDiscoveryHowItWorks.module.scss';

function ProcessDiscoveryHowItWorksStage({
  stages, advantages, conclusion,
}: IProcessDiscoveryHowItWorksStage) {
  return (
    <div className={styles.part}>
      <div className={styles.stages}>
        {stages.map((stage) => (
          <StagesItem
            key={[stage.number, stage.text].join('_')}
            number={stage.number}
            text={stage.text}
          />
        ))}
      </div>
      <div className={styles.advantages}>
        <p className={styles.advantages_title}>{advantages.title}</p>
        {advantages.list.map((adv) => (
          <p key={adv} className={styles.advantages_item}>
            ﹂
            {' '}
            {adv}
          </p>
        ))}
      </div>
      <p className={styles.conclusion}>
        {conclusion}
      </p>
    </div>
  );
}

export default ProcessDiscoveryHowItWorksStage;
