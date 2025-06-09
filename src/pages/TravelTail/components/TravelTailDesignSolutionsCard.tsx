import useBackground from '../../../hook/useBackground';
import ImageComponent from '../../../components/Image/Image';
import ITravelTailDesignSolutionsCard from '../interfaces/ITravelTailDesignSolutionsCard';

import styles from '../sass/travelTailDesignSolutionsCard.module.scss';

function TravelTailDesignSolutionsCard({
  title, text, imgMobile, imgTablet, img,
}: ITravelTailDesignSolutionsCard) {
  const image = useBackground(img, imgTablet, imgMobile);

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        {image && (
        <ImageComponent
          src={image}
          alt="travel"
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
        />
        )}
      </div>
      <div className={styles.textBlock}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardText}>{text}</div>
      </div>
    </div>
  );
}

export default TravelTailDesignSolutionsCard;
