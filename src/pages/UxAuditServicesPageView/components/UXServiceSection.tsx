import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import CardsBlock from '../../../components/CardsBlock/CardsBlock';
import ImageComponent from '../../../components/Image/Image';
import servicesData from '../data/servicesData.json';
import TrustUsBackgroundMobileWebp from '@/images/img_trust_us_mobile_bg@2x.webp';
import { ButtonType } from '../../../constants/enums';

import styles from '../sass/UXServicesSecion.module.scss';

function UXServiceSection() {
  return (
    <section className={styles.servicesSection}>
      <ImageComponent
        src={TrustUsBackgroundMobileWebp}
        alt="TrustUsBackground"
        fill
        className={styles.bgMobile}
      />
      <PageContainer className={styles.container}>
        <MainTitle>
          What You’ll Get With Our UX Audit Services
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          By identifying areas of improvement in a website or application&apos;s user experience,
          companies can enhance customer satisfaction and improve their bottom line. Some
          expected benefits of UX audit services for mobile and web include the following:
        </ContentText>
      </PageContainer>
      <CardsBlock
        data={servicesData}
        classes={{
          dropBlock: 'min-md:!p-[80px_30px_80px_30px] screen-lg:!h-[360px]',
          dropBlockTitle: 'min-md:!pb-[40px]',
        }}
        idBtn={ButtonType.LAND3}
      />
    </section>
  );
}

export default UXServiceSection;
