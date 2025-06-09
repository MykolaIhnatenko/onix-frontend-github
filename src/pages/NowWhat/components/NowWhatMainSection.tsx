import { useAppSelector } from 'hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import { LG_DEVICE, MD_DEVICE, XXXL_DEVICE } from '../../../constants/constants';
import PageContainer from '../../../components/PageContainer/PageContainer';
import logo from '../../../assets/images/nowWhat/mainSection/img_logo@2x.webp';
import mainImg from '../../../assets/images/nowWhat/mainSection/img_main.webp';
import mainImgXXXL from '../../../assets/images/nowWhat/mainSection/img_mainXXXL.webp';
import mainImgTablet from '../../../assets/images/nowWhat/mainSection/img_mainTablet.webp';
import mainImgMobile from '../../../assets/images/nowWhat/mainSection/img_mainMobile.webp';
import MainTitle from 'components/MainTitle/MainTitle';

import styles from '../sass/NowWhatMainSection.module.scss';

function NowWhatMainSection() {
  const { windowWidth } = useAppSelector((state) => state.app);

  const image = () => {
    if (windowWidth >= XXXL_DEVICE) {
      return mainImgXXXL;
    }
    if (windowWidth < MD_DEVICE) {
      return mainImgMobile;
    }
    if (windowWidth <= LG_DEVICE) {
      return mainImgTablet;
    }

    return mainImg;
  };

  return (
    <section className={styles.mainSection}>
      <PageContainer className={styles.container}>
        <ImageComponent
          src={logo}
          width={214}
          height={80}
          priority
          sizes="100vw"
          quality={95}
          alt="logo"
          className={styles.logo}
        />
        <MainTitle tag="h1" className={styles.title}>
          Well-structured platform
          <br className="screen-lg:hidden" />
          {' '}
          to provide support
          <br className="screen-lg:hidden" />
          {' '}
          for cancer patients
        </MainTitle>
      </PageContainer>
      <div className={styles.imageBlock}>
        <ImageComponent
          src={image()}
          fill
          priority
          sizes="100vw"
          alt="laptop"
          quality={95}
        />
      </div>
    </section>
  );
}

export default NowWhatMainSection;
