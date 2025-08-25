import { IHaasMain } from '../interfaces/IHaasMain';
import ImageComponent from '../../../components/Image/Image';
import HaasText from './HaasText';
import Icons from '../../../assets/icon';
import PageContainer from 'components/PageContainer/PageContainer';

import mobileBg from '@/images/haas/mainSection/img_mobileBg.webp';
import styles from '../sass/HaasMainSection.module.scss';

const video = '/static/video/haas-banner.mp4';

function HaasMainSection({ isMobile }: IHaasMain) {
  return (
    <section className={`${styles.mainSection}`}>
      <div className={styles.mainContent}>
        <div className={styles.videoContainer}>
          {!isMobile
            ? (
              <video
                autoPlay
                muted
                loop
                src={video}
                playsInline
              />
            )
            : (
              <ImageComponent
                fill
                src={mobileBg}
                alt="video"
              />
            )}
        </div>
        <PageContainer className={styles.container}>
          <div className={styles.headerLogoWrapper}>
            <div className={styles.logoWrapper}>
              <Icons.IconHaasLogo />
            </div>
            <HaasText tag="h1">Software Development Team Augmentation for&nbsp;Haas</HaasText>
          </div>
          <div className={styles.text}>
            <HaasText tag="p" variant="fs16_24">
              Team augmentation for building a holistic solution that streamlines business performance and enhances
              customer service
            </HaasText>
            <HaasText tag="p" variant="fs16_24">
              This case study highlights how we&apos;ve assisted our client in developing end-to-end service for selling
              and managing Haas CNC machines in one convenient digital place.
            </HaasText>
          </div>
        </PageContainer>
      </div>
    </section>
  );
}

export default HaasMainSection;
