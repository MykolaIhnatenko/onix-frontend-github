import MainTitle from 'components/MainTitle/MainTitle';
import ImageComponent from 'components/Image/Image';
import Icon from '../../../assets/images/faynoMarket/mainSection/img_icon.webp';
import Logo from '../../../assets/images/faynoMarket/mainSection/img_logo.webp';

import styles from '../sass/TitleMainSection.module.scss';

const titleMainSection = (
  <div className={styles.mainTitle}>
    <div className={styles.iconContainer}>
      <ImageComponent
        src={Icon}
        alt="Icon"
        fill
        priority
        sizes="100vw"
      />
    </div>
    <div className={styles.logoContainer}>
      <ImageComponent
        src={Logo}
        alt="Logo"
        fill
        priority
        sizes="100vw"
      />
    </div>
    <MainTitle tag="h1" className={styles.title}>
      Grocery mobile app case study
    </MainTitle>
  </div>
);

export default titleMainSection;
