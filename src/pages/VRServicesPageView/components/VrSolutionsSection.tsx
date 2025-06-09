import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import solutionSectionData from '../data/solutionSectionData';
import DoubleAccordion from 'components/DoubleAccordion/DoubleAccordion';

import styles from '../sass/vrSolutionsSection.module.scss';

function VRSolutionsSection({ isMobileOrTablet }: { isMobileOrTablet: boolean }) {
  return (
    <section className={styles.section}>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          Our Virtual Reality And Augmented Reality Expertise
        </MainTitle>
      </PageContainer>
      <DoubleAccordion
        data={solutionSectionData}
        activeFirst={isMobileOrTablet}
        isMobileOrTablet={isMobileOrTablet}
      />
    </section>
  );
}

export default VRSolutionsSection;
