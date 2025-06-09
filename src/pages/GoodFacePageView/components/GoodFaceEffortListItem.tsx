import IGoodFaceEffortItemProps from '../interfaces/IGoodFaceEffort';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/goodFaceEffortListItem.module.scss';

function GoodFaceEffortListItem({ icon, title, text }: IGoodFaceEffortItemProps) {
  return (
    <li className={styles.itemContainer}>
      <VRARContent className={styles.item}>
        <div className={styles.imageContainer}>
          {icon}
        </div>
        <h3 className="fs_18 effortTitle">{title}</h3>
        <p className="effortText">{text}</p>
      </VRARContent>
    </li>
  );
}

export default GoodFaceEffortListItem;
