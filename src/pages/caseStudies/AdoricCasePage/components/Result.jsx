import Link from 'next/link';

import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/AdoricCaseView.module.scss';

const basePath = '/static/images/Pages/AdoricCasePage';
const firstResult = `${basePath}/banners/img_result-screen1.webp`;
const secondResult = `${basePath}/banners/img_result-screen2.webp`;
const blueBg = `${basePath}/img_decor-shape.webp`;

function Result() {
  return (
    <section className={`${styles.artItem} ${styles.resultScreen}`}>
      <div className={`col l12 ${styles.center} ${styles.projectContext}`}>
        <VRARPageAppearAnimation>
          <h2 className={`${styles.contentHeaderPrimary}`}>
            Result
          </h2>
        </VRARPageAppearAnimation>
        <VRARPageAppearAnimation>
          <p>
            The project continues to grow and improve in order to offer more useful marketing
            features to
            customers of Adoric. Our team has recently integrated Elasticsearch, an analytics
            engine that powers
            fast searches. In our case, integration of Elasticsearch has enabled a superfast
            data processing
            (more than 50 million documents).
          </p>
        </VRARPageAppearAnimation>
      </div>
      <div className={styles.projectRow}>
        <ImageComponent
          className={styles.resultsBlueBg}
          src={blueBg}
          alt="Blue background"
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
        />
        <div className={styles.innerBg}>
          <VRARPageAppearAnimation
            classes={`${styles.rowCell} ${styles.leftCell}`}
            translate="translateX"
            offset={-4}
          >
            <ImageComponent
              className={`${styles.screenImg} ${styles.shadowImg}`}
              src={firstResult}
              alt="Result screen 1"
              width={1353}
              height={1212}
              quality={100}
              sizes="100vw"
            />
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation
            classes={`${styles.rowCell} ${styles.rightCell}`}
            translate="translateX"
          >
            <ImageComponent
              className={`${styles.screenImg} ${styles.shadowImg}`}
              src={secondResult}
              alt="Result screen 2"
              width={1310}
              height={1064}
              quality={100}
              sizes="100vw"
            />
          </VRARPageAppearAnimation>
          <Link
            className={styles.btnWhite}
            target="_blank"
            href="https://adoric.com/"
            rel="noopener noreferrer"
          >
            Visit site
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Result;
