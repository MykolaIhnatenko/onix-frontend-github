import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import CardsBlock from '../../../components/CardsBlock/CardsBlock';
import ImageComponent from '../../../components/Image/Image';
import servicesData from '../data/servicesData.json';
import TrustUsBackgroundMobileWebp from '@/images/img_trust_us_mobile_bg@2x.webp';
import { ButtonType } from '../../../constants/enums';

import styles from '../sass/iosServicesSecion.module.scss';

function IosServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <ImageComponent
        src={TrustUsBackgroundMobileWebp}
        alt="TrustUsBackground"
        fill
        className={styles.bgMobile}
      />
      <PageContainer className={styles.container}>
        <MainTitle tag="h2">
          iOS App Development Services We Provide
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          At Onix, we understand the importance of standout mobile experiences on devices powered by iOS.
          That’s why our experienced development team is dedicated to creating highly-customized and feature-rich
          iOS apps that blend seamlessly with your existing systems and processes.
        </ContentText>
      </PageContainer>
      <CardsBlock
        idBtn={ButtonType.LAND2}
        data={servicesData}
        classes={{
          dropBlock: 'min-md:!p-[80px_30px_80px_30px] min-lg:!p-[30px]',
          dropBlockTitle: 'min-md:!pb-[40px]',
        }}
        dropBlockTitle="Set your budget and we will optimally adjust software development to it!"
        dropBlockBtnTitle="Drop us a message"
      />
    </section>
  );
}

export default IosServicesSection;
