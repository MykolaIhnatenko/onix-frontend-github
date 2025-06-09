import ImageComponent from 'components/Image/Image';
import IImageBlock from '../interfaces/IImageBlock';
import VRARContent from 'components/VRARContent/VRARContent';
import MainTitle from 'components/MainTitle/MainTitle';

import styles from '../sass/ImageBlock.module.scss';

function ImageBlock({ image, title, tag }: IImageBlock) {
  return (
    <div className={styles.container}>
      <VRARContent>
        <MainTitle tag={tag} className={styles.title}>
          {title}
        </MainTitle>
      </VRARContent>
      <div className={styles.imageWrapper}>
        {image && (
          <ImageComponent
            src={image}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </div>
    </div>
  );
}

export default ImageBlock;
