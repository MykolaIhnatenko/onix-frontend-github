import { StaticImageData } from 'next/image';
import { useSelector } from 'react-redux';

import ImageComponent from 'components/Image/Image';
import MainTitle from 'components/MainTitle/MainTitle';
import ContentText from 'components/ContentText/ContentText';
import PageContainer from 'components/PageContainer/PageContainer';
import { IApp } from 'store/app/interfaces/IApp';
import IStore from 'store/interfaces/IStore';
import achievementsData from '../data/achievementsData';
import ImageBackground from '@/images/bonus/achievements/img_achievementsBg@2x.webp';
import ImageBackgroundTablet from '@/images/bonus/achievements/img_achievementsTabletBg@2x.webp';
import ImageBackgroundMobile from '@/images/bonus/achievements/img_achievementsMobileBg@2x.webp';

import styles from '../sass/achievements.module.scss';

function Achievements() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: ImageBackground,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = ImageBackgroundTablet;
    } else if (isXSDevice) {
      bg.background = ImageBackgroundMobile;
    }
    return bg;
  };

  const isMobile = isXSDevice;

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          alt="background"
          sizes="100vw"
        />
      </div>
      <PageContainer className={styles.content}>
        <MainTitle className={styles.title}>
          Our Referral Rewards Achievements
        </MainTitle>
        <div className={styles.cardContainer}>
          {achievementsData.map(({
            icon, text, title, background, backgroundMobile,
          }, index) => (
            <div key={['achievementsId', index].join('_')} className={styles.card}>
              <div className={styles.cardBackground}>
                <ImageComponent
                  src={isMobile ? backgroundMobile : background}
                  alt="card background"
                />
              </div>
              <div className={styles.cardContent}>
                {icon}
                <MainTitle tag="h3" className={styles.cardTitle}>
                  {title}
                </MainTitle>
                <ContentText tag="p" className={styles.cardText}>
                  {text}
                </ContentText>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default Achievements;
