import MainTitle from 'components/MainTitle/MainTitle';
import ImageComponent from 'components/Image/Image';
import Logo from '../../../assets/images/apartmentRental/mainSection/Logo.webp';

import styles from '../sass/TitleMainSection.module.scss';

const titleMainSection = (
  <div className={styles.mainTitle}>
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
      Website development
      {' '}
      <br />
      {' '}
      for apartments rental company
    </MainTitle>
  </div>
);

export default titleMainSection;
