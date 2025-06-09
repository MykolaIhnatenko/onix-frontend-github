import ImageComponent from '../../../components/Image/Image';
import Icon from '../../../assets/icon';
import StridistMain from '../../../assets/images/StridistPage/img_main@2x.webp';

import styles from '../sass/stridistMainSection.module.scss';

function StridistMainSection() {
  return (
    <section className={styles.mainSection}>
      <div className="mainContainer stridistContainer">
        <div className={styles.mainContent}>
          <div className={styles.contentBlock}>
            <div className={styles.logoBlock}>
              <div className={styles.logo}>
                <Icon.IconStridistLogo className={styles.icon} />
              </div>
              <h1>Stridist</h1>
            </div>
            <div className={styles.content}>
              <p>
                A comprehensive management platform
                for fitness and nutrition professionals
              </p>
              <p>
                Learn how we built a business management platform
                that allows fitness and nutrition coaches
                to run their businesses in one easy-to-use digital place.
              </p>
            </div>
          </div>
          <div className={styles.mainContentWrapper}>
            <div className={styles.mainImg}>
              <ImageComponent
                src={StridistMain}
                alt="woman"
                sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StridistMainSection;
