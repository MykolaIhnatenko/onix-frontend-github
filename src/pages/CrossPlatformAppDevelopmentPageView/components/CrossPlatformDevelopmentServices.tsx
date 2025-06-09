import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import DragSlider from 'components/DragSlider/DragSlider';
import CrossPlatformServicesSliderData from '../data/CrossPlatformServicesSliderData';

import styles from '../sass/CrossPlatformDevelopmentServices.module.scss';

export default function CrossPlatformDevelopmentServices() {
  return (
    <div className={styles.expertise}>
      <PageContainer>
        <MainTitle className={styles.title}>
          Cross-platform development services we offer
        </MainTitle>
        <div className={styles.description}>
          <p>
            Our cross-platform design and development services empower businesses to create innovative and
            high-performance applications that
            can reach a broad audience across multiple platforms.
          </p>
          <p className={styles.commonProblems}>
            Whether you need to develop a new cross-platform app or optimize an existing one,
            our team ensures consistent performance,
            user-friendly interfaces, and an efficient codebase.
          </p>
        </div>
      </PageContainer>
      <DragSlider
        data={CrossPlatformServicesSliderData}
        withoutDots
      />
    </div>
  );
}
