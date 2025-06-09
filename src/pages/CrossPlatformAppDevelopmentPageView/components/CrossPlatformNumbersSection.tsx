import PageContainer from '../../../components/PageContainer/PageContainer';
import NumbersBlock from '../../../components/NumbersBlock/NumbersBlock';
import numbersData from '../data/numbersData';

import styles from '../sass/CrossPlatformNumbersSection.module.scss';

function CrossPlatformNumbersSection() {
  return (
    <section className={styles.numbersSection}>
      <PageContainer className={styles.container}>
        <NumbersBlock
          data={numbersData}
          classes={{
            table: '!mt-0',
            rowClasses: {
              tableRow: '!p-[20px_0] min-md:!p-[30px_0]',
            },
          }}
        />
      </PageContainer>
    </section>
  );
}

export default CrossPlatformNumbersSection;
