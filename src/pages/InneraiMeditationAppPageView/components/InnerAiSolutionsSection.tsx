import innerAiSolutionsData from '../data/innerAiSolutionsData';
import TabsBlock from 'components/TabsBlock/TabsBlock';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';

function InnerAiSolutionsSection() {
  return (
    <section>
      <BusinessContextDiagonal
        upTitle={innerAiSolutionsData.upTitle}
        title={innerAiSolutionsData.title}
        leftContent={innerAiSolutionsData.firstText}
        rightContent={innerAiSolutionsData.secondText}
        classes={{ section: 'pb-[40px] screen-md:pb-[30px]' }}
      />
      <TabsBlock
        content={innerAiSolutionsData.content}
        classes={{
          tab: 'screen-md:!gap-[30px]',
        }}
      />
    </section>
  );
}
export default InnerAiSolutionsSection;
