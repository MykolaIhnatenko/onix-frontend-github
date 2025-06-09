import ImageComponent from '../../../components/Image/Image';
import IPhotosSection from '../interfaces/IPhotosSection';

import styles from '../sass/PhotosSection.module.scss';

function PhotosSection({ image }: IPhotosSection) {
  return (
    <div className={styles.container}>
      <div className={styles.containerBg}>
        <ImageComponent
          src={image}
          alt="photos"
          fill
          priority
          sizes="100vw"
        />
      </div>
    </div>
  );
}

export default PhotosSection;
