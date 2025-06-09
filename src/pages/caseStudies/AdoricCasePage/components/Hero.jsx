import ImageComponent from '../../../../components/Image/Image';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import { useAppSelector } from '../../../../hook/reduxToolkit';

import styles from '../sass/AdoricCaseView.module.scss';

const basePath = '/static/images/Pages/AdoricCasePage';
const blueBg = `${basePath}/img_blue-bg.webp`;
const logo = `${basePath}/2x/img_adoric-logo.webp`;
const mainImg2x = `${basePath}/img_main-img@2x.webp`;
const mainImg = `${basePath}/img_main-img.webp`;

function Hero() {
  const { isSMDevice, isXSDevice } = useAppSelector((state) => state.app.screenSizes);
  const isMobile = isXSDevice || isSMDevice;

  return (
    <div className={`${styles.workInsideBanner} ${styles.adoricCase}`}>
      <ImageComponent
        src={blueBg}
        className={styles.blueBg}
        alt="Blue Background"
        width={853}
        height={1047}
        priority
        sizes="100vw"
      />
      <section className="col big l12">
        <div className={styles.logo}>
          <ImageComponent
            src={logo}
            alt="Adoric Logo"
            fill
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          />
        </div>
        <VRARPageAppearAnimation>
          <h1>
            Growing web conversion
          </h1>
        </VRARPageAppearAnimation>
      </section>
      <section className={styles.banners}>
        <ImageComponent
          src={blueBg}
          className={styles.blueBgTablet}
          alt="Blue Background"
          width={173}
          height={225}
          sizes="100vw"
        />
        <div className={`${styles.inner} col big l12`}>
          <div className={styles.mainImg}>
            <ImageComponent
              src={isMobile ? mainImg : mainImg2x}
              srcSet={`${mainImg} 1x, ${mainImg2x} 2x`}
              width={867}
              height={516}
              priority
              sizes="100vw"
              alt="clothes-store"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
