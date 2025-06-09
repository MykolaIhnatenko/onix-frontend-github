import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import featuresData from '../data/featuresData';
import TabsBlock from '../../../components/TabsBlock/TabsBlock';

import styles from '../sass/travelTailFeaturesSection.module.scss';

function TravelTailFeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          Standout features the platform offers
        </MainTitle>
      </PageContainer>
      <TabsBlock
        content={featuresData}
        classes={{
          tab: 'screen-md:!gap-[30px]',
        }}
      />
    </section>
  );
}

export default TravelTailFeaturesSection;
