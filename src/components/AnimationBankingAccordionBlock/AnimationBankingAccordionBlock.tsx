import IAnimationBankingAccordionBlock from './interfaces/IAnimationBankingAccordionBlock';
import PageContainer from '../PageContainer/PageContainer';
import VRARContent from '../VRARContent/VRARContent';
import MainTitle from '../MainTitle/MainTitle';
import AccordionWhite from 'components/AccordionWhite/AccordionWhite';

function AnimationBankingAccordionBlock({ title, data }: IAnimationBankingAccordionBlock) {
  return (
    <section
      className="relative bg-transparent p-[120px_0] screen-lg:pt-[80px]
      screen-lg:pb-[60px] screen-md:pb-[40px]"
    >
      <PageContainer className="relative flex justify-between screen-lg:flex-col screen-md:!p-0">
        <VRARContent>
          <MainTitle
            className="pr-[60px] max-w-[450px] screen-lg:mb-[60px] screen-lg:font-[40px]
            screen-lg:max-w-full screen-md:!font-[25px] screen-md:mb-[40px] screen-md:mx-[15px]"
          >
            {title}
          </MainTitle>
        </VRARContent>
        <VRARContent>
          <AccordionWhite
            activeFirst
            data={data}
            classes={{
              accordion: 'max-w-[630px] min-xxxl:max-w-[850px] screen-lg:max-w-full',
              accordionItemTitle: '!px-0 screen-md:!px-[15px]',
              accordionItemContent: '!px-0 screen-md:!px-[15px]',
            }}
          />
        </VRARContent>
      </PageContainer>
    </section>
  );
}

export default AnimationBankingAccordionBlock;
