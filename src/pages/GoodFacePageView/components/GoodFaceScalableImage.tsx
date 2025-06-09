import ImageComponent from '../../../components/Image/Image';
import IGoodFaceScalableImageProps from '../interfaces/IGoodFaceScalableImage';

import styles from '../sass/goodFaceScalableImage.module.scss';

function GoodFaceScalableImage({
  src, alt, spot, type = ' ',
}:IGoodFaceScalableImageProps) {
  return (
    <div className={styles.container}>
      {type === 'solutions' && spot && (
      <div className={styles.spot}>
        <ImageComponent
          src={spot}
          fill
          alt="spot"
        />
      </div>
      )}
      <div className={`${styles.imageContainer} ${styles[type]}`}>
        <div className={styles.image}>
          <ImageComponent
            src={src}
            alt={alt}
            sizes="(max-width: 450px) 50vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
}

export default GoodFaceScalableImage;
