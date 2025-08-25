import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';

import TravelTailLogo from '@/images/travelTail/mainSection/img_logo@2x.webp';
import TravelTailMainBig from '@/images//travelTail/mainSection/img_main@3x.webp';
import styles from '../sass/travelTailMainSecion.module.scss';

function TravelTailMainSection() {
  return (
    <section className={styles.mainSection}>
      <PageContainer className={styles.container}>
        <div className={styles.logo}>
          {TravelTailLogo && (
            <ImageComponent
              src={TravelTailLogo}
              alt="logo"
              priority
              fill
              sizes="100vw"
              quality={100}
            />
          )}
        </div>
        <MainTitle tag="h1" className={styles.title}>
          Pet-focused travel platform development
        </MainTitle>
      </PageContainer>
      <div className={styles.imagesBlock}>
        {TravelTailMainBig && (
          <ImageComponent
            src={TravelTailMainBig}
            alt="pets"
            priority
            sizes="100vw"
            fill
          />
        )}
      </div>
    </section>
  );
}

export default TravelTailMainSection;
