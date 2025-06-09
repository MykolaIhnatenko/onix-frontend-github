import ImageComponent from '../../../components/Image/Image';
import GoodFaceMain from '../../../assets/images/goodFace/mainSection/img_main-img.webp';

import styles from '../sass/goodFaceMainSection.module.scss';

function GoodFaceMainSection() {
  return (
    <section className={styles.mainSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          The leading ingredient transparency solution for the
          <span> cosmetics </span>
          industry
        </h1>
        <div className={styles.image}>
          <ImageComponent
            src={GoodFaceMain}
            sizes="(min-width: 768px) 100vw"
            alt="phone"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default GoodFaceMainSection;
