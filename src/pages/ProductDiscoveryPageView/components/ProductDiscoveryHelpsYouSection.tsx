import { useAppSelector } from 'hook/reduxToolkit';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import ProductDiscoveryHelpsYouData from '../data/ProductDiscoveryHelpsYouData';
import HelpItem from './HelpItem';
import ImageComponent from 'components/Image/Image';
import HelpsYouBg from '@/images/productDiscovery/img_discovery_helps_you.webp';
import HelpsYouTabletBg from '@/images/productDiscovery/img_discovery_helps_you_tablet.webp';
import HelpsYouMobileBg from '@/images/productDiscovery/img_discovery_helps_you_mobile.webp';

import styles from '../sass/ProductDiscoveryHelpsYouSection.module.scss';

export default function ProductDiscoveryHelpsYouSection() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      background: HelpsYouBg,
    };

    if (isMDDevice) {
      bg.background = HelpsYouTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.background = HelpsYouMobileBg;
    }
    return bg;
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.bgContainer}>
        <ImageComponent
          src={getBackground().background}
          fill
          alt="Discovery_helps_you"
          sizes="100vw"
        />
      </div>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.sectionTitle}>
          A project discovery phase helps you to:
        </MainTitle>
        <div className={styles.benefits}>
          {
            ProductDiscoveryHelpsYouData.map(({ id, number, text }) => (
              <HelpItem key={[id, number].join('_')} number={number} text={text} />
            ))
          }
        </div>
      </PageContainer>
    </section>
  );
}
