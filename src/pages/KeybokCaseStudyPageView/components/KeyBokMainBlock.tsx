import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import KeybokMainBg from '@/images/keyBokPage/mainBlock/img_bgImageLarge.webp';
import KeybokMainBgTablet from '@/images/keyBokPage/mainBlock/img_bgImageTablet.webp';
import KeybokMainBgMobile from '@/images/keyBokPage/mainBlock/img_bgImageMobile.webp';
import Icon from '@/images/keyBokPage/mainBlock/icon.webp';

import styles from '../sass/keyBokMainSection.module.scss';

function KeyBokMainBlock() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      screenWidth,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    if (isMDDevice || (screenWidth >= 993 && screenWidth <= 1200)) {
      return KeybokMainBgTablet;
    }
    if (isXSDevice || isSMDevice) {
      return KeybokMainBgMobile;
    }

    return KeybokMainBg;
  };

  return (
    <section className={styles.section}>
      <ImageComponent
        className={styles.bgImage}
        src={getBackground()}
        alt="MainBackground"
        sizes="100vw"
        fill
        priority
        quality={86}
      />
      <PageContainer className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.iconBlock}>
            <ImageComponent
              className={styles.icon}
              src={Icon}
              alt="icon"
              sizes="100vw"
              priority
            />
            <MainTitle tag="h1" className={styles.iconBlockText}>
              Keybok
            </MainTitle>
          </div>
          <MainTitle tag="p" className={styles.text}>
            Mobile app keyboard to change the way people type their text&nbsp;messages
          </MainTitle>
        </div>
      </PageContainer>
    </section>
  );
}

export default KeyBokMainBlock;
