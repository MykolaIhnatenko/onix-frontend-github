import PageContainer from '../../../components/PageContainer/PageContainer';
import NumbersBlock from '../../../components/NumbersBlock/NumbersBlock';
import numbersData from '../data/numbersData';
import MainTitle from '../../../components/MainTitle/MainTitle';

import styles from '../sass/DTCNumbersSection.module.scss';

function DTCNumbersSection() {
  return (
    <section className={styles.numbersSection}>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          Onix is a perfect place to find ideal tech talents that help your business reach the sky on
          time and within budget!
        </MainTitle>
        <NumbersBlock
          data={numbersData}
        />
      </PageContainer>
    </section>
  );
}

export default DTCNumbersSection;
