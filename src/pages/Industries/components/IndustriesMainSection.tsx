import { useMemo } from 'react';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import { LG_DEVICE, MD_DEVICE } from '../../../constants/constants';
import { useAppSelector } from 'hook/reduxToolkit';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

import IndustriesDevelopers from '@/images/industriesPage/img_developers@2x.webp';
import IndustriesMainBg from '@/images/industriesPage/img_industries_main_bg@2x.webp';
import IndustriesMainBgTablet from '@/images/industriesPage/img_industries_main_bg_tablet@2x.webp';
import IndustriesMainBgMobile from '@/images/industriesPage/img_industries_main_bg_mobile@2x.webp';
import styles from '../sass/industriesMainSecion.module.scss';

function IndustriesMainSection() {
  const { screenSizes: { screenWidth } } = useAppSelector((state) => state.app);

  const background = useMemo(() => {
    let imgSrc = IndustriesMainBg;

    if (screenWidth >= MD_DEVICE && screenWidth < LG_DEVICE) {
      imgSrc = IndustriesMainBgTablet;
    }
    if (screenWidth < MD_DEVICE) {
      imgSrc = IndustriesMainBgMobile;
    }

    return imgSrc;
  }, [screenWidth]);

  return (
    <section
      className={styles.mainSection}
    >
      <div className={styles.bgContainer}>
        <ImageComponent
          src={background}
          alt="MainBackground"
          fill
          priority
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        />
      </div>
      <PageContainer className={styles.container}>
        <div className={styles.contentBlock}>
          <MainTitle tag="h1" className={styles.title}>
            Transform your specific business domain with our tailored-made solution
          </MainTitle>
          <ContentText className={styles.text}>
            Onix’s experts combine years of experience in delivering robust software solutions across industries.
            Having many sensational projects under our belt, we help companies solve the most complex challenges and,
            as a result, level up their businesses!
          </ContentText>
          <ButtonPrimary
            text="Start a project with us"
            styleContainer={styles.contactBtn}
          />
        </div>
      </PageContainer>
      <div className={styles.imageBlock}>
        <ImageComponent
          src={IndustriesDevelopers}
          alt="developers"
          priority
          fill
        />
      </div>
    </section>
  );
}

export default IndustriesMainSection;
