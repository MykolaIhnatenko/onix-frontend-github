import { Swiper, SwiperSlide } from 'swiper/react';

import useWindowSize from '../../../hook/useWindowSize';
import { LG_DEVICE, MD_DEVICE } from '../../../constants/constants';
import VRARContent from '../../../components/VRARContent/VRARContent';
import technologiesItems from '../data/technologiesItemsData';

import 'swiper/css';
import styles from '../sass/technologies.module.scss';

function Technologies() {
  const { width } = useWindowSize();
  const mobileTechnologiesItems = [...technologiesItems, ...technologiesItems];

  const isDesktop = width > LG_DEVICE;

  const slidesToShow = width >= MD_DEVICE ? 3 : 2;

  return (
    <section className={styles.technologies}>
      <div className="betterMeContainer">
        <VRARContent>
          <h2>Core technology stack we used</h2>
        </VRARContent>
        <VRARContent className={styles.hugeWidth}>
          {isDesktop ? (
            <div className={styles.desktopList}>
              {technologiesItems.map(({ id, gray, color }) => (
                <div key={id} className={styles.item}>
                  {gray}
                  {color}
                </div>
              ))}
            </div>
          ) : (
            <Swiper
              spaceBetween={20}
              slidesPerView={slidesToShow}
              loop
            >
              {mobileTechnologiesItems.map(({ id, gray, color }) => (
                <SwiperSlide key={id}>
                  <div className={styles.item}>
                    {gray}
                    {color}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </VRARContent>
      </div>
    </section>
  );
}

export default Technologies;
