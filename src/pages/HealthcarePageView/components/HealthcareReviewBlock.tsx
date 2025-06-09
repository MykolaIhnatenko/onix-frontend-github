import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import ReviewBlock from '../../../components/ReviewBlock/ReviewBlock';
import quotesList from '../data/quotesList';

import styles from '../sass/healthcareReviewBlock.module.scss';

function HealthcareReviewBlock() {
  return (
    <PageContainer className={styles.container}>
      <MainTitle className={styles.title}>
        What our clients say
      </MainTitle>
      <ReviewBlock
        quotesList={quotesList}
      />
    </PageContainer>
  );
}

export default HealthcareReviewBlock;
