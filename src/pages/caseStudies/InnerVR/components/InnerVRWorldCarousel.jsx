import Carousel from 'nuka-carousel';

import Arrow from '../../../../../public/static/images/Pages/InnerVR/worldsSection/ic_arrow.svg';
import { worldsContent } from '../data/InnerVRData';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/InnerVRWorldCarousel.module.scss';

function InnerVRWorldCarousel() {
  return (
    <div className={styles.carousel}>
      <Carousel
        slidesToScroll={1}
        cellSpacing={10}
        slidesToShow={1}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderBottomRightControls={null}
        renderBottomCenterControls={null}
        renderTopRightControls={({
          previousSlide,
          nextSlide,
          currentSlide,
        }) => (
          <>
            <div
              className={currentSlide === 0
                ? `${styles.arrowContainer} ${styles.leftArrow} ${styles.opacity}`
                : `${styles.arrowContainer} ${styles.leftArrow}`}
              onClick={previousSlide}
              role="button"
              onKeyDown={previousSlide}
              tabIndex={0}
              aria-label="button"
            >
              <Arrow width={12} height={20} className={styles.arrow} />
            </div>
            <div
              className={currentSlide === 5
                ? `${styles.arrowContainer} ${styles.rightArrow} ${styles.opacity}`
                : `${styles.arrowContainer} ${styles.rightArrow}`}
              onClick={nextSlide}
              role="button"
              aria-label="button"
              onKeyDown={nextSlide}
              tabIndex={0}
            >
              <Arrow width={12} height={20} className={styles.arrow} />
            </div>
          </>
        )}
      >
        {worldsContent.map(({
          id,
          title,
          text,
          img,
        }) => (
          <div key={id} className={styles.carouselItemWrapper}>
            <div className={styles.carouselItem}>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.image}>
                <ImageComponent
                  src={img}
                  width={480}
                  height={385}
                  alt="world"
                />
              </div>
              {text}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default InnerVRWorldCarousel;
