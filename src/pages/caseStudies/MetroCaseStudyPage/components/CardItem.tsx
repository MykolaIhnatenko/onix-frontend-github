import ImageComponent from '../../../../components/Image/Image';
import ICardItem from '../interfaces/ICardItem';

import styles from '../sass/cardItem.module.scss';

function CardItem({
  image,
  classes = '',
  children,
  imagePosition = 'left',
  cardView,
  imageWidth = 200,
  imageHeight = 200,
}:ICardItem) {
  return (
    <div className={`
      ${cardView === 'functionality' ? styles.functionalityMainContainer : styles.featureMainContainer}
      ${classes}
      ${imagePosition === 'right' ? styles.rightDirection : ''}`}
    >
      <div
        className={`
        ${styles.imageContainer}
        ${imagePosition === 'right' ? styles.rightPosition : styles.leftPosition}
      `}
      >
        <ImageComponent
          src={image}
          alt="functionalityImage"
          width={imageWidth}
          height={imageHeight}
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={styles.textContainer}>
        {children}
      </div>
    </div>
  );
}

export default CardItem;
