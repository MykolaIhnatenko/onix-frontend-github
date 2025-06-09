import { ICardSliderItem } from './interfaces/ICardSlider';

import styles from './sass/cardSlider.module.scss';

function CardSlider({
  id, title, text, height,
}: ICardSliderItem) {
  return (
    <div key={id} className={styles.cardContainer} style={{ height: height ? `${height}px` : 'fit-content' }}>
      <div className={`${styles.cardItem} ${styles.cardNumber}`}>
        {id}
      </div>
      <div className={`${styles.cardItem} ${styles.cardItemText}`}>
        {title}
        {text}
      </div>
    </div>
  );
}

export default CardSlider;
