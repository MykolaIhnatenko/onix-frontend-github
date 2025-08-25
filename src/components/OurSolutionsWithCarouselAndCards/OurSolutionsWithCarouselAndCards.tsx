import PageContainer from '../PageContainer/PageContainer';
import VRARContent from '../VRARContent/VRARContent';
import MainTitle from '../MainTitle/MainTitle';
import ContentText from '../ContentText/ContentText';
import { IOurSolutionsWithCarouselAndCards } from './interfaces/IOurSolutionsWithCarouselAndCards';
import SolutionCardsBlock from '../SolutionsCardsBlock/SolutionCardsBlock';
import RunningRowsBlock from 'components/RunningRowsBlock/RunningRowsBlock';

function OurSolutionsWithCarouselAndCards({
  firstText,
  secondText,
  carouselData,
  cardsData,
  carouselBlockBackground,
  classes,
}: IOurSolutionsWithCarouselAndCards) {
  return (
    <section className={`bg-white min-lg:pb-[120px] ${classes?.section || ''}`}>
      <PageContainer
        className={`
          pt-[80px] pb-[40px] min-md:pb-[60px]
          min-lg:pt-[120px] min-lg:pb-[80px]
        `}
      >
        <VRARContent>
          <MainTitle className="screen-md:pb-[10px]">
            Our solutions
          </MainTitle>
        </VRARContent>
        <div className="min-lg:max-w-[1300px] min-xxxl:max-w-[1480px]">
          <VRARContent className="min-lg:!w-[630px] min-xxxl:!w-[710px]">
            <ContentText
              marginAbsent
              tag="p"
              className={`
                pt-[20px] text-black min-md:pt-[40px]
                min-lg:pt-[40px] min-lg:max-w-[630px]
                min-xxxl:max-w-[710px]
              `}
            >
              {firstText}
            </ContentText>
          </VRARContent>
          <VRARContent className="min-lg:w-[630px] min-xxxl:!w-[710px] min-lg:ml-auto">
            <ContentText
              marginAbsent
              tag="p"
              className={`
                pt-[20px] text-black min-md:pt-[30px] min-lg:pt-[40px]
                min-lg:max-w-[630px] min-xxxl:max-w-[710px] min-lg:ml-auto
              `}
            >
              {secondText}
            </ContentText>
          </VRARContent>
        </div>
      </PageContainer>
      <RunningRowsBlock
        background={carouselBlockBackground}
        runningRows={carouselData}
      />
      <SolutionCardsBlock cards={cardsData} classes={classes?.cardsBlock} />
    </section>
  );
}

export default OurSolutionsWithCarouselAndCards;
