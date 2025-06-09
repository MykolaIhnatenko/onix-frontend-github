import ContentText from '../../../components/ContentText/ContentText';
import { IProductDiscoveryCardData } from '../interfaces/IProductDiscoveryCardData';

import styles from '../sass/iosProductDiscoveryCard.module.scss';

function IosProductDiscoveryCard({ icon, text }: IProductDiscoveryCardData) {
  return (
    <div
      className={styles.card}
    >
      {icon}
      <ContentText tag="p" className={styles.cardText}>{text}</ContentText>
    </div>
  );
}

export default IosProductDiscoveryCard;
