import ImageMicroCase from '../ImageMicroCase/ImageMicroCase';
import { ICardMicroCase } from './interfaces/ICardMicroCase';
import ImageComponent from '../Image/Image';

import styles from './sass/CardMicroCase.module.scss';

function CardMicroCase({
  className, shadowColor, circleColor, card, imgHeightClassName,
}:ICardMicroCase) {
  const cardIcon = card.icon;

  return (
    <div className={styles.offerCard}>
      <div className={styles.cardContent}>
        <div className={`${styles.cardCircle} ${styles[circleColor]}`}>
          <ImageComponent
            src={cardIcon}
            alt="Icon"
            width={20}
            height={20}
          />
        </div>
        <p>{card.content}</p>
      </div>
      <ImageMicroCase
        className={className}
        shadowColor={shadowColor}
        imgHeightClassName={imgHeightClassName}
      >
        <ImageComponent
          fill
          sizes="100vh"
          src={card.bg}
          className={styles.img}
          alt="Picture"
        />
      </ImageMicroCase>
    </div>
  );
}

export default CardMicroCase;
