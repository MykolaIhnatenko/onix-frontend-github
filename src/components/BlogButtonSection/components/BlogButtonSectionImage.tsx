import ImageComponent from '../../Image/Image';
import { IBlogButtonSectionImage } from '../interfaces/IBlogButtonSection';

import styles from '../sass/blogButtonSectionImage.module.scss';

function BlogButtonSectionImage({ img, alt }: IBlogButtonSectionImage) {
  return (
    <div className={styles.image}>
      {img && (
        <ImageComponent
          src={img}
          fill
          alt={alt}
          sizes="100vw"
        />
      )}
    </div>
  );
}

export default BlogButtonSectionImage;
