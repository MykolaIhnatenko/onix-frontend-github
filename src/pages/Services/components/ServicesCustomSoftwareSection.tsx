import { useSelector } from 'react-redux';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import customSoftwareData from '../data/customSoftwareData';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import DoubleAccordion from 'components/DoubleAccordion/DoubleAccordion';

import styles from '../sass/servicesCustomSoftwareSecion.module.scss';

function ServicesCustomSoftwareSection() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isMobile = isMDDevice || isSMDevice || isXSDevice;

  return (
    <section className={styles.customSoftwareSection}>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          Our Custom Software Development Services
        </MainTitle>
        <div className={styles.textBlock}>
          <div className={styles.textContainer}>
            <ContentText tag="p" className={styles.text}>
              No matter how amazing your product or service is, you won&apos;t beat the competition unless you have
              the right tools to make it happen. That&apos;s why quality custom software development services are
              crucial for businesses today.
            </ContentText>
          </div>
          <div className={styles.textContainer}>
            <ContentText tag="p" className={styles.text}>
              Finding the right partner to tackle your technology challenges can unlock new possibilities and help
              your business reach its maximum potential. Here are our core software development services:
            </ContentText>
          </div>
        </div>
      </PageContainer>
      <DoubleAccordion
        data={customSoftwareData}
        activeFirst={isMobile}
        isMobileOrTablet={isMobile}
      />
    </section>
  );
}

export default ServicesCustomSoftwareSection;
