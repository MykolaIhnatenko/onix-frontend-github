import VRARContent from '../../../components/VRARContent/VRARContent';
import IEdplusMobileApplicationsCard from '../interfaces/IEdplusMobileApplicationsCard';

import styles from '../sass/edplusMobileApplicationsCard.module.scss';

function EdplusMobileApplicationsCard({ icon, content }: IEdplusMobileApplicationsCard) {
  return (
    <VRARContent className={styles.item}>
      <div className={styles.content}>
        <div className={styles.image}>
          {icon}
        </div>
        <p className={styles.edplusTextStyle}>
          {content}
        </p>
      </div>
    </VRARContent>
  );
}

export default EdplusMobileApplicationsCard;
