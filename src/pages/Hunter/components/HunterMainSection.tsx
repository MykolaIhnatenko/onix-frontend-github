import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ImageComponent from 'components/Image/Image';
import HunterMainBg from '@/images/hunter/mainSection/img_bg@2x.webp';
import HunterMainBgTablet from '@/images/hunter/mainSection/img_bg_tablet@2x.webp';
import HunterMainBgMobile from '@/images/hunter/mainSection/img_bg_mobile@2x.webp';

import styles from '../sass/hunterMainSecion.module.scss';

function HunterMainSection() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      background: HunterMainBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = HunterMainBgTablet;
    } else if (isXSDevice) {
      bg.background = HunterMainBgMobile;
    }
    return bg;
  };

  return (
    <section className={styles.mainSection}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          alt="background"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <PageContainer className={styles.container}>
        <VRARContent>
          <MainTitle tag="h1" className={styles.title}>
            Custom Design Services
            {' '}
            <span className="inline_block">for Hunter</span>
            {' '}
            Ecommerce Platform
          </MainTitle>
        </VRARContent>
      </PageContainer>
    </section>
  );
}

export default HunterMainSection;
