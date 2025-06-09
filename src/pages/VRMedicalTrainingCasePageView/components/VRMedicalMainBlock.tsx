import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import MainBg from '@/images/vrMedicalTrainingCasePage/mainBlock/img_main_bg.webp';
import MainBgTablet from '@/images/vrMedicalTrainingCasePage/mainBlock/img_main_bg_tablet.webp';
import MainBgMobile from '@/images/vrMedicalTrainingCasePage/mainBlock/img_main_bg_mobile.webp';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';

import styles from '../sass/vrMedicalMainBlock.module.scss';

function VrMedicalMainBlock() {
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
        src={getBackground().background}
        alt="bacground"
        priority
        className={styles.background}
        sizes="100vw"
      />
      <div className={styles.textContainer}>
        <MainTitle tag="h1" className={styles.title}>VR medical training solution case study</MainTitle>
        <MainTitle tag="p" className={styles.text}>
          Onix’s experience in implementing
          {' '}
          <span className="inline_block">a virtual</span>
          {' '}
          reality app for medical training
        </MainTitle>
      </div>
    </section>
  );
}

export default VrMedicalMainBlock;
