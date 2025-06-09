import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import MainBg from '../../../assets/images/nibulon/main/img_bg_main.webp';
import MainBgTablet from '../../../assets/images/nibulon/main/img_bg_main_tablet.webp';
import MainBgMobile from '../../../assets/images/nibulon/main/img_bg_main_mobile.webp';

import styles from '../sass/nibulonMainBlock.module.scss';

function NibulonMainBlock() {
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
            <MainTitle tag="h1" className={styles.title}>
              Revamped Website Design For&nbsp;Nibulon Leading Agrarian Company
            </MainTitle>
          </div>
          <MainTitle className={styles.text} tag="p">
            How Onix developed a brand new design and expanded functionality for&nbsp;the&nbsp;Nibulon web platform
          </MainTitle>
        </div>
      </PageContainer>
    </section>
  );
}

export default NibulonMainBlock;
