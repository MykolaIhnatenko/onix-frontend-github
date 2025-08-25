import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';

import FutureTablet from '@/images/Photowhy/img_future_tablet.webp';
import Future from '@/images/Photowhy/img_future.webp';
import styles from '../sass/photowhyFuturesSection.module.scss';

function PhotowhyFuturesSection({ isMinDesktop }:{ isMinDesktop: boolean }) {
  return (
    <section className={styles.futuresSection}>
      <div className={`${styles.container} container`}>
        <h2>Special features</h2>
        <div className={styles.futuresContentContainer}>
          <div className={styles.futuresImg}>
            <ImageComponent
              src={isMinDesktop ? FutureTablet : Future}
              alt="Photowhy Futures"
              sizes="100vw"
              width={isMinDesktop ? 253 : 2402}
              height={isMinDesktop ? 511 : 1790}
            />
            <div className={styles.futuresFirstBlur} />
            <div className={styles.futuresFifthBlur} />
          </div>
          <div className={styles.futuresContent}>
            <VRARContent className={styles.futuresContentItem}>
              <p className="fs_16">In-app currency is used for convenient transactions between the users</p>
              <div className={styles.line} />
            </VRARContent>
            <VRARContent className={styles.futuresContentItem}>
              <p className="fs_16">
                In-app task planner/&nbsp;
                <br />
                calendar helps arrange a convenient time for a masterclass
              </p>
              <div className={styles.line} />
            </VRARContent>
            <VRARContent className={styles.futuresContentItem}>
              <p className="fs_16">
                A payment gateway enables amateurs to buy the in-app currency with real money and the
                professionals – to withdraw real money converted from the in-app currency they earned.
              </p>
              <div className={styles.line} />
            </VRARContent>
            <VRARContent className={styles.futuresContentItem}>
              <p className="fs_16">The system suggests content to users based on their preferences</p>
              <div className={styles.line} />
            </VRARContent>
          </div>
          <div className={styles.futuresFirstBlur} />
          <div className={styles.futuresSecondBlur} />
          <div className={styles.futuresThirdBlur} />
          <div className={styles.futuresFourthBlur} />
          <div className={styles.futuresFifthBlur} />
          <div className={styles.futuresSixthBlur} />
          <div className={styles.futuresSeventhBlur} />
        </div>
      </div>
    </section>
  );
}

export default PhotowhyFuturesSection;
