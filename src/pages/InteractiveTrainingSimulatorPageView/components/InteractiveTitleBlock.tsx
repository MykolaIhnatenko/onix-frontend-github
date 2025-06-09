import IInteractiveTitleBlock from '../interfaces/IInteractiveTitleBlock';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/InteractiveTitleBlock.module.scss';

function InteractiveTitleBlock({
  number, color, variant, title,
}: IInteractiveTitleBlock) {
  return (
    <VRARContent className={styles.titleBlock}>
      <span>{number}</span>
      <p className={`${styles.title} ${color ? styles[color] : ''} ${variant ? styles[variant] : ''}`}>{title}</p>
    </VRARContent>
  );
}

export default InteractiveTitleBlock;
