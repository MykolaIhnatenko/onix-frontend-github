import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';
import NumbersBlock from '../NumbersBlock/NumbersBlock';
import PageContainer from '../PageContainer/PageContainer';
import IAnimNumberBlock from './interfaces/IAnimNumberBlock';

function AnimNumberBlock({ title, data }: IAnimNumberBlock) {
  return (
    <section className="relative overflow-hidden">
      <PageContainer
        className="relative z-[1] pt-[80px] pb-[80px]
        min-md:pt-[80px] min-md:pb-[80px] min-lg:pt-[120px] min-lg:pb-[120px]"
      >
        <VRARMainTitle title={title} />
        <NumbersBlock
          data={data}
          classes={{
            table: '!mt-[20px] min-md:!mt-0 min-xxl:!mt-0',
            rowClasses: {
              text: 'screen-md:!m-0',
              tableRow: `!p-[10px_0_20px] last:!p-[20px_0_0]
              min-md:!p-[40px_0_30px] min-md:last:!p-[30px_0_0]
              min-lg:!p-[40px_0_40px] min-lg:last:!p-[40px_0_0`,
              tableCol: 'screen-md:!pr-[35px] last:!pr-0',
            },
          }}
        />
      </PageContainer>
    </section>
  );
}

export default AnimNumberBlock;
