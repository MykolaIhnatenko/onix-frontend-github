import GoodFaceProductScopeListItem from './GoodFaceProductScopeListItem';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ImageComponent from '../../../components/Image/Image';
import productScopeContentData from '../data/productScopeContentData.json';
import GoodFaceProductSpot from '../../../assets/images/goodFace/productScopeSection/img_spot@2x.webp';
import GoodFaceProductScope from '../../../assets/images/goodFace/productScopeSection/img_product-scope-img@2x.webp';

import styles from '../sass/goodFaceProductSection.module.scss';

function GoodFaceProductSection() {
  return (
    <section className={styles.productScopeSection}>
      <div className={`container ${styles.containerBlock}`}>
        <div className={styles.productScopeImg}>
          <div className={styles.productScopeSpot}>
            <ImageComponent
              src={GoodFaceProductSpot}
              alt="spot"
              fill
            />
          </div>
          <ImageComponent
            src={GoodFaceProductScope}
            alt="phone"
          />
        </div>
        <div className={styles.productScopeContents}>
          <VRARContent>
            <h2>
              <span>Product </span>
              scope
            </h2>
          </VRARContent>
          <VRARContent>
            <ul>
              {productScopeContentData.map(({ id, text }) => (
                <GoodFaceProductScopeListItem key={id} text={text} />
              ))}
            </ul>
          </VRARContent>
        </div>
      </div>
    </section>
  );
}

export default GoodFaceProductSection;
