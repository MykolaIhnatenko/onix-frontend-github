import ImageComponent from '../../../components/Image/Image';
import IMainSection from '../interfaces/IMainSection';
import PageContainer from 'components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import Logo from '../../../assets/images/misterBnB/main/img_logo.webp';

import styles from '../sass/MainSection.module.scss';

function MainSection({ backgroundImg }: IMainSection) {
  return (
    <section className={styles.section}>
      <ImageComponent
        className={styles.bgImage}
        src={backgroundImg}
        alt="background"
        sizes="100vw"
        quality={97}
        fill
        priority
      />
      <PageContainer className={styles.container}>
        <div className={styles.textContent}>
          <ImageComponent
            className={styles.logo}
            src={Logo}
            alt="BnB"
            sizes="100vw"
            priority
          />
          <MainTitle tag="h1" className={styles.title}>
            An Online Marketplace for Booking Accommodations
          </MainTitle>
          <MainTitle className={styles.text} tag="p">
            A travel booking website for renting
            LGBTQ&#8209;friendly accommodations
          </MainTitle>
        </div>
      </PageContainer>
    </section>
  );
}

export default MainSection;
