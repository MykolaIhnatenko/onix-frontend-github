import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';

import ImageComponent from '../../../components/Image/Image';
import mainImages from '../data/mainImages';
import MainPhone2x from '@/images/Photowhy/img_main-phone@2x.webp';
import MainPhoneMobile2x from '@/images/Photowhy/img_main-phone-mobile@2x.webp';

import styles from '../sass/photowhyMainSection.module.scss';

function PhotowhyMainSection({ cellSpacing, isMobile }: { cellSpacing: number, isMobile: boolean }) {
  return (
    <section className={styles.mainSection}>
      <div className={`${styles.container} mainContainer container`}>
        <h1>Peer-to-peer learning app development for PhotoWhy</h1>
        <div className={styles.carouselContainer}>
          <div className={styles.photoBlock}>
            <ImageComponent
              fill
              src={isMobile ? MainPhoneMobile2x : MainPhone2x}
              sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
              priority
              alt="Phone"
            />
          </div>
          <div className={styles.photowhyCarousel}>
            <Swiper
              className={styles.sliderContainer}
              modules={[Autoplay, Pagination]}
              style={{ overflow: 'hidden' }}
              spaceBetween={cellSpacing}
              slidesPerView="auto"
              slidesPerGroup={1}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              loop
            >
              {mainImages.map(({ id, src }, index) => (
                <SwiperSlide key={[id, index].join('_')} style={{ width: 'auto' }}>
                  <ImageComponent
                    className={styles.image}
                    src={src}
                    sizes="(max-width: 450px) 50vw, 100vw"
                    alt="main"
                    priority
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotowhyMainSection;
