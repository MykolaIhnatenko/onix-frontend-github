import { StaticImageData } from 'next/image';

import ImageComponent from '../../../components/Image/Image';
import PageContainer from 'components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import Logo from '@/images/clubhouse/main/img_logo.webp';

import styles from '../sass/mainSection.module.scss';

function MainSection({ backgroundImg }: { backgroundImg: StaticImageData }) {
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
            alt="logo"
            sizes="100vw"
            priority
          />
          <MainTitle tag="h1" className={styles.title}>
            The Ultimate Sports & Fitness Platform to Transform Users’ Body, Mind, and Health
          </MainTitle>
        </div>
      </PageContainer>
    </section>
  );
}

export default MainSection;
