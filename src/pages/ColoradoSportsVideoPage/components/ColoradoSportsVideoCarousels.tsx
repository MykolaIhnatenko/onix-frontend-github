import carousels from '../data/carouselsData';
import ImageComponent from '../../../components/Image/Image';

import styles from '../sass/coloradoSportsVideoCarousels.module.scss';

function ColoradoSportsVideoCarousels() {
  return (
    <div className={styles.carousels}>
      {carousels.map(({ id, carousel, reverse }) => (
        <div key={id} className={`${styles.carousel} ${reverse ? styles.reverse : ''}`}>
          <div
            className={styles.carouselLib}
          >
            {carousel.map(({ itemId, src }) => (
              <div key={itemId} className={styles.item}>
                <ImageComponent
                  className={styles.image}
                  src={src}
                  width={270}
                  height={342}
                  alt="sport"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColoradoSportsVideoCarousels;
