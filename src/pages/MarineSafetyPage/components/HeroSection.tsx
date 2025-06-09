import VRARContent from 'components/VRARContent/VRARContent';
import ImageComponent from 'components/Image/Image';
import MainImage from '@/images/MarineSafetyPage/img_hero-image.webp';

import styles from '../sass/MarineSafety.module.scss';

function HeroSection() {
  return (
    <section className={styles.heroOuterContainer}>
      <div className={styles.heroInnerContainer}>
        <div className={styles.contentWrapper}>
          <div className={`${styles.headingContainer} ${styles.fadeInside}`}>
            <h1 className={styles.heading}>
              Safety-promoting
              mobile application
            </h1>
          </div>
          <VRARContent delay={0.6} className={styles.imageContainer}>
            <p className={styles.paragraph}>
              Using iOS & Android devices and BLE beacons for person location and incident alerts
            </p>
          </VRARContent>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <ImageComponent
          src={MainImage}
          alt="big buoy"
          width={1629}
          height={817}
          quality={100}
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}

export default HeroSection;
