import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import Card from './Card';
import BracketologyText from './BracketologyText';
import Icons from '../../../assets/icon';
import { IProcessCarousel } from '../interfaces/IProcessCarousel';

import styles from '../sass/ProcessCarousel.module.scss';

import 'swiper/css';

function ProcessCarousel({ processCards }: IProcessCarousel) {
  return (
    <div className={styles.carousel}>
      <Swiper
        slidesPerView={1.73}
        spaceBetween={16}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        modules={[Autoplay]}
      >
        {processCards.map(({ id, number, content }) => (
          <SwiperSlide key={id} className={styles.item}>
            <Card wrapperVariant="servicesWrapper" cardVariant="servicesCard processCard">
              <div className={styles.iconBlock}>
                <span>{number}</span>
                <Icons.IconBracketologyProcess className={styles.processIconBlockIcon} />
              </div>
              <BracketologyText tag="p" variant="text">{content}</BracketologyText>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProcessCarousel;
