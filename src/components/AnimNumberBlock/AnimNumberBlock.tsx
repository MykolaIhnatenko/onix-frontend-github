import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';
import NumbersBlock from '../NumbersBlock/NumbersBlock';
import PageContainer from '../PageContainer/PageContainer';
import IAnimNumberBlock from './interfaces/IAnimNumberBlock';

import styles from './sass/AnimNumberBlock.module.scss';

function AnimNumberBlock({ title, data }: IAnimNumberBlock) {
  return (
    <section className={styles.numbersSection}>
      <PageContainer className={styles.container}>
        <VRARMainTitle title={title} />
        <NumbersBlock
          data={data}
          classes={{
            table: '!mt-[20px] min-md:!mt-0 min-xxl:!mt-0',
            rowClasses: {
              tableCol: 'screen-md:!pr-[35px] last:!pr-0',
              text: 'screen-md:!m-0',
              tableRow: `!p-[10px_0_20px] last:!p-[20px_0_0]
              min-md:!p-[40px_0_30px] min-md:last:!p-[30px_0_0]
              min-lg:!p-[40px_0_40px] min-lg:last:!p-[40px_0_0`,
            },
          }}
        />
      </PageContainer>
    </section>
  );
}

export default AnimNumberBlock;
