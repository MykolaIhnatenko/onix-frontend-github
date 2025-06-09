import IInteractiveContentItem from '../interfaces/IInteractiveContentItem';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/InteractiveContentItem.module.scss';

function InteractiveContentItem({ text, variant }: IInteractiveContentItem) {
  return (
    <VRARContent className={styles[variant]}>
      <p className="fs16">{text}</p>
    </VRARContent>
  );
}

export default InteractiveContentItem;
