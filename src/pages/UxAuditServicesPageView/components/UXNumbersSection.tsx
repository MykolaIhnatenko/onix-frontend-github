import PageContainer from '../../../components/PageContainer/PageContainer';
import NumbersBlock from '../../../components/NumbersBlock/NumbersBlock';
import numbersData from '../data/numbersData';

import styles from '../sass/UXNumberSection.module.scss';

function UXNumbersSection() {
  return (
    <section className={styles.numbersSection}>
      <PageContainer className={styles.container}>
        <NumbersBlock
          data={numbersData}
          classes={{
            table: '!mt-0',
            rowClasses: {
              tableRow: '!p-[30px_0] screen-md:!p-[30px_0]',
              text: 'max-w-[400px] w-[80%] screen-md:!leading-[1.4]',
              title: '!max-h-[132px] screen-lg:!max-h-[104px] screen-md:!max-h-[56px]',
            },
          }}
        />
      </PageContainer>
    </section>
  );
}

export default UXNumbersSection;
