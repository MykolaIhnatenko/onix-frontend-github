import PageContainer from '../../../components/PageContainer/PageContainer';
import NumbersBlock from '../../../components/NumbersBlock/NumbersBlock';
import numbersBenefitsData from '../data/numbersBenefitsData';

import styles from '../sass/UXBenefitsSection.module.scss';

function UXBenefitsSection() {
  return (
    <section className={styles.numbersSection}>
      <PageContainer className={styles.container}>
        <NumbersBlock
          data={numbersBenefitsData}
          classes={{
            rowClasses: {
              tableRow: `!border-b-[2px] !border-solid !border-white
                screen-lg:!p-[30px_0] screen-md:!p-[20px_0]
                last:!border-b-0`,
              tableCol: 'screen-md:!pr-0 first:screen-md:!mr-[20px] first:screen-md:!min-w-[160px]',
            },
          }}
        />
      </PageContainer>
    </section>
  );
}

export default UXBenefitsSection;
