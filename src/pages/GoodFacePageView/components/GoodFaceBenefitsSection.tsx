import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import benefitsData from '../data/benefitsData.json';
import GoodFaceResultSpot from '../../../assets/images/goodFace/benefitsSection/img_spot@2x.webp';
import GoodFaceResultSpotMobile from '../../../assets/images/goodFace/benefitsSection/img_spot-mobile.webp';

import styles from '../sass/goodFaceBenefitsSection.module.scss';

function GoodFaceBenefitsSection() {
  const { isSMDevice, isXSDevice } = useAppSelector((state) => state.app.screenSizes);
  const isMobile = isXSDevice || isSMDevice;

  return (
    <section className={styles.benefitsSection}>
      <div className="benefitsContainer container">
        <VRARContent>
          <h2>
            Benefits
            of
            {' '}
            <span>the app</span>
          </h2>
        </VRARContent>
        <ul className={styles.benefitsContent}>
          {benefitsData.map(({ id, title, content }) => (
            <li key={id} className={styles.benefit}>
              <VRARContent>
                <h3 className="fs_18">{title}</h3>
                <p>{content}</p>
              </VRARContent>
            </li>
          ))}
        </ul>
        <div className={styles.spotContainer}>
          <ImageComponent
            src={isMobile ? GoodFaceResultSpotMobile : GoodFaceResultSpot}
            alt="spot"
            fill
          />
        </div>
      </div>
    </section>
  );
}

export default GoodFaceBenefitsSection;
