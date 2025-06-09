import { INowWhatAccordionBlock } from '../interfaces/INowWhatAccordionBlock';
import VRARContent from '../../../components/VRARContent/VRARContent';
import MainTitle from '../../../components/MainTitle/MainTitle';
import AccordionBlack from 'components/AccordionBlack/AccordionBlack';
import PageContainer from 'components/PageContainer/PageContainer';

function NowWhatAccordionBlock({ data }: INowWhatAccordionBlock) {
  return (
    <PageContainer
      tag="section"
      className={`
        bg-color-black text-color-white pt-[120px] pb-[80px] screen-lg:py-[80px]
        flex justify-between gap-[60px] screen-md:gap-[40px] screen-lg:flex-col screen-md:!px-0 screen-md:pb-[60px]
      `}
    >
      <VRARContent className="min-lg:min-w-[390px] screen-md:px-[15px]">
        <MainTitle>
          Onix’s approach
          <br className="screen-lg:hidden" />
          {' '}
          to development
        </MainTitle>
      </VRARContent>
      <VRARContent>
        <AccordionBlack
          activeFirst
          data={data}
          classes={{
            accordion: 'max-w-[630px] min-xxxl:max-w-[850px] screen-lg:max-w-full',
            accordionItemTitle: '!px-0 screen-md:!px-[15px] min-md:!gap-[150px] min-lg:!gap-[30px]',
            accordionItemContent: '!px-0 screen-md:!px-[15px]',
          }}
        />
      </VRARContent>
    </PageContainer>
  );
}

export default NowWhatAccordionBlock;
