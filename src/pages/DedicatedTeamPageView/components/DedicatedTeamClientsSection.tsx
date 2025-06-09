import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import BrandsBlock from '../../../components/BrandsBlock/BrandsBlock';

import styles from '../sass/dedicatedTeamClientsSecion.module.scss';

function DedicatedTeamClientsSection() {
  return (
    <section className={styles.clientsSection}>
      <PageContainer className={styles.container}>
        <MainTitle tag="h2" className={styles.title}>
          Trusted by
        </MainTitle>
        <BrandsBlock
          classes={{
            projectBlock: '!bg-transparent',
            slider: '!bg-transparent',
            sliderCard: '!bg-transparent',
            paginationClasses: {
              pageItem: '!bg-white',
            },
          }}
          brandsBlockBlack
        />
      </PageContainer>
    </section>
  );
}

export default DedicatedTeamClientsSection;
