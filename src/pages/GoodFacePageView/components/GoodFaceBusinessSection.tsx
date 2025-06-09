import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import GoodFaceBusiness1 from '../../../assets/images/goodFace/businessContextSection/img_business-img1@2x.webp';
import GoodFaceBusiness2 from '../../../assets/images/goodFace/businessContextSection/img_business-img2@2x.webp';

import styles from '../sass/goodFaceBusinessSection.module.scss';

function GoodFaceBusinessSection() {
  return (
    <section className={styles.businessContext}>
      <div className="businessContainer container">
        <VRARContent className={styles.businessContextCard}>
          <h2>
            <span>Business </span>
            context
          </h2>
          <p className="font_big">
            With thousands of beauty
            <span className={styles.businessImg}>
              <ImageComponent
                src={GoodFaceBusiness1}
                alt="eye"
                width={90}
                height={44}
              />
            </span>
            and skincare products on the market it&apos;s easy to be confused about which one is the best match for
            your needs. With this concept in mind, our client developed the idea to create a unique skincare
            AI-powered platform.
            <br />
            The main product idea is to leverage AI technology combined with scientific research to check product
            formulations for toxic or unsafe ingredients
            <span className={styles.businessImg}>
              <ImageComponent
                src={GoodFaceBusiness2}
                alt="leaf"
                width={90}
                height={44}
              />
            </span>
            and make independently validated safety guides available to consumers.
          </p>
        </VRARContent>
      </div>
    </section>
  );
}

export default GoodFaceBusinessSection;
