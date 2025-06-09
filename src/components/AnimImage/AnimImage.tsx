import IAnimImage from './interfaces/IAnimImage';
import ImageComponent from '../Image/Image';

import styles from './sass/AnimImage.module.scss';

function AnimImage({ image }: IAnimImage) {
  return (
    <div className={styles.titleContainer}>
      <ImageComponent
        src={image}
        alt="MainBackground"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
  );
}

export default AnimImage;
