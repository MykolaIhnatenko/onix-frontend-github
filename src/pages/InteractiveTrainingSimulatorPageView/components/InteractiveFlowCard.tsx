import IInteractiveFlowCard from '../interfaces/IInteractiveFlowCard';
import VRARContent from '../../../components/VRARContent/VRARContent';
import InteractiveProgress from './InteractiveProgress';

import styles from '../sass/InteractiveFlowCard.module.scss';

function InteractiveFlowCard({ id, content, title }: IInteractiveFlowCard) {
  return (
    <div className={`${styles.card} progressCard${id}`}>
      <InteractiveProgress
        variant={`progressCard${id}`}
        duration={`.progressCard${id}`}
      />
      <div className={styles.cardContent}>
        <span>{id}</span>
        <div className={styles.contentBlock}>
          <VRARContent>
            <h3 className={`${styles.contentBlockTitle} ${styles.blackColor} fs32`}>{title}</h3>
          </VRARContent>
          <VRARContent>
            <p className={styles.content}>{content}</p>
          </VRARContent>
        </div>
      </div>
    </div>
  );
}

export default InteractiveFlowCard;
