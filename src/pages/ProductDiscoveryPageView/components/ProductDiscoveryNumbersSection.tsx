import PageContainer from '../../../components/PageContainer/PageContainer';
import NumbersBlock from '../../../components/NumbersBlock/NumbersBlock';
import numbersData from '../data/numbersData';

import styles from '../sass/ProductDiscoveryNumbersSection.module.scss';

function ProductDiscoveryNumbersSection() {
  return (
    <section className={styles.numbersSection}>
      <PageContainer className={styles.container}>
        <NumbersBlock
          data={numbersData}
          classes={{
            table: '!bg-black !m-0 !p-[80px_0]',
            rowClasses: {
              tableRow: `!p-0 last:!border-t-[2px] last:!border-solid last:!border-white last:!pt-[20px]
                screen-md:last:!pt-[30px]
                first:!pt-0 first:!pb-[20px] screen-md:first:!pb-[30px]`,
              text: 'screen-md:max-w-[143px]',
            },
          }}
        />
      </PageContainer>
    </section>
  );
}

export default ProductDiscoveryNumbersSection;
