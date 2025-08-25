import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import VRARPageAppearAnimation from '../../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import HobeauxFont from '../../../fonts/HobeauxFont';
import ImageComponent from '../../../components/Image/Image';

import ChinEasyLogo from '@/images/chinEasy/typographySection/img_chin_easy_logo@2x.webp';
import styles from '../sass/chinEasyTypographySecion.module.scss';

function ChinEasyTypographySection() {
  return (
    <section className={styles.typographySection}>
      <PageContainer className={styles.container}>
        <div className={styles.titlesBlock}>
          <VRARPageAppearAnimation>
            <MainTitle className={styles.title}>
              Modern user-friendly typography
            </MainTitle>
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation>
            <h3 className={`${HobeauxFont.variable} ${styles.subtitle}`}>
              A font with
              <span className={styles.purple}> rounded </span>
              letters that
              <span className={styles.green}> looks </span>
              <span className={styles.orange}>playful</span>
              {' '}
              yet
              <span className={styles.pink}> restrained</span>
            </h3>
          </VRARPageAppearAnimation>
        </div>
        <div className={styles.logoBlock}>
          <MainTitle className={styles.logoText} tag="p">
            Logo
          </MainTitle>
          <div className={styles.logo}>
            <div className={styles.img}>
              <ImageComponent
                src={ChinEasyLogo}
                alt="ChinEasy logo"
                sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
                width={180}
                height={180}
              />
            </div>
            <MainTitle className={styles.text} tag="p">
              The font was illustrated in the logo, integrating the «Crazy Four» characters’
              eyes into the letters to give the logo a unique dynamic look.
            </MainTitle>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default ChinEasyTypographySection;
