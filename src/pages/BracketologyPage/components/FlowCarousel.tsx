import { Swiper, SwiperSlide } from 'swiper/react';

import { IFlowCarousel } from '../interfaces/IFlowCarousel';
import BracketologyText from './BracketologyText';
import ArrowButton from './ArrowButton';

import styles from '../sass/FlowCarousel.module.scss';

import 'swiper/css';

function FlowCarousel({ flowCarouselItems, isDesktop, isBigDesktop }: IFlowCarousel) {
  return (
    <div className={styles.carousel}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={isBigDesktop}
        loop
        initialSlide={1}
        breakpoints={{
          1200: {
            slidesPerView: 2.1,
            spaceBetween: 120,
          },
        }}
      >
        {flowCarouselItems.map(({
          id, title, content, className,
        }) => (
          <SwiperSlide key={id}>
            {({ isActive }) => (
              <div className={`${styles.carouselItemWrapper} ${isActive ? styles.activeCarouselItemWrapper : ''}`}>
                <div className={`${styles.carouselItem} ${styles[className]}`}>
                  <BracketologyText tag="h3" variant="flowCardTitle">{title}</BracketologyText>
                  <BracketologyText tag="p" variant="text">{content}</BracketologyText>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
        <div className={styles.buttonsContainer}>
          <ArrowButton isDesktop={isDesktop} />
          <ArrowButton isDesktop={isDesktop} isNext />
        </div>
        <ArrowButton isDesktop={isDesktop} className={styles.prevButton} />
        <ArrowButton isDesktop={isDesktop} className={styles.nextButton} isNext />
      </Swiper>
    </div>
  );
}

export default FlowCarousel;
