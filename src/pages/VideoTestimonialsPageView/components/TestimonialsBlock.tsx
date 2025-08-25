import { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import FeedbackCard from './FeedbackCard';
import data from '../data/testimonialsVideoData';
import testimonialsClientsSayData from '../data/testimonialsClientsSayData';

import Bg from '@/images/videoTestimonials/testimonials/img_testimonials_bg.webp';
import BgTablet from '@/images/videoTestimonials/testimonials/img_testimonials_bg_tablet.webp';
import BgMobile from '@/images/videoTestimonials/testimonials/img_testimonials_bg_mobile.webp';
import styles from '../sass/testimonials.module.scss';

function TestimonialsBlock() {
  const constraintsRef = useRef<HTMLDivElement | null>(null);

  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      bg: Bg,
    };
    if (isMDDevice || isSMDevice) {
      bg.bg = BgTablet;
    } else if (isXSDevice) {
      bg.bg = BgMobile;
    }
    return bg;
  };

  return (
    <>
      <section className={styles.testimonials}>
        <div className={styles.background}>
          <ImageComponent
            src={getBackground().bg}
            alt="background"
            fill
            sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          />
        </div>
        <MainTitle className={styles.title}>What our clients say</MainTitle>
        <div className={styles.contentBlock}>
          {data.map(({
            id,
            description,
            poster,
            title,
            specification,
            videoSrc,
            country,
          }) => (
            <FeedbackCard
              key={id}
              id={id}
              poster={poster}
              videoSrc={videoSrc}
              title={title}
              description={description}
              country={country}
              specification={specification}
            />
          ))}
        </div>
      </section>
      <motion.div className={styles.dragContainer} ref={constraintsRef}>
        <motion.div
          className={styles.wrapper}
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.3}
          dragMomentum
        >
          {testimonialsClientsSayData.map(({
            id, text, author,
          }) => (
            <div key={id} className={styles.item}>
              {text}
              {author}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </>

  );
}

export default TestimonialsBlock;
