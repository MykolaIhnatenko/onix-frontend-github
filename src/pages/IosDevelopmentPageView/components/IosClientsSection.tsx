import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import BrandsBlock from '../../../components/BrandsBlock/BrandsBlock';

import styles from '../sass/iosClienstsSecion.module.scss';

function IosClientsSection() {
  return (
    <section className={styles.clientsSection}>
      <PageContainer className={styles.container}>
        <ContentText tag="p" className={styles.title}>
          [ Our clients ]
        </ContentText>
        <MainTitle tag="h2" className={styles.subtitle}>
          Brands We Have Worked With
        </MainTitle>
        <BrandsBlock />
      </PageContainer>
    </section>
  );
}

export default IosClientsSection;
