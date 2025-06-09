import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import MainBg from '@/images/noisyNeighborCasePage/mainBlock/img_main_bg.webp';
import MainBgTablet from '@/images/noisyNeighborCasePage/mainBlock/img_main_bg_tablet.webp';
import MainBgMobile from '@/images/noisyNeighborCasePage/mainBlock/img_main_bg_mobile.webp';
import ImageAnimate from '@/images/noisyNeighborCasePage/mainBlock/img_animate_image.webp';
import NoisyNeighbor3DScene from './NoisyNeighbor3DScene';
import { XL_DEVICE } from '../../../constants/constants';

import styles from '../sass/noisyNeighborMainBlock.module.scss';

function NoisyNeighborMainBlock() {
  const {
    screenSizes: {
      screenWidth,
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

  const isDesktop = screenWidth > XL_DEVICE;
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
        src={getBackground().background}
        alt="bacground"
        priority
        className={styles.background}
        sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
      />
      <div className={styles.textContainer}>
        <MainTitle tag="h1" className={styles.title}> Noisy Neighbor </MainTitle>
        <MainTitle tag="p" className={styles.text}>
          Engaging 3D design
          <br />
          for interactive online quiz
        </MainTitle>
      </div>
      {isDesktop ? (
        <div className={styles.imageAnimate}>
          <NoisyNeighbor3DScene />
        </div>
      ) : (
        <ImageComponent
          src={ImageAnimate}
          alt="image"
          priority
          className={`${styles.imageAnimate} ${styles.hidden}`}
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        />
      )}
    </section>
  );
}

export default NoisyNeighborMainBlock;
