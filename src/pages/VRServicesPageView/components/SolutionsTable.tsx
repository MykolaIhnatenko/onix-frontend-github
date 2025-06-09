import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import solutionTableData from '../data/solutionTableData';

import styles from '../sass/solutionsTable.module.scss';

function SolutionsTable() {
  return (
    <section className={styles.solutionsTable}>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          Why Your Business Needs an AR/VR Solution
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          Augmented Reality and Virtual Reality technologies are transforming how businesses operate.
          They provide immersive and interactive experiences that can enhance customer satisfaction,
          improve employee productivity, and increase brand awareness.
          Let&apos;s explore why your business needs an AR/VR solution in more detail.
        </ContentText>
        <div className={styles.tableBlock}>
          {solutionTableData.map(({ id, title, content }) => (
            <div key={id} className={styles.itemRow}>
              {title}
              {content}
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default SolutionsTable;
