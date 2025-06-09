import BrandsBlock from '../../../components/BrandsBlock/BrandsBlock';
import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';

import styles from '../sass/salesforceClienstsSecion.module.scss';

function SalesforceClientsSection() {
  return (
    <section className={styles.clientsSection}>
      <PageContainer className={styles.container}>
        <ContentText tag="p" className={styles.title}>
          [ Our clients ]
        </ContentText>
        <MainTitle className={styles.subtitle}>
          The Brands We&apos;ve Worked With
        </MainTitle>
        <BrandsBlock />
      </PageContainer>
    </section>
  );
}

export default SalesforceClientsSection;
