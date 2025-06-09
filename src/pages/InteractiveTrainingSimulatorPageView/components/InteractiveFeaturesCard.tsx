import IInteractiveFeaturesCard from '../interfaces/IInteractiveFeaturesCard';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/InteractiveFeaturesCard.module.scss';

function InteractiveFeaturesCard({ content, title }: IInteractiveFeaturesCard) {
  return (
    <VRARContent className={styles.card}>
      <h3>{title}</h3>
      {content}
    </VRARContent>
  );
}

export default InteractiveFeaturesCard;
