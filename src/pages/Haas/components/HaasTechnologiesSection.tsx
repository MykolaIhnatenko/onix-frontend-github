import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IHaasTechnologies } from '../interfaces/IHaasTechnologies';
import technologies from '../data/technologies';
import ImageComponent from '../../../components/Image/Image';
import HaasText from './HaasText';
import PageContainer from 'components/PageContainer/PageContainer';

import styles from '../sass/HaasTechnologiesSection.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

function HaasTechnologiesSection({ isMobile }: IHaasTechnologies) {
  return (
    <PageContainer className={styles.technologies}>
      <HaasText tag="h2" variant="title" className={styles.title}>Technology stack</HaasText>
      <HaasText tag="p" variant="fs16_24" className={styles.subTitle}>
        See how we provided development solutions aligned with our client&apos;s goals, budget, and time.
      </HaasText>
      {isMobile ? (
        <Swiper
          className={styles.carousel}
          modules={[Pagination]}
          spaceBetween={12}
          slidesPerView={1}
          pagination={{ clickable: false }}
          loop
        >
          {technologies.map(({
            id, src, width, height,
          }) => (
            <SwiperSlide key={id}>
              <div key={id} className={styles.item}>
                <ImageComponent
                  src={src}
                  width={width}
                  height={height}
                  alt="technology"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles.technologiesBlock}>
          <ul className={styles.technologiesList}>
            {technologies.map(({
              id, src, width, height, hoverText,
            }) => (
              <li className={styles.technologyItem} key={id}>
                <ImageComponent
                  src={src}
                  width={width}
                  height={height}
                  alt="technology"
                />
                <div className={styles.textBlock}>
                  <HaasText tag="p" variant="fs18_27">{hoverText}</HaasText>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </PageContainer>
  );
}

export default HaasTechnologiesSection;
