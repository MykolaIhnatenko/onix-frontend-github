import InViewAnimation from './InViewAnimation';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/LearningPoolMain.module.scss';

const basePath = '/static/images/Pages/LearningPoolPage';
const logo = `${basePath}/img_logo.webp`;
const brand = `${basePath}/ic_brand.svg`;

function LearningPoolMain() {
  return (
    <section className={styles.main}>
      <div className={styles.contentWrapper}>
        <InViewAnimation up>
          <h1 className={styles.heading}>
            Dedicated team for
            {' '}
            <span className={styles.headingBlue}>Learning Pool</span>
          </h1>
        </InViewAnimation>
        <InViewAnimation down>
          <div className={styles.imageWrapper}>
            <ImageComponent
              src={logo}
              alt="learning pool logo"
              className={styles.logo}
              width={680}
              height={680}
              quality={50}
              sizes="(max-width: 450px) 50vw, 100vw"
              priority
            />
          </div>
        </InViewAnimation>
        <InViewAnimation down className={styles.brand}>
          <ImageComponent
            src={brand}
            alt="learning pool brand"
            width={158}
            height={34}
          />
        </InViewAnimation>
      </div>
    </section>
  );
}

export default LearningPoolMain;
