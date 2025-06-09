import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainBg from '@/images/faceReplacingCasePage/mainBlock/img_main_bg.webp';
import MainBgTablet from '@/images/faceReplacingCasePage/mainBlock/img_main_bg_tablet.webp';
import MainBgMobile from '@/images/faceReplacingCasePage/mainBlock/img_main_bg_mobile.webp';

import styles from '../sass/faceReplacingMainBlock.module.scss';

function FaceReplacingMainBlock() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      background: MainBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = MainBgTablet;
    } else if (isXSDevice) {
      bg.background = MainBgMobile;
    }
    return bg;
  };

  return (
    <section className={styles.section}>
      <ImageComponent
        className={styles.bgImage}
        src={getBackground().background}
        alt="MainBackground"
        sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        fill
        priority
      />
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title} tag="h1">
          An AI solution that seamlessly swaps a character’s face with the&nbsp;user’s
        </MainTitle>
      </PageContainer>
    </section>
  );
}

export default FaceReplacingMainBlock;
