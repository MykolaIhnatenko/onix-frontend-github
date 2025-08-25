import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';

import AdventuresLog from '@/images/adventurePage/mainBlock/img_main_logo.webp';
import AdvenuresMainBgMobile from '@/images/adventurePage/mainBlock/img_main_bg_mobile.webp';
import AdvenuresMainBgTablet from '@/images/adventurePage/mainBlock/img_main_bg_tablet@2x.webp';
import AdvenuresMainBg from '@/images/adventurePage/mainBlock/img_main_bg.webp';
import styles from '../sass/adventuresMainBlock.module.scss';

function AdvenuresMainBlock() {
  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      Bg: AdvenuresMainBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.Bg = AdvenuresMainBgTablet;
    } else if (isXSDevice) {
      bg.Bg = AdvenuresMainBgMobile;
    }
    return bg;
  };

  return (
    <section className={styles.section}>
      <ImageComponent
        className={styles.bgImage}
        src={getBackground().Bg}
        alt="MainBackground"
        sizes="100vw"
        fill
        priority
      />
      <PageContainer className={styles.container}>
        <div className={styles.textContent}>
          <ImageComponent
            className={styles.logo}
            src={AdventuresLog}
            alt="logo"
            sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
            priority
          />
          <MainTitle tag="h1" className={styles.title}>
            Travel Marketplace Redesign and Brand Identity Development
          </MainTitle>
          <ContentText className={styles.text} tag="p">
            How Onix developed the new brand identity and redesigned the website for a travel
            marketplace
          </ContentText>
        </div>
      </PageContainer>
    </section>
  );
}

export default AdvenuresMainBlock;
