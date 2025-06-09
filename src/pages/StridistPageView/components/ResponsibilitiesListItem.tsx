import IResponsibilitiesList from '../interfaces/IResponsibilitiesList';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/responsibilitiesListItem.module.scss';

function ResponsibilitiesListItem({ id, content }: IResponsibilitiesList) {
  return (
    <li className={styles.item}>
      <VRARContent className={styles.itemInner}>
        <span>{id}</span>
        {content}
      </VRARContent>
    </li>
  );
}

export default ResponsibilitiesListItem;
