import WebflowWebsiteLogo from '@/images/WebflowWebsiteDev/img_GameMe.webp';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from 'components/MainTitle/MainTitle';

import styles from '../sass/TitleHroSection.module.scss';

const titleHeroSection = (
  <div className={styles.mainTitle}>
    <div className={styles.imgWrapper}>
      <div className={styles.imageContainer}>
        <ImageComponent
          src={WebflowWebsiteLogo}
          alt="WebflowWebsiteLogo"
          fill
          priority
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        />
      </div>
    </div>
    <div className={styles.mainMarginBlock}>
      <MainTitle tag="h1" className={styles.title}>
        Webflow Website Development and&nbsp;Design for Gaming Production Company
      </MainTitle>
    </div>
  </div>
);

export default titleHeroSection;
