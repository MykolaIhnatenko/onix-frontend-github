import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import BrandsBlock from '../../../components/BrandsBlock/BrandsBlock';

import styles from '../sass/industriesClienstsSecion.module.scss';

function IndustriesClientsSection() {
  return (
    <section className={styles.clientsSection}>
      <PageContainer className={styles.container}>
        <ContentText className={styles.title}>
          [ Our clients ]
        </ContentText>
        <MainTitle tag="h2" className={styles.subtitle}>
          The brands we&apos;ve worked with aren&apos;t trophies,
          <br />
          they&apos;re friends we make on our journey!
        </MainTitle>
        <BrandsBlock />
      </PageContainer>
    </section>
  );
}

export default IndustriesClientsSection;
