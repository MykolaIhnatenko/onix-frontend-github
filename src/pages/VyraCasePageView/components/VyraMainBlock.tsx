import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import ContentText from '../../../components/ContentText/ContentText';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import MainBg from '../../../assets/images/vyraCasePage/mainBlock/img_main_bg.webp';
import MainBgTablet from '../../../assets/images/vyraCasePage/mainBlock/img_main_bg_tablet.webp';
import MainBgMobile from '../../../assets/images/vyraCasePage/mainBlock/img_main_bg_mobile.webp';
import Logo from '../../../assets/images/vyraCasePage/mainBlock/img_logo.webp';

import styles from '../sass/vyraMainBlock.module.scss';

function VyraMainBlock() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    if (isXSDevice) {
      return MainBgMobile;
    }
    if (isMDDevice || isSMDevice) {
      return MainBgTablet;
    }
    return MainBg;
  };

  return (
    <section className={styles.section}>
      <ImageComponent
        className={styles.bgImage}
        src={getBackground()}
        alt="background"
        sizes="100vw"
        fill
        priority
      />
      <PageContainer className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.titleBlock}>
            <ImageComponent
              className={styles.logo}
              src={Logo}
              alt="Vyra"
              sizes="100vw"
              priority
            />
            <MainTitle tag="h1" className={styles.title}>
              Vyra
            </MainTitle>
          </div>
          <ContentText className={styles.text} tag="p">
            A comprehensive learning platform with an extensive content
            library that helps companies achieve sustainability training goals.
          </ContentText>
        </div>
      </PageContainer>
    </section>
  );
}

export default VyraMainBlock;
