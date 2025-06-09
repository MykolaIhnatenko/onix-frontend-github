import { useAppSelector } from '../../../hook/reduxToolkit';
import GoodFaceResult from './GoodFaceResult';
import resultsContentData from '../data/resultsContentData.json';
import ImageComponent from '../../../components/Image/Image';
import GoodFaceLastSpot from '../../../assets/images/goodFace/lastSection/img_spot@2x.webp';
import GoodFaceLastPhone from '../../../assets/images/goodFace/lastSection/img_last-img@2x.webp';
import GoodFaceLastPhoneMobile from '../../../assets/images/goodFace/lastSection/img_last-img-mobile.webp';

import styles from '../sass/goodFaceLastSection.module.scss';

function GoodFaceLastSection() {
  const {
    isSMDevice, isXSDevice,
  } = useAppSelector((state) => state.app.screenSizes);
  const isMobile = isXSDevice || isSMDevice;

  return (
    <section className={styles.lastSection}>
      <div className="lastContainer container">
        <h2>Results</h2>
        <div className={styles.lastContentContainer}>
          <ul className={styles.lastContent}>
            {resultsContentData.map(({ id, title, text }) => (
              <GoodFaceResult key={id} title={title} text={text} />
            ))}
          </ul>
          <div className={styles.lastImg}>
            <div className={styles.lastSpot}>
              <ImageComponent
                src={GoodFaceLastSpot}
                fill
                alt="spot"
              />
            </div>
            <ImageComponent
              src={isMobile ? GoodFaceLastPhoneMobile : GoodFaceLastPhone}
              alt="phone"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoodFaceLastSection;
