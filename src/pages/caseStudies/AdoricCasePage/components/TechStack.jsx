import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/AdoricCaseView.module.scss';

const basePath = '/static/images/Pages/AdoricCasePage';
const technologyStack = `${basePath}/2x/banners/img_technology-stack@2x.webp`;
const mongo2x = `${basePath}/2x/banners/img_mongo@2x.webp`;
const node2x = `${basePath}/2x/banners/img_node@2x.webp`;

function TechStack() {
  return (
    <section className={styles.artItem}>
      <div className={`${styles.projectRow} ${styles.aloneRow} ${styles.techStackRow}`}>
        <VRARPageAppearAnimation
          classes={`${styles.rowCell} ${styles.leftCell} ${styles.techStackWrap}`}
          translate="translateX"
          offset={-4}
        >
          <ImageComponent
            className={`${styles.screenImg} ${styles.shadowImg}`}
            src={technologyStack}
            alt="Adoric Lighnbox"
            width={1304}
            height={874}
            quality={100}
            sizes="100vw"
          />
          <div className={styles.thumbImages}>
            <ImageComponent
              src={mongo2x}
              alt="Mongo"
              width={236}
              height={64}
              sizes="100vw"
            />
            <ImageComponent
              src={node2x}
              alt="Node"
              width={104}
              height={64}
              sizes="100vw"
            />
          </div>
        </VRARPageAppearAnimation>
        <div className={`${styles.rowCell} ${styles.rightCell}`}>
          <div className={`${styles.textCellInner} ${styles.projectContext}`}>
            <VRARPageAppearAnimation
              translate="translateX"
            >
              <h2>
                Technology stack
              </h2>
              <p>
                For Adoric, we have created a drag-and-drop editor from scratch, using
                Vanilla JS. With the
                editor and an ad management system, marketers can easily create targeted and
                optimized web
                messages for higher conversion rates. Vanilla JS became a perfect technology
                choice for the
                development of a flexible marketing tool as it leaves enough space for any
                future updates and
                upgrades in the software functionality.
                <br />
                <br />
                To build a super-fast and easy-scalable system, we also used MongoDB and
                Node.js. With these
                technologies our team were able to refuse from using any frameworks and this
                made the system
                very fast. As a result, it allows the system’s REST API on the server to
                provide instant
                responses. With this solution, the system is capable of processing 750
                million requests from the
                whole worldmonthly. But technically we are prepared to process the same
                number of requests
                daily.
              </p>
            </VRARPageAppearAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
