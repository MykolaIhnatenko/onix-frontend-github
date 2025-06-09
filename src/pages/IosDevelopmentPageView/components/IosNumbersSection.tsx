import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import NumbersBlock from '../../../components/NumbersBlock/NumbersBlock';
import numbersData from '../data/numbersData';

import styles from '../sass/iosNumbersSecion.module.scss';

function IosNumbersSection() {
  return (
    <section className={styles.numbersSection}>
      <PageContainer className={styles.container}>
        <MainTitle tag="h2" className={styles.title}>
          Results speak louder than words; therefore, let’s look at Onix in numbers
        </MainTitle>
        <NumbersBlock
          data={numbersData}
          classes={{
            table: '!mt-[20px] min-md:!mt-[30px] min-xxl:!mt-[40px]',
            rowClasses: {
              tableRow: `!p-[20px_0] min-md:!p-[30px_0] min-xxl:!p-[26px_0_44px]
                not-last:!border-b-[2px] not-last:!border-solid not-last:!border-black
                last:screen-md:!border-b-[2px] last:screen-md:!border-solid last:screen-md:!border-black`,
              text: '!mt-[5px] min-xxl:!mt-[10px]',
            },
          }}
        />
      </PageContainer>
    </section>
  );
}

export default IosNumbersSection;
