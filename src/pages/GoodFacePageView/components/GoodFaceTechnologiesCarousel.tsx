import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import GoodFaceTechnology from './GoodFaceTechnology';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from '../sass/goodFaceTechnologiesCarousel.module.scss';

function GoodFaceTechnologiesCarousel({ technologies }: { technologies: string[][] }) {
  return (
    <Swiper
      className={styles.carousel}
      modules={[Pagination]}
      spaceBetween={12}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop
    >
      {technologies.map((technologyItem, index) => (
        <SwiperSlide key={[technologyItem[0], index].join('_')}>
          <ul className={styles.item}>
            {technologyItem.map((technology, i) => (
              <GoodFaceTechnology key={[technology, i].join('_')} technology={technology} />
            ))}
          </ul>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GoodFaceTechnologiesCarousel;
