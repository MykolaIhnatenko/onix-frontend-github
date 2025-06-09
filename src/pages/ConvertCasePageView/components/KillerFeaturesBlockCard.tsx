import ImageComponent from 'components/Image/Image';
import IKillerFeaturesBlockCard from '../interfaces/IKillerFeaturesBlockCard';

import styles from '../sass/killerFeaturesBlock.module.scss';

function KillerFeaturesBlockCard({
  img, title, text, background,
}: IKillerFeaturesBlockCard) {
  return (
    <div className={styles.itemCard}>
      <div className={styles.imagesWrapper}>
        <div className={styles.imagesWrapperBg}>
          <ImageComponent src={background} alt="bg" sizes="100vw" />
        </div>
        <ImageComponent className={styles.phone} src={img} alt="phone" sizes="100vw" />
      </div>
      <div className={styles.itemCardContent}>
        {title}
        {text}
      </div>
    </div>
  );
}

export default KillerFeaturesBlockCard;
