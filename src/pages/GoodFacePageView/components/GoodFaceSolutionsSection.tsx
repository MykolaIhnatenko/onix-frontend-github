import GoodFaceSolutionsListItem from './GoodFaceSolutionsListItem';
import GoodFaceScalableImage from './GoodFaceScalableImage';
import solutionsContentData from '../data/solutionsContentData.json';
import GoodFaceProductSpot from '../../../assets/images/goodFace/productScopeSection/img_spot@2x.webp';
import GoodFaceSolutionImg from '../../../assets/images/goodFace/solutionsSection/img_solutions-img.webp';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/goodFaceSolutionsSection.module.scss';

function GoodFaceSolutionsSection() {
  return (
    <section className={styles.solutionsSection}>
      <div className={`${styles.container} container`}>
        <VRARContent>
          <h2>
            <span>Solutions </span>
            we provide
          </h2>
        </VRARContent>
        <ul className={styles.solutionsList}>
          {solutionsContentData.map(({ id, text }) => (
            <GoodFaceSolutionsListItem key={id} id={id} text={text} />
          ))}
        </ul>
        <GoodFaceScalableImage
          src={GoodFaceSolutionImg}
          alt="phone"
          spot={GoodFaceProductSpot}
          type="solutions"
        />
      </div>
    </section>
  );
}

export default GoodFaceSolutionsSection;
