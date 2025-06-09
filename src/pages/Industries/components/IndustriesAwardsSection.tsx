import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import AchievementsBlock from '../../../components/AchievementBlock/AchievementsBlock';

import styles from '../sass/industriesAwardsSecion.module.scss';

function IndustriesAwardsSection() {
  return (
    <section className={styles.awardsSection}>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          Award-winning custom software developers
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          Onix is your reliable tech partner that delivers first-class industry-specific software solutions!
        </ContentText>
      </PageContainer>
      <AchievementsBlock />
    </section>
  );
}

export default IndustriesAwardsSection;
